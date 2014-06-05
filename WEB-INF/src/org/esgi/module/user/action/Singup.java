package org.esgi.module.user.action;

import java.util.HashMap;
import java.util.Map;

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
		
		System.out.println("LOULILOL");
		Map<String,Object> mapWhere = new HashMap<String, Object>();
		String login = context.getRequest().getParameter("login");
		String password = context.getRequest().getParameter("password");
		String email = context.getRequest().getParameter("email");
		mapWhere.put("login",login);
		mapWhere.put("password", password);
		System.out.println(login+" "+password);
		
		
		
	}
}
