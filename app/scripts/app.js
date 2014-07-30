'use strict';

/**
 * @ngdoc overview
 * @name tmntApp
 * @description
 * # tmntApp
 *
 * Main module of the application.
 */
angular
  .module('tmntApp', [ui.router]);

tmntApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('team', {
            url: '/team/:teamId',
            templateUrl: 'views/teamview.html',
            controller: 'TeamCtrl'
        })
});
