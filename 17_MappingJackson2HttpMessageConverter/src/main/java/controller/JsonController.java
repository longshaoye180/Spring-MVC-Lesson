package controller;

import model.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


//将application/json格式的请求体 转换 为对象

@Controller
public class JsonController
{
	//可用consumes更进一步限定请求体的格式
	@RequestMapping(value="/JSON2Object",method=RequestMethod.POST,consumes="application/json")
	public void JSON2Object(@RequestBody User user)
	{
		System.out.println("request body: "+user); //{name=[KEN], age=[123]}
		System.out.println("user.name: "+user.getName()+",user.age:"+user.getAge()); //{name=[KEN], age=[123]}

		
	}
	
	
	//可明确标示响应体的类型
	@RequestMapping(value="/Object2JSON",produces="application/json")
	@ResponseBody
	public User Object2JSON()
	{
		User user = new User();
		user.setName("zhangsan");
		user.setAge(18);
		
		return user;
	}
	
}
