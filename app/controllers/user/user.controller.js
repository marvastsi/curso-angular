angular.module('app.controller.UserController', [])
.controller('UserController', Controller);

function Controller (UserModel) {
  var vm = this;
  var copia;

  vm.adicionar = adicionar;
  vm.editar = editar;
  vm.excluir = excluir;
  vm.cancelar = cancelar;

  function adicionar () {
    UserModel.save( vm.item );
    vm.item = {};
  }

  function editar (item) {
    copia = angular.copy( item );
    vm.item = item;
  }

  function cancelar () {
    angular.copy(copia, vm.item);
    vm.item = {};
  }

  function excluir (item) {
    vm.participantes = UserModel.remove( item );
  }

  vm.participantes = UserModel.getItems();
}
