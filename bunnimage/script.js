function getImage(event) {
    event.preventDefault() //stops page from reloading
    //get filename and image uploaded by user through form data
    var myform = document.getElementById("myform");
    

    let nameInput = document.getElementById("username");
    let fileInput = document.getElementById("image");
    const file = fileInput.files[0]; // fileInput is the file upload input element

    var payload = new FormData(myform);
    console.log(payload)
    payload.append("file", file);

    if (document.getElementById('username').value != '') {
        try {
            let url = "https://week3function.azurewebsites.net/api/bunnimage-upload";
            console.log("Image was uploaded, making POST request to Azure function");
            $('#output').text("Thanks!");

            const resp = fetch(url, {
                method: "POST",
                headers: {
                    'codename': nameInput
                },
                body: payload
            })

            $('#output').text("Your image has been stored successfully!")
        }
        catch(err) {
            $('#output').text(err)
        }

    } else {
        alert("No name error.")
    }
}

async function downloadImage() {
    let username = document.getElementById("downloadusername").value

    if(username != '') {
        try {
        let url = "https://week3function.azurewebsites.net/api/bunnimage-download?code=y2bjajt60DBTXSDcSxsU4er1ZHGgSYlkaPAlIuYR6q26HBFTOVgbkA==";
    
        console.log("Got file name, making GET request to download image");

        fetch(url, {
            headers: {
                username: username
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                console.log(data)
                console.log(data.downloadUri)
                window.open(data.downloadUri, "_self")
            });
        }
        catch(err) {
            alert(err)
        }

    } else {
        alert('No name error.')
    }
}