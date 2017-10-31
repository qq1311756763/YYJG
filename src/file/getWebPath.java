package file;

import java.io.File;
import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

@WebServlet(name="getwebpath",urlPatterns="/getwebpath")
public class getWebPath extends HttpServlet {
	public String getWebPath() {
		String uploadPath = this.getServletConfig().getServletContext().getRealPath("/");
		return uploadPath;
	}
	
}
