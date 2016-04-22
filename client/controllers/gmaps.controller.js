myApp.controller('mapsCtrl', function($scope, $location, locationService, uiGmapGoogleMapApi) {
    locationService.currentUrl = $location.url();

    
});