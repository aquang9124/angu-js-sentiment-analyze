myApp.directive('anguMaps', function() {
	return {
		link: function(scope, elem) {
			var mapOptions = {
				center: new google.maps.LatLng(-34.397, 150.644),
				zoom: 16,
				draggable: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(elem[0], mapOptions);
			var options = {
				enableHighAccuracy: true,
				timeout: 5000
			};

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(pos) {
					var position = {
						lat: pos.coords.latitude,
						lng: pos.coords.longitude
					};
					map.setCenter(position);
					var marker = new google.maps.Marker({
						position: position,
						map: map,
						title: 'Hello World!'
					});
				}, function(err) {
					alert('Unable to get location: ' + err.message);
				}, options);
			}
		},
		scope: {
			
		}
	}
})