module.exports = function(app) {

  var itemModel = app.model.item;

  app.get('/restserver/itens', itemModel.getAll);

};
