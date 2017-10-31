<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%  
    //设置输出信息的格式及字符集  
    String name = request.getParameter("name");
	String target = request.getParameter("target");
    response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache");  
    out.println("<response>");  
      
    for(int i=0;i<2;i++)
    {  
	    out.println("<name>"+(int)(Math.random()*10)+  
	       "号传感器</name>");  
	    out.println("<count>" +(int)(Math.random()*100)+ "</count>");  
	    out.println("<hehe>" +name+ "</hehe>");  
    }  
    
    if(target.equals("YYJGset"))
    {
    	String tmp = "http://baidu.com";
    	out.println("<total>"+tmp+"</total>");
    	System.out.println(tmp);
    }
    System.out.println("no");
    out.println("</response>");  
    out.close();  
%>  