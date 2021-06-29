var multipart = require('parse-multipart');
var fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var boundary = multipart.getBoundary(req.headers['content-type']);

    var body = req.body

    // parse the body
    var parts = multipart.Parse(body, boundary);

    var imageData = parts[0].data

    /*
    //convert result into base 64 
    var convertedResult = Buffer.from(imageData).toString('base64'); */
    /*
    context.res = {
        // status: 200, Defaults to 200 
        body: convertedResult 
    }; */

    //module.exports function
    //analyze the image
        
    var result = await analyzeImage(imageData);
    context.res = {
	    body: {
		    result
	    }
    };

    console.log(result) //console logging the results so we can see any errors in the console for debugging
    context.done(); 
}

/* note: we use async when we are calling another API */
async function analyzeImage(img){
    const subscriptionKey = process.env.SUBSCRIPTIONKEY; //process.env = how to access secrets, cannot be used locally
    const uriBase = process.env.ENDPOINT + '/face/v1.0/detect'; 

    let params = new URLSearchParams({
        'returnFaceId': 'true',
        'returnFaceAttributes': 'emotion'    
    })

    let resp = await fetch(uriBase + '?' + params.toString(), {
        method: 'POST',  
        body: img,  
      
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }  
    })

    let emotionData = await resp.json() //receiving the data using fetch
    return emotionData 
}
