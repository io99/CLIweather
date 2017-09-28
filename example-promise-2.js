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
	return doWork();
}).then( function (){
	console.log('All done');
}).catch(function (){
	console.log(error);
});
//by using then you have access to the promise right after that
//if doWork doesn't come well then the second promise comes up.
//if the previous two promises fail, then catch is going to run and catch the error