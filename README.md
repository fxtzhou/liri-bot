# liri-bot

### :musical_note: About Liri :musical_note:

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI uses the following commands:

`concert-this`

`spotify-this-song`

`movie-this`

`do-what-it-says`

### Functions

    node liri concert-this

**This will show the next upcoming concert for an artist inputted.**

    node liri spotify-this

**This will show the following information about the song in your terminal/bash window:**

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from

**If no song is provided then the program will default to "The Sign" by Ace of Base**

    node liri.js movie-this

**This will output the following information to your terminal/bash window:**

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was released.
Language of the movie.
Plot of the movie.
Actors in the movie.

**If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'**

     node liri.js do-thing

**This will output the command placed in random.txt file**

![Concert This](images/concert-this.png)

![Spotify This](images/spotify-this.png)

![Movie This](images/movie-this.png)

![Do Thing](images/doThing.png)
