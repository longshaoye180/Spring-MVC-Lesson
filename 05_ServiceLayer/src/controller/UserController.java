package controller;



import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import service.UserService;
import service.impl.UserServiceImpl;




@Controller
public class UserController
{
	private UserService userService = new UserServiceImpl();
	
	

	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(@RequestParam(value="username") String username,
						@RequestParam(value="password") String password)
	{
		System.out.println("username:"+username+",password:"+password);
		
		User user = userService.getUser(username);
		
		if(user == null)
			return "usernotexist";
		else
		if(user.getPassword().equals(password))
			return "loginsuccess";
		else
			return "loginfail";
		
	}

}
