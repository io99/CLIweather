var request = require('request');
var url = 'http://ipinfo.io';


module.exports = function({
	request{
		url:url,
		JSON:true
	},
	function (error,response,body){
		if (error){
			callback();
		} else {
           callback(body);
		}
	}
})












//my mistake below
// module.exports = function(){
// request({
// url:url,
// json: true
// }, function (error,response,body){
// 	if(error){
// 		console.log('Unable to fetch IP address');
// 	}
// 	else{
// 		console.log(JSON.stringify(body,null,4));
// 	}
// }
//}


//module exports to create function
//make requests to url for JSON
//if error callback()
//else callback(body)