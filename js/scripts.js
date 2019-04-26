window.addEventListener('message',function(event) {
	alert(event.data);
	url = event.data;
	var ref = window.open(encodeURI(jQuery(this).attr("data-link")), '_blank', 'location=yes,enableViewPortScale=yes');
},false);