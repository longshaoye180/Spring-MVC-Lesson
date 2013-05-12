package controller;



import java.util.Date;


import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;


/*
 * 可以@SessionAttributes+ ModelMap来很方便地将Session里的属性注入到ModelMap中
 * 
 * 1:如果当前Session不存在,或者当前Session存在,但指定的属性不存在,则ModelMap里面不会取得对应的属性
 * 
 */


/*
 * 可以@SessionAttributes+@ModelAttribute来很方便地将Session里的属性注入到参数中
 * 但这个方法要小心地用,
 * 1:如果当前Session不存在,则会直接抛出HttpSessionRequiredException异常,因为不是在Controller里抛出的,所以我们无法捕捉这个异常
 * 
 * 2:如果当前Session存在,但指定的属性不存在,则一样会直接抛出HttpSessionRequiredException,如:
 * HttpSessionRequiredException: Expected session attribute 'newUser'
 * 我们还是没机会来处理这个异常...(这个情况还不如直接注入HttpSession,再手动取出指定的属性,这样做更好)
 * 
 */



@Controller
@SessionAttributes(value={"user","time"})
public class LoginoutController
{
	@RequestMapping(value="/logout2", method = RequestMethod.GET)
	public String logout2(ModelMap model)
	{
		
		User user = (User) model.get("user");
		
		System.out.println("username:"+user.getUsername()+",password:"+user.getPassword());
		
		System.out.println("登录时间:" + model.get("time"));
		
		
		return "logoutsuccess";
	}

	
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public String logout(@ModelAttribute("user")User user,@ModelAttribute("time")Date time)
	{
		
		System.out.println("username:"+user.getUsername()+",password:"+user.getPassword());
		
		System.out.println("登录时间:" + time);
		
		
		return "logoutsuccess";
	}


}
