(function() {
    'use strict';

    angular
    .module( 'rodotrans.mapa', ['ui.router'])
    .config( configMapa )
    .factory( 'GetGeocoding', GetGeocoding)
    .controller( 'MapaCtrl' , MapaCtrl);

    configMapa.$inject = ['$stateProvider'];
    function configMapa( $stateProvider ) {
        $stateProvider.state( 'mapa', {
            url: '/mapa',
            views: {
                "main": {
                    controller: 'MapaCtrl',
                    templateUrl: 'mapa/mapa.tpl.html'
                },
                "header": {
                    templateUrl: 'header/header.tpl.html'
                }
            },
            data:{ pageTitle: 'Geocoding INFO' }
        });
    }


    MapaCtrl.$inject = [ '$scope', '$state', '$window', 'GetGeocoding' ];
    function MapaCtrl( $scope, $state, $window , GetGeocoding) {
        console.log( 'MapaCtrl' );
        //$scope.responseJSON = {};

        $scope.getInfo = function() {
            var customAddress = angular.lowercase($scope.address);
            customAddress = customAddress.split(" ").join("+");
            console.log( customAddress );
            //$scope.responseJSON = customAddress;

            GetGeocoding.getLocation( customAddress )
            .success(function(resp){
                $scope.responseJSON = resp;
            })
            .error(function(error){
                console.log(JSON.stringify(error));
            });
        };

    }

    GetGeocoding.$inject = ['$http'];
    function GetGeocoding($http) {
        var apiKey = "AIzaSyAUKuq7I_IS8KeqQqs10Hcd1oKzQQA8A00";
        var urlBase = "https://maps.googleapis.com/maps/api/geocode/json?address=";

        var service = {
            getLocation : getLocation
        };
        return service;

        function getLocation(address) {
            return $http.get(urlBase + address + "&key=" + apiKey);
        }
    }
})();
