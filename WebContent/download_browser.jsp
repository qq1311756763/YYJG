<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>浏览器升级</title>
		<link rel="stylesheet" type="text/css" href="css/main.css">
	</head>
	<body style="background-color: #002F5D;position:relative;">
		<div class="mid">
			<div style="font-size: 50px;">＞﹏＜ 您的浏览器已不被支持</div>
			<div><br>请更新到最新版本的IE，或下载我们推荐的浏览器：</div>
			<a href="baidu.com" style="color:  #F3F3F3;">Chrome浏览器下载</a><br>
			<%
			out.println("您的IP地址为：" + request.getRemoteAddr());
			%>
		</div>
	</body>
</html>
