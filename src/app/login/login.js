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

.controller( 'LoginCtrl', function LoginCtrl( $scope, $state, loginFactory ) {
    console.log( 'LoginCtrl' );

    $scope.loginClick = function() {
        var json = {
            username : $scope.username,
            password : $scope.password
        };
        console.log(json.username + " " + json.password);

        /*loginFactory.getToken(json)
        .success(function (user) {
            console.log( JSON.stringify(user) );
        })
        .error(function (error) {
            alert( JSON.stringify(error) );
        });*/

        $state.go("home");
    };
})

;
