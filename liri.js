require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var input = process.argv[3];
var choice = process.argv[2];

function concert(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        var songData = response.data[0];
        console.log(`Venue Name: ${songData.venue.name}`);
        console.log(`Venue Location: ${songData.venue.city}, ${songData.venue.region}`);
        console.log(`Date of Event: ${songData.datetime}`);

    })
}
concert(input);

function spotifyThis(song) {
    spotify.search({
        type: "track",
        query: song
    }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        text =
            "\n___Track Info___" +
            "\nArtist: " +
            data.tracks.items[0].artists[0].name +
            "\nSong: " +
            data.tracks.items[0].name +
            "\nLink: " +
            data.tracks.items[0].external_urls.spotify +
            "\nAlbum: " +
            data.tracks.items[0].album.name +
            "\n";
        console.log(text);
    })
};
spotifyThis(input);