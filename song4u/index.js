const querystring = require('querystring');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

module.exports = async function (context, req) {
    var reqbody = req.body
    context.log(reqbody)

    const queryObject = querystring.parse(req.body);

    context.res = {
        body: queryObject.MediaUrl0
     };     
}
