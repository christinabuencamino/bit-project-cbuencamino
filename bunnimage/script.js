function getImage(event) {
    event.preventDefault() //stops page from reloading

    if (document.getElementById('name').value != '') {
        $('#output').text("Thanks!")
    } else {
        alert("No name error.")
    }
}