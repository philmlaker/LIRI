var keys = require("./keys.js");
var request = require("request");

input = process.argv[2];
movieName = process.argv[3];

if (input === "my-tweets") {

    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
    });

    client.get('statuses/user_timeline', function(error, tweets, response) {
        if (error) throw error;
        for (var i = 0; i < 20; i++) {
            if (tweets[i] == undefined) { console.log('NO TWEET!') } else { console.log(tweets[i].text) }
        }
    });

}

// movie-this

if (input === "movie-this") {

    if (movieName == "undefined") {
        console.log("help");
        return;
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
    request(queryUrl, function(error, response, body) {

            // If the request is successful
            if (!error && response.statusCode === 200) {


                // Parse the body of the site and recover just the imdbRating
                // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).

                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year: " + JSON.parse(body).Year);
                console.log("Rating: " + JSON.parse(body).Rated);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
            };
            // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            // console.log("Rottem Tomatoes URL: " + JSON.parse(body).Website);

    });



}

// spotify-this-son
// do-what-it-says
