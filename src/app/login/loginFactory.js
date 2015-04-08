(function() {
    'use strict';

    angular
    .module('rodotrans.login')
    .factory('loginFactory', loginFactory)
    .factory('authenticationService', authenticationService);

    loginFactory.$inject = ['$http'];
    function loginFactory($http) {
        //var urlBase = "http://localhost:5000";
        var urlBase = "https://rodotrans-rest.herokuapp.com";

        var service = {
            getToken : getToken
        };

        return service;

        function getToken(json) {
            return $http.post(urlBase + "/token", json);
        }

    }

    function authenticationService() {
        var auth = {
            isLogged: false
        };
        return auth;
    }

})();
