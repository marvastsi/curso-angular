angular.module('app.controller.Aula4Controller', [])
.controller('Aula4Controller', function (AreaModel){
  var vm = this;
  var copia;

  vm.salvar = salvar;
  vm.atualizar = listar;
  vm.remover = remover;
  vm.editar = editar;
  vm.cancelar = cancelar;

  listar();

  function listar() {
    vm.items = AreaModel.getItems();
  }

  function salvar (){
    AreaModel.salvar(vm.item)
    .then(listar)
    .then(function(){
      vm.item = {};
    });
  }

  function remover (item){
    AreaModel.remove(item).then(listar);
  }
  function editar (item){
    copia = angular.copy( item );
    vm.item = item;
  }

  function cancelar () {
    angular.copy(copia, vm.item);
    vm.item = {};
  }

  console.log('Fim do controller.');
});
