/**
 * @description nenhum elemento grande oculto
 * @author Peter
 */
angular.module('app.directive.bolder', [])
.directive('bolder', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: '<b ng-transclude><i></i></b>',
    scope: {
      nome: '@'
    },
    controller: function ($scope) {
      console.log('bolder controller', $scope.nome);
    },
    link: function (scope) {
      console.log('bolder link', scope.nome);
    }
  };
});
