package org.esgi.module.index;

import javax.servlet.http.Cookie;

import org.esgi.web.action.AbstractAction;
import org.esgi.web.action.IContext;

public class Index extends AbstractAction{
	
	@Override
	public String getRoute() {
		return "/";
	}
	
	@Override
	public void execute(IContext context) throws Exception {
		Cookie[] cookies = context.getRequest().getCookies();
		if(cookies != null)
		{
			System.out.println("ok");
		}
		else
			System.out.println("pas ok");
		
		context.getRequest().setAttribute("login","CA MAAARCHE");
	}

	
}
