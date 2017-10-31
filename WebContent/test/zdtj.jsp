<%@ page language="java" contentType="text/html; charset=utf-8"  
    pageEncoding="utf-8"  
    import="java.sql.*,java.io.*" 
    import="java.text.*"
    %>  
 
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
<% 
	 String start_time = "2017-07-07 00:00:00";
	 String end_time = "2017-07-14 00:00:00";
	 String driverName="oracle.jdbc.driver.OracleDriver";
	 String url="jdbc:oracle:thin:@orclehost:1521:oracluster";//oracluster//orcl
	 try 
	 {
	 Class.forName(driverName);
		 Connection conn=DriverManager.getConnection(url,"system","sacsis");
		 String sql="select t1.t_unitid,t2.t_orgdesc,t1.t_unitdesc,t.d_starttime,t.d_endtime from t_info_interdata t,t_base_unit_hd t1,t_base_org_hd t2 where t.t_treeid like '%HD%' and t.d_starttime > to_date('"+start_time+"','yyyy-mm=dd hh24:mi:ss') and t.d_starttime < to_date('"+end_time+"','yyyy-mm=dd hh24:mi:ss') and t.t_orgid like t1.t_unitid and t2.t_orgid like t1.t_periodid order by t.d_starttime desc";
		 String count_sql="select count(*) from t_info_interdata t,t_base_unit_hd t1,t_base_org_hd t2 where t.t_treeid like '%HD%' and t.d_starttime > to_date('"+start_time+"','yyyy-mm=dd hh24:mi:ss') and t.d_starttime < to_date('"+end_time+"','yyyy-mm=dd hh24:mi:ss') and t.t_orgid like t1.t_unitid and t2.t_orgid like t1.t_periodid order by t.d_starttime desc";
		 Statement stmt=conn.createStatement();
		 ResultSet rs=stmt.executeQuery(count_sql);
		 
		 
		 rs.next();
		 int count_sql_num = Integer.parseInt(rs.getString(1));
		 System.out.println("count:"+rs.getString(1));
		 
		 rs=stmt.executeQuery(sql);
		 
		 //String[count_sql_num] flag;
		 int [] flag = new int [count_sql_num];
		 String [] unit_id = new String [count_sql_num];
		 String [] start_times = new String [count_sql_num];
		 String [] end_times = new String [count_sql_num];
		 float[] zd_times = new float[count_sql_num];
		 
		 String [] unit_desc= new String [count_sql_num];
		 String [] unit_num= new String [count_sql_num];
		 //List<String> = 
				 int i=0;
		while(rs.next())
		{
			flag[i]=0;
			unit_id[i] = rs.getString("t_unitid");
			start_times[i] = rs.getString("d_starttime");
			end_times[i] = rs.getString("d_endtime");
			unit_desc[i] = rs.getString("t_orgdesc");
			unit_num[i] = rs.getString("t_unitdesc");
		
			i++;
		}
		//String d = "2008-10-13 15:20:25";  
		//2017-07-02 23:34:00.0
	    SimpleDateFormat time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
	    try 
	    {  
	        //System.out.println(sdf.parse(d));  
	    } catch (Exception e)
	    {  
	    }  
	    
	    java.util.Date tmp;
	    java.util.Date tmp1;
		for(i=0;i<count_sql_num;i++)
		{
			tmp = time.parse(start_times[i]);
			tmp1 = time.parse(end_times[i]); 
			/* tmp = time.parse("2017-06-30 23:59:59");
			tmp1 = time.parse("2017-07-01 00:00:00");  */
			DecimalFormat df=new DecimalFormat("0.00");
			long diff = tmp1.getTime() - tmp.getTime();
			
			 int  num1 = (int)diff/3600000;
			 float num2 = (diff%3600000);
			zd_times[i] =  (num1+(num2/3600000));
			zd_times[i]  =   (float)(Math.round(zd_times[i]*100))/100;
			//System.out.println(zd_times[i]);
		}
		
		String [] unit_id_hb = new String [count_sql_num];
		String [] unit_desc_hb = new String [count_sql_num];
		float [] zd_times_hb = new float [count_sql_num];
		int [] zd_nums = new int [count_sql_num];
		int count_hb = 0;;
		int k=0;
		zd_nums[k]=1;
		for(i=0;i<count_sql_num;i++)
		{
			if(flag[i]==1)
			{
				//System.out.println(flag[i]);
			}
			else
			{
				flag[i]=1;
				float zd_time_tmp=zd_times[i];
				for(int j=i+1;j<count_sql_num;j++)
				{
					if(flag[j]==1)
					{
						//System.out.println(flag[j]);
					}
					else
					{
						if(unit_id[j].equals(unit_id[i]))
						{
							zd_time_tmp+=zd_times[j];
							flag[j]=1;
							//System.out.println(flag[j]);
							//System.out.println("ok");
							zd_nums[k]++;
						}
						else
						{
							//System.out.println(unit_id[i]+"  "+unit_id[j]);
						}
					}
				}
				
				unit_id_hb[k] = unit_id[i]; 
				zd_times_hb[k] = zd_time_tmp;
				unit_desc_hb[k] = unit_desc[i]+unit_num[i];
				count_hb++;
				//System.out.println(unit_id_hb[k]+"++"+zd_times_hb[k]);
				k++;
				zd_nums[k]=1;
			}
		}
		
	    for(i=0;i<count_hb;i++)
		{
			out.print(zd_nums[i]+","+unit_desc_hb[i]+"机组,"+zd_times_hb[i]+","+unit_id_hb[i]+"<br/>");
		} 
		
		//out.print(unit_id_hb[5]+zd_times_hb[5]+"<br/>");
		
		
	 }
	catch (ClassNotFoundException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}


%>
</body>
</html>