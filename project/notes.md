# Mapping my thoughts

**What is the project? + Extra information (/the "why do this?") about the problem**
- This project will be an updated map (both through user input and MTA status updates) of the NYC subway system (and possibly bus system) in order to aid travellers that have a harder time getting around efficiently (physically disabled, mothers with strollers, senior citizens, etc)
    - There is a long history of the MTA not being friendly to these types of travellers, and has undergone multiple lawsuits/news stories critisizing them for their lack of aid towards travellers with extra needs (examples include slow/a lack of updates on delays/broken equipment, lack of staff help, slow service, low-accessibility stations). There is a severe lack of ADA-accessible stations in NYC and create areas of the city that are especially difficult to travel to if the traveller requires extra assistance
        - These so-called "dead zones" make travelling while impaired/disabled almost impossible
    - Many travellers in NYC depend on accessible stations (meaning they have resources such as working elevators, low amount of steps, staff assistance) yet there are still many stations that do not have these resources. This eliminates their sense of independence as they must do things like ask complete strangers for help, or increase the time of their journey because they must travel to a specific station that they know is accessible.
    - Only ~25% of stations have elevators, and many of the accessible stations are centered in Manhattan
        - Even when elevators are working, they're cramped, smell badly, or are dirty
        - A 2017 audit reported that the MTA failed to complete all scheduled preventative maintenance at ~80% of escalators & elevators
- Users will be able to check on current delays/closures, expected work, broken equipment, working restroons, and train times, as well as input their own discoveries similar to the Wayz/Citizen apps, by either filling out a form or by tapping on the interactive map
    - *The use of an interactive map implies that this must be able to be used mobile-y*
    - Examples of user input include broken elevators/escalators, blocked exits, broken wheelchair access doors, staff assistance present, security present, etc.


## Levels of project development
1. *The first stage*
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
    

## Extra info
- Title of Project: 