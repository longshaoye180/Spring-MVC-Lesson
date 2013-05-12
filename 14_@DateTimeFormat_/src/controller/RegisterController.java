package controller;



import java.util.Date;

import model.User;


import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class RegisterController
{
	
	@RequestMapping(value="/register", method = RequestMethod.POST)
	public String register(@RequestParam(value="username") String username,
						@RequestParam(value="password") String password,
						@RequestParam("birthdate") @DateTimeFormat(iso=ISO.DATE) Date birthdate)
	{
		System.out.println("username:"+username+",password:"+password);
		
		
		return "registersuccess";
	}
	
	@RequestMapping(value="/register2", method = RequestMethod.POST)
	public String register2(User user)
	{
		System.out.println("username:"+user.getUsername()+",password:"+user.getPassword());
		
		
		return "registersuccess";
	}


}
