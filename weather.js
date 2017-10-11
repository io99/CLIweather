var request = require('request');

module.exports = function(location, callback){
var encodedLocation = encodedURIComponent(location);

var url = 'https://api.darksky.net/forecast/457587eefad4aa5cacf9cc91b296cd02/37.8267,-122.4233'


if(!location){
	return callback('No location provided');
}
//if no location is given return callback

request({
url:url,
json: true
}), function (error,response,body){
	if(error){
		console.log('Unable to fetch weather');
	}
	else{
		callback('It\'s'+ body.main.temp + 'in'+ body.name + '!');
	}
});
}

// url encoding
/*
location needs to be the first arguement

since we need to build new url everytime
When your' adding some to the url u need to encodedURIComponentu need to run it through specific function inorder t
convert spaces and other special characters
encoding means taking space and converting into computer readable format

encodedURIComponent is a function.  all it needs to take is the location