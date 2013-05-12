package controller;

import model.Student;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


//用于直接转发到WEB-INF/views/里的页面的控制器

@Controller
public class FindStudentController
{
	@RequestMapping(value="/student/{school}/{stuid}")
	public String find1(@PathVariable("school")String school,@PathVariable("stuid")String stuid)
	{
		if(school.equals("gdut") && stuid.equals("3110006250"))
			return "yes";
		else
			return "no";
	}
	
	
	@RequestMapping(value="/stu/{school}/{stuid}")
	public String find2(Student student)
	{
		if(student.getSchool().equals("gdut") && student.getStuid().equals("3110006250"))
			return "yes";
		else
			return "no";	
	}
}
