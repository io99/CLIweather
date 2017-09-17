function printInTwoSeconds(message){
	setTimeout(function(){
		console.log(message);
	}, 2000);
}
console.log('Hello async');