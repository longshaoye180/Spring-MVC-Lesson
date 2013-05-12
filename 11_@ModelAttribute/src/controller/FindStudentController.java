package controller;

import model.Student;
import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;


//用于直接转发到WEB-INF/views/里的页面的控制器

@Controller
public class FindStudentController
{

	@RequestMapping(value="/stu/{school}/{stuid}")
	public String find(@ModelAttribute Student student,BindingResult result) 
	{		
				
	    if (result.hasErrors()) 
	    {
	        return "error";
	    } 
	    
		if(student.getSchool().equals("gdut") && student.getStuid() == 123456 )
			return "yes";
		else
			return "no";	
	}
}
