
var styleJSON = {
  "version": 8,
  "name": "qgis2web export",
  "metadata": {"maputnik:renderer": "mbgljs"},
  "pitch": 0,
  "light": {"intensity": 0.2},
  "sources": {
    "OpenStreetMap_0": {
      "type": "raster",
      "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      "tileSize": 256
    },
    "indoor3dmap_1": {
      "type": "geojson",
      "data": "https://maplibre.org/maplibre-gl-js-docs/assets/indoor-3d-map.geojson"
    }
  },
  "sprite": "",
  "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {},
      "paint": {"background-color": "#cecece"}
    },
    {
      "id": "lyr_OpenStreetMap_0_0",
      "type": "raster",
      "source": "OpenStreetMap_0"
    },
    {
      "id": "lyr_indoor3dmap_1_0",
      "type": "fill",
      "source": "indoor3dmap_1",
      "layout": {},
      "paint": {"fill-opacity": 1, "fill-color": ["get", "color"]}
    },
    {
      "id": "indoormap_3d",
      "type": "fill-extrusion",
      "source": "indoor3dmap_1",
      "paint": {
        "fill-extrusion-color": ["get", "color"],
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-base": ["get", "base_height"]
      }
    }
  ],
  "id": "z65z08l67"
}