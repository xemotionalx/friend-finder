# Friend Finder

## About the App
Friend Finder is a full stack "matchmaker" app. This app utilizes Express in order to create a single-page app that takes in the user submitted data and matches them against fictional friends stored in an API.

## Try it out!
Visit this app here: https://afternoon-peak-14684.herokuapp.com/survey

After you load the homepage, you can click the 'take the quiz!"

Upon completing the quiz, the data is stored as an object and added to the "friends" API array.
The scores from the quiz are stored as an array within that object. These scores are then compared to the scores of each of the other friends. The difference between the scores is calculated and stored. The friend with the smallest difference is then selected and displayed to the user.

A future improvement to this app would be for the user's scores to be stored in a database. This way, users could actually match with other quiz-takers.