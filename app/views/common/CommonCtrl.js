angular.module('sepw').controller('CommonCtrl', ['$route', '$rootScope', function ($route, $rootScope) {
    'use strict';

    $rootScope.pageName = $route.current.name;
}]);
