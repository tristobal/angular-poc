angular.module( 'rodotrans', [
    'templates-app',
    'templates-common',
    'rodotrans.home',
    'rodotrans.about',
    'rodotrans.login',
    'rodotrans.header',
    'rodotrans.gestion',
    'ui.router'
])

.config( function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/login' );
})

.run( function() {
})

.controller( 'AppCtrl', function( $scope ) {
    console.log( 'AppCtrl' );

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams ){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | Rodotrans' ;
        }
    });
})

;
