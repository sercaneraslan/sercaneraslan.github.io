angular.module('grabs').controller('DocsCtrl', ['$scope', '$routeParams', '$route', '$rootScope', '$http', function ($scope, $routeParams, $route, $rootScope, $http) {
    'use strict';

    var docsMenu = JSON.parse(window.localStorage.getItem('docsMenu')),
        createMenu = function (data) {
            $scope.menu = data[$rootScope.pageName];
            $scope.subPageName = 'giris';

            angular.forEach($scope.menu, function (item) {
                if (item.name === $routeParams.page) {
                    $scope.subPageName = $routeParams.page;
                }
            });
        };

    $rootScope.pageName = $route.current.name;

    // Create The Menu
    if (docsMenu) {
        createMenu(docsMenu);
    } else {
        $http.get('views/docs/docs.json').success(function (data) {
            createMenu(data);
            window.localStorage.setItem('docsMenu', JSON.stringify(data));
        });
    }

}]);
