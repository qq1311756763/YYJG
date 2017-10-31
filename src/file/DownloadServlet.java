package file;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name="dl",urlPatterns="/dl")
public class DownloadServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.doGet(req, resp);
		String uploadPath = this.getServletConfig().getServletContext().getRealPath("/")+"\\upload";
		String[] filenames = getFile(uploadPath);
		String filename =  "";
		for(int i=0;i<filenames.length;i++)
		{
			filename+=filenames[i]+"<br />";
		}
		System.out.println(filename);
		resp.setCharacterEncoding("utf-8");
		resp.getWriter().write("<head>\r\n" + "<meta charset=\"utf-8\">"+"<head>\\r\\n"+uploadPath+"<br />"+filename);
	}
	
	 private static String[] getFile(String path){   
	        // get file list where the path has   
	        File file = new File(path);   
	        // get the folder list   
	        File[] array = file.listFiles();   
	        String[] filenames = new String[array.length];
	        for(int i=0;i<array.length;i++){   
	            if(array[i].isFile()){   
	                // only take file name   
	            	filenames[i] = array[i].getName();   
/*	                // take file path and name   
	                System.out.println("#####" + array[i]);   
	                // take file path and name   
	                System.out.println("*****" + array[i].getPath());   */
	            }else if(array[i].isDirectory()){   
	                //getFile(array[i].getPath()); 
	                filenames[i] = "文件夹:"+array[i].getName();
	            }
	        }  
	        return filenames;
	    }   
}
