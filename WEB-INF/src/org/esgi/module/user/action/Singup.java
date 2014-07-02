package org.esgi.module.user.action;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;

import org.esgi.orm.my.ORM;
import org.esgi.orm.my.model.User;
import org.esgi.web.action.AbstractAction;
import org.esgi.web.action.IContext;

public class Singup extends AbstractAction{
	@Override
	public String getRoute() {
		return "/user/singup";
	}
	@Override
	public String getLayout() {
		return null; //"file/file_list.vm";
	}
	@Override
	public void execute(IContext context) throws Exception {
		
		String login = context.getRequest().getParameter("login");
		/*String password = context.getRequest().getParameter("password");
		String email = context.getRequest().getParameter("email");
		
		User usr = new User();
		usr.setPseudo(login);
		usr.setMail(email);
		usr.setUserPassword(password);
		ORM orm = new ORM();
		orm.save(usr);*/
		Cookie cookie_login = new Cookie("login", login);
		cookie_login.setMaxAge(24*3600);
		context.getResponse().addCookie(cookie_login);
		
		//HttpSession session = request.getSession(true);
		
		
		
		
		
	}
}
