/*window.onload=connect();*/


var socket;
var flag = -1;
var path_now = "";

var mod_flag = -1;

var hdPath = "D:\\CPIWEB\\HSDraw\\火电";
/*var hdPath = "D:\\test\\HSDraw\\火电";*/
var HSPath = "http://10.80.48.16/HSdrow";

var XMLHttpReq; 

//ajax触发
//发送请求函数 




function on_searchText()
{
	if(document.getElementById("search").value=='  请输入搜索内容')
	document.getElementById("search").value='';
}

function off_searchText()
{
	if(document.getElementById("search").value=='')
	document.getElementById("search").value='  请输入搜索内容';
}


function home()
{
	/*alert("home");*/
	location.reload();
}

function notice()
{
	var paper = document.getElementById("paper");
	paper.innerHTML = "<div id='notice_-1'>&nbsp;&nbsp;没有新的消息&nbsp; (づ｡◕‿‿◕｡)づ  </div>";
	paper.setAttribute("class", "notice"); 
}

function configuration()//组态图管理
{
	var page_flag_text = document.getElementById("page_flag_text");
	/*var index_top_menu = document.getElementById("index_top_menu");
	index_top_menu.setAttribute("style", "background-color:#004E67"); */
	page_flag_text.innerHTML = " 组态图管理";
	/*var div_str ="<div class = listPaper_head></div>";*/
	/*var div_str= "<div class = listPaper_content><iframe src=\"http://10.80.48.16/help/html/worker/\" id=\"iframe_content\" class=\"iframe_content_class\"></iframe></div>";
	var paper = document.getElementById("paper");
	paper.innerHTML = div_str;
	paper.setAttribute("class", "listPaper");*/
	
	document.getElementById("iframe_content").src = "http://10.80.48.16/help/html/worker/";
}

function YYJGset()//平台配置
{
	var page_flag_text = document.getElementById("page_flag_text");
	page_flag_text.innerHTML = " 平台配置";

	document.getElementById("iframe_content").src = "function_windows/YYJGset.jsp";
}

function connect()
{
	/*socket = new ReconnectingWebSocket('ws://127.0.0.1:12345');*/
	socket = new ReconnectingWebSocket('ws://10.80.48.121:80');
	/*socket = new ReconnectingWebSocket('ws://115.28.178.96:12345');*/
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
/*        console.log('Client received a message',event);*/
        /*alert(event.data); */
        var array = event.data.split("|");
        var array1 = event.data.split("*");
        if(array == "ok")
        {
        	;
        }
        else if((array1.length<=1)&& (array!="null"))
        {
        	/*alert(array);*/
        	if(mod_flag == 0)
			{
				var tmpp = array[0].split("\\");
				var filename= tmpp[tmpp.length-1];
				/*filename+="/"+encodeURIComponent(ttmp[0])+"."+"zip";*/
			}
				filename = "../tmp/"+filename;
			
				window.location.href=filename;
				/*window.frames["hrong"].location.href = "../HSDraw/"+tmp; */
				/*alert("../HSDraw/"+tmp);*/
        }
        else
        {
        		if(mod_flag == 0)
        		{
        			var paths = path_now.split(hdPath)
        		}
        		var nowPath_div = "<div class = \"path_text\">&nbsp;:"+paths[1]+"</div>";
        		/*文件浏览器头部*/
        		var div_str ="<div class = listPaper_head><div id='choose_all' class='choose_all' onclick='SelectAll()'>全部选择</div><div onclick='download_all()' class='download_all'>批量下载</div><div onclick='configuration()' class='head_close'></div></div>";
        		div_str+= "<div class = listPaper_content><div class = \"Navigation\"><div class = \"Navigation_home\" onclick=getHDPath()>根目录&nbsp;</div><div style=\"float:left;width:3px;\">|</div><div onclick=pathUp() class = \"Navigation_up\">&nbsp;上一级&nbsp;</div>"+nowPath_div+"</div><div><ul>";
        		
        		for(var i = 0;i<array.length;i++)
        		{
        			var tmp = array[i].split("*");
        			if(tmp[0]=="dir")
        			{
        				var tmpp = tmp[1].split("\\");
        				div_str+="<li><div class=\"dir_class\" onclick=ForwardPath(this.id) id=\""+tmp[1]+"\">&nbsp;&nbsp;"+tmpp[tmpp.length-1]+"</div></li>"
        			}
        		}
        		for(var i = 0;i<array.length;i++)
        		{
        			var tmp = array[i].split("*");
        			if(tmp[0]=="file")
        			{
        				var tmpp = tmp[1].split("\\");
        				/*文件前面的复选框*/
        				var a = "<div class=\"file_checkbox\"><input type=\"checkbox\" name=\"file_choose\" value=\""+tmp[1]+"\" /></div>"
        				
        				div_str+="<li class=\"file_li\"><div class=\"file_class\">"+a+"<div class=\"file_text\" id=\""+tmp[1]+"\" onclick=GetLPF(this.id)>&nbsp;&nbsp;"+tmpp[tmpp.length-1]+"</div></div></li>"
        			}
        		}
        		div_str+="</ul></div>";
        		/*$("#paper").fadeOut(0);*/
				var paper = document.getElementById("paper");
				paper.innerHTML = div_str;
				paper.setAttribute("class", "listPaper"); 
				/*$("#paper").fadeIn(200);*/
				
        }
}  

