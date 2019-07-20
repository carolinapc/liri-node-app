const spotify = require('./api/spotify.js');
const events = require('./api/bandsintown.js');
const movie = require('./api/omdb.js');
//const execcmds = require('./api/do-what-it-says.js');

function msgErrorParams(msg){
    console.log("*****************************************************");
    console.log(`${msg}! Choose one of those:`);
    console.log("   concert-this <band/artist>");
    console.log("     -> searchs the bands in town artist events");
    console.log("   spotify-this-song <song>");
    console.log("     -> shows information about the song");
    console.log("   movie-this <movie>");
    console.log("     -> shows information about the movie");
    console.log("   do-what-it-says");
    console.log("     -> executes comands from the random.txt file");
    console.log("*****************************************************");    
}

//** MAIN **/

if(process.argv.length === 2){
    msgErrorParams("Argument missing!");
    process.exit();
}
else{
    var cmd = process.argv[2];
    var arg = process.argv[3];

    switch (cmd) {
        case "concert-this":
            events(arg);
            break;
        case "spotify-this-song":
            spotify(arg);
            break;
        case "movie-this":
            movie(arg);
            break;
        case "do-what-it-says":
            //execcmds();
            break;
                            
        default:
            msgErrorParams("Argument Invalid!");
            
            break;
    }

}

    
