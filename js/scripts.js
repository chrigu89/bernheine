

window.addEventListener('message',function(event) {
	
	url = event.data;
	alert('message reseived');
	var ref = window.open(encodeURI(url), '_blank', 'location=no,enableViewPortScale=yes,SuppressesIncrementalRendering=yes');
	alert('message reseived');
},false);