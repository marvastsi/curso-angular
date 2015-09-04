angular.module('app', [
  'ngResource',

  // routers
  'app.config.router',

  //services
  'app.service.user',
  'app.service.area',

  // directive
  'app.directive.filter',
  'app.directive.bolder',

  // controllers
  'app.controller.home',
  'app.controller.sobre',
  'app.controller.controller',
  'app.controller.user',
  'app.controller.aula4'
])
.constant('baseUrl', 'http://cursoangular.herokuapp.com')
