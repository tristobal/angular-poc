angular.module( 'ngBoilerplate.gestion', [
    'ui.router'
])

.config(function config( $stateProvider ) {
    $stateProvider
    .state( 'gestion1', {
        url: '/gestion1',
        views: {
            "main": {
                controller: 'GestionCtrl',
                templateUrl: 'gestion/gestion.uno.tpl.html'
            },
            "header": {
                templateUrl: 'header/header.tpl.html'
            }
        },
        data:{ pageTitle: 'Gestion UNO' }
    })
    .state( 'gestion2', {
        url: '/gestion2',
        views: {
            "main": {
                controller: 'GestionCtrl',
                templateUrl: 'gestion/gestion.dos.tpl.html'
            },
            "header": {
                templateUrl: 'header/header.tpl.html'
            }
        },
        data:{ pageTitle: 'Gestion DOS' }
    });
})

.controller( 'GestionCtrl', function GestionCtrl( $scope ) {
    console.log( 'GestionCtrl' );
})

;
