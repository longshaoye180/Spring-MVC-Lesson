package controller;




import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class LoginController
{
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(@RequestParam(value="username") String username,
						@RequestParam(value="password") String password,
						Model model)
	{
		System.out.println("username:"+username+",password:"+password);

		
		
		model.addAttribute("username", username);

		model.addAttribute("password", password);


		if(username.equals("Tom") && password.equals("123"))
			
			return "loginsuccess";
		
		else
	     
			return "loginfail";
		
	}
	
}
