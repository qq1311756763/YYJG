var cnurl = "ws://127.0.0.1:8080/YYJG/websocket/getwatcher"
var cpu13 = 1;
var cpu14 = 1;
var cpu15 = 1;
var cpu16 = 1;
var cpu17 = 1;
var cpu18 = 1;
var cpu20 = 1;
var cpu21 = 1;
var cpu121 = 1;
var cpu144 = 1;

var cpu=new Array(10)
var mem=new Array(10)

var mem13 = 1;
var mem14 = 1;
var mem15 = 1;
var mem16 = 1;
var mem17 = 1;
var mem18 = 1;
var mem20 = 1;
var mem21 = 1;
var mem121 = 1;
var mem144 = 1;
	
function connect()
{
	inidata();
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
	var tmp = event.data.split("|");
	for(var i=0;i<tmp.length;i++)
	{
		var data = tmp[i].split("&");
		var flag = -1;
		for(var j=0;j<data.length;j++)
	    {
			if(j==0)
			{
				var ser = data[j].split("=");
				if(ser[1]=="10.80.48.13")
					flag=0;
				else if(ser[1]=="10.80.48.14")
					flag=1;
				else if(ser[1]=="10.80.48.15")
					flag=2;
				else if(ser[1]=="10.80.48.16")
					flag=3;
				else if(ser[1]=="10.80.48.17")
					flag=4;
				else if(ser[1]=="10.80.48.18")
					flag=5;
				else if(ser[1]=="10.80.48.20")
					flag=6;
				else if(ser[1]=="10.80.48.21")
					flag=7;
				else if(ser[1]=="10.80.48.121")
					flag=8;
				else if(ser[1]=="10.80.48.144")
					flag=9;
			}
			else
			{
				if(flag!=-1)
				{
					var datatmp=data[j].split("=");
					if(datatmp[0]=="cpu")
						cpu[flag]=datatmp[1];
					else if(datatmp[0]=="mem")
						mem[flag]=datatmp[1];
				}
				else
				{
					break;
				}
			}
	    }
	}
}

function inidata()
{
	for(var i=0;i<cpu.length;i++)
	{
		cpu[i]=1;
	}
	for(var i=0;i<mem.length;i++)
	{
		mem[i]=1;
	}
}
	
	
function getHardDiskStatic()
{
	var text = '{ "HardDiskStatic" : [' +
				'{ "server":"13" , "driveLetter":"C" , "static":"43" },' +
				'{ "server":"14" , "driveLetter":"C" , "static":"33" },' +
				'{ "server":"15" , "driveLetter":"C" , "static":"65" },' +
				'{ "server":"15" , "driveLetter":"D" , "static":"77" },' +
				'{ "server":"16" , "driveLetter":"C" , "static":"88" },' +
				'{ "server":"16" , "driveLetter":"D" , "static":"23" },' +
				'{ "server":"19" , "driveLetter":"C" , "static":"55" },' +
				'{ "server":"19" , "driveLetter":"K" , "static":"22" },' +
				'{ "server":"24" , "driveLetter":"C" , "static":"45" },' +
				'{ "server":"24" , "driveLetter":"D" , "static":"45" },' +
				'{ "server":"121" , "driveLetter":"C" , "static":"24" },' +
				'{ "server":"144" , "driveLetter":"C" , "static":"28" }]}';
	var obj = JSON.parse(text);
	return obj;
}

function getServerStatic()
{
	var text = '{ "ServerStatic" : [' +
				'{ "server":"13" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"14" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"15" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"16" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"17" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"18" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"20" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"21" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"121" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" },' +
				'{ "server":"144" , "CPU":\"'+parseInt(100*Math.random())+'\" , "RAM":\"'+parseInt(100*Math.random())+'\" }]}';
				
	var obj = JSON.parse(text);
	return obj;
}

/*function radom(){
	console.log(parseInt(100*Math.random()));
	setTimeout(radom,1000) 
}*/
