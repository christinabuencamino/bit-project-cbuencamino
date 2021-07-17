function y1k3s() {
    let textInput = document.getElementById('textInput').value;

    if (textInput != '') {
        try {
        let catPic =  document.getElementById("image").src = "https://cataas.com/cat/says/" + textInput
        }
        catch(err) {
            $('#output').text(err)
        }

    } else {
        alert("No name error.")
    }
}


