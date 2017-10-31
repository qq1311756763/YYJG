<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="height: 100%;">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/main.css"/>
		<link rel="stylesheet" type="text/css" href="css/login.css"/>
		<script type="text/javascript" src="js/login.js" ></script>
		<title>系统登陆</title>
	</head>
	<body style="background-image:url(img/login_background.svg);position:relative;background-repeat:no-repeat;background-position:center;background-size: 100% 100%;height: 100%;">		
		<div class="login_window">
			<div class="login_window_logo">
				<img class="login_window_logo_img" src="img/国电投Logo.png" />
			</div>
			<div class="login_window_text_login">登陆</div>
			<div class="login_window_text_detail">运营监管平台后台管理系统</div>
			
			<div class="login_window_username_text_0" id="username_text">请输入用户名</div>
			<div class="login_window_password_text_0" id="password_text">请输入密码</div>
			<form method="POST" name="form1" action="login_judge.jsp">
				<input class="login_window_username" name="username" id="username_input" onfocus="change_text('username_text|login_window_username_text|username_input')" onblur="back_text('username_text|login_window_username_text|username_input')" aria-label="用户账户"/>
				<input class="login_window_password" name="password" id="password_input" onfocus="change_text('password_text|login_window_password_text|password_input')" onblur="back_text('password_text|login_window_password_text|password_input')" type="password"/>
				<input type="submit" value="登 陆" class="login_window_button">
			</form>  
			<div class="login_window_help">忘记用户名/密码？</div>
			<div class="login_window_userIP">
			<%
			out.println("您的IP地址为：" + request.getRemoteAddr());
			%>
			</div>
			
			<%  
			    String flag = request.getParameter("errNo");  
			    try{  
			      
			        if(flag.equals("1")){  
			%>
			          
			            <div class="login_window_text_message">密码错误</div>
			            <% 
			        }  
			        else if(flag.equals("2"))
			        {  
/* 			            out.println("用户名不存在");   */
			            %>
			             <div class="login_window_text_message">用户名不存在</div>
			            <%
			        }  
			        else if(flag.equals("3"))
			        {
			        	 %>
			             <div class="login_window_text_message">用户名或密码不能为空</div>
			            <%
			        }
			    }catch(Exception e){  
			        e.printStackTrace();  
			    }    
			 %> 

<%--   <%  
      if (!("".equals(request.getParameter("username"))&& "".equals(request.getParameter("password")))) 
      {    
          String username = request.getParameter("username");  
          String password = request.getParameter("password");  
          
          if("a".equals(username))
          {
        	  if("a".equals(password))
        	  {
        	  %>
        	  	<div class="login_window_text_message">登录成功  </div>
        	  <%
        	  }
        	  else
        	  {
        		  %>
          	  	<div class="login_window_text_message">登录失败:密码错误！  </div>
          	  <%  
        	  }
          }
          else
          {
        	  %>
      	  		<div class="login_window_text_message">登录失败:用户名错误！  </div>
      	 	  <%
          }
      }
      else
      {
    	  %>  
         <div class="login_window_text_message">登录失败:用户名或密码不能为空  </div>
          <%   
      }
%>  --%> 
			
		</div>
	</body>
</html>
