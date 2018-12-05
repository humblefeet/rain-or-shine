# rainORshine
To put it simply, Rain-or-Shine is a weather based activity web application. The user is given weather based on his or geolocation. Based on certain parameters in the current weather, a list is generated on local places to go. For example, if it is raining, the list has a majority of indoor locations, or venues, to choose from, like restaurants or museums. If the weather calls for clear skies and moderate  temperatures, the user is offered parks or trail nearby, as well as restaurants that offer  outdoor seating.

<a href="https://glacial-wave-90784.herokuapp.com/">  Heroku Deployed App  </a>

## Technologies Used
1. ReactJS
2. NodeJS
3. FourSquare API
4. DarkSky API
5. Mongoose
6. MongoDB
7. HTML
8. CSS
9. Heroku
10. mLab

![Imgur](https://i.imgur.com/djkztGB.png)
![Imgur](https://i.imgur.com/dZWWSi2.png)
![Imgur](https://i.imgur.com/ys6pNdZ.png)
![Imgur](https://i.imgur.com/lLBHBc4.png)


### Hurdles

1. As the first real ReactJS project to complete on my own, I was slow to begin. I wasnt sure where to start, as getting in the mind of React thinking takes some warming up to do. But gradually after time and time again of buidling components and passing data down from state through those components, I was able to understand my app and where data needed to flow.

2. My first big hurdle came when I needed to call on my weather API. As I was attempting to make a call on the front end in React, I was unable to fetch the data due to a CORS error. This set me back as I was trying to find a way to work around it. Adding a outside source  proxy to the  beginning  of the API call allowed me to bypass this error to allow me to develop further. Unfortunately, this fix only lasted throughout the weekend and quit by Monday, leaving me scrambling to find out what to do next. I then had to move all my calls to the backend in Node. This took up value time, which I could have been using to further develop my app, had I had implemented the API on the backend to begin with. A  solid lesson was learned.

3. Geolocation is difficult to retreive from the user consistently. Unfortunately, my geolocation navigator didnt allow me to do so as often or as frequent as I would have hoped. This is leading  me to use dummy data. I will either need to find a better way to find the geolocation or ask the user to input this data. 

4. There was a lack of data returning from the FourSquare API that I was using. This led to less than ideal details pages. In order to get a more specifics on certain venues, like pictures, phone number, comments, I would need to make a seperate call using each individual venue's id. This was too costly or a process after already calling 2 api's prior and this is something I only learned with a few days left of development. 

### IceBox

1. I would like to implement MapBox to allow for a map of all surrounding recommended places for the user based on the weater. Directions tto these places would be ideal. 

2. With the map I would like the show a weather map. If im able to combine these features together, the user experience will  dramatically increase,  allowing him or her to see the locations they can go to and when the rain or weather will or could affect their trip there.

3. Fix all the kinks. Have a more solid application.

4. 100% mobile.


### User Stories

1. AAU, I give the app permission to access my gps location
2. Location is plotted on a map
  - can change location based on zip code
  - can change location based on coordinates placed on map
3. Local points of interest are given to the user based on current weather or air quality
  - locations at close radius appear first
    - clickable pins on the map
  - list items of locations are at bottom
  - if poor, indoor locations are displayed on the map
  - if good weather or air, outdoor locations are suggested
  - if a location is selected on the map
    - image, address, phone number and name are displayed
    - can clicked to see more on location
    - User can save
4. AAU I can filter locations
  - restaurants
  - shopping
  - free
  - activities
5. detail page of location
  - name
  - shows multiple images
  - address
  - phone number
  - map location
  - shows similar locations
  - can be favorited
6. above map is a nav bar
  - Title
  - hamburger dropdown menu
    - your profile
      - favorites
    - log out button
7. Profile
  - Favorites shows 2 seperate columns
    - poor weather indoor venues list
    - good weather outdoor venues
  - Profile avatar
  - email/ username

<a href="https://trello.com/b/2vodfPNd/rain-or-shine">TrelloBoard</a>

