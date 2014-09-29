var connection  = require('../common/pooldb.js');
var httpUtil = require('../common/httputil.js');
var dbquery = require('../common/dbquery.js');
var squel = require('squel');

module.exports = {

    getAll: function(objRequest, objResponse){
        console.dir('getAll');

        httpUtil.defineHeaderResponse(objRequest, objResponse);

        connection.db_pool.getConnection(function(objError, objConnection){
           if(objError){
                httpUtil.sendError(objResponse, 503, 'error', objConnection);
           }else{

                var strQuery = squel
                                .select()
                                .from('itens','i')
                                .field('i.i_item')
                                .field('i.nome')
                                .toString();

                dbquery.select(objConnection, objResponse, strQuery);

                objConnection.release();
           }
        });
    },

    new: function(objRequest, objResponse){
        console.dir('new');

        httpUtil.defineHeaderResponse(objRequest, objResponse);

        connection.db_pool.getConnection(function(objError, objConnection){
            if(objError){
                httpUtil.sendError(objResponse, 503, 'error', objConnection);
            }else{

                var strQuery = "INSERT INTO itens SET ?";

                var item = {
                    i_item: objRequest.body.i_item,
                    nome: objRequest.body.nome
                };

                dbquery.insert(objConnection, objResponse, strQuery, item);

                objConnection.release();
            }
        });
    },

    other: function(objRequest, objResponse, next){
        console.dir('opt');

        httpUtil.defineHeaderResponse(objRequest, objResponse);

        next();
    }
}
