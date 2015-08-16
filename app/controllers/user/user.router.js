angular.module('app.controller.user', [
  'app.controller.UserController'
])
.config(function ($routeProvider){

  $routeProvider.when('/user', {
    controller: 'UserController',
    controllerAs: 'vm',
    templateUrl: 'controllers/user/user.html'
  })

});
