package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

//用于直接转发到WEB-INF/views/里的页面的控制器

@Controller
public class AccessPageController
{
	@RequestMapping(value="/page/{viewName}.htm")
	public String go(@PathVariable("viewName")String viewName)
	{
		return viewName;
	}
}
