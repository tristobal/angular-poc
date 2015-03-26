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

.controller( 'GestionCtrl', function GestionCtrl( $scope, $parse ) {
    console.log( 'GestionCtrl' );

    /**
    * FUENTE:
    * http://thomasstreet.com/blog/legacy/spreadsheet.html
    * https://github.com/ziscloud/angular-footable
    */
    $scope.columns = ['Fecha Uno', 'Fecha Dos', 'Agencia', 'Servicio', 'Nombre', 'Descripción', 'Origen', 'Destino', 'Producto'];
    $scope.rows = [1, 2, 3, 4, 5, 6, 7, 8];
    $scope.cells = {};

    process = function(exp) {
        return exp.replace(/[A-Z]\d+/g, function(ref) {
            return 'compute("' + ref + '")';
        });
    };
    $scope.compute = function(cell) {
        return $parse(process($scope.cells[cell]))($scope);
    };
})

;
