
var app = angular.module('angular-app', ['ngRoute', 'ngResource']);

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