(function() {
    'use strict';

    angular
    .module('ngBoilerplate.login')
    .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['$http'];
    function loginFactory($http) {
        var urlBase = "http://localhost:3001";

        var service = {
            getToken : getToken
        };

        return service;

        function getToken(json) {
            return $http.post(urlBase + "/token", json);
        }

    }
})();
