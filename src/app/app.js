angular.module( 'ngBoilerplate', [
    'templates-app',
    'templates-common',
    'ngBoilerplate.home',
    'ngBoilerplate.about',
    'ngBoilerplate.login',
    'ngBoilerplate.header',
    'ngBoilerplate.gestion',
    'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/login' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    console.log( 'AppCtrl' );

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams ){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
        }
    });
})

;
