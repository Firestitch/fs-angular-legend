
(function () {
    'use strict';

    angular.module('fs-angular-legend',[])
    .directive('fsLegend', function($location, $timeout) {
        return {
            templateUrl: 'views/directives/legend.html',
            restrict: 'E',
            transclude: true,
            scope: {

            },

            link: function($scope, element, attrs, ctrl, $transclude) {
                
                $scope.items = [];

                $timeout(function(){
                    
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
                });

                $scope.redirect = function(path) {
                    $location.path(path);
                }
            }
        };
    });
})();

angular.module('fs-angular-legend').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/legend.html',
    "<ng-transclude></ng-transclude>"
  );

}]);
