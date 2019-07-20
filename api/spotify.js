var keys = require('../keys.js');
var Spotify = require('node-spotify-api');

function getSongInfo(song){
    if(song === undefined){
        song = "The Sign";
    }
    else{
        console.log(song);
    }

    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });

    spotify.search({ type: 'track', query: song}, renderInfo);
}

function renderInfo(err, data){

    if (err) {
        console.log('Error occurred: ' + err);
    }
    else{
        var list = data.tracks.items;
        
        for(var i=0; i<list.length; i++){
            console.log('------------------------------------------');
            console.log(`Artist(s):`);
        
            for(var y=0; y<list[i].artists.length;y++){
                console.log(`   - ${list[i].artists[y].name}`);
            }
            
            console.log(`Song: ${list[i].name}`);
            console.log(`Preview: ${list[i].preview_url}`);
            console.log(`Album: ${list[i].album.name}`);
            console.log('------------------------------------------');
    
        }
    }
    
}

module.exports = getSongInfo;


 
 
