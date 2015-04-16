(function() {
    'use strict';

    /**
    * Each section of the site has its own module. It probably also has
    * submodules, though this boilerplate is too simple to demonstrate it. Within
    * `src/app/home`, however, could exist several additional folders representing
    * additional modules that would then be listed as dependencies of this one.
    * For example, a `note` section could have the submodules `note.create`,
    * `note.delete`, `note.edit`, etc.
    *
    * Regardless, so long as dependencies are managed correctly, the build process
    * will automatically take take of the rest.
    *
    * The dependencies block here is also where component dependencies should be
    * specified, as shown below.
    */
    angular
    .module( 'rodotrans.home', [
        'ui.router'
    ])
    .config( configHome )
    .controller( 'HomeCtrl', HomeCtrl );

    configHome.$inject = ['$stateProvider'];
    function configHome( $stateProvider ) {
        $stateProvider.state( 'home', {
            url: '/',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                },
                "header": {
                    templateUrl: 'header/header.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    }

    HomeCtrl.$inject = ['$scope', '$window'];
    function HomeCtrl( $scope, $window ) {
        console.log( 'HomeCtrl' );
    }

})();
