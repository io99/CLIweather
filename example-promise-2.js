function doWork(){
	return new Promise()
}
//^ this is how you create promises

function doWork(){
	return new Promise( function (resolve, reject){
		setTimeout(function (){
			console.log('don');
		}, 1000);
	});
}

doWork().then(function () {
	return doWork(true);
}).then( function (){
	console.log('All done');
}).catch(function (){
	console.log(error);
});
//by using then you have access to the promise right after that
//if doWork doesn't come well then the second promise comes up.
//if the previous two promises fail, then catch is going to run and catch the error
//-------------------------------------

function doWork(shouldFail){
	return new Promise( function (resolve, reject){
		setTimeout(function (){
	if(typeof shouldFail== 'boolean'&& shouldFail==true){
		reject('error message');
	}else{
		resolve('success');
	}
		}, 1000);
	});
}

doWork().then(function (message) {
	console.log(message);
	//this message will run if everything goes well. Truth be told it wont go well.
	return doWork(true);
}).then( function (message){
	console.log(message);
}).catch(function (error){
	console.log(error);
});

/* what exactly happens here?

Do work get called and it fails 
also the second promise also fails 
lastly the catch is called and error gets printed
------------------------------------------------------

*/
function getLocation (location){
	return new Promise( function (){
		setTimeout( function (){
			if(typeof location == 'boolean'& location ==true){
				reject('error message');
			} else {
				resolve('Prague');
			}
		}, 1000);
	})
}

function getWeather(location){
	return new Promise(function (resolve){
		

	})

}