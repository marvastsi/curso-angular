angular.module('app.controller.home', ['ngRoute'])
.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'controllers/home/home.html'
  });


});