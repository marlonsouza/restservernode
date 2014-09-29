module.exports =  {

    sendError: function( objResponse, iStatusCode, strResult, strType, objError){
       objResponse.send({
            resul: strResult,
            err: objError.code,
            err_type: strType
       });
    },

    defineHeaderResponse: function(req, res){

          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');
          res.header('AAccess-Control-Expose-Headers', 'Location, Content-Disposition');
          res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, HEAD, OPTIONS');

    }
}
