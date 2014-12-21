// Defined Grabs Module
var grabs = angular.module('grabs', [
        'ngRoute',
        'ngTitle',
        'ngPrism',
        'ngCodepen',
        'ngDisqus'
    ]);

// Grabs Routing Configuration
grabs.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    'use strict';

    /* Homepage */
    $routeProvider.when('/', {
        templateUrl: '/views/homepage/homepage.html',
        controller: 'HomepageCtrl',
        name: 'home'
    }).

    /* Books */
    when('/kitaplar', {
        templateUrl: '/views/books/books.html',
        controller: 'HomepageCtrl',
        name: 'books'
    }).

    /* Projects */
    when('/projeler', {
        templateUrl: '/views/projects/projects.html',
        controller: 'HomepageCtrl',
        name: 'projects'
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

    // HTML5 Push State
    $locationProvider.html5Mode(true);
}]);
