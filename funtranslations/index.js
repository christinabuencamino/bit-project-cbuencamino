var fetch = require('node-fetch')
require('dotenv').config(); //added from stackoverflow article
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);
const myNum = process.env.MY_NUMBER;
const twilioNum = process.env.TWILIO_NUMBER;

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var english = req.query.english;

    let englishToGroot = await translate(english);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: englishToGroot
    };

    await client.messages
        .create({
            body: englishToGroot,
            from: myNum,
            to: twilioNum
        })
        .then(message => console.log(message.sid));
}

async function translate(english) {
    const uriBase = 'https://api.funtranslations.com/translate/groot.json';
    let params = new URLSearchParams({
        'text': english
    })

    let resp = await fetch(uriBase + '?' + params.toString(), {
        method: 'POST',  //WHAT TYPE OF REQUEST?
        body: '{}',  //WHAT ARE WE SENDING TO THE API?
        headers: {
            'Content-Type': 'application/json',
        }
    })
    let grootText = await resp.json();

    console.log(JSON.stringify(grootText));

    return grootText.contents.translated;
}
