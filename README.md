# Week 3 Assignment: Life Tracker

Submitted by: **Carlos Chavez**

Deployed Application: [Lifetracker Deployed Site](https://life-tracker-carlos.surge.sh/activity)

## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button. 
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [x] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [x] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [x] The detailed activity page should display a feed of all previous tracked activities.
- [x] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [x] The activity tracked should be given a unique id for easy lookup.
  * [Table Schema](https://github.com/CarlosEnrique7/life-tracker-be/blob/main/fitness-tracker-schema.sql) 

### Stretch Features

 - [x] Users have access to an overview Activity page that shows one summary statistic about each of the 3 types of activity tracked (i.e Total number of minutes exercised, average calories consumed, max hours of sleep in one night, etc.). These summary statistics should be created using the AVG, SUM, COUNT, MIN, MAX, functions in SQL queries and served from a dedicated API endpoint.
Note: Summary statistics should not be calculated on the frontend.
Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

Register, Login, and require authentication to view pages:<br />
Link to video: https://i.imgur.com/etd18Gb.mp4
<br /><br/>
Submitting Exercise and Nutrition form and displaying all data from database to ui. Showing averages in activity page calculated using postgres AVG(): <br/>
Link to video part 1: https://i.imgur.com/hke2kLk.mp4
<br/>
Link to video part 2: https://i.imgur.com/1temC13.mp4
<br/><br/>
Showing user info is stored seperately per user and only viewable for the account that is authenticated and logged in. Middleware for authentication only lets users view resources about themselves. Info persists for users across logins. <br/>

Link to video: https://i.imgur.com/faCIyFp.mp4
<br/>

Showing each activity has a unique id for easy lookup, and proper middleware that only allows users to access resources about themselves when signed in and authorized with jwt: <br/>

Link to video: https://i.imgur.com/l2LNvT3.mp4
<br />

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

[Yes, I feel the labs together allowed me to understand how to do the different parts of the assignment. They all built up to allow me to understand what I was doing and helped as a reference to know how to fix bugs I was having.]

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
[I managed to deploy the project to Heroku and Surge, however I did not understand the process very well so I would like to go over that some more. Also, I think I went wrong somewhere with deploying my backend because a database was created but the app on surge hangs when I login or register, so I would like to fix that. Lastly, I did not finish the sleep endpoint so I would like to finish that for the sake of having a complete app and maybe mess with styling and material ui more.]

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

[I think my demo went very well, I was surprised that many other though my project looked very good and was complete, I really liked being able to demo some of the features that took me a while to get, like implementing the time into the cards without it being a just a timestamp from postgres. I also liked seeing how other gave their own spin to the project and we all had the same thing to build, but it was great seeing everyone putting their own touches on it.]

### Open-source libraries used

- Add any links to open-source libraries used in your project.

Material UI https://material-ui.com/

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

[Shout out to Matt and Paige, they were both SUPER helpful in this assignment and I feel like I learned a lot from them. Also shout out to Xavier for being an awesome partner, working with him is really fun and it's great to have someone to help each other with debugging]
