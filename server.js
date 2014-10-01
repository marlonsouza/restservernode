var node_port = 3030;
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var load = require('express-load');



//var httpUtil = require('./common/httputil.js');
//var itemModel = require('./model/item.js');

var app = express();

load('model')
    .then('route')
    .into(app);

/*app.get('/restserver/itens', function( objRequest, objResponse){
    console.dir('GET: /restserver/itens');

    httpUtil.defineHeaderResponse(objRequest, objResponse);

    itemModel.getAll(objRequest, objResponse);

});

app.post('/restserver/item', function( objRequest, objResponse){

    httpUtil.defineHeaderResponse(objRequest, objResponse);

    db_pool.getConnection(function(objError, objConnection){
        if(objError){
            httpUtil.sendError(objResponse, 503, 'error', objConnection);
        }else{
            var strQuery = "INSERT INTO itens SET ?";

            var item = {
                i_item: objRequest.body.i_item,
                nome: objRequest.body.nome
            };

            objConnection.query(strQuery, item, function(objError, objResult){
                if(objError) {
                    httpUtil.sendError(objResponse,500,'error', 'query', objError);
                }else{
                    objResponse.send({
                       result: 'sucess',
                       err: '',
                       err_type: '',
                       items: objResult.insertId
                    });
                }
            });
            objConnection.release();
        }
    });
});

app.put('/restserver/item/:id', function( objRequest, objResponse){

    httpUtil.defineHeaderResponse(objRequest, objResponse);

    db_pool.getConnection(function(objError, objConnection){
       if(objError){
           httpUtil.sendError(objResponse, 503, 'error', objConnection);
       }else{
           var strQuery = "UPDATE itens SET ? WHERE i_item=?";
           var id  = objRequest.params.id;

           objConnection.query(strQuery, [objRequest, id], function(objError, objResult){
                if(objError){
                    httpUtil.sendError(objResponse, 500, 'error', 'query', objError);
                }else{
                   objResponse.send({
                        result: 'sucess',
                        err: '',
                        err_type: '',
                        items: objResult.changedRows
                   });
                }
            });
            objConnection.release();
       }
    });
});

app.delete('/restserver/item/:id', function(objRequest, objResponse){

    httpUtil.defineHeaderResponse(objRequest, objResponse);

    db_pool.getConnection(function(objError, objConnection){
        if(objError){
            httpUtil.sendError(objResponse, 503, 'error', objConnection);
        }else{
            var strQuery = "DELETE FROM itens WHERE i_item = ?";
            var id = objRequest.params.id;

            objConnection.query(strQuery,[id], function(objError, objResult){
                if(objError){
                    httpUtil.sendError(objResponse, 500, 'error', 'query', objError);
                }else{
                    objResponse.send({
                        result: 'sucess',
                        err: '',
                        err_type: '',
                        row: objResult.affectedRows
                    });
                }
            });
            objConnection.release();
        }
    });
});*/

app.listen(node_port);
console.log( "App listening on port "+node_port);
