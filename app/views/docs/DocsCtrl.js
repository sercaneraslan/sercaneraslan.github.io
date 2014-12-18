grabs.controller('DocsCtrl', ['$scope', '$routeParams', '$route', '$rootScope', function ($scope, $routeParams, $route, $rootScope) {
    'use strict';

    $rootScope.pageName = $route.current.name;
    $scope.subPageName = $routeParams.page ? $routeParams.page : 'giris';
}]);
