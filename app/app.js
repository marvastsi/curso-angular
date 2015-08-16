angular.module('app', [
  'app.config.router',

  //services
  'app.service.user',

  // directive
  'app.directive.filter',
  'app.directive.bolder',

  // controllers
  'app.controller.home',
  'app.controller.sobre',
  'app.controller.controller',
  'app.controller.user'
]);
