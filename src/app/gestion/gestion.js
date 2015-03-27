angular.module( 'ngBoilerplate.gestion', [
    'ui.router',
    'ui.bootstrap'
])

.config(function config( $stateProvider ) {
    $stateProvider
    .state( 'ingresoservicios', {
        url: '/ingresoservicios',
        views: {
            "main": {
                controller: 'IngresoServicioCtrl',
                templateUrl: 'gestion/ingresoservicios.tpl.html'
            },
            "header": {
                templateUrl: 'header/header.tpl.html'
            }
        },
        data:{ pageTitle: 'Ingreso de servicios' }
    })
    .state( 'serviciotransito', {
        url: '/serviciotransito',
        views: {
            "main": {
                controller: 'ServicioTransitoCtrl',
                templateUrl: 'gestion/serviciotransito.tpl.html'
            },
            "header": {
                templateUrl: 'header/header.tpl.html'
            }
        },
        data:{ pageTitle: 'Servicio en Transito' }
    });
})


.controller( 'IngresoServicioCtrl', function IngresoServicioCtrl( $scope, $parse ) {
    console.log( 'IngresoServicioCtrl' );


    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.openInicio = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.openedInicio = true;
    };

    $scope.openFin = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.openedFin = true;
    };


    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

})

.controller( 'ServicioTransitoCtrl', function ServicioTransitoCtrl( $scope, $parse ) {
    console.log( 'ServicioTransitoCtrl' );

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
