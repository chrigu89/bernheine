'use strict';

var init = {
	
	onDeviceReady: function() {
		
		$.support.cors = true;
		
		console.log('init.onDeviceReady ❤ running on DEVICE');

		document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);
		
		
		// var push = PushNotification.init({
			// android: {
				// senderID: "620690747883"
			// },
			// ios: {
				// alert: "true",
				// badge: true,
				// sound: 'true'
			// },
			// windows: {}
		// });
		
		// push.on('registration', function(data) {
			// final_token = data.registrationId;
			// window.localStorage.setItem("token", final_token);
			
			// var os = 1;
			// if(final_token.length == 64) {
				// os = 1;
				// Apple
			// } else {
				// os = 2;
				// Android
			// }			

			// if(jQuery('#website').attr("src") == "loading.html") {				
				// jQuery('#website').attr("src", "http://app.bernheine-medien.de/?login=appuser&token="+final_token+"&os="+os+"&push=1");
			// }
		// });
		
		// push.on('notification', function(data) {	
			// final_token = data.registrationId;
			// if(jQuery('#website').attr("src") == "loading.html") {
				// jQuery('#website').attr("src", "http://app.bernheine-medien.de/?login=appuser&token="+final_token+"&os="+os+"&push=1");	
			// }
			// if(data.title && data.message) {
				// website.contentWindow.postMessage(JSON.stringify(data), '*');
				// var token = window.btoa(JSON.stringify(data));
				// jQuery('#website').attr("src", "http://app.bernheine-medien.de/?token="+token);
				
			// }
		// });
		
		
		/* cb 19.09 */
		// $(document).bind("mobileinit", function () { $.mobile.defaultPageTransition = 'none'; });
	
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFail);  // TEMPORARY oder PERSISTENT


	}
};
init.onDeviceReady();


function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function onSettings() {
	var token = window.localStorage.getItem("token");
	var os = 3;
	if(typeof token != "undefined" && token != null) {
		jQuery('#website').attr("src", "https://app.bernheine-medien.de/?login=appuser&token="+token+"&os="+os+"&push=1");
	} else {
		token = makeid(30);
		window.localStorage.setItem("token", token);
		jQuery('#website').attr("src", "https://app.bernheine-medien.de/?login=appuser&token="+token+"&os="+os+"&push=1");
	}
	
};

// Dateisystem erfolgreich geladen!
function onFileSystemSuccess(fileSystem) {
	
	 fileSystem.root.getFile(
		'index.html',
		{create: true, exclusive: false},
		onGetFileSuccess,
		onFail
	);
	/*alert(fileSystem.root.toInternalURL());
	alert(fileSystem.root.nativeURL);*/
	
}

//  Hole Root Verzeichnis
function onGetFileSuccess(fileEntry) {
	var path = fileEntry.toURL().replace('index.html', ''); // URL der offenen Datei!

}

function onFail(error){
	alert(error.code);
}


function onOnline() {
	document.getElementById('offline').css('display', 'none');
}

function onOffline() {
	
	if(activ==0){
		document.getElementById('offline').css('display', 'block');
	}
	
}
