<%@ page language="java" contentType="text/html; charset=utf-8"  
    pageEncoding="utf-8"%>  
<%  
  session.removeAttribute("user");  
  out.println("<script>window.location.href='test.jsp'</script>");  
%>  