const querystring = require('querystring');
var fetch = require('node-fetch');

module.exports = async function (context, req) {
    const queryObject = querystring.parse(req.body);

    const media_url = queryObject.MediaUrl0

    let resp = await fetch(media_url,{
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

    if (age > 5 && age < 25) {
        generation = "GenZ"
    }
    else if (age > 24 && age < 41) {
        generation = "GenY"
    }
    else if (age > 40 && age < 57) {
        generation = "GenX"
    }
    else if (age > 56 && age < 76) {
        generation = "BabyBoomers"
    } 
    else {
        generation = "Unknown"
    }

    const songs = {"GenZ":"https://open.spotify.com/track/0SIAFU49FFHwR3QnT5Jx0k?si=1c12067c9f2b4fbf", 
    "GenY":"https://open.spotify.com/track/1Je1IMUlBXcx1Fz0WE7oPT?si=a04bbdf6ec4948b9", 
    "GenX":"https://open.spotify.com/track/4Zau4QvgyxWiWQ5KQrwL43?si=790d9e3ef2ed408d", 
    "BabyBoomers":"https://open.spotify.com/track/4gphxUgq0JSFv2BCLhNDiE?si=1abb329f2dc24f50", 
    "Unknown":"https://open.spotify.com/track/5ygDXis42ncn6kYG14lEVG?si=84b49b41d09d4d11"}

    let song_url = songs[generation]

    context.res = {
        body: 'We guessed youre part of this generation: ' + generation + '! Happy listening! ' + song_url
     };   

    console.log(generation)
    console.log(age) //console logging the results so we can see any errors in the console for debugging
    context.done(); 
}

async function analyzeImage(img){
    const subscriptionKey = process.env.SUBSCRIPTIONKEY; //process.env protects personal data from being exposed in code
    const uriBase = process.env.ENDPOINT + '/face/v1.0/detect';
	// env variables (similar to .gitignore/.env file) to not expose personal info

     
    //use for local testing ***MUST delete key and base if deploying - security risk!
    //const subscriptionKey = "key"
    //const uriBase = "endpoint"

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
    let generationData = await resp.json();

    return generationData;
}

