module.exports = function(app) {

  var estoqueModel = app.model.estoque;

  console.dir('/estoque');

  app.get('/restserver/estoque', estoqueModel.getAll);

};
