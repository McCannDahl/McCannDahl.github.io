# Young Women Sleepover Scavenger Hunt

This app is for young women in our church group to have fun the day after a sleepover. The theme of the sleepover is "fairy tail" and this scavenger hunt will tie together fairy tail vibes with religious teachings and will end back at my house where they will find a big picture of our church's temple.

The main part of this scavenger hunt will be going to 4 church members' houses and performing acts of service. The girls will use an app to guide them to these houses through clues.

The key part of this app will be a time-tracking element. This scavenger hunt will need to take exactly 90mins. Assuming each home service activity will take 15mins, this means there will need to be challenges along the way and between service activities. The app will keep track of time and will show challenges if there is time or skip them if the girls are behind time based on a predetermined estimate of how long the challenge will take.

The app will be a single webpage. I will create a json file with all the challenges. A challenge will have these properties:
- challengeId - a number - (ex: 1)
- A title - a string - (example: Get cookies)
- A description - a string - (example: Go to McCann's kitchen and get cookies from the fridge)
- waypoint GPS coordinates - two doubles - (example: lat and long of the fridge in my house)
- Options (optional) - a list of (string, challengeId) - (example have them coose an option: choose to eat the cookies (next challenge will be 7), choose to give the cookies away (next challenge will be 8))
- Must upload picture (optional) - boolean - (example: the group must upload an image of them doing the challenge) - FYI we'll do this by embedding a google form in an iframe for the photo upload. Have a confirmation button on the screen so that they can proceed after doing the upload.
- answer (optional) - a string - if this is set, than the group must insert a correct answer into an input box in order to move on to the next challenge. Have a confirmation button on the screen so that they can proceed after doing the upload. - (example: "love")
- Next challenge (optional) - a number - (example: 3) - this will be used if options are not given
- Expected time in mins to complete challenge - a number - (example: 12)
- Priority - a number - (example: 3) - lower priority challenges will be skipped if time is tight

If the user refreshes the page, it should resume their time and current challenge.