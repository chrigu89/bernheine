

window.addEventListener('message',function(event) {
   url = event.data;
   alert(event.data);
   var ref = window.open(url, '_blank', 'location=yes,enableViewPortScale=yes');
},false);