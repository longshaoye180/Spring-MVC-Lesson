package controller;

import javax.xml.transform.dom.DOMSource;

import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

//将application/xml格式的请求体 转换 为

@Controller
public class ParseDataController
{
	//可用consumes更进一步限定请求体的格式
	@RequestMapping(value="/readXml",method=RequestMethod.POST)
	public ModelAndView parseXml(@RequestPart("xml") DOMSource source,@RequestPart("json") User user)
	{

		return null;
	}
	
	
	
}
