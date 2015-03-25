(function() {
    'use strict';

    angular
    .module('isLoginModule', [])
    .factory('isLoginFactory', isLoginFactory);

    function isLoginFactory() {
        var isLoginVar = false;
        var service = {
            isLogin : isLogin,
            setLogin : setLogin
        };

        return service;

        function isLogin() {
            return isLoginVar;
        }

        function setLogin(value) {
            isLoginVar = value;
        }

    }

})();
