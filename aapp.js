		// Initialize Firebase
	  	var config = {
   		apiKey: "AIzaSyC1fK5BUmDK66Im40vesmMHadcjLseFxvQ",
   		authDomain: "sih1-c04cf.firebaseapp.com",
   		databaseURL: "https://sih1-c04cf.firebaseio.com",
   		storageBucket: "sih1-c04cf.appspot.com",
	  	messagingSenderId: "657409475726"
		};
		firebase.initializeApp(config);

		var database = firebase.database();
		var amRef = database.ref('Amenities');
		amRef.on('value', gotData, errData);

		function gotData(data){
			console.log(data.val());
			var Amenities = data.val();
			var keys = Object.keys(Amenities);
			//console.log(keys);
			for(var i = 0; i < keys.length; i++) {
				var k = keys[i];
				var ContactNo = Amenities[k].ContactNo;
				var Description = Amenities[k].Description;
				var imgUrl=Amenities[k].Logo;
				var url="amenindie.html?v="+k;
				console.log(ContactNo, Description);
				document
					.querySelector("#amenitieslist")
					.innerHTML+='<li class="list-group-item Amenities[k]" style="border-style:solid; text-align:center; border-color:Teal; text-decoration:none;border-width:10px; font-size:30px; margin:20px;  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); position:relative; width:500;  "><div><img style="text-align:riht;" src="'+imgUrl+'" width="150" height="150"><p style="pos "><p class="lead">'+k+'</p><p>'+Amenities[k].ContactNo+'</p><p>'+Amenities[k].Description+'<a href="'+url+'">See more</a></p></div></li>';
			}
		}

		function errData(err){
			console.log("Error!");
			console.log(err);
		}
