package com.ireland.controller;


import java.util.Date;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Queue;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.async.DeferredResult;

import com.ireland.model.User;


/**
 
向所有在线的Fans实时推送微博的Controller
 
 */

@Controller
public class PostWeiboController
{
	private Map<User,DeferredResult<String>> onlinefans;
	
	@Resource(name="onlinefans")
	public void setOnlinefans(Map<User, DeferredResult<String>> onlinefans)
	{
		this.onlinefans = onlinefans;
	}

	@RequestMapping(value="/PostWeibo",produces="text/plain")
	@ResponseBody
	public String PostWeibo(@RequestParam("message")String message)
	{
		
		//向每位在线的用户发送消息
		for(Entry<User,DeferredResult<String>> entry: onlinefans.entrySet())
		{
			User user = entry.getKey();
			DeferredResult<String> result = entry.getValue();
			
			//发送消息
			result.setResult("Hi "+user.getUsername()+","+message);
		}
		
		return "OK";
	}
	

}
