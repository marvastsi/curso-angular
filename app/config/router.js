angular.module('app.config.router', ['ngRoute'])
.config(function($routeProvider) {

  $routeProvider.otherwise({
    redirectTo: '/home'
  });


});