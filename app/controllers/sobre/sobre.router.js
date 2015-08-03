angular.module('app.controller.sobre', [
  'ngRoute',
  'app.controller.SobreController'
  ])
.config(function($routeProvider) {

  $routeProvider.when('/sobre', {
    templateUrl: 'controllers/sobre/sobre.html',
    controller: 'SobreController'
  });


});