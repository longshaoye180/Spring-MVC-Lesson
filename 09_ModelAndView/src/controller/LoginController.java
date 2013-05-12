package controller;



import java.util.HashMap;
import java.util.Map;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;



@Controller
public class LoginController
{
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public ModelAndView login(@RequestParam(value="username") String username,
						@RequestParam(value="password") String password)
	{
		System.out.println("username:"+username+",password:"+password);

		
		Map<String,Object> map = new HashMap<String,Object>();
		
		map.put("username", username);

		map.put("password", password);


		if(username.equals("Tom") && password.equals("123"))
			
			return new ModelAndView("loginsuccess",map);
		
		else
	     
			return new ModelAndView("loginfail",map);
		
	}
	
}
