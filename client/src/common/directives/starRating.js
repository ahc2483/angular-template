angular.module('directives.starRating', []).directive('starRating', function () {
    return {
      replace:true,
      restrict: 'A',
      template: '<ul class="starRating">' +
                  '<li ng-repeat="star in stars">' +
                      '<i class="fa fa-star"></i>' +
                  '</li>' +
                  '<li ng-repeat="star in blankStars">'+
                    '<i class="fa fa-star-o"></i>' +
                  '</li>' +
                '</ul>',
      scope: {
        rating: '=',
        maxRating: '='
      },
      link: function (scope, elem, attrs) {
        console.log('Help');
        scope.stars = [];
        scope.blankStars = [];
        
        for (var i = 0; i < scope.rating; i++) {
          scope.stars.push({});
        }

        for (var i = scope.rating; i < scope.maxRating; i++) {
          scope.blankStars.push({});
        }

        console.log(scope.stars);
      }
  }
});