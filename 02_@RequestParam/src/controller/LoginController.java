package controller;



import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class LoginController
{
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(@RequestParam(value="username") String username,
						@RequestParam(value="password") String password)
	{
		System.out.println("username:"+username+",password:"+password);
		
		
		if(username.equals("Tom") && password.equals("123"))
			return "loginsuccess";
		else
			return "loginfail";
		
	}
	
	@RequestMapping(value="/login2", method = RequestMethod.POST)
	public String login2(User user)
	{
		System.out.println("username:"+user.getUsername()+",password:"+user.getPassword());
		
		
		if(user.getUsername().equals("Tom") && user.getPassword().equals("123"))
			return "loginsuccess";
		else
			return "loginfail";
		
		
	}


}
