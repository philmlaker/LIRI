var keys = require("./keys.js");
var request = require("request");

var fs = require("fs");
var cmd = require('node-cmd');

var input = process.argv[2];
var nodeArgs = process.argv;
var movieName = process.argv[3];




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

};

if (input === "movie-this") {

    http: //www.omdbapi.com/?t=" + "Mr.Nobody" + "&tomatoes=false;

        if (movieName == null) {
        var queryUrl = "http://www.omdbapi.com/?t=" + "Mr.Nobody" + "&y=&plot=short&tomatoes=true&r=json";
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
                console.log("Actors: " + JSON.parse(body).Actors);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
                console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL)
            };
        });
    } else {
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";
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
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
                console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL)
            };
        });
    }
};


if (input === "spotify-this-song") {
    var spotify = require('spotify');

    if (process.argv[3] == null) {
        var songName = "The Sign Ace of Base";
        spotify.search({ type: 'track', query: songName }, function(err, data) {

            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }
            // var data = JSON.stringify(data);
            console.log("Artist's Name: " + data.tracks.items[0].artists[0].name);
            console.log("Song Name: " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[0].preview_url);
            console.log("Album Name: " + data.tracks.items[0].album.name);
        });

    } else {

        var spotify = require('spotify');
        song = process.argv[3];

        for (var i = 3; i < nodeArgs.length; i++) {

            if (i > 3 && i < nodeArgs.length) {

                song = song + "+" + nodeArgs[i];

            } else {

            }

        }

        var songName = song;
        spotify.search({ type: 'track', query: songName }, function(err, data) {

            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }
            // var data = JSON.stringify(data);
            console.log("Artist's Name: " + data.tracks.items[0].artists[0].name);
            console.log("Song Name: " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[0].preview_url);
            console.log("Album Name: " + data.tracks.items[0].album.name);
        });

    };
};


if (input === "do-what-it-says") {


    fs.readFile("random.txt", "utf8", function(error, data) {
        var  command = data.split(" ");
        console.log(command[0]);



    })

}
