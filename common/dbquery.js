module.exports = {

    select: function(objConnection, objResponse, strQuery){

        objConnection.query( strQuery, function(objError, objRows, objFields){
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

    },

    insert: function(objConnection, objResponse, strQuery, inserir){

        objConnection.query(strQuery, inserir, function(objError, objResult){
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

    },

    update: function(){

    },

    delete: function(){

    }
}
