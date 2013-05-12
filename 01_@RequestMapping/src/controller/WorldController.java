package controller;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class WorldController
{
	
	@RequestMapping(value={"/World","/World2"})
	public String abc()
	{
		
		System.out.println("World..");
	
		return "world";
	}
	
}
