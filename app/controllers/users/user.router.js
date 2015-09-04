angular.module('app.controller.user', [
  'app.controller.UserController'
])
.config(function ($routeProvider){

  $routeProvider.when('/users', {
    controller: 'UserController',
    controllerAs: 'vm',
    templateUrl: 'controllers/users/user.html'
  })

});
