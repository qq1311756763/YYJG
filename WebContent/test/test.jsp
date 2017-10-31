<%@ page language="java" contentType="text/html; charset=utf-8"  
    pageEncoding="utf-8"  
    import="java.sql.*,java.io.*" 
    %>  
 

<!DOCTYPE html>  
<html>  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">  
<title>简单的登陆界面</title>  
</head>  
<body onload ="sendRequest()">  
      
  <!--  <form action="login_code.jsp" method="post">  
       <input type="text" name="user" placeholder="请输入用户名"/>  
        <br/>  
        <br/>  
       <input type="password" name="password" placeholder="请输入密码"/>  
       <br/>  
       <br/>  
       <input type="submit" value="提交"/>  <br/>
  </form> --> 
  
<script language="javascript">  
      
    var XMLHttpReq;  
        //创建XMLHttpRequest对象         
        function createXMLHttpRequest() {  
            if(window.XMLHttpRequest) { //Mozilla 浏览器  
                XMLHttpReq = new XMLHttpRequest();  
            }  
            else if (window.ActiveXObject) { // IE浏览器  
                try {  
                    XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");  
                } catch (e) {  
                    try {  
                        XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");  
                    } catch (e) {}  
                }  
            }  
        }  
        //发送请求函数  
        function sendRequest() {  
            createXMLHttpRequest();  
            var url = "ajax.jsp?name=hehe&target=YYJGset";  
            XMLHttpReq.open("GET", url, true);  
            XMLHttpReq.onreadystatechange = processResponse;//指定响应函数  
            XMLHttpReq.send(null);  // 发送请求  
        }  
        // 处理返回信息函数  
        function processResponse() {  
            if (XMLHttpReq.readyState == 4) { // 判断对象状态  
                if (XMLHttpReq.status == 200) { // 信息已经成功返回，开始处理信息  
                    DisplayHot();  
                    setTimeout("sendRequest()", 10000);  
                } else { //页面不正常  
                    window.alert("您所请求的页面有异常。");  
                }  
            }  
        }  
        function DisplayHot() {  
            var name = XMLHttpReq.responseXML.getElementsByTagName("name")[0].firstChild.nodeValue;  
            var count = XMLHttpReq.responseXML.getElementsByTagName("count")[0].firstChild.nodeValue;  
            var hehe = XMLHttpReq.responseXML.getElementsByTagName("hehe")[0].firstChild.nodeValue;  
            var total = XMLHttpReq.responseXML.getElementsByTagName("total")[0].firstChild.nodeValue; 
            document.getElementById("product").innerHTML = name;      
            document.getElementById("count").innerHTML = count;  
            document.getElementById("hehe").innerHTML = hehe;  
            //document.getElementById("total").innerHTML = total; 
            document.getElementById("window").src = total;
            //alert(total);
        }  
      
      
    </script>

<table style="BORDER-COLLAPSE: collapse; borderColor=#111111;cellSpacing=0;cellPadding=0;width=200; bgColor=#f5efe7;border=0">  
      
    <TR>  
       <TD align=middle bgColor=#dbc2b0 height=19 colspan="2"><B>无线传感网</B> </TD>  
    </TR>  
    <tr>  
       <td height="20"> 传感器：</td>  
       <td height="20" id="product"> </td>  
    </tr>  
    <tr>  
       <td height="20">传感器个数：</td>  
       <td height="20" id="count"> </td>  
    </tr>  
    <tr>  
       <td height="20">name：</td>  
       <td height="20" id="hehe"> </td>  
    </tr> 
    <tr>  
       <td height="20">total：</td>  
       <td height="20" id="total">
       <iframe id = "window"  style=""></iframe>
        </td>  
    </tr>
    </body>  
    </table> 



<br>

       
       
<%-- <%

		 String driverName="oracle.jdbc.driver.OracleDriver";
		 String url="jdbc:oracle:thin:@orclehost:1521:orcl";
		 Class.forName(driverName);
		 Connection conn=DriverManager.getConnection(url,"system","sacsis");
		 String sql="select * from T_BASE_ZZJG where T_PID = '10001' and T_TREEID = 'XNY'";
		 Statement stmt=conn.createStatement();
		 ResultSet rs=stmt.executeQuery(sql);
		 
		 while(rs.next())
		{
			out.print(rs.getString("T_TREEID"));
			out.print(":");
			out.print(rs.getString("T_NAME"));
			out.print("<br>");
		}
		 sql="select count(*) from T_BASE_ZZJG where T_PID = '10001' and T_TREEID = 'XNY'";
		 stmt=conn.createStatement();
		 rs=stmt.executeQuery(sql);
		 rs.next();
		 out.print(rs.getString(1));
		 conn.close();
%> --%>
       
   
</body>  
</html>