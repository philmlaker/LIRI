var client = require("./keys.js");
var Twitter = require('twitter');
var queryURL = 'https://api.twitter.com/1.1/search/tweets.json?q=philmlaker';

// Make it so liri.js can take in one of the following commands:

// spotify-this-son
// movie-this
// do-what-it-says


// my-tweets




input = process.argv[2];

if (input === "my-tweets") {
 	console.log(JSON.parse(queryURL));



}
