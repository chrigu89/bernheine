

window.addEventListener('message',function(event) {
	alert('message reseived');
   url = event.data;
   var ref = window.open(url, '_blank', 'location=yes,enableViewPortScale=yes');
},false);