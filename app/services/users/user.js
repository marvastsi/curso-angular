angular.module('app.service.user', [])
.service('UserModel', function () {
  var banco = [
    {id: 1, nome: "Peter", pizza: true},
    {id: 2, nome: "Presidente", pizza: false},
    {id: 3, nome: "Zefa", pizza: true},
    {id: 4, nome: "NoNose", pizza: true},
    {id: 5, nome: "Marcelo", pizza: true},
    {id: 6, nome: "Eduardo", pizza: false},
    {id: 7, nome: "Tonhão", pizza: true},
    {id: 8, nome: "Beligante", pizza: false},
    {id: 9, nome: "Igor", pizza: false},
    {id: 10, nome: "Falci", pizza: true}
  ];
  var id = 11;

  return {
    save: save,
    remove: remove,
    getItem: getItem,
    getItems: getItems
  };

  function save(item) {
    if(!item.id){
      item.id = id++;
      participantes.push(item);
    }
  };
  function remove(item) {
    banco = banco.filter(function (user) {
      return item != user;
    });
  };
  function getItem(id) {
    return banco.filter(function (userId) {
      return id === userId;
    });
  };
  function getItems() {
    return banco;
  };
});
