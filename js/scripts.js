

window.addEventListener('message',function(event) {
	
	url = event.data;
	alert('message reseived');
	var ref = window.open(url, '_blank', 'location=yes,enableViewPortScale=yes,Lage=no,SuppressesIncrementalRendering?=no');
	alert('message reseived');
},false);