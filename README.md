# METAFIGITAL · PowerCenter Control Room

Governed AI infrastructure control room demo for the Ashburn / Sterling (Loudoun County, VA) corridor — Data Center Alley, PJM DOM zone.

## What's in it

- **Live aerial basemap** (Esri World Imagery) with an OpenStreetMap overlay
- **Data center layer** — 12 facilities, capacity-scaled markers, operational vs under-construction, sourced from Dominion Energy permit filings via datacenter.fyi
- **Grocery & retail layer** — 16 sites (Harris Teeter, Giant, Wegmans, Aldi, Food Lion, Walmart, Costco) from public store locators, Sep 2026
- **Metafigital node layer** — 5 proposed Replay Core / Replay Stack nodes with nearest-rival and nearest-grocery distances
- **Illustrative transmission corridor + demand-response hotspots**
- **Governed mission runner** — five-step flow (intake → governance check → TRUE execution → TrueView reconciliation → MetaCon receipt) with a 65/35 value split
- **Tightened numbers**: 3,611.5 MW total DC capacity in the corridor sample (3,395.5 operational + 216 under construction), 2.2 MW / 8.5 MWh of Metafigital nodes, mission economics at $32/MWh DOM-zone RT LMP

## Important

All figures are **representative demo data**, clearly labelled. Not live telemetry. PJM LMP taken from gridstatus.io on 2026-09-23.

## Run locally

Open `index.html` in a browser (Leaflet loads from CDN). No build step.

## Deploy

Push to GitHub → Netlify. Single static site, no functions.