/*火电组态目录获取*/
function getHDPath()
{
	socket.send("getPath|"+hdPath);
	path_now= hdPath;
	flag =0;
	mod_flag=0;
}

/*单机进入文件夹*/
function ForwardPath(id)
{
	socket.send("getPath|"+id);
	if(path_now.length<id.length)
	{
		flag ++;
	}
	path_now= id;
}

/*单击下载文件*/
function GetLPF(id)
{
	var tmp =id.substring(hdPath.length+1,id.length);
	var tmpp =tmp.split("\\");
	var str = "";
	for(var i = 0;i<tmpp.length;i++)
	{
		str+="/"+tmpp[i];
	}
/*	alert(HSPath+str);*/
	if(mod_flag == 0)
	{
		var tmp ="火电"+str;
		var tmpp = tmp.split("/");
		tmp = "";
		for(var i = 0;i<tmpp.length;i++)
		{
			if(i==(tmpp.length-1))
			{
				var ttmp =  tmpp[i].split(".");
				tmp+="/"+encodeURIComponent(ttmp[0])+"."+ ttmp[ttmp.length-1];
			}
			else
			{
				tmp+="/"+encodeURIComponent(tmpp[i]);
			}
		}
/*		window.location.href=HSPath+tmp;*/
		/*window.frames["hrong"].location.href = "../HSDraw/"+tmp; */
		/*alert("../HSDraw/"+tmp);*/
		window.location.href="../HSDraw"+tmp;
		//window.location.href="../tmp/1486767010822.lpf";
	}
}

/*返回上一层*/
function pathUp()
{
	var tmp = path_now.split("\\");
	var str = "";
	if(flag > 0)
	{
		for(var i = 0;i<tmp.length-1;i++)
		{
			if(i<tmp.length-2)
			{
				str+=tmp[i]+"\\";
			}
			else
			{
				str+=tmp[i];
			}
		}
		ForwardPath(str);
		path_now = str;
		flag--;
	}
}

/*下载选中文件*/
function download_all()
{
    obj = document.getElementsByName("file_choose");
    var str = "getPaths";
   
    for(i=0;i<obj.length;i++) 
	{ 
		if(obj[i].checked) 
		{
            		str+="|"+obj[i].value;
        	}
	} 
    
    
    socket.send(str);
}

/*全选*/
function SelectAll() 
{
	var text  = document.getElementById('choose_all');
	if(text.innerHTML == "全部选择")
	{
		text.innerHTML = '全部取消';
	}
	else
	{
		text.innerHTML = '全部选择';
	}
	var checkboxs=document.getElementsByName("file_choose");
	for (var i=0;i<checkboxs.length;i++) 
	{
  		var e=checkboxs[i];
  		e.checked=!e.checked;
 	}
}

function toWorker()
{
	//alert("我敢保证，你现在用的是演示一");
	location.href='../help/html/test/worker/index.html';
}