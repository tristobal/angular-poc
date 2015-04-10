(function() {
    'use strict';

    //http://stackoverflow.com/questions/22537311/angular-ui-router-login-authentication
    //http://stackoverflow.com/questions/22526024/angularjs-ui-router-secured-states
    //http://www.kdelemme.com/2014/03/09/authentication-with-angularjs-and-a-node-js-rest-api/

    angular
    .module('rodotrans.login')
    .factory('loginFactory', loginFactory)
    .factory('authenticationService', authenticationService)
    .factory('tokenInterceptor', tokenInterceptor);

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

    tokenInterceptor.$inject = ['$q', '$window', '$location', 'authenticationService'];
    function tokenInterceptor($q, $window, $location, authenticationService) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },

            requestError: function(rejection) {
                return $q.reject(rejection);
            },

            /* Set Authentication.isAuthenticated to true if 200 received */
            response: function (response) {
                if (response !== null && response.status === 200 && $window.sessionStorage.token && !authenticationService.isLogged) {
                    authenticationService.isLogged = true;
                }
                return response || $q.when(response);
            },

            /* Revoke client authentication if 401 is received */
            responseError: function(rejection) {
                if (rejection !== null && rejection.status === 401 && ($window.sessionStorage.token || authenticationService.isLogged)) {
                    delete $window.sessionStorage.token;
                    authenticationService.isLogged = false;
                    $location.path("/admin/login");
                }

                return $q.reject(rejection);
            }
        };
    }

})();
