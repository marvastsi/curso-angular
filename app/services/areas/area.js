angular.module('app.service.area', [])
.service('AreaModel', function ($http, baseUrl, $resource) {
  var instance = $resource(baseUrl.concat('/areas/:id'), {areaId: 'areaId', treeId: 'tree'}, {
    funcionarios: {
      isArray: true,
      url: '/areas/:id/funcionarios'
    }
  });
  return {
    getItems: getItems,
    adicionar: add,
    remover: remove,
    salvar: save

  };

  function transformer (item) {
    return {
      nome: item.nome,
      id: item._id.$oid
    };
  }

  function save (item){
    if (!vm.item.id) {
      return adicionar(vm.item);
    } else {
      return editar(item);
    }
  }

  function getItems () {
    return instance.query().then(transformer);
  }

  function add (item){
    return $http.post(baseUrl.concat('/areas'), item);
  }

  function remove (item){
    return instance.remove(item));
  }

  function update (item){
    return $http.put(baseUrl.concat('/areas/').concat(item.id), item);
  }
});
