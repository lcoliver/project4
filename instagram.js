// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=72e36d3960de481c99c55032a4856f86&redirect_uri=http://lindseyoliver.com/project4&response_type=token 

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id
	
						
$(function() {
	
	var apiurl = "https://api.instagram.com/v1/tags/wrugby/media/recent?access_token=17251855.72e36d3.788d8599047a4df8a32dfcdf9e315fb0&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""
	
		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});
				
		
		function parseData(json){
			
			
			$.each(json.data,function(i,data){
				html += '<p>Filter:"'+ data.filter+'"</p>';
				html += '<img src ="' + data.images.low_resolution.url + '">'
			});
			
			//console.log(html);
			$("#results").append(html);
			
		}
		
		
                
               
 });
