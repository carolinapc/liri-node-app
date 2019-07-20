var keys = require('../keys.js');
var Spotify = require('node-spotify-api');
const log = require('../functions/log.js');
var dataLog = "";

function getSongInfo(song){

    if(song === undefined){
        song = "The Sign";
    }
    else{
        console.log(song);
    }

    dataLog += `\n\nSONG: ${(song.toUpperCase())}`;

    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });

    spotify.search({ type: 'track', query: song}, renderInfo);
}

function renderInfo(err, data){

    if (err) {
        dataLog += 'Error occurred: ' + err;
    }
    else{
        var list = data.tracks.items;
        
        for(var i=0; i<list.length; i++){
            dataLog += `\n#${i+1}`;
            dataLog += '\n------------------------------------------';
            dataLog += `\nArtist(s):`;
        
            for(var y=0; y<list[i].artists.length;y++){
                dataLog += `\n\t- ${list[i].artists[y].name}`;
            }
            
            dataLog += `\nSong: ${list[i].name}`;
            dataLog += `\nPreview: ${list[i].preview_url}`;
            dataLog += `\nAlbum: ${list[i].album.name}\n`;
        }
    }
    console.log(dataLog);
    log(dataLog);

}

module.exports = getSongInfo;


 
 
