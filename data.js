const DATA = {
  "corridor": "Ashburn / Sterling, Loudoun County VA · PJM DOM zone · Data Center Alley",
  "as_of": "2026-09-26",
  "disclaimer": "Representative demo data. DC capacities from public Dominion Energy permit filings and datacenter.fyi. Grocery locations from public store locators (Sep 2026). PJM LMP from gridstatus.io (Sep 23 2026). Not live telemetry.",
  "data_centers": [
    {"id":"DC-AWS-01","name":"AWS IAD Import Campus","operator":"Amazon Web Services","city":"Ashburn","status":"operational","mw":400.5,"lat":39.0438,"lng":-77.4874,"source":"Dominion Energy permit filings"},
    {"id":"DC-EQX-01","name":"Equinix DC21 / DC22","operator":"Equinix","city":"Ashburn","status":"operational","mw":223.5,"lat":39.0445,"lng":-77.4902,"source":"Dominion Energy permit filings"},
    {"id":"DC-DR-01","name":"Digital Realty IAD Round Table","operator":"Digital Realty","city":"Ashburn","status":"operational","mw":767.0,"lat":39.0412,"lng":-77.4831,"source":"Dominion Energy permit filings"},
    {"id":"DC-NTT-01","name":"NTT VA1 / VA2","operator":"NTT Global Data Centers","city":"Ashburn","status":"operational","mw":400.5,"lat":39.0461,"lng":-77.4868,"source":"Dominion Energy permit filings"},
    {"id":"DC-MSFT-01","name":"Microsoft Compass Creek","operator":"Microsoft","city":"Ashburn","status":"operational","mw":206.5,"lat":39.0389,"lng":-77.4926,"source":"datacenter.fyi"},
    {"id":"DC-CYR-01","name":"CyrusOne NVA9","operator":"CyrusOne","city":"Sterling","status":"operational","mw":135.0,"lat":39.0067,"lng":-77.4289,"source":"public filings"},
    {"id":"DC-VNT-01","name":"Vantage VA3 Campus","operator":"Vantage Data Centers","city":"Ashburn","status":"operational","mw":160.0,"lat":39.0498,"lng":-77.4795,"source":"public filings"},
    {"id":"DC-STK-01","name":"STACK NVA04","operator":"STACK Infrastructure","city":"Sterling","status":"under_construction","mw":216.0,"lat":39.0123,"lng":-77.4012,"source":"public filings"},
    {"id":"DC-YND-01","name":"Yondr Loudoun (Project Allegro)","operator":"Yondr Group","city":"Arcola","status":"operational","mw":336.0,"lat":38.9534,"lng":-77.5301,"source":"public filings"},
    {"id":"DC-GGL-01","name":"Google Arcola Campus","operator":"Google","city":"Arcola","status":"operational","mw":380.5,"lat":38.9512,"lng":-77.5288,"source":"datacenter.fyi"},
    {"id":"DC-META-01","name":"Meta White Oak","operator":"Meta","city":"Ashburn","status":"operational","mw":223.5,"lat":39.0356,"lng":-77.4756,"source":"datacenter.fyi"},
    {"id":"DC-QTS-01","name":"QTS Ashburn-Shellhorn","operator":"QTS","city":"Ashburn","status":"operational","mw":162.5,"lat":39.0401,"lng":-77.4812,"source":"Dominion Energy permit filings"}
  ],
  "grocery": [
    {"id":"GR-HT-01","name":"Harris Teeter Ashbrook Commons","chain":"Harris Teeter","city":"Ashburn","lat":39.0456,"lng":-77.4879,"source":"storelocators.com"},
    {"id":"GR-HT-02","name":"Harris Teeter Goose Creek Village","chain":"Harris Teeter","city":"Ashburn","lat":39.0412,"lng":-77.4923,"source":"storelocators.com"},
    {"id":"GR-HT-03","name":"Harris Teeter Broadlands Marketplace","chain":"Harris Teeter","city":"Ashburn","lat":39.0245,"lng":-77.5189,"source":"storelocators.com"},
    {"id":"GR-HT-04","name":"Harris Teeter Brambleton","chain":"Harris Teeter","city":"Brambleton","lat":39.0123,"lng":-77.5456,"source":"storelocators.com"},
    {"id":"GR-GI-01","name":"Giant Ashburn Village","chain":"Giant Food","city":"Ashburn","lat":39.0434,"lng":-77.4867,"source":"storelocators.com"},
    {"id":"GR-GI-02","name":"Giant Ashburn Farm Town Center","chain":"Giant Food","city":"Ashburn","lat":39.0389,"lng":-77.4912,"source":"storelocators.com"},
    {"id":"GR-GI-03","name":"Giant Sterling Town Center","chain":"Giant Food","city":"Sterling","lat":39.0056,"lng":-77.4056,"source":"storelocators.com"},
    {"id":"GR-GI-04","name":"Giant Cascades Marketplace","chain":"Giant Food","city":"Sterling","lat":39.0089,"lng":-77.4123,"source":"storelocators.com"},
    {"id":"GR-WG-01","name":"Wegmans Sterling","chain":"Wegmans","city":"Sterling","lat":39.0167,"lng":-77.4234,"source":"storelocators.com"},
    {"id":"GR-WG-02","name":"Wegmans Leesburg","chain":"Wegmans","city":"Leesburg","lat":39.1089,"lng":-77.5567,"source":"storelocators.com"},
    {"id":"GR-AL-01","name":"Aldi Broadlands","chain":"Aldi","city":"Broadlands","lat":39.0212,"lng":-77.5156,"source":"foodbanklocator.org"},
    {"id":"GR-AL-02","name":"Aldi Sterling Tripleseven","chain":"Aldi","city":"Sterling","lat":39.0098,"lng":-77.4089,"source":"foodbanklocator.org"},
    {"id":"GR-FL-01","name":"Food Lion Briarcroft","chain":"Food Lion","city":"Sterling","lat":39.0078,"lng":-77.4067,"source":"foodbanklocator.org"},
    {"id":"GR-FL-02","name":"Food Lion Great Falls Plaza","chain":"Food Lion","city":"Sterling","lat":39.0112,"lng":-77.4156,"source":"foodbanklocator.org"},
    {"id":"GR-WM-01","name":"Walmart Supercenter Dulles Crossing","chain":"Walmart","city":"Sterling","lat":39.0134,"lng":-77.4178,"source":"mapdoor.com"},
    {"id":"GR-CC-01","name":"Costco Price Cascades","chain":"Costco","city":"Sterling","lat":39.0156,"lng":-77.4190,"source":"mapdoor.com"}
  ],
  "nodes": [
    {"id":"NODE-01","name":"Replay Core MVP","status":"mvp","mw":0.30,"mwh":1.0,"lat":39.0423,"lng":-77.4891,"anchor":"GR-GI-01","nearest_rival_mi":0.14,"nearest_rival":"AWS IAD Import Campus","nearest_rival_mw":400.5,"nearest_grocery_mi":0.15,"nearest_grocery":"Giant Ashburn Village"},
    {"id":"NODE-02","name":"Replay Core MVP","status":"mvp","mw":0.30,"mwh":1.0,"lat":39.0445,"lng":-77.4915,"anchor":"GR-HT-01","nearest_rival_mi":0.07,"nearest_rival":"Equinix DC21 / DC22","nearest_rival_mw":223.5,"nearest_grocery_mi":0.21,"nearest_grocery":"Harris Teeter Ashbrook Commons"},
    {"id":"NODE-03","name":"Replay Stack","status":"planned","mw":0.50,"mwh":2.0,"lat":39.0067,"lng":-77.4289,"anchor":"GR-WG-01","nearest_rival_mi":0.0,"nearest_rival":"CyrusOne NVA9","nearest_rival_mw":135.0,"nearest_grocery_mi":0.75,"nearest_grocery":"Wegmans Sterling"},
    {"id":"NODE-04","name":"Replay Stack","status":"planned","mw":0.50,"mwh":2.0,"lat":39.0123,"lng":-77.4012,"anchor":"GR-GI-03","nearest_rival_mi":0.0,"nearest_rival":"STACK NVA04","nearest_rival_mw":216.0,"nearest_grocery_mi":0.43,"nearest_grocery":"Giant Sterling Town Center"},
    {"id":"NODE-05","name":"Replay Stack Future","status":"future","mw":0.60,"mwh":2.5,"lat":39.0167,"lng":-77.4234,"anchor":"GR-WG-01","nearest_rival_mi":0.75,"nearest_rival":"CyrusOne NVA9","nearest_rival_mw":135.0,"nearest_grocery_mi":0.0,"nearest_grocery":"Wegmans Sterling"}
  ],
  "totals": {"dc_count":12,"dc_mw":3611.5,"dc_operational_mw":3395.5,"dc_under_construction_mw":216.0,"grocery_count":16,"node_mw":2.2,"node_mwh":8.5},
  "mission_template": {"kw":500,"hours":2,"mwh":1.0,"lmp_dom_rt":32.0,"gross_usd":32.0,"community_share_usd":20.80,"metafigital_share_usd":11.20,"split":"65/35"}
};