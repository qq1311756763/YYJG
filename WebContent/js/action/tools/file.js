var dlurl = "http://10.80.48.121/YYJG/upload/";
/*var cnurl = "ws://127.0.0.1:8080/YYJG/websocket/dl"*/
var cnurl = "ws://10.80.48.121/YYJG/websocket/dl"

function connect()
{
	socket = new ReconnectingWebSocket(cnurl);
	/*socket = new ReconnectingWebSocket('ws://10.80.48.121:80');*/
	socket.onopen = function(evt) { 
            /*onOpen(evt) */
    }; 
    socket.onclose = function(evt) { 

  	}; 
  	socket.onmessage = function(event) { 
 		onMessage(event)
   	}; 
 	socket.onerror = function(evt) { 
  	};
}

function onMessage(event) 
{
	//var message = document.getElementById("message");
	/*message.value+=event.data;*/
	var tmp = event.data.split("&");
	/*for(var i=0;i<tmp.length;i++)
	{
		message.value+=tmp[i]+"\n";
	}*/
	
	var filename_list=[];
	var filetime_list=[];
	for(var i=0;i<tmp.length;i++){
		var tmp1 = tmp[i].split("|");
		filename_list.push(tmp1[0]);
		filetime_list.push(tmp1[1]);
	}
	var i,j;
	var flag = 0;
	for(flag=1;flag>0;)
	{
		flag=0;
		for(i=0;i<tmp.length-1;i++){
			var a = new Date(filetime_list[i]).getTime();
			var b = new Date(filetime_list[i+1]).getTime();
			if(a<b){
				var file_tmp = filetime_list[i+1];
				filetime_list[i+1] = filetime_list[i];
				filetime_list[i] = file_tmp;
				
				file_tmp = filename_list[i+1];
				filename_list[i+1] = filename_list[i]
				filename_list[i] = file_tmp;
				
				flag=1;
			}
		}
	}
	
	var div_str = "<table border =\"1\"><caption>近期上传文件</caption><tbody>";
	for(i=0;i<tmp.length;i++)
	{
		div_str+="<tr><td><a href=\""+dlurl+filename_list[i]+"\">"+filename_list[i]+"</a><br></td><td>"+filetime_list[i]+"<td></tr>"
	}
	div_str+="</tbody></table>";
	var file_list = document.getElementById("file_list");
	file_list.innerHTML = div_str;
	
}