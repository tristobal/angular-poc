(function() {
    'use strict';

    angular
    .module( 'rodotrans.about', [
        'ui.router',
        'ui.bootstrap'
    ])
    .config( configAbout )
    .controller( 'AboutCtrl', AboutCtrl);

    configAbout.$inject = ['$stateProvider'];
    function configAbout( $stateProvider ) {
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
    }

    AboutCtrl.$inject = ['$scope'];
    function AboutCtrl( $scope ) {
        console.log( 'AboutCtrl' );
    }

})();
