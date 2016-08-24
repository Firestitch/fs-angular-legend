(function () {
    'use strict';

    angular.module('fs-angular-legend',[])
    .directive('fsLegend', function($location) {
        return {
            templateUrl: 'views/directives/legend.html',
            restrict: 'E',
            transclude: true,
            scope: {

            },

            link: function($scope, element, attrs, ctrl, $transclude) {
                $scope.items = [];


                var items = element[0].querySelectorAll('fs-legend-item');

                angular.forEach(items,function(item) {

                    var item = angular.element(item);
                    var styles = { backgroundColor: item.attr('fs-color') };

                    item
                        .addClass('fs-legend-item')
                        .append(angular.element('<span>')
                                    .addClass('fs-legend-color')
                                    .css(styles))
                        .append(angular.element('<span>')
                                    .addClass('fs-legend-label')
                                    .append(item.attr('fs-label')));
                });

                $scope.redirect = function(path) {
                    $location.path(path);
                }
            }
        };
    });
})();