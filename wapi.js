var results = [];
function processResponse(values) {
	debugger;
	var data = JSON.parse(values)[0][1];
	//var results = [];
	if (data != null) {
		data = JSON.parse(values)[0][1];
		var amount = data.length;

		for (i = 0; i < amount; i++) {
			if (data[i].length == 15) {
				result = {}

				/*
				1. company_name - done
				2. website - done
				3. cid - done
				4. review - done
				5. rating_count - done
				6. address - done
				7. pincode - done
				8. subtitle
				9. category - done
				10. state - done
				11. city - done
			*/

				// company_name
				result.Business_name = data[i][14][11];

				// website
				var url = '';
				if (data[i][14][7]) {
					url = data[i][14][7][0];
				}
				result.Website_url = url;


				// phone
				try {
					if (data[i][14][178][0][0]) {
						var phone = data[i][14][178][0][3];
					}
				} catch (e) {
					var phone = '';
				}
				result.Phone = phone;

				// review
				try {
					if (data[i][14][4][8]) {
						var total_review = data[i][14][4][8];
					}
				} catch (e) {
					var total_review = '';
				}
				result.Review = total_review;


				// ratings
				try {
					if (data[i][14][4][7]) {
						var rating = data[i][14][4][7];
					}
				} catch (e) {
					var rating = '';
				}
				result.Rating = rating;

				// address
				var address = ''
				if (data[i][14][39]) {
					address = data[i][14][39];
				}
				result.Address = address;
				try {
					// pincode
					result.pincode = result.address.match(/\b[1000-999999]+\b/g);
					result.pincode = result.pincode ? result.pincode : [];
					result.pincode = result.pincode.length ? result.pincode.pop() : "";
				} catch (e) {
					result.pincode = '';
				}

				// category
				try {
					var category = data[i][14][13][0];
				} catch (e) {
					var category = '';
				}
				result.Category = category;

				// city
				try {
					var last_add = data[i][14][2][data[i][14][2].length - 1];
				} catch (e) {
					var last_add = ''
				}

				try {
					var city = last_add.split(',')[0].trim();
				} catch (e) {
					var city = '';
				}
				result.city = city;

				// state
				try {
					var state = last_add.split(',')[1].replace(result.pincode, '').trim();
				} catch (e) {
					var state = '';
				}

				result.state = state;

				// latitude
				var lat = data[i][14][9][2];
				result.Lat = lat;

				// longitude
				var long = data[i][14][9][3];
				result.Long = long;
				try {
					var image1 = data[i][14][37][0][0][6][0];
					let result_image = image1.substring(0, image1.indexOf("="));
					result.Image1 = result_image;
				} catch (e) {

					result.Image1 = '';
				}


				try {
					var working_hour = '';
					var working_hour_array = data[i][14][34][1];
					for (var p = 0; p < working_hour_array.length; p++) {
						var day = working_hour_array[p][0];
						var time = working_hour_array[p][1][0];
						if (working_hour == '') {
							working_hour = day + '-' + time;
						} else {
							working_hour = working_hour + ',' + day + '-' + time;
						}

					}
					result.Working_hour = working_hour;
				} catch (e) {
					result.Working_hour = '';
				}

				results.push(result);
				try{
					chrome.webview.postMessage(result);
					results=[];
				}
				catch(err)
				{}
			}
		}


	}
	if(results.length==0)
	{
		console.log("results.length=" + results.length)

		let data=[];
		try{
			data = JSON.parse(values)[64];	
			console.log('data parsed')
		}
		catch(err)
		{}

		var amount = data.length;

		for (i = 0; i < amount; i++) {

			result = {}

			/*
			1. company_name - done
			2. website - done
			3. cid - done
			4. review - done
			5. rating_count - done
			6. address - done
			7. pincode - done
			8. subtitle
			9. category - done
			10. state - done
			11. city - done
		*/

			// company_name
			result.Business_name = data[i][1][11];

			// website
			var url = '';
			if (data[i][1][7]) {
				url = data[i][1][7][0];
			}
			result.Website_url = url;


			// phone
			try {
				if (data[i][1][178][0][0]) {
					var phone = data[i][1][178][0][3];
				}
			} catch (e) {
				var phone = '';
			}
			result.Phone = phone;

			// review
			try {
				if (data[i][1][4][8]) {
					var total_review = data[i][1][4][8];
				}
			} catch (e) {
				var total_review = '';
			}
			result.Review = total_review;


			// ratings
			try {
				if (data[i][1][4][7]) {
					var rating = data[i][1][4][7];
				}
			} catch (e) {
				var rating = '';
			}
			result.Rating = rating;

			// address
			var address = ''
			if (data[i][1][39]) {
				address = data[i][1][39];
			}
			result.Address = address;
			try {
				// pincode
				result.pincode = result.address.match(/\b[1000-999999]+\b/g);
				result.pincode = result.pincode ? result.pincode : [];
				result.pincode = result.pincode.length ? result.pincode.pop() : "";
			} catch (e) {
				result.pincode = '';
			}

			// category
			try {
				var category = data[i][1][13][0];
			} catch (e) {
				var category = '';
			}
			result.Category = category;

			// city
			try {
				var last_add = data[i][1][2][data[i][1][2].length - 1];
			} catch (e) {
				var last_add = ''
			}

			try {
				var city = last_add.split(',')[0].trim();
			} catch (e) {
				var city = '';
			}
			result.city = city;

			// state
			try {
				var state = last_add.split(',')[1].replace(result.pincode, '').trim();
			} catch (e) {
				var state = '';
			}

			result.state = state;

			// latitude
			var lat = data[i][1][9][2];
			result.Lat = lat;

			// longitude
			var long = data[i][1][9][3];
			result.Long = long;
			try {
				var image1 = data[i][1][37][0][0][6][0];
				let result_image = image1.substring(0, image1.indexOf("="));
				result.Image1 = result_image;
			} catch (e) {

				result.Image1 = '';
			}


			try {
				var working_hour = '';
				var working_hour_array = data[i][1][34][1];
				for (var p = 0; p < working_hour_array.length; p++) {
					var day = working_hour_array[p][0];
					var time = working_hour_array[p][1][0];
					if (working_hour == '') {
						working_hour = day + '-' + time;
					} else {
						working_hour = working_hour + ',' + day + '-' + time;
					}

				}
				result.Working_hour = working_hour;
			} catch (e) {
				result.Working_hour = '';
			}

			results.push(result);
			console.log(results);
			try{
					chrome.webview.postMessage(result);
					results=[];
				}
				catch(err)
				{}
		}


	}

	console.log(results)

	const obj = JSON.stringify(results);
	document.getElementById('fb-group-data').value = obj;
	//return results;
}

