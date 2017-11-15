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
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;
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
	        int files_num = 0;
	        for(int i=0;i<array.length;i++)
	        {
	        	if(array[i].isFile()) {
	        		files_num++;
	        	}
	        }
	        String[] filenames = new String[files_num];
	        int i,j;
			for(i=j=0;j<array.length;j++){   
	        		if(array[j].isFile())
		            {     
		            	try {
		            		filenames[i] = array[j].getName()+"|"+getCreateTime(array[j].getCanonicalPath());
						} catch (IOException e) {
							// TODO Auto-generated catch block
						}
		            	i++;
		            }
	        }  
	        return filenames;
	    }  
	 
	 
	 public String getCreateTime(String path) {
	        File file =new File(path);
	        Long time =file.lastModified();
	        Calendar cd = Calendar.getInstance();
	        cd.setTimeInMillis(time);
	        SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss", Locale.CHINA);
	        //System.out.println(format.format(cd.getTime()));
	        return(format.format(cd.getTime()));
	        //TODO 
	    }
   
}