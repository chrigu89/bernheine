'use strict';


var pushNotification;
var final_token;

var permanentStorage = window.localStorage;
var tempStorage = window.sessionStorage;

var init = {
	initialize: function() {

		console.log('init.initialize');

		if (document.location.protocol == "file:") {
			// file protocol indicates phonegap
			document.addEventListener("deviceready", init.onDeviceReady, false);
		} else {
			// browser on localhost, no phonegap
			init.onDomReady();
		}
	},
	onDeviceReady: function() {
		
		$.support.cors = true;
		
		console.log('init.onDeviceReady ❤ running on DEVICE');
		init.run();

		document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);
		
		
		var push = PushNotification.init({
			android: {
				senderID: "620690747883"
			},
			ios: {
				alert: "true",
				badge: true,
				sound: 'true'
			},
			windows: {}
		});
		
	
		
		push.on('registration', function(data) {
			final_token = data.registrationId;
			window.localStorage.setItem("token", final_token);
			
			var os = 1;
			if(final_token.length == 64) {
				os = 1;
				//Apple
			} else {
				os = 2;
				//Android
			}
			

			if(jQuery('#website').attr("src") == "loading.html") {
				
				jQuery('#website').attr("src", "http://app.bernheine-medien.de/?login=appuser&token="+final_token+"&os="+os+"&push=1");
			}
		});
		
		push.on('notification', function(data) {	
			final_token = data.registrationId;
			if(jQuery('#website').attr("src") == "loading.html") {
				jQuery('#website').attr("src", "http://app.bernheine-medien.de/?login=appuser&token="+final_token+"&os="+os+"&push=1");	
			}
			if(data.title && data.message) {
				website.contentWindow.postMessage(JSON.stringify(data), '*');
				var token = window.btoa(JSON.stringify(data));
				jQuery('#website').attr("src", "http://app.bernheine-medien.de/?token="+token);
				
			}
		});
		
		
		/* cb 19.09 */
		$(document).bind("mobileinit", function () { $.mobile.defaultPageTransition = 'none'; });
	
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFail);  // TEMPORARY oder PERSISTENT


	},
	onDomReady: function() {
		console.log('init.onDomReady ❤ running on DESKTOP');
		init.run();
	},
	run: function() {
		console.log('init.run');
	}
};
init.initialize();



var onSettings = function() {
	var token = window.localStorage.getItem("token");
	if(typeof token != "undefined" && token != null) {
		var os = 1;
		if(token.length == 64) {
			os = 1;
			//Apple
		} else {
			os = 2;
			//Android
		}
		alert('token gefunden');
		jQuery('#website').attr("src", "http://app.bernheine-medien.de/?login=appuser&token="+token+"&os="+os+"&push=1");
	} else {
		alert('kein token vorhanden');
		jQuery('#website').attr("src", "http://app.bernheine-medien.de/");
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

// PDF Anzeigen
function showPDF(url) {
	//window.resolveLocalFileSystemURI(url, onResolveSuccess, onFail); <- Klappt
	cordova.plugins.fileOpener2.open(
		url, // e.g. '/var/mobile/Applications/XXXXXXXXX/Library/files/mypdf.pdf'
		'application/pdf', {
			error: function(errorObj) {
				alert('Error status: ' + errorObj.status + ' - Error message: ' + errorObj.message);
			},
			success: function() {
				//alert('Datei erfolgreich geladen');
			}
		}
	);
}


function onResolveSuccess(fileEntry){
	alert(fileEntry.name);	
	alert(fileEntry.fullPath);	
	alert(fileEntry.filesystem);	
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


function successHandler (result) {
	//$("#app-status-ul").append('<li>success:'+ result +'</li>');
}


function errorHandler (error) {
	//$("#app-status-ul").append('<li>error:'+ error +'</li>');
}
