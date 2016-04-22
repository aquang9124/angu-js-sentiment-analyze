myApp.directive('anguMaps', function() {
	return function(scope, elem) {
		var mapOptions = {
			center: new google.maps.LatLng(-34.397, 150.644),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};

		var map = new google.maps.Map(elem[0], mapOptions);
		var options = {
			enableHighAccuracy: true
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(pos) {
				var position = {
					lat: pos.coords.latitude,
					lng: pos.coords.longitude
				};
				map.setCenter(position);
			}, function(err) {
				alert('Unable to get location: ' + err.message);
			}, options);
		}
	}
})