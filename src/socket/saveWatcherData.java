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


@ServerEndpoint(value = "/websocket/upwatcher")
public class saveWatcherData {
	 private Session session;
	 private static Set<saveWatcherData> connections = new CopyOnWriteArraySet<>();
    //private static final Log log = LogFactory.getLog(ChatAnnotation.class);
	 
	 public saveWatcherData() {
	}
	 
	@OnOpen
	public void start(Session session) {

	}
	
	@OnClose
	public void end() {
	    connections.remove(this);
	    /*String message = "disconnected.";
	    broadcast(message,session);*/
	}
	
	@OnError
	   public void onError(Throwable t) throws Throwable {
	       //log.error("Chat Error: " + t.toString(), t);
	}
	
	@OnMessage
    public void incoming(String message) {
    	//System.out.println(message);
    	String[] messages = message.split("&");
    	int flag = -1;
    	for(int i=0;i<messages.length;i++)
    	{
    		//System.out.println(messages.length);
    		if(i==0)
    		{
    			String[] tmp = messages[i].split(":");
    			for(int j=0;j<watcher.watchernames.size();j++) 
    			{
    				//System.out.println(watcher.watchernames.size());
    				if (tmp[1].equals(watcher.watchernames.get(j).toString())) {
						flag=j;
						break;
					}
    			}
    			if(flag==-1)
    			{
    				watcher.watchernames.add(tmp[1]);
    				watcher.cpu.add("");
    				watcher.mem.add("");
    				watcher.time.add("");
    				flag = watcher.watchernames.size()-1;
    			}
    		}
    		else 
    		{
    			String[] tmp = messages[i].split("=");
				if (tmp[0].equals("CPU")) {
					watcher.cpu.set(flag, tmp[1]);
				}
				else if(tmp[0].equals("MEM"))
				{
					watcher.mem.set(flag, tmp[1]);
				}
				else if(tmp[0].equals("TIME")){
					watcher.time.set(flag, tmp[1]);
				}
			}
    	}
    	//System.out.println("结束");

    }
	
	private static void broadcast(String msg,Session ses) {
        for (saveWatcherData client : connections) {
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
   
}