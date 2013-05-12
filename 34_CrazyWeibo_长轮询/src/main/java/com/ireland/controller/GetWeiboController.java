package com.ireland.controller;


import java.util.Map;
import java.util.Queue;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.async.DeferredResult;

import com.ireland.model.User;


/**

Fans 发请求收听博主的消息,发一次就收一条,30S

 */

@Controller
public class GetWeiboController
{
	
	private Map<User,DeferredResult<String>> onlinefans;
	
	@Resource(name="onlinefans")
	public void setOnlinefans(Map<User, DeferredResult<String>> onlinefans)
	{
		this.onlinefans = onlinefans;
	}
	
	

	@RequestMapping(value="/getWeibo/{username}",produces="text/plain;charset=UTF-8")
	@ResponseBody
	public DeferredResult<String> fansLogin(@PathVariable("username")String username)
	{

		DeferredResult<String> result = new DeferredResult<String>(30000L,"连接超时");
		
		final User user = new User("xxx",username);
		
		result.onCompletion(
			new Runnable(){

			@Override
			public void run()
			{
				System.out.println("complete:"+user.getUsername());

				//DeferredResult 完成,超时或出错时,均将其在Map中移除
				onlinefans.remove(user);
			}
			
		});
		
		
		//将fans存放起来
		onlinefans.put(user, result);
		
		
		return result;
		
	}
	

}
