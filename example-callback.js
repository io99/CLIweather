

var request = require('request');
var url = 'https://api.darksky.net/forecast/457587eefad4aa5cacf9cc91b296cd02/37.8267,-122.4233'
/*..error is anything went wrong
the response contains lot of details
body is the weather data that we saw in the browser
making a call to JSON
4 is the number of spaces to indent your JSON file */
var weather = require('./weather.js');
weather(function(currentWeather){
	console.log(currentWeather);
});

request({
url:url,
json: true
}, function (error,response,body){
	if(error){
		console.log('Unable to fetch weather');
	}
	else{
		console.log(JSON.stringify(body,null,4));
	}
}

// );