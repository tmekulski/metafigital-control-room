const map = L.map('map',{zoomControl:true}).setView([39.03,-77.47],12);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
  attribution:'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',maxZoom:19
}).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution:'&copy; OpenStreetMap contributors',maxZoom:19,opacity:0.35
}).addTo(map);

const layerDc = L.layerGroup();
const layerGr = L.layerGroup();
const layerNd = L.layerGroup();
const layerTx = L.layerGroup();
const layerDr = L.layerGroup();

const dcIcon = (mw,status)=>({
  radius: Math.max(6, Math.min(22, Math.sqrt(mw)*1.6)),
  color: status==='operational'?'#4aa3ff':'#f5a524', weight:2,
  fillColor: status==='operational'?'#1a3a66':'#5a3a10', fillOpacity:.85
});
const grIcon = {radius:5, color:'#3ddc97', weight:1.5, fillColor:'#0f3d2a', fillOpacity:.9);
const ndIcon = (st)=>({
  radius:7, color: st==='mvp'?'#3ddc97':st==='planned'?'#4aa3ff':'#7f8da8', weight:2,
  fillColor: st==='mvp'?'#145c3a':st==='planned'?'#1a3a66':'#2a3142', fillOpacity:.95
});

DATA.data_centers.forEach(d=>{
  const m = L.circleMarker([d.lat,d.lng], dcIcon(d.mw,d.status)).addTo(layerDc);
  m.bindPopup(`<b>${d.name}</b><br>${d.operator}<br>${d.mw} MW · ${d.status}<br><span style="color:#7f8da8">${d.city} · ${d.source}</span>`);
  m.on('click',()=>select(d,'dc'));
});
DATA.grocery.forEach(g=>{
  const m = L.circleMarker([g.lat,g.lng], grIcon).addTo(layerGr);
  m.bindPopup(`<b>${g.name}</b><br>${g.chain} · ${g.city}<br><span style="color:#7f8da8">${g.source}</span>`);
  m.on('click',()=>select(g,'gr'));
});
DATA.nodes.forEach(n=>{
  const m = L.circleMarker([n.lat,n.lng], ndIcon(n.status)).addTo(layerNd);
  m.bindPopup(`<b>${n.id} · ${n.name}</b><br>${n.mw} MW · ${n.mwh} MWh · ${n.status}<br>Nearest rival: ${n.nearest_rival} (${n.nearest_rival_mi} mi, ${n.nearest_rival_mw} MW)<br>Nearest grocery: ${n.nearest_grocery} (${n.nearest_grocery_mi} mi)`);
  m.on('click',()=>select(n,'nd'));
});
L.polyline([[39.05,-77.50],[39.04,-77.48],[39.03,-77.46],[39.01,-77.43],[38.95,-77.53]],
  {color:'#4aa3ff',weight:2,opacity:.45,dashArray:'6 6'}).addTo(layerTx);
[[39.043,-77.488],[39.006,-77.429],[39.016,-77.423]].forEach((p,i)=>
  L.circle(p,{radius:900+i*300,color:'#f5a524',weight:1,fillColor:'#f5a524',fillOpacity:.08,dashArray:'4 4'}).addTo(layerDr));

layerDc.addTo(map); layerGr.addTo(map); layerNd.addTo(map);

document.getElementById('lyDc').addEventListener('change',e=>e.target.checked?layerDc.addTo(map):map.removeLayer(layerDc));
document.getElementById('lyGr').addEventListener('change',e=>e.target.checked?layerGr.addTo(map):map.removeLayer(layerGr));
document.getElementById('lyNd').addEventListener('change',e=>e.target.checked?layerNd.addTo(map):map.removeLayer(layerNd));
document.getElementById('lyTx').addEventListener('change',e=>e.target.checked?layerTx.addTo(map):map.removeLayer(layerTx));
document.getElementById('lyDr').addEventListener('change',e=>e.target.checked?layerDr.addTo(map):map.removeLayer(layerDr));

