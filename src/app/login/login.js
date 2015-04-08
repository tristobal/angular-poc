angular.module( 'rodotrans.login', [
    'ui.router'
])

.config(function( $stateProvider ) {
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

.controller( 'LoginCtrl', function( $scope, $state, loginFactory, $window ) {
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
})

;
