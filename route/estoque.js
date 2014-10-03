module.exports = function(app) {

  var estoqueModel = app.model.estoque;

  console.dir('/estoque');

  app.get('/restserver/estoque', estoqueModel.getAll);
  app.post('/restserver/estoque', estoqueModel.new);
  app.put('/restserver/estoque/:id', estoqueModel.update);
  app.delete('/restserver/estoque/:id', estoqueModel.del);

};
