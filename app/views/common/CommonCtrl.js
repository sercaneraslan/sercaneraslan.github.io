angular.module('grabs').controller('CommonCtrl', ['$route', '$rootScope', function ($route, $rootScope) {
    'use strict';

    $rootScope.pageName = $route.current.name;
}]);
