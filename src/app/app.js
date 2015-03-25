angular.module( 'ngBoilerplate', [
    'templates-app',
    'templates-common',
    'ngBoilerplate.home',
    'ngBoilerplate.about',
    'ngBoilerplate.login',
    'ui.router',
    'isLoginModule'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/login' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, isLoginFactory ) {
    console.log( 'AppCtrl' );
    $scope.isLoginPage = true;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams ){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
        }
        $scope.isLoginPage = isLoginFactory.isLogin();
    });
})

;
