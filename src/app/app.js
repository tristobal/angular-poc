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
        'ui.router',
        'angular-jwt',
        'angular-storage'
    ])
    .config( configApp )
    .run( runApp )
    .controller( 'AppCtrl', AppCtrl );

    configApp.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'jwtInterceptorProvider'];
    function configApp( $stateProvider, $urlRouterProvider, $httpProvider, jwtInterceptorProvider ) {
        $urlRouterProvider.otherwise( '/login' );

        jwtInterceptorProvider.tokenGetter = function(store) {
            return store.get('jwt');
        };

        $httpProvider.interceptors.push('jwtInterceptor');
    }


    runApp.$inject = ['$rootScope', '$location', 'authenticationService', 'store', 'jwtHelper'];
    function runApp( $rootScope, $location, authenticationService, store, jwtHelper) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // Redirecciona a la página de Login si no se está logeado
            if (!authenticationService.isLogged || !store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
                $location.path('/login');
            }
        });
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
