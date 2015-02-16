/*
*
* ng-head v0.0.1
*
* (c) 2014-2015 Sercan Eraslan http://sercaneraslan.com
* License: MIT
*
*/
angular.module('ngHead', [])
    .directive('ngHead', function() {

        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                var editMetaTag = function (content, name) {
                        angular.forEach(document.getElementsByTagName('meta'), function (meta) {
                            if (meta.getAttribute('name') == (name || 'Description')) {
                                meta.setAttribute('content', content);
                            }
                        });
                    };

                // For Meta Tags
                if (attrs.ngContent) {
                    editMetaTag(attrs.ngContent, attrs.ngName);
                }

                // For Auto Meta Description
                if (attrs.ngAutoDescription != undefined) {
                    editMetaTag(element.text().slice(0, 150));
                }

                // For Title Tag
                if (attrs.ngTitle != undefined) {
                    document.getElementsByTagName('title')[0].innerHTML = attrs.ngTitle || element.html();
                }
            }
        };
    });
