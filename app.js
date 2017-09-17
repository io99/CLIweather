var weather = require('./weather.js');
var location = require('./location.js');
var yargs = require('yargs');

weather (function (currentWeather){
	console.log(currentWeather);
});

location(function (location){
	if(!location){
		console.log('Unable to guess location');
		return;
		//if Im unable to return location,i'm going to stop the operation
	}
console.log('city'+ location.city);
console.log('log/lat' + location.loc);
});


