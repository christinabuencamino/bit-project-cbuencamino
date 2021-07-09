const fetch = require('node-fetch')
const multipart = require("parse-multipart")
const { BlobServiceClient } = require("@azure/storage-blob");
const connectionstring = process.env["AZURE_STORAGE_CONNECTION_STRING"];
const account = "christinasstorageaccount";


module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();

    if (myTimer.isPastDue) {
        context.log('JavaScript is running late!');
    }

    let catpic = await getCat();

    const responseMessage = await uploadFile(catpic, "jpg")

    context.log(responseMessage)
    context.log('JavaScript timer trigger function ran!', timeStamp);
};

/* bunnimage function to upload a file to blob storage */
async function uploadFile(parsedBody, ext) {
    if (!ext) {
        ext = "jpg"
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionstring);
    const containerName = "christinas-container";
    const containerClient = blobServiceClient.getContainerClient(containerName);    // Get a reference to a container

    const blobName = "test." + ext;    // Create the container
    const blockBlobClient = containerClient.getBlockBlobClient(blobName); // Get a block blob client

    const uploadBlobResponse = await blockBlobClient.upload(parsedBody, parsedBody.byteLength);

    const response_Message = "Your cat picture is saved!";

    return response_Message
}

async function getCat() {

    let resp = await fetch("https://cataas.com/cat", {
        method: 'GET'
    });

    let data = await resp.arrayBuffer()

    return data
}

