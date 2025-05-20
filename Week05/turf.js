let allBikeTheftData = null;

map.on('load', () => {
	map.addSource('bike', {
		type: 'geojson',
		data: 'chibike.geojson'
	});

	map.addLayer({
		id: 'bike-layer',
		type: 'circle',
		source: 'bike',
		paint: {
			'circle-radius': 4,
			'circle-color': '#ff0000',
			'circle-stroke-color': '#ffffff',
			'circle-stroke-width': 1,
			'circle-opacity': 0.7
		}
	});

	fetch('chibike.geojson')
		.then(response => response.json())
		.then(data => {
			allBikeTheftData = data;
			if (data && data.features.length > 0) {
				const bounds = turf.bbox(data);
				map.fitBounds(bounds, { padding: 50 });
			}
		});
});