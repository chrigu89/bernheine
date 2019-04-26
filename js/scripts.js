

window.addEventListener('message',function(event) {
	
	url = event.data;
	var ref = window.open(encodeURI(jQuery(this).attr("data-link")), '_blank', 'location=no,enableViewPortScale=yes');
	jQuery('#externalBrowser').attr("data-link", url);
	alert(jQuery('#externalBrowser').attr("data-link"));
	jQuery('#externalBrowser').click();
},false);