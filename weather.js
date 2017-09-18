var request = require('request');
var url = 'https://api.darksky.net/forecast/457587eefad4aa5cacf9cc91b296cd02/37.8267,-122.4233'

module.exports = function(location, callback){
var encodedLocation = encodedURIComponent()

if(!location){
	return callback('No location provided');
}
//if no location is given return callback

request({
url:url,
json: true
}), function (error,response,body){
	//^this is the callback function. It takes 3 arguements
	// the first is error
	// second is respnse and third is the body
	if(error){
		console.log('Unable to fetch weather');
	}
	else{
		callback('It\'s'+ body.main.temp + 'in'+ body.name + '!');
	}
});
}
