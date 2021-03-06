var connection  = require('../common/pooldb.js');
var httpUtil = require('../common/httputil.js');
var dbquery = require('../common/dbquery.js');
var squel = require('squel');
var stringbuilder = require('string-builder');

module.exports = {
    getAll: function(ObjRequest, objResponse){
        console.dir('getAll');

        connection.db_pool.getConnection(function(objError, objConnection){
           if(objError){
                httpUtil.sendError(objResponse, 503, 'error', objConnection);
           }else{

               var strQuery = squel
                                .select()
                                .from('estoque', 'e')
                                .field('id')
                                .field('i_item')
                                .field(squel
                                        .select()
                                        .from('itens', 'i')
                                        .field('i.nome')
                                        .where('i.i_item = e.i_item'), 'nome')
                                .field('quantidade')
                                .field('preco')
                                .toString();

               dbquery.select(objConnection, objResponse, strQuery);

               objConnection.release();
           }
        });
    },

    new: function(objRequest, objResponse){

        console.dir('new');

        connection.db_pool.getConnection(function(objError, objConnection){
            if(objError){
                httpUtil.sendError(objResponse, 503, 'error', objConnection);
            }else{

                var strQuery ="INSERT INTO estoque SET ?";

                var estoque = {
                    id: objRequest.body.id,
                    i_item: objRequest.body.i_item,
                    quantidade: objRequest.body.quantidade,
                    preco: objRequest.body.preco
                };

                dbquery.insert(objConnection, objResponse, strQuery, estoque);

                objConnection.release();
            }
        });
    },

    update: function(objRequest, objResponse){

        console.dir('update');

        connection.db_pool.getConnection(function(objError, objConnection){
           if(objError){
               httpUtil.sendError(objResponse, 503, 'error', objConnection);
           }else{
               var strQuery ="UPDATE estoque SET ? WHERE id=? ";

               var id  = objRequest.params.id;

               var item = {
                    i_item: objRequest.body.i_item,
                    quantidade: objRequest.body.quantidade,
                    preco: objRequest.body.preco
               }

               dbquery.update(objConnection, objResponse, strQuery, [item, id]);

               objConnection.release();
           }
        });

    },

    del: function(objRequest, objResponse){

        console.dir('delete');

        connection.db_pool.getConnection(function(objError, objConnection){
            if(objError){
                httpUtil.sendError(objResponse, 503, 'error', objConnection);
            }else{
                var strQuery ="DELETE FROM estoque WHERE id = ?";

                var id = objRequest.params.id;

                dbquery.delete(objConnection, objResponse, strQuery, id);

                objConnection.release();
            }
        });
    }

}
