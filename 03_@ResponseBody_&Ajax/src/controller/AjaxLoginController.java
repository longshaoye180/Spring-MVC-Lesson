package controller;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
public class AjaxLoginController
{
	
	@RequestMapping(value="/login", method = RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String login(@RequestParam(value="username") String username,
						@RequestParam(value="password") String password)
	{
		System.out.println("username:"+username+",password:"+password);
		
		

		if(username.equals("Tom") && password.equals("123"))
			return "登录成功!";
		else
			return "登录失败!";
	}


}
