package controller;

import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

//用于直接转发到WEB-INF/views/里的页面的控制器

@Controller
public class PathVariable2ObjectController
{
	@RequestMapping(value="/user/{name}/{age}")
	public User go( User user)
	{
		return user;
	}
}
