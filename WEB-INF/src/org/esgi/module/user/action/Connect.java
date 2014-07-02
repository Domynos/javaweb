package org.esgi.module.user.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.map.HashedMap;
import org.esgi.orm.my.ORM;
import org.esgi.orm.my.model.User;
import org.esgi.web.action.AbstractAction;
import org.esgi.web.action.IContext;

public class Connect extends AbstractAction{
	@Override
	public String getRoute() {
		return "/user/connect";
	}
	@Override
	public String getLayout() {
		return null; //"file/file_list.vm";
	}
	@Override
	public void execute(IContext context) throws Exception {
		
		Map<String, Object> map = new HashMap();
		map.put("userPseudo", context.getRequest().getParameter("login"));
		map.put("userPassword", context.getRequest().getParameter("password"));
		System.out.println("j'suis la batard");
		ORM orm = new ORM();
		List<Object> list = orm._find(User.class, new String[]{"userPseudo","userPassword"}, map, new String[]{"userPseudo"}, null, null);
		System.out.println(list.get(0).toString());
		User user = (User) list.get(0);
		context.getRequest().setAttribute("login",user.getPseudo());
		
	}
}
