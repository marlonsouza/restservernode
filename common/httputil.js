module.exports =  {

    sendError: function( objResponse, iStatusCode, strResult, strType, objError){
       objResponse.send({
            resul: strResult,
            err: objError.code,
            err_type: strType
       });
    },

    defineHeaderResponse: function(req, res){
          res.setHeader('content-type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }
}
