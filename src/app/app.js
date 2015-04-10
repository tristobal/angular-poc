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
        'rodotrans.mapa',
        'ui.router'
    ])
    .config( configApp )
    .run( runApp )
    .controller( 'AppCtrl', AppCtrl );

    configApp.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    function configApp( $stateProvider, $urlRouterProvider, $httpProvider ) {
        $urlRouterProvider.otherwise( '/login' );

        $httpProvider.interceptors.push('tokenInterceptor');
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
