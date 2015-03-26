(function() {
    'use strict';

    angular
    .module('isLoginModule', [])
    .factory('isLoginFactory', isLoginFactory);

    function isLoginFactory() {
        var isLoginVar = false;
        var service = {
            isLoginPage : isLoginPage,
            setLoginPage : setLoginPage
        };

        return service;

        function isLoginPage() {
            return isLoginVar;
        }

        function setLoginPage(value) {
            isLoginVar = value;
        }

    }

})();
