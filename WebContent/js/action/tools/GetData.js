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
