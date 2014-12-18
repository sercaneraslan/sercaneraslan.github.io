/*
* Usage :
*
* <h1 ng-title>Page Title</h1>
*
* or
*
* <h1 ng-title="New Page Title">Page Title</h1>
*
*/
angular.module('ngTitle', []).directive('ngTitle', function () {
    'use strict';

    return function (scope, element, attrs) {
        attrs.$observe('ngTitle', function () {
            document.getElementsByTagName('title')[0].innerHTML = attrs.ngTitle || element.html();
        });
    };
});
