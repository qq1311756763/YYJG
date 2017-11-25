package db;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;

public class select {
	
	public int listCount;
	
	public ArrayList<HashMap<String, String>> getZTList() throws SQLException {
		 String driverName="oracle.jdbc.driver.OracleDriver";
  		 String url="jdbc:oracle:thin:@192.168.1.66:1522:orcl";//oracluster//orcl
  		try 
  		 {
			 Class.forName(driverName);
	   		 Connection conn=DriverManager.getConnection(url,"yyjg","sacsis");
	   		 String sql="select "
	   		 		+ "zt.id_key as IDKEY"
	   		 		+ ",cen.cen_short_name as CENTERNAME"
	   		 		+ ",org.org_short_name as STATIONNAME"
	   				+ ",zt.t_funid as ZTTYPE"
	   		 		+ ",zt.t_url as ZTURL "
	   		 		+ ",zt.create_time as CREATETIME"
	   		 		+ ",zt.update_time as UPDATETIME"
	   		 		+ ",zt.create_id as CREATEID"
	   		 		+ ",zt.update_id as UPDATEID " 
	   		 		+ "from ES_ORG_BASE_INFO org,ES_CEN_BASE_INFO cen,OP_DIAGRAM_CONFIG zt " 
	   		 		+ "where zt.t_orgid = org.old_org_id and org.center_id = cen.center_id"
	   		 		+" order by IDKEY"
	   		 		;
	   		 
	   		 
	   		Statement stmt=conn.createStatement();
	   		ResultSet rs=stmt.executeQuery(sql);
	   		ResultSetMetaData data = rs.getMetaData();  
	   		ArrayList<HashMap<String, String>> al = new ArrayList<HashMap<String, String>>();  
	   		 while(rs.next()) {
	   			 HashMap<String, String> map = new HashMap<String, String>();  
	             for (int i = 1; i <= data.getColumnCount(); i++) {// 数据库里从 1 开始  
	   
	                 String c = data.getColumnName(i);  
	                 String v = rs.getString(c);  
	                 System.out.println(c + ":" + v + "\t");  
	                 map.put(c, v);  
	             }  
	             System.out.println("======================");  
	             al.add(map);  
	   		 }
	   		listCount = al.size();
			return al;
  		 }
  		catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("null");  
			return null;
		}
	}
	
}
