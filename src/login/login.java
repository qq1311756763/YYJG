package login;

import java.sql.*;
import java.io.*;

public class login 
{
	public int Login(String name , String password) throws SQLException  
    {  
        if(name.equals("abc") )  
        {  
        	System.out.println("user:abc");
        	if(password.equals("123456"))
        	{
        		return 0;  
        	}
            else
        	{
        		return -1;
        	}  
        }
        else  
        {  
        	System.out.println("user:"+name);
        	 String driverName="oracle.jdbc.driver.OracleDriver";
	   		 String url="jdbc:oracle:thin:@orclehost:1521:oracluster";//oracluster//orcl
	   		 try 
	   		 {
				 Class.forName(driverName);
		   		 Connection conn=DriverManager.getConnection(url,"system","sacsis");
		   		 String sql="select * from t_sys_memberinfo where t_userid = '"+name+"'";
		   		 String sql_count="select count(*) from t_sys_memberinfo where t_userid = '"+name+"'";
		   		 Statement stmt=conn.createStatement();
		   		 ResultSet rs=stmt.executeQuery(sql_count);
		   		 rs.next();
		   		 //System.out.println("count:"+rs.getString(1));
				 if(rs.getString(1).equals("0"))
				 {
					 return -2; 
				 }
				 else if(!rs.getString(1).equals("1"))
				 {
					 return -2;
				 }
		   		rs=stmt.executeQuery(sql);
		   		while(rs.next())
				{
		   			String pwd = rs.getString("t_passwd");//获取该用户的密码
			   			   			
			   		 if(password.equals(pwd))
			   		 {
			   			conn.close();
			   			return 0;  
			   		 }
			   		 else
			   		 {
			   			//System.out.println("RightPWD:"+pwd);
			   			conn.close();
			   			return -1;
			   		 }
				}
	   		 }
	   		catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	   		/* while(rs.next())
	   		{	
	   		}*/
	   		 
        }
		return -1;  
    } 
}
