var weather = require('./weather.js');
var location = require('./location.js');
//part 3
var argv = require('args')
.option('location',{
	alias:'l',
	demand:'location',
	description: 'It shows the location of the user',
	type:'string'

})
.help('help')
.argv;

if(typeof argv.l === 'string' && argv.l.length){
	weather(argv.l, function (currentWeather)){
		console.log(currentWeather);
	}
}
else{ console.log('no location given')}
//if argv is a string and the length of the location is greater than 1, then 
//call weather
//it takes the location and takes the function which is a callback and returns the current weather





//part 2

// weather (function (currentWeather){
// 	console.log(currentWeather);
// });

// location(function (location){
// 	if(!location){
// 		console.log('Unable to guess location');
// 		return;
// 		//if Im unable to return location,i'm going to stop the operation
// 	}
// console.log('city'+ location.city);
// console.log('log/lat' + location.loc);
// });


