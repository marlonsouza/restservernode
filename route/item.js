module.exports = function(app) {

  var itemModel = app.model.item;

  console.dir('/itens');

  app.get('/restserver/itens', itemModel.getAll);
  app.post('/restserver/item', itemModel.new);
  app.put('/restserver/item/:id', itemModel.update);
  app.delete('/restserver/item/:id', itemModel.del);

};
