angular.module( 'ngBoilerplate.login', [
    'ui.router'
])

.config(function config( $stateProvider ) {
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
})

.controller( 'LoginCtrl', function LoginCtrl( $scope, $state ) {
    console.log( 'LoginCtrl' );

    $scope.loginClick = function() {
        $state.go("home");
    };
})

;