const t=DATA.totals, mt=DATA.mission_template;
document.getElementById('kDc').textContent = t.dc_mw.toLocaleString();
document.getElementById('kOp').textContent = t.dc_operational_mw.toLocaleString();
document.getElementById('kUc').textContent = t.dc_under_construction_mw.toLocaleString();
document.getElementById('kGr').textContent = t.grocery_count;
document.getElementById('kNd').textContent = t.node_mw;
document.getElementById('kMh').textContent = t.node_mwh;

function select(o,kind){
  const el=document.getElementById('sel);
  if(kind==='dc') el.innerHTML=`<b>${o.name}</b><br>${o.operator}<br>${o.mw} MW · <b>${o.status}</b><br>${o.city}<br>Source: ${o.source}`;
  else if(kind==='gr') el.innerHTML=`<b>${o.name}</b><br>${o.chain} · ${o.city}<br>Source: ${o.source}`;
  else el.innerHTML=`<b>${o.id} · ${o.name}</b><br>${o.mw} MW · ${o.mwh} MWh · ${o.status}<br>Nearest rival DC: ${o.nearest_rival} — ${o.nearest_rival_mi} mi (${o.nearest_rival_mw} MW)<br>Nearest grocery: ${o.nearest_grocery} — ${o.nearest_grocery_mi} mi`;
}

const steps=document.querySelectorAll('.step);
const receipt=document.getElementById('receipt);
const btnRun=document.getElementById('btnRun'), btnStop=document.getElementById('btnStop'), btnReset=document.getElementById('btnReset);
const modeLabel=document.getElementById('modeLabel);
let running=false, timer=null, idx=0;

function resetUI(){
  running=false; idx=0; clearInterval(timer);
  steps.forEach(s=>s.classList.remove('done','run'));
  receipt.textContent='AWAITING RUN — no receipt issued.';
  btnRun.disabled=false; btnStop.disabled=true; modeLabel.textContent='STANDBY';
}
btnReset.addEventListener('click',resetUI);
btnStop.addEventListener('click',()=>{running=false;clearInterval(timer);modeLabel.textContent='MANUAL STOP';btnRun.disabled=false;btnStop.disabled=true;});

btnRun.addEventListener('click',()=>{
  if(running) return;
  resetUI(); running=true; modeLabel.textContent='RUNNING'; btnRun.disabled=true; btnStop.disabled=false;
  const lines=[];
  timer=setInterval(()=>{
    if(idx>=steps.length){finish();return;}
    steps[idx].classList.add('run);
    const labels=['MISSION INTAKE','GOVERNANCE CHECK','TRU EXECUTION','TRU-VU RECONCILIATION','METACON RECEIPT'];
    lines.push('['+new Date().toLocaleTimeString()+'] '+labels[idx]+' · PASS);
    receipt.textContent=lines.join('\n);
    steps[idx].classList.remove('run); steps[idx].classList.add('done);
    idx++;
  },900);
});

function finish(){
  running=false; clearInterval(timer); modeLabel.textContent='RECEIPT ISSUED'; btnStop.disabled=true;
  const now=new Date();
  const id='MC-'+now.getFullYear()+(now.getMonth()+1).toString().padStart(2,'0')+now.getDate().toString().padStart(2,'0')+'-'+Math.floor(Math.random()*900+100);
  receipt.textContent=
`METACON RECEIPT · ${id}
Event: THERM demand-response dispatch · DOM zone
Window: 2 h · 500 kW · ${mt.mwh} MWh
PJM DOM-zone RT LMP: ${mt.lmp_dom_rt} USD/MWh (gridstatus.io, 2026-09-23)
Gross value: ${mt.gross_usd.toFixed(2)} USD
Community share (65%): ${mt.community_share_usd.toFixed(2)} USD
Metafigital share (35%): ${mt.metafigital_share_usd.toFixed(2)} USD
Governance: CONFIGITAL OS · CESGT conditions met · no override
Telemetry: TRU-VU Decision Attestation Record attached
Status: VERIFIED · representative demo data, not live telemetry
Issued: ${now.toISOString()}`;
}

setInterval(()=>{document.getElementById('clock').textContent=new Date().toLocaleTimeString();},1000);
document.getElementById('clock').textContent=new Date().toLocaleTimeString();