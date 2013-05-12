package controller;



import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


//用于直接转发到WEB-INF/views/里的页面的控制器

@Controller
public class ImageController
{
	
	@RequestMapping(value="/image",produces="image/png")
	@ResponseBody
	public Resource getImage()
	{
	    Resource resource = new ClassPathResource("/pngImage.png");//读取类路径下的图片文件
	    
	    return resource;
	}
	

}
