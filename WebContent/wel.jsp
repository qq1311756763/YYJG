<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%  
	/* 判断用户是否登陆 */
    if(session.getAttribute("user") == null)  
    {  
        out.println("<script>window.location.href='login.jsp'</script>");  
        return;  
    }  
    Object user = session.getAttribute("user");  
    out.println("欢迎"+user);  
  %> 
hello!
</body>
</html>