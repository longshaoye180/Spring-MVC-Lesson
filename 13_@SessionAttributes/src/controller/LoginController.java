package controller;



import java.util.Date;

import javax.servlet.http.HttpSession;

import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



@Controller
public class LoginController
{
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(HttpSession session,User user)
	{
		System.out.println("username:"+user.getUsername()+",password:"+user.getPassword());
		
		
		if(user.getUsername().equals("Tom") && user.getPassword().equals("123"))
		{
			session.setAttribute("user", user);
			session.setAttribute("time", new Date());
			
			return "loginsuccess";
		}
		else
			return "loginfail";
		
	}


}
