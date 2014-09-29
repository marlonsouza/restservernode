module.exports = function(app) {

  var itemModel = app.model.item;

  console.dir('/itens');

  app.get('/restserver/itens', itemModel.getAll);
  app.options('/restserver/item', itemModel.other);
  app.post('/restserver/item', itemModel.new);
};
