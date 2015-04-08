angular.module( 'rodotrans.header', [
    'ui.router'
])

.controller( 'HeaderCtrl', function( $scope, $state, $window ) {
    console.log( 'HeaderCtrl' );

    $scope.isGestionSelected = function() {
        var result = $state.includes('ingresoservicios') || $state.includes('serviciotransito');
        console.log(result);
        return result;
    };

    $scope.logout = function(){
        delete $window.sessionStorage.token;
        $state.go("login");
    };
})

;
