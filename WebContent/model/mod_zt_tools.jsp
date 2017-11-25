<%@page import="db.select"
import="java.util.ArrayList"
import="java.util.HashMap"
%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

 select list = new select();
 ArrayList<HashMap<String, String>> al = list.getZTList();
 String table = "<table border='1'><thead><tr>"
		 		+"<th width='50'>ID</th>"
 				+"<th width='50'>运营中心</th>"
 				+"<th width='100'>场站</th>"
 				+"<th width='30'>组态类型</th>"
 				+"<th>组态地址</th>"
 				+"<th width='50'>创建人</th>"
 				+"<th width='100'>创建时间</th>"
 				+"<th width='50'>更新人</th>"
 		 		+"<th width='100'>更新时间</th>"
 		 		+"<th width='50'>操作</th>"		
		 		+"</tr></thead><tbody><tr>";
 for(int i=0;i<list.listCount;i++)
 {
	 String IDKEY = al.get(i).get("IDKEY");
	 String CENTERNAME = al.get(i).get("CENTERNAME");
	 String STATIONNAME = al.get(i).get("STATIONNAME");
	 String ZTTYPE = al.get(i).get("ZTTYPE");
	 String ZTURL = al.get(i).get("ZTURL");
	 String CREATEID = al.get(i).get("CREATEID");
	 String CREATETIME = al.get(i).get("CREATETIME");
	 String UPDATEID = al.get(i).get("UPDATEID");
	 String UPDATETIME = al.get(i).get("UPDATETIME");
	 
	 table+="<td>"+ IDKEY +"</td>"
			+"<td>"+ CENTERNAME +"</td>"
			+"<td>"+ STATIONNAME +"</td>"
			+"<td>"+ ZTTYPE +"</td>"
			+"<td>"+ ZTURL +"</td>"
			+"<td>"+ CREATEID +"</td>" 
			+"<td>"+ CREATETIME +"</td>" 
			+"<td>"+ UPDATEID +"</td>" 
			+"<td>"+ UPDATETIME +"</td>"
			+"<td><button onclick='update()'>更新</button><br/><div><a href=''>删除</a></div></td>"
			 ;
 }
 table+="</tbody></table>";
%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>组态工具</title>
		<script type="text/javascript" src="../js/action/model/mod_zt_tools.js" ></script>
	</head>
	<input type="hidden" id="username" >
	<body onload="getUserName()">
<script>
var html = "";
window.onload = function()
{
		var name = getQueryStr("user");
		var username = document.getElementById("user");
		username.innerHTML = "操作人："+name;
		document.getElementById("user").value = name;
		var listCount = document.getElementById("count");
		var Count = "查询到：<%=list.listCount%> 条记录"
		listCount.innerHTML = Count;
		var list = document.getElementById("list");
		list.innerHTML = "<%=table%>";

}

function returnList()
{
	document.documentElement.innerHTML = html;
}

function update()
{
	var newHtml = "";
	newHtml+="<!DOCTYPE html><html><head><meta charset='utf-8' /><title></title></head><body><button onclick='returnList()'>返回列表</body></html>";
	html = document.documentElement.outerHTML;
	document.documentElement.innerHTML = newHtml;
	
}
</script>
		<div id="user"></div><br/>
		<div id="count"></div><br/>
		<div id="list"></div><br/>
	</body>

</html>