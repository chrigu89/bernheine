

window.addEventListener('message',function(event) {
	
	url = event.data;
	
	jQuery('#externalBrowser').attr("data-link", url);
	jQuery('#externalBrowser').click();
},false);