angular.module('app.directive.filter', [])
.directive('filter', function (){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/filter/filter.html',
    scope: {
      texto: '@descricao',
      value: '='
    },
    controller: function ($scope) {
      $scope.limpar = function () {
        $scope.value = undefined;
      };
    },
    link: function(scope, element, attr, parent) {

    }
  };
});
