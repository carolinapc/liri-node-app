const spotify = require('./api/spotify.js');
const events = require('./api/bandsintown.js');
const movie = require('./api/omdb.js');
const readCommands = require('./functions/read-commands.js');
const log = require('./functions/log.js');

function msgErrorParams(msg){
    console.log("*****************************************************");
    console.log(msg);
    console.log("Choose one of those:");
    console.log("* concert-this <band/artist>");
    console.log("\t-> searchs the bands in town artist events");
    console.log("* spotify-this-song <song>");
    console.log("\t-> shows information about the song");
    console.log("* movie-this <movie>");
    console.log("\t-> shows information about the movie");
    console.log("* do-what-it-says");
    console.log("\t-> executes comands from the random.txt file");
    console.log("*****************************************************");    
}

function doWhatItSays(){
    var dataLog = "";
    var file = "./random.txt";
    var command = readCommands(file);
    
    if(command.length != 0){
        //avoid endless loop
        if (command[0] !== "do-what-it-says"){
            dataLog += `\n=> System Command (from ${file}): \n\t${command[0]} ${command[1]}`;

            log(dataLog);
            console.log(dataLog);
            
            execute(command[0],command[1]);
        }
    }

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
            doWhatItSays();

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
    var arg = process.argv.slice(3).join(" ");
    var dataLog = "";

    //log the user command
    dataLog += "\n========================================";
    dataLog += `\n=> User Command: ${cmd} ${(arg !== undefined)?arg:""}`;    
    log(dataLog);
    
    console.log(dataLog);
    execute(cmd,arg);
}

    
