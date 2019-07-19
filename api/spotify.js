var spotify = require('../keys.js');

function getSongInfo(song){
    if(song === undefined){
        console.log("Parameter is missing! you need to pass a song.");
        console.log("   spotify-this-song <song>");
    }
    else{
        console.log(song);
    }
    
}

module.exports = getSongInfo;