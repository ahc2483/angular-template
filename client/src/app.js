
var app = angular.module('angular-app', ['ngRoute', 'ngResource', 'directives']);

app.config(['$routeProvider','$httpProvider',
  function ($routeProvider, $httpProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'templates/default/default.tpl.html',
            controller: 'DefaultController'
        }).otherwise({
            redirectTo: '/'
        });
  }
]);