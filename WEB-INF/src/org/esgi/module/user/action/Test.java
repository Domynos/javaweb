package org.esgi.module.user.action;

import org.esgi.orm.my.ORM;
import org.esgi.orm.my.model.User;
import org.esgi.web.action.AbstractAction;
import org.esgi.web.action.IContext;

public class Test extends AbstractAction{
	@Override
	public String getRoute() {
		return "/user/test";
	}
	@Override
	public String getLayout() {
		return null; //"file/file_list.vm";
	}
	@Override
	public void execute(IContext context) throws Exception {
		
		System.out.println("TEST");
		
		
	}
}
