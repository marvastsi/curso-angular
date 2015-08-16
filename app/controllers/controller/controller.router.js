angular.module('app.controller.controller', [
  'app.controller.ControllerController'
])
.config(function ($routeProvider) {
  
  $routeProvider.when('/controller', {
    controller: 'ControllerController',
    controllerAs: 'vm',
    templateUrl: 'controllers/controller/controller.html'
  })

});