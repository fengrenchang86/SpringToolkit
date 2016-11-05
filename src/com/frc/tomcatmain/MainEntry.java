package com.frc.tomcatmain;

import java.io.File;

import javax.servlet.ServletException;

import org.apache.catalina.LifecycleException;
import org.apache.catalina.core.AprLifecycleListener;
import org.apache.catalina.core.StandardServer;
import org.apache.catalina.startup.Tomcat;

public class MainEntry {
	private static String CONTEXT_PATH = "/TestForTomcat7";  
    private static String PROJECT_PATH = System.getProperty("user.dir");  
    private static String WEB_APP_PATH = PROJECT_PATH + File.separatorChar + "WebContent";  
    private static String CATALINA_HOME = PROJECT_PATH + "/Embedded/Tomcat";  
    private Tomcat tomcat = new Tomcat();  
    private int port;  
      
    public MainEntry(int port){  
        this.port=port;  
    }  
      
    public void start()throws Exception{  
        tomcat.setPort(port);  
        tomcat.setBaseDir(CATALINA_HOME);  
        tomcat.getHost().setAppBase(WEB_APP_PATH);  
        try{  
            StandardServer server = (StandardServer)tomcat.getServer();  
            AprLifecycleListener listener = new AprLifecycleListener();  
            server.addLifecycleListener(listener);  
            tomcat.addWebapp(CONTEXT_PATH, WEB_APP_PATH);  
        }catch(ServletException e){  
            e.printStackTrace();  
            throw e;  
        }  
        try{  
            tomcat.start();  
            tomcat.getServer().await();  
        }catch(LifecycleException e){  
            e.printStackTrace();  
            throw e;  
        }  
    }  
      
    public void stop()throws Exception{  
            try{  
                tomcat.stop();  
            }  
            catch(LifecycleException ex){  
                ex.printStackTrace();    
                throw ex;  
            }  
    }  
          
    public void setPort(int port){  
        this.port=port;  
    }  
    public int getPort(){  
        return this.port;  
    }  
      
    public static void main(String[] args) throws Exception {  
    	MainEntry embededTomcat = new MainEntry(7080);  
        embededTomcat.start();  
    }
}
