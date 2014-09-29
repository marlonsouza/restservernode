var connection  = require('../common/pooldb.js');
var httpUtil = require('../common/httputil.js');
var dbquery = require('../common/dbquery.js');
var squel = require('squel');

module.exports = {
    getAll: function(ObjRequest, objResponse){
        console.dir('getAll');

        httpUtil.defineHeaderResponse(ObjRequest, objResponse);

        connection.db_pool.getConnection(function(objError, objConnection){
           if(objError){
                httpUtil.sendError(objResponse, 503, 'error', objConnection);
           }else{

               var strQuery = squel
                                .select()
                                .from('estoque', 'e')
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
    }
}
