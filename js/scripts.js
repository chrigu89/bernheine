

window.addEventListener('message',function(event) {
	
	url = event.data;
	var ref = window.open(encodeURI(url), '_blank', 'location=no,enableViewPortScale=yes,SuppressesIncrementalRendering=yes');
	alert('_blank');
	window.open(encodeURI(url), '_blank', 'location=no,enableViewPortScale=yes,SuppressesIncrementalRendering=yes');
	alert('_blank2');
	var ref = window.open(encodeURI(url), '_system', 'location=no,enableViewPortScale=yes,SuppressesIncrementalRendering=yes');
	alert('_system');
	window.open(encodeURI(url), '_system', 'location=no,enableViewPortScale=yes,SuppressesIncrementalRendering=yes');
	alert('_system2');
},false);