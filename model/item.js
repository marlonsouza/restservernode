var connection  = require('../common/pooldb.js');
var httpUtil = require('../common/httputil.js');

module.exports = {

    getAll: function(objRequest, objResponse){
        console.dir('getAll');

        httpUtil.defineHeaderResponse(objRequest, objResponse);

        connection.db_pool.getConnection(function(objError, objConnection){
           if(objError){
                httpUtil.sendError(objResponse, 503, 'error', objConnection);
           }else{
                var strQuery="select i_item, nome from itens as i";

                objConnection.query( strQuery,
                                    function(objError, objRows, objFields){
                        if(objError){
                            httpUtil.sendError(objResponse, 500, 'error','query', objError);
                        }else{
                            console.dir('Enviou:');
                            console.dir(objRows);
                            objResponse.send({
                                result: 'sucess',
                                err: '',
                                err_type: '',
                                fields: objFields,
                                items: objRows,
                                length: objRows.length
                            });
                        }
                });
                objConnection.release();
           }
        });
    }
}
