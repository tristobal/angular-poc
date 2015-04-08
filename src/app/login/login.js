(function() {
    'use strict';

    angular
    .module( 'rodotrans.login', ['ui.router'])
    .config( configLogin )
    .controller( 'LoginCtrl', LoginCtrl);

    configLogin.$inject = ['$stateProvider'];
    function configLogin( $stateProvider ) {
        $stateProvider.state( 'login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginCtrl',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data:{ pageTitle: 'LOGIN' }
        });
    }

    LoginCtrl.$inject = ['$scope', '$state', 'loginFactory', '$window'];
    function LoginCtrl( $scope, $state, loginFactory, $window ) {
        console.log( 'LoginCtrl' );
        $scope.isError = false;
        $scope.isLoading = false;

        $scope.loginClick = function() {
            $scope.isLoading = true;
            $scope.isError = false;
            var json = {
                username : $scope.username,
                password : $scope.password
            };

            loginFactory.getToken(json)
            .success(function (data) {
                console.log( data.token );
                $window.sessionStorage.token = data.token;
                $state.go("home");
            })
            .error(function (error) {
                $scope.isError = true;
                $scope.isLoading = false;
                delete $window.sessionStorage.token;
                console.log( error );
            });

        };
    }

    /*
    AdminUserCtrl.$inject = ['$scope', '$location', '$window', 'UserService', 'AuthenticationService',
    function AdminUserCtrl($scope, $location, $window, UserService, AuthenticationService) {

        //Admin User Controller (login, logout)
        $scope.logIn = function logIn(username, password) {
            if (username !== undefined && password !== undefined) {

                UserService.logIn(username, password)
                .success(function(data) {
                    AuthenticationService.isLogged = true;
                    $window.sessionStorage.token = data.token;
                    $location.path("/admin");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        };

        $scope.logout = function logout() {
            if (AuthenticationService.isLogged) {
                AuthenticationService.isLogged = false;
                delete $window.sessionStorage.token;
                $location.path("/");
            }
        };
    }*/


})();
