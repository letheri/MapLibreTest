// styling set for map
Object.assign(document.getElementById("map").style, {
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "100%",
});

const map = new maplibregl.Map({
  container: "map", // container id
  style: "https://demotiles.maplibre.org/style.json", // style URL
  center: [0, 0], // starting position [lng, lat]
  zoom: 1, // starting zoom
});
