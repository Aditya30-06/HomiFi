mapboxgl.accessToken = MapToken;
const map = new mapboxgl.Map({
  container: 'map', // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});
const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  // .setPopup(new mapboxgl.Popup().setHTML("<h1>This is your booking location</h1>")) // add popup
  .setPopup(
    new mapboxgl.Popup({
      offset: 25,
      closeButton: false,
      closeOnClick: false,
      className: 'listing-popup'
    }).setHTML(`
    <div class="p-1">
      <h6 class="text-danger fw-semibold mb-1">Your Stay : ${listing.title}</h6>
      <p class="text-secondary mb-0 small">This is your booking location at ${listing.location} </p>
    </div>
  `)
  )

  .addTo(map);