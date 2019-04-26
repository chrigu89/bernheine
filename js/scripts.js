window.addEventListener('message',function(event) {
	
	url = event.data;
	var ref = window.open(encodeURI(jQuery(this).attr("data-link")), '_blank', 'location=no,enableViewPortScale=yes');
},false);


		