function endOfListExists() {
	if (document.querySelectorAll(".fontHeadlineLarge").length) {
		console.log('single page result...');
		return true;
	}
	return document.getElementsByClassName('HlvSq').length;
}

function main() {
	// buildCTABtn();
	var e = document.createElement("input")
	e.setAttribute("type", "hidden");
	e.setAttribute("id", "fb-group-data");
	document.body.appendChild(e)

	var e1 = document.createElement("input")
	e1.setAttribute("type", "hidden");
	e1.setAttribute("id", "fb-start");
	document.body.appendChild(e1);


	let oldXHROpen = window.XMLHttpRequest.prototype.open;
	window.XMLHttpRequest.prototype.open = function (method, url) {
		this.addEventListener("progress", function () {
			try {
				if (url.indexOf('/search?tbm=map&authuser=0') > -1 && this.status == 200) {

					const responseBody = this.response.replace('/*""*/', '');
					console.log(responseBody)
					parsedRespone = JSON.parse(responseBody);
					if (parsedRespone.d) {
						var data = parsedRespone.d.substr(4);
						processResponse(data);
					}
					// try parsing the response, correct if works

				}

			} catch (e) {
				// not the required response
				// pass
			}
		});
		return oldXHROpen.apply(this, arguments);
	};


}
(window.members_list = window.members_list || [["Profile Id", "Full Name", "ProfileLink", "Bio", "Image Src", "Groupe Id", "Group Joining Text", "Profile Type"]]), main();
var initial = 0;
var previousheight = 0;
var tryfor = 0;
//var myTimeout = setTimeout(ScrollWeb(), 1000);


function ScrollWeb() {
	console.log('call scroll web');
	console.log(document.body.scrollHeight);
	console.log(previousheight);
	myTimeout = setTimeout(ScrollWeb(), 1000);

}

// Version 1.0.8
