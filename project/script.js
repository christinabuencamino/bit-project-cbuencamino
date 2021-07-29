/* https://www.javatpoint.com/how-to-make-a-dropdown-menu-in-html */
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// https://stackoverflow.com/questions/30671620/how-to-change-dropdowns-values-based-on-a-selection-of-another-dropdown-using-jq/30671798
//Change the contents of Station dropdown depending on previous selection
$('#NYC').on('change', function() {
    console.log($('#NYC').val());
    $('#Station').html('');
    if ($('#NYC').val() == "Brooklyn") {
        $('#Station').append('<option value="Station 1">Station 1: Brooklyn</option>');   
    } else if ($('#NYC').val() == "Queens") {
        $('#Station').append('<option value="Station 2">Station 2: Queens</option>');
    } else if ($('#NYC').val() == "Manhattan") {
        $('#Station').append('<option value="Station 3">Station 3: Manhattan</option>');
    }  else if ($('#NYC').val() == "Bronx") {
        $('#Station').append('<option value="Station 4">Station 4: Bronx</option>');
    } else if ($('#NYC').val() == "Staten Island") {
        $('#Station').append('<option value="Station 5">Station 5: Staten Island</option>');
    } else {
        $('#Station').append('<option value="NULL">Select...</option>');
    }
});

