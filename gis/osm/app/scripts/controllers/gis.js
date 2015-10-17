'use strict';
angular.module('osmApp', [
    'ngRoute',
	'openlayers-directive',
    'ngSanitize'
  ]).controller('GISViewController', ['$scope', '$http', 'olData','$location', '$timeout','$rootScope', function($scope, $http, olData,$location, $timeout,$rootScope) {
    var markers;
    angular.extend($scope, {
        hubei: {
            lat: 30.5715,
            lon: 114.2906,
            zoom: 10,
            centerUrlHash: true
        },
        defaults: {
            view: {
                maxZoom: 16,
                minZoom: 10
            },
            events: {
                map: ['singleclick','dblclick']
            }
        },
        interactions: {
            mouseWheelZoom: true
        },
        OSMLayer: {
            source: {
                type :"OSM",
                url: 'http://127.0.0.1:9000/tiles/{z}/{x}/{y}.png'
            }
        },
        markers: [],
        markers1: [],
        geos1:[]
    });
    $rootScope.conl = $scope;
}]);

