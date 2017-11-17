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


@ServerEndpoint(value = "/websocket/getwatcher")
public class getWatcherData {
	 private Session session;
	 private static Set<getWatcherData> connections = new CopyOnWriteArraySet<>();
	 private String webPath;
    //private static final Log log = LogFactory.getLog(ChatAnnotation.class);
	 
 
	@OnOpen
	public void start(Session session) {
	    this.session = session;
	    connections.add(this);
	    String oldmessage = "";
	    String message = "";
	    //String message = "connected!"+System.currentTimeMillis();
	    //System.out.println(webPath);
	    while(true)
	    {
	    	oldmessage = message;
	    	message = "";
		    for(int i=0;i<watcher.watchernames.size();i++)
		    {
		    	if (i!=watcher.watchernames.size()-1) {
		    		message+="server="+watcher.watchernames.get(i).toString()+"&cpu="+watcher.cpu.get(i).toString()+"&mem="+watcher.mem.get(i).toString()+"&time="+watcher.time.get(i).toString()+"|";
				}
		    	else
		    	{
		    		message+="server="+watcher.watchernames.get(i).toString()+"&cpu="+watcher.cpu.get(i).toString()+"&mem="+watcher.mem.get(i).toString()+"&time="+watcher.time.get(i).toString();
		    	}
		    }
		    //System.out.println(message);
		    if (!message.equals(oldmessage)) {
		    	broadcast(message,session);
			}
		    try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    }
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
        for (getWatcherData client : connections) {
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