const querystring = require('querystring');
var fetch = require('node-fetch');
const { Agent } = require('http');

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

    let resp = await fetch(queryObject.MediaUrl0,{
        /*The await expression causes async function execution to pause until a Promise is settled 
        (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. 
        When resumed, the value of the await expression is that of the fulfilled Promise*/
        method: 'GET',
    })

    // receive the response
    let data = await resp.arrayBuffer()
    // we are receiving it as a Buffer since this is binary data

    var result = await analyzeImage(data);
    let age = result[0].faceAttributes.age

    if (age >= 5 && age <= 25) {
        id = "GenZ"
    }
    else if (age >= 26 && age <= 41) {
        id = "GenY"
    }
    else if (age >= 42 && age <= 57) {
        id = "GenX"
    }
    else if (age >= 58 && age <= 76) {
        id = "BabyBoomers"
    } 
    else {
        id = "Unknown"
    }

    context.res = {
        body: id
     };     
}

async function analyzeImage(img){
    const subscriptionKey = process.env.SUBSCRIPTIONKEY; //process.env protects personal data from being exposed in code
    const uriBase = process.env.ENDPOINT + '/face/v1.0/detect';
	// env variables (similar to .gitignore/.env file) to not expose personal info

    let params = new URLSearchParams({
	'returnFaceId': 'true',
	'returnFaceAttributes': 'age'
    })

    // making the post request
    let resp = await fetch(uriBase + '?' + params.toString(),{
        method: 'POST',
        body: img,
        // img is the parameter inputted
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    })

    // receive the response
    let data = await resp.json();

    return data;
}

