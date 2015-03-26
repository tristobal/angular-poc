angular.module( 'ngBoilerplate.login', [
    'ui.router',
    'isLoginModule'
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

.controller( 'LoginCtrl', function LoginCtrl( $scope, isLoginFactory, $state ) {
    console.log( 'LoginCtrl' );

    $scope.loginClick = function() {
        isLoginFactory.setLoginPage(false);
        $state.go("home");
    };
})

;
