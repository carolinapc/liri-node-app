const spotify = require('./api/spotify.js');
const events = require('./api/bandsintown.js');
const movie = require('./api/omdb.js');
const execCmds = require('./api/do-what-it-says.js');

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

function execute(cmd, arg){
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
            var command = execCmds("./random.txt");
            
            if (command[0] !== "do-what-it-says"){
                console.log(`Command executed: ${command[0]} ${command[1]}`);
                execute(command[0],command[1]);
            }
            
            break;
                            
        default:
            msgErrorParams("Argument Invalid!");
            
            break;
    }
}


//** MAIN **/

if(process.argv.length === 2){
    msgErrorParams("Argument missing!");
    process.exit();
}
else{
    var cmd = process.argv[2];
    var arg = process.argv[3];

    execute(cmd,arg);
}

    
