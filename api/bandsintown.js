
const keys = require('../keys.js');
const axios = require('axios');
const moment = require('moment');
const log = require('../functions/log.js');
var dataLog = "";

function getBandInfo(band){
    
    if(band === undefined){
        dataLog += "\n\nParameter is missing! you need to pass a band/artist.";
        dataLog += "\n\tconcert-this <band/artist>\n";
        console.log(dataLog);
        log(dataLog);
    }
    else{
        dataLog += `\n\n${(band.toUpperCase())} - EVENTS:`;

        var url = `https://rest.bandsintown.com/artists/${band}/events?app_id=${keys.bandsintown}&date=upcoming`;
        axios.get(url).then(renderInfo).catch(error);
    }
    
}

function renderInfo(response){
    var events = response.data;
    
    for(var i=0; i<events.length; i++){
        var date = moment(events[i].datetime, moment.ISO_8601).format('MM/DD/YYYY');

        dataLog += `\n#${i+1}`;
        dataLog += "\n----------------------------------------";
        dataLog += `\nVenue: ${events[i].venue.name}`;
        dataLog += `\nLocation: ${events[i].venue.city} - ${events[i].venue.country}`;
        dataLog += `\nDate: ${date}\n`;
        
    };    
    console.log(dataLog);
    log(dataLog);
}

function error(err){
    console.log(err);
}

module.exports = getBandInfo;