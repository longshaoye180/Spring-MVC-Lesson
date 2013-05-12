package controller;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



@Controller
public class LoginController
{
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(HttpServletRequest request,HttpServletResponse response)
	{
		String username = request.getParameter("username");
		
		String password = request.getParameter("password");
		
		System.out.println("username:"+username+",password:"+password);
		
		
		if(username.equals("Tom") && password.equals("123"))
			return "loginsuccess";
		else
			return "loginfail";
		
		
	}


}
