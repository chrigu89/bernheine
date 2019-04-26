window.addEventListener('message',function(event) {
	var ref = window.open(encodeURI(event.data), '_blank', 'location=yes,enableViewPortScale=yes');
},false);