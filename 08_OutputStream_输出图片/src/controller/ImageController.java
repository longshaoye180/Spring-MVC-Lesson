package controller;


import java.io.IOException;
import java.io.OutputStream;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;


//用于直接转发到WEB-INF/views/里的页面的控制器

@Controller
public class ImageController
{
	@RequestMapping(value="/image")
	public void getImage(OutputStream os)
	{
	    Resource res = new ClassPathResource("/image.jpg");//读取类路径下的图片文件
	    
	    try
		{
			FileCopyUtils.copy(res.getInputStream(), os);
		} catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}//将图片写到输出流中
	
	}
	

}
