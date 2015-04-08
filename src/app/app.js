(function() {
    'use strict';

    angular
    .module( 'rodotrans', [
        'templates-app',
        'templates-common',
        'rodotrans.home',
        'rodotrans.about',
        'rodotrans.login',
        'rodotrans.header',
        'rodotrans.gestion',
        'ui.router'
    ])
    .config( configApp )
    .run( runApp )
    .controller( 'AppCtrl', AppCtrl );

    configApp.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configApp( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/login' );
    }

    function runApp() {
    }

    AppCtrl.$inject = ['$scope'];
    function AppCtrl( $scope ) {
        console.log( 'AppCtrl' );
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams ){
            if ( angular.isDefined( toState.data.pageTitle ) ) {
                $scope.pageTitle = toState.data.pageTitle + ' | Rodotrans' ;
            }
        });
    }

})();
