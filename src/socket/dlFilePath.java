/*
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package socket;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import jdk.nashorn.internal.ir.RuntimeNode.Request;

/*import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;*/


@ServerEndpoint(value = "/websocket/dl")
public class dlFilePath {
	 private Session session;
	 private static Set<dlFilePath> connections = new CopyOnWriteArraySet<>();
	 private String webPath;
    //private static final Log log = LogFactory.getLog(ChatAnnotation.class);
	 
	 public dlFilePath() {
		 file.getWebPath paths =new file.getWebPath();
		 webPath = this.getClass().getClassLoader().getResource("").getPath();//获取tomcat中的类路径
		 webPath = webPath.substring(1);
		 webPath+="../../upload/";
	}
	 
	@OnOpen
	public void start(Session session) {
	    this.session = session;
	    connections.add(this);
	    String message = "";
	    //String message = "connected!"+System.currentTimeMillis();
	    //System.out.println(webPath);
	    String[] filenames = getFile(webPath);
	    for(int i=0;i<filenames.length;i++)
	    {
	    	if(i==(filenames.length-1))
	    	{
	    		message+=filenames[i];
	    	}
	    	else
	    	{
	    		message+=filenames[i]+"&";
	    	}
	    }
	    //System.out.println(message);
	    broadcast(message,session);
	}
	
	@OnClose
	public void end() {
	    connections.remove(this);
	    String message = "disconnected.";
	    broadcast(message,session);
	}
	
	@OnError
	   public void onError(Throwable t) throws Throwable {
	       //log.error("Chat Error: " + t.toString(), t);
	}
	
	private static void broadcast(String msg,Session ses) {
        for (dlFilePath client : connections) {
            try {
            	if(ses==client.session)
            	{
	                synchronized (client) {
	                    client.session.getBasicRemote().sendText(msg);
	                }
            	}
            } catch (IOException e) {
                connections.remove(client);
                try {
                    client.session.close();
                } catch (IOException e1) {
                    // Ignore
                }

            }
        }
    }
	
	 private String[] getFile(String path){   
	        // get file list where the path has   
	        File file = new File(path);   
	        // get the folder list   
	        File[] array = file.listFiles();   
	        String[] filenames = new String[array.length];
	        for(int i=0;i<array.length;i++){   
	            if(array[i].isFile()){     
	            	filenames[i] = "file|"+array[i].getName();  
	            	getCreateTime(array[i].getPath()/*+"\\"+array[i].getName()*/);
	            }else if(array[i].isDirectory()){   
	                filenames[i] = "dir|"+array[i].getName();
	                getCreateTime(array[i].getPath()/*+"\\"+array[i].getName()*/+array[i]);
	            }
	        }  
	        return filenames;
	    }  
	 
	 public void getCreateTime(String path){  
	        String filePath = "C:\\test.txt";  
	        String strTime = null;  
	        try {  
	            Process p = Runtime.getRuntime().exec("cmd /C dir "           
	                    + filePath  
	                    + "/tc" );  
	            InputStream is = p.getInputStream();   
	            BufferedReader br = new BufferedReader(new InputStreamReader(is));             
	            String line;  
	            while((line = br.readLine()) != null){  
	                if(line.endsWith(".txt")){  
	                    strTime = line.substring(0,17);  
	                    break;  
	                }                             
	             }   
	        } catch (IOException e) {  
	            e.printStackTrace();  
	        }         
	        System.out.println("创建时间    " + strTime+"path:"+path);     
	        //输出：创建时间   2009-08-17  10:21  
	    }  
   
}