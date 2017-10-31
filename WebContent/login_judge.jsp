<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="login.*" %>  
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<%   

try
{  
    //接收用户名和密码  
    String u = request.getParameter("username");  
    String p = request.getParameter("password");    
    
   if(!u.equals("")&&!p.equals(""))
   {
	   login in = new login();  
	   String name = request.getParameter("username");  
	   String pass = request.getParameter("password");  
	   int isLoginSucc = in.Login(name, pass);  
	   if(isLoginSucc==0)  
	   {  
	       //out.println("<script>alert('登陆成功！');window.location.href='index.jsp'</script>");  
	       response.sendRedirect("home.jsp"); 
	       session.setAttribute("user", name);  
	       //session.setMaxInactiveInterval(60);  
	   }  
	   else if(isLoginSucc==-1)
	   {  
	       /* out.println("<script>alert('登陆失败！');window.location.href='test.jsp'</script>"); */ 
	       response.sendRedirect("login.jsp?errNo=1");
	   }  
	   else if(isLoginSucc==-2)
	   {  
	       /* out.println("<script>alert('登陆失败！');window.location.href='test.jsp'</script>"); */ 
	       response.sendRedirect("login.jsp?errNo=2");
	   }  
   }
   else
   {
	   response.sendRedirect("login.jsp?errNo=3");
   }
}catch(Exception e){  
       
       e.printStackTrace();  
   }
%>  



<%  

 /*        try{  
          
            //接收用户名和密码  
            String u = request.getParameter("username");  
            String p = request.getParameter("password");    
            
            if(u.equals("a"))
            {  
                //c存在用户名  
                //判断密码  
                if(p.equals("a"))
                {  
                    response.sendRedirect("wel.jsp");  
                }
                else
                {  
                //密码不对返回到登陆  
                    response.sendRedirect("login.jsp?errNo=1");
                }  
            }
            else if(u.equals("")||p.equals(""))
            {
            	response.sendRedirect("login.jsp?errNo=3");
            }
            else
            {  
                response.sendRedirect("login.jsp?errNo=2");  
            }  
              
        }catch(Exception e){  
          
            e.printStackTrace();  
        } */
              
          
          
      
          
    /*   
        //简单验证用户名密码 
        if(u.equals("yyy") && p.equals("123")){ 
            //跳转页面 
            //将数据传到下一个界面(注意这里的wel.jsp?user中间不允许有空格，否则会出错) 
            response.sendRedirect("wel.jsp?user="+u); 
             
            // 
        }else{ 
         
            //不合法 
            response.sendRedirect("login.jsp"); 
        } 
         
        */  
          
      
     %>  
</body>
</html>