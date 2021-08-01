# MTAccessibility

## About Me
Hi! My name is Christina Buencamino and I am currently a Junior at the Macaulay Honors College at CUNY Hunter College in Manhattan. I am currently studying Computer Science.

## The Premise
The point of this project is to allow all New Yorkers (or anyone visiting New York) to have the same level of accessibility when traveling by subway. Oftentimes there are difficulties that prevent travelers with extra needs from experiencing an efficient ride, and with this app, hopefully NYC can work as a community to communicate with one another on delays or hardships in the subway system.

## Tools used
Azure functions, Cosmos Database, MTA API

## Step by step (with code snippets)
Phase 1 is creating the bare bones of the website, without worrying about APIs or functions. The bare bones contains four parts: A borough selection, a station selection, user input, and user storage.
*Step 1: Create the borough/station drop downs*
        To begin, the user uses a drop down to select one of the five boroughs. In a <form> block, a simple menu is created:
            
*HTML*:
                <label>Select Borough:</label>
            <select id="NYC">
                <option value="NULL"> Select... </option>
                <option value="Brooklyn"> Brooklyn </option>
                <option value="Queens"> Queens </option>
                <option value="Manhattan"> Manhattan </option>
                <option value="Bronx"> Bronx </option>
                <option value="Staten Island"> Staten Island </option>
            </select>

*.js*:
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
        
        From here, a second drop down is created, this time dependent on the selection of the first. Since every borough has different stations, the contents of this drop down must rely on what the user picks. This is done by appending options to the station options if the station is selected.

*HTML*:
                <label>Select Station:</label>
                <select id="Station">
                    <option value="Station NULL">Select Station...</option>
                    <option value="Station 1">Station 1: Brooklyn</option>
                    <option value="Station 2">Station 2: Queens</option>
                    <option value="Station 3">Station 3: Manhattan</option>
                    <option value="Station 4">Station 4: Bronx</option>
                    <option value="Station 5">Station 5: Staten Island</option>
                </select>

*.js*:
                 // https://stackoverflow.com/questions/30671620/how-to-change-dropdowns-values-based-on-a-selection-of-another-dropdown-using-jq/30671798
                //Change the contents of Station dropdown depending on previous selection
                $('#NYC').on('change', function() {
                    console.log($('#NYC').val());
                    $('#Station').html('');
                    if ($('#NYC').val() == "Brooklyn") {
                        $('#Station').append('<option value="Station NULL">Select Station...</option><option value="Station 1">Station 1: Brooklyn</option>');   
                    } else if ($('#NYC').val() == "Queens") {
                        $('#Station').append('<option value="Station NULL">Select Station...</option><option value="Station 2">Station 2: Queens</option>');
                    } else if ($('#NYC').val() == "Manhattan") {
                        $('#Station').append('<option value="Station NULL">Select Station...</option><option value="Station 3">Station 3: Manhattan</option>');
                    }  else if ($('#NYC').val() == "Bronx") {
                        $('#Station').append('<option value="Station NULL">Select Station...</option><option value="Station 4">Station 4: Bronx</option>');
                    } else if ($('#NYC').val() == "Staten Island") {
                        $('#Station').append('<option value="Station NULL">Select Station...</option><option value="Station 5">Station 5: Staten Island</option>');
                    } else {
                        $('#Station').append('<option value="Station NULL">Select Station...</option><option value="NULL">Select...</option>');
                    }
                });
    
*Phase 2: Add user input*
    The user input should only appear if a station is selected, so that the user does not try to pre-emptively input something. This also helps with streamlining a user's attention as the eye is not overwhelmed with options. This is done in a similar fashion by using .show and .hide, with the user input originally being hidden.

*HTML*:
    <div id="userInput" style="display:none;">
            <label for="input"><br>Input your suggestion: </label>
            <input type="text" name="input" placeholder="Input..."/>
            </div> <br>

*.js*:
    /* Show/Hide input box if station is/isn't selected */
    /* https://stackoverflow.com/questions/15566999/how-to-show-form-input-fields-based-on-select-value?noredirect=1&lq=1 */
    $('#Station').on('change',function(){
        console.log($("Station").val)
        if( $(this).val()!= "Station NULL"){
        $("#userInput").show()
        }
        else{
        $("#userInput").hide()
        }
    });

    
            

## Challenges + lessons learned

## Thanks and Acknowledgements
