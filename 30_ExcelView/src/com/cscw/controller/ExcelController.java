package com.cscw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;

import com.cscw.view.excel.MyExcelView;

//用于直接转发到WEB-INF/views/里的页面的控制器

@Controller
public class ExcelController
{
	@RequestMapping(value="/excel")
	public ModelAndView go()
	{
		ModelMap model = null;
		
		
		return new ModelAndView(new MyExcelView(),model);
	}
	
	@RequestMapping(value="/excel2")
	public View go2()
	{
		ModelMap model;
		
		
		return new MyExcelView();
	}
}
