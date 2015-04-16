(function() {
    'use strict';

    angular
    .module( 'rodotrans.login', [
        'ui.router',
        'angular-storage'
    ])
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

    LoginCtrl.$inject = ['$scope', '$state', 'loginFactory', '$window', 'authenticationService', 'store'];
    function LoginCtrl( $scope, $state, loginFactory, $window, authenticationService, store ) {
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
                authenticationService.isLogged = true;
                store.set('jwt', data.token);
                $state.go("home");
            })
            .error(function (error) {
                $scope.isError = true;
                if (authenticationService.isLogged) {
                    authenticationService.isLogged = false;
                    $scope.isLoading = false;
                    store.remove('jwt');
                    console.log( error );
                }
            });

        };
    }

})();
