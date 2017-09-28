function doWork(data, callback){
	callbacl('done');
}
function doWorkPromise(data){
	return new Promise(function (resolve, reject){
		setTimeout(function () {
			reject('everything is broken');
		},1000);
		// reject({
		// 	error:'Something bad happened'
\		// });
	});
}
// we have to return the promise so that the caller has access to it
doWorkPromise('some data').then(function (data){
	console.log(data);
}, function (error){
	console.log(error);
} )



























var request = require('request');

function getWeather(location){
	return new Promise(function (resolve, reject){
var encodedLocation = encodedURIComponent(location);

var url = 'https://api.darksky.net/forecast/457587eefad4aa5cacf9cc91b296cd02/37.8267,-122.4233'+encodedLocation +'&units=imperial';


if(!location){
return callback('No location provided');
}
//if no location is given return callback

request({
url:url,
json: true
}, function (error,response,body){
if(error){
reject('unable to fetch weather');
}
else{
resolve('It\'s'+ body.main.temp + 'in'+ body.name + '!');
}
});
});

}
getWeather('new york').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error){
	console.log(error);
});























//then is a fucntion which takes two of our callbacks
//the first one is data
//The advantage of promises is that, the callback can be called atmost only one time.
//with regular code, there maybe multiple callbacks which might break your code
//you don't need to worry about callback