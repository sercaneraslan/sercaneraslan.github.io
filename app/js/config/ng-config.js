// Defined SEPW (Sercan Eraslan Personal Website) Module
var sepw = angular.module('sepw', [
        'ngRoute',
        'ngHead',
        'ngPrism',
        'ngCodepen'
    ]);

// SEPW Routing Configuration
sepw.config(['$locationProvider', '$routeProvider', '$compileProvider', function ($locationProvider, $routeProvider, $compileProvider) {
    'use strict';

    // HTML5 Push State
    $locationProvider.html5Mode(true);
    // Disable Debugging
    $compileProvider.debugInfoEnabled(false);

    /* Homepage */
    $routeProvider.when('/', {
        templateUrl: '/views/homepage/homepage.html',
        controller: 'CommonCtrl',
        name: 'homePage'
    }).

    /* Uses */
    when('/uses', {
        templateUrl: '/views/uses/uses.html',
        controller: 'CommonCtrl',
        name: 'usesPage'
    }).

    /* Books */
    when('/kitaplar', {
        templateUrl: '/views/books/books.html',
        controller: 'CommonCtrl',
        name: 'booksPage'
    }).

    /* Documents */
    when('/dokumanlar', {
        templateUrl: '/views/documents/documents.html',
        controller: 'CommonCtrl',
        name: 'booksPage'
    }).

    /* Docs */
    when('/xhtml', {
        templateUrl: '/views/docs/docs.html',
        controller: 'DocsCtrl',
        name: 'xhtml'
    }).
    when('/xhtml/:page', {
        templateUrl: '/views/docs/docs.html',
        controller: 'DocsCtrl',
        name: 'xhtml'
    }).
    when('/css', {
        templateUrl: '/views/docs/docs.html',
        controller: 'DocsCtrl',
        name: 'css'
    }).
    when('/css/:page', {
        templateUrl: '/views/docs/docs.html',
        controller: 'DocsCtrl',
        name: 'css'
    }).
    when('/html5', {
        templateUrl: '/views/docs/docs.html',
        controller: 'DocsCtrl',
        name: 'html5'
    }).
    when('/html5/:page', {
        templateUrl: '/views/docs/docs.html',
        controller: 'DocsCtrl',
        name: 'html5'
    }).

    /* Other */
    otherwise({
        redirectTo: '/'
    });
}]);
