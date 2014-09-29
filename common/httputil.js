module.exports =  {

    sendError: function( objResponse, iStatusCode, strResult, strType, objError){
       objResponse.send({
            resul: strResult,
            err: objError.code,
            err_type: strType
       });
    }
}
