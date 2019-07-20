
const keys = require('../keys.js');
const axios = require('axios');
const moment = require('moment');


function getBandInfo(band){
    
    if(band === undefined){
        console.log("Parameter is missing! you need to pass a band/artist.");
        console.log("   concert-this <band/artist>");
    }
    else{
        console.log("========================================");        
        console.log(`${(band.toUpperCase())} - EVENTS:`);
        var url = `https://rest.bandsintown.com/artists/${band}/events?app_id=${keys.bandsintown}&date=upcoming`;
        
        axios.get(url).then(renderInfo).catch(error);
    }
    
}

function renderInfo(response){
    var events = response.data;
    
    for(var i=0; i<events.length; i++){
        var date = moment(events[i].datetime, moment.ISO_8601).format('MM/DD/YYYY');//new Date(events[i].datetime);
        
        console.log("----------------------------------------");
        console.log(`Venue: ${events[i].venue.name}`);
        console.log(`Location: ${events[i].venue.city} - ${events[i].venue.country}`);
        console.log(`Date: ${date}`);
        console.log("----------------------------------------");
    };    
}

function error(err){
    console.log(err);
}

module.exports = getBandInfo;