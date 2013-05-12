package controller;

import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

//@ModelAttribute: 
//表示结果返回时,被@ModelAttribute标记的对象将会被放进ModleAndView中

@Controller
@SessionAttributes("user1")
public class Comsumer
{
	
	//其实@ModelAttribute只是个一个从model中取出属性的简便方法...关键还是model如何被初始化: ModelFactory.initModel()
	
	/*
Populate the model in the following order:
Retrieve "known" session attributes -- i.e. attributes listed via @SessionAttributes and previously stored in the in the model at least once
Invoke @ModelAttribute methods
Find method arguments eligible as session attributes and retrieve them if they're not already present in the model
	 */
	
	@RequestMapping(value="/comsumer.do")
	public String setUser2(ModelMap model,@ModelAttribute("user1") User user1) //@ModelAttribute 能从model中取出对应的属性
	{
		System.out.println("user: "+user1);
		System.out.println("I got it!: "+user1.getName());
		
		user1.setName("GG zhen");
		
		Double pi = 3.1415926;
		
		model.put("pi", pi);
		
		
		return "home";
	}

}
