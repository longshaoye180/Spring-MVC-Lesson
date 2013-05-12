package controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;


//@RequestPart 是根据 'Content-Type' 的
//@RequestParam是根据 Converter or PropertyEditor的

@Controller
public class FileUploadController
{
	
	@RequestMapping(value="/fileUpload",method=RequestMethod.POST)
	public String handleFormUpload(@RequestParam("name") String name,
									@RequestPart("file") MultipartFile file) throws IOException
	{
		if(!file.isEmpty())
		{
			String fileName = file.getOriginalFilename();
			byte[] bytes = file.getBytes();
			
			return "uploadSuccess";
		}
		else
		{
			return "uploadFailure";
		}

	}
	
	
	@RequestMapping(value="/fileUpload2",method=RequestMethod.POST)
	public String handleFormUpload2(HttpServletRequest req,
									@RequestParam("name") String name,
									@RequestPart("file") Part file) throws IOException
	{
		
		if(file.getSize() != 0)
		{
			//取得"/"表示的tomcat中的实际路径
			String uploadPath = req.getServletContext().getRealPath("/");
			
			//从header中解译出上传的文件名
			String value = file.getHeader("content-disposition");
			
			String fileName = value.substring(value.lastIndexOf("=")+2, value.length()-1);
			
			System.out.println("fileName: "+fileName);
			//end
			
			System.out.println("the file size is: "+file.getSize()+"B");
			
			System.out.println(file.getName());
			//将文件写到硬盘上
			file.write(uploadPath + fileName);
			
			return "uploadSuccess";
		}
		else
		{
			return "uploadFailure";
		}

	}
	
}
