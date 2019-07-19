const axios = require('axios');


function getBandInfo(band){
    
    if(band === undefined){
        console.log("Parameter is missing! you need to pass a band/artist.");
        console.log("   concert-this <band/artist>");
    }
    else{
        console.log(`concert-this ${band}`);
        var url = `https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp`;
        
        axios.get(url).then(renderInfo).catch(error);
    }
    
}

function renderInfo(data){
    console.log(data);
}

function error(err){
    console.log(err);
}

module.exports = getBandInfo;