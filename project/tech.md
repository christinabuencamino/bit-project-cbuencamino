# Technologies

- slides, flowchart, images

### Azure Services

**Name of Service**
- Azure will be used to store user input. The Cosmos database can hold the inputs of users who wish to communicate the status of the NYC subway system through either a form presented on the website or by manually tapping on the location (similar to the Wayz app, or Citizen app)
    - User login to prevent multiple input from the same user
    -   Or track IP, browser
    - Every input is accepted, but 2 downvotes = removal of note; updates cosmos document
        - Give every input a 'removed' flag - can either be true or false, only show !removed
            - Can keep a history through this, more extreme would be to delete it
- Azure functions will run to automatically update with NYC MTA updates from the MTA website, along with future work/expected delays so that it is accessible all in one area.
    - Trigger
- [include how it will interact with other components of your project listed above/below]

### APIs

**Name of API**
- Station names (ID, name, lat/longitude), delays, planned work, any alerts
- https://rapidapi.com/mimouncadosch/api/nyc-subway-data/
    - Returns NYC subway data such as arrival times, station codes, and times, which will be helpful with providing the user with subway data
- https://rapidapi.com/hendx/api/transitfeeds/
    - returns public transit data
- Browser can ask for location
- MTA APIs - don't let the user type the location, create a standardized list
- https://developers.google.com/transit/gtfs-realtime/
    - returns alerts and delays
- [include how it will interact with other components of your project listed above/below]

### Packages/Libraries/Databases

**Name of Packages/Library/Database**
- Cosmos as listed above (package + database)
- React? pro: more advanced/user friendly, con: i do not know react
- [include how it will interact with other components of your project listed above/below]

### Front-end Languages

**Name of Language**
- Javascript
- React?
- [include how it will interact with other components of your project listed above/below]

### Flowchart
- detailed first stage, (okay) 2nd and third, and then detailed/key parts of last stage (ideal situation)
[Replace with image of final flowchart] (add img to project folder)

*The first stage*
    - User input form with categories of type of issue (broken elevator, blocked exit, etc)
        - Types:
            - Broken elevator
            - Blocked elevator
            - Blocked stairs
            - Blocked subway-door entrance/exit
            - Broken subway-door entrance/exit
            - Flooding
            - No staff present (to be available in stations that usually have staff)
            - Staff present
            - Security present
            - Small exit
            - Misc. (user can input)
    - User data is entered into an excel sheet-like form for users to read over, sorted by borough & station
    - Include known delays/work/status from MTA status update website in sheet as well
    - Bold/highlight stations that are known to be ADA-accessible

2. *The second stage*
    - Include a google/azure/api map with pins of important lines from the sheet
        - (Is there a way to let the user filter what types of pins they see?)

3. *The third stage (may end up meshing with second depending on API used)*
    - Make the map interactive - allow users to input issues directly on map (Wayz, Citizen examples)

4. *The fourth stage*
    - List of station history, graph or cal, can show more problematic stations

![image](https://google.com)