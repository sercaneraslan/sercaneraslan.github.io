grabs.controller('HomepageCtrl', ['$route', '$rootScope', function ($route, $rootScope) {
    'use strict';

    $rootScope.pageName = $route.current.name;
}]);
