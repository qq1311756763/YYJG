//判断浏览器是否支持H5
window.onload = function(){
 if(window.applicationCache) {
 //alert("你的浏览器支持HTML5");
	 window.location.href="login.jsp";
 } else {
 //alert("你的浏览器不支持HTML5");
	 window.location.href="download_browser.jsp";
 }
 }