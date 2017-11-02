<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>运营监管平台后台管理系统</title>
		<link rel="stylesheet" href="css/home.css" />
		<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="js/reconnecting-websocket.js"></script>
		<script type="text/javascript" src="js/home.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/0.4.0/trianglify.min.js"></script>
	</head>

	<body style="background-image:url(img/login_background.svg);position:relative;background-repeat:no-repeat;background-position:center;background-size: 100% 100%;height: 100%;">
	<%  
	/* 判断用户是否登陆 */
    if(session.getAttribute("user") == null)  
    {  
        out.println("<script>window.location.href='index.html'</script>");  
        return;  
    }  
   /*  Object user = session.getAttribute("user");  
    out.println("欢迎"+user);  */ 
  %> 

	
		<!--首页顶部菜单-->
		<div id="index_top_menu" class="menu">
			<a class="menu_click" href="#"><img class="icon" src="img/menu.svg" /></a>
			<div class="logo">Spic+</div>
			<div class="page_flag">
				<div id="page_flag_text" class="page_flag_text"> 首页</div>
			</div>
			<div id="search_div">
				<!-- <input type="search" id="search"  results="s" value="&nbsp;&nbsp;请输入搜索内容" onfocus=on_searchText() onfocusout=off_searchText() /> -->
			</div>
			<a class="menu_other" href="#"><img class="icon" src="img/menu (1).svg" /></a>
		</div>
		<!--首页导航菜单列表-->
		<div id="menu_list">
			<ul id="menu_list_ul">
				<!--应用功能菜单-->
				<li><div class="menu_div" onclick=home()><div id="home" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;首页</div></div></li>
				<li><div class="menu_div" onclick=notice()><div id="notice" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;通知</div></div></li>
				<li><div class="menu_div"><div id="user" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;用户</div></div></li>
				<li><div class="menu_div"><div id="dataState" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;采集状态</div></div></li>
				<li><div class="menu_div" onclick=configuration()><div id="configuration" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;组态图管理</div></div></li>
				<li><div class="menu_div" onclick=YYJGset()><div id="YYJGset" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;平台配置</div></div></li>
				<li><div class="menu_div" onclick=tools()><div id="YYJGtools" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;管理工具</div></div></li>
				<li><div class="menu_div"><div id="helpDOC" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;帮助文档</div></div></li>
				<!--系统功能菜单-->
				<li><div class="menu_div" style="margin-top: 20px;"><div id="set" class="menu_list" style="border-top: 1px solid #DDDDDD;padding-top: 20px;top: -10px;">&nbsp;&nbsp;&nbsp;&nbsp;设置</div></div></li>
				<li><div class="menu_div"><div id="sendReturn" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;发送反馈</div></div></li>
				<li><div class="menu_div"><div id="help" class="menu_list">&nbsp;&nbsp;&nbsp;&nbsp;帮助</div></div></li>
			</ul>
		</div>
		
		<!--首页瀑布流-->
		<div id="paper" class="listPaper">
		<div class = listPaper_content>
		<iframe src="model/mod_home.html" id="iframe_content" class="iframe_content_class" >
		</iframe></div>
		</div>
	</body>

</html>