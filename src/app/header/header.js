angular.module( 'ngBoilerplate.header', [
    'ui.router'
])

.controller( 'HeaderCtrl', function HeaderCtrl( $scope, $state ) {
    console.log( 'HeaderCtrl' );
    //$scope.$state = $state;

    $scope.isGestionSelected = function() {
        var result = $state.includes('ingresoservicios') || $state.includes('serviciotransito');
        console.log(result);
        return result;
    };
})

;
