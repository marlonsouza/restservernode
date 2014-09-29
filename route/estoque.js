module.exports = function(app) {

  var estoqueModel = app.model.estoque;

  console.dir('/estoque');

  app.get('/restserver/estoque', estoqueModel.getAll);
  app.post('/restserver/estoque', estoqueModel.new);
  app.put('/restserver/estoque', estoqueModel.update);
  app.delete('/restserver/estoque', estoqueModel.del);

};
