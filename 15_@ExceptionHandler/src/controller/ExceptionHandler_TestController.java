package controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class ExceptionHandler_TestController
{

	@ExceptionHandler(ArithmeticException.class)
	public ModelAndView handleException(Exception ex, HttpServletRequest request)
	{
		System.out.println("出错了哦!!");
		
		return new ModelAndView("errorPage","exception",ex.toString()); 
	}
	
	@RequestMapping(value="/TestError")
	public String ExceptionHandlerTest()
	{
		int a = 10;
		int b = 0;
		
		int c = a/b;
		
		return "result";
	}
	
}
