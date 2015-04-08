angular.module( 'ngBoilerplate.about', [
    'ui.router',
    //'placeholders',
    'ui.bootstrap'
])

.config(function( $stateProvider ) {
    $stateProvider.state( 'about', {
        url: '/about',
        views: {
            "main": {
                controller: 'AboutCtrl',
                templateUrl: 'about/about.tpl.html'
            },
            "header": {
                templateUrl: 'header/header.tpl.html'
            }
        },
        data:{ pageTitle: 'What is It?' }
    });
})

.controller( 'AboutCtrl', function( $scope ) {
    console.log( 'AboutCtrl' );
})

;
