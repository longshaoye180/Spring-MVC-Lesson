package com.ireland.controller;


import java.util.Date;
import java.util.Queue;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.async.DeferredResult;

import com.ireland.model.User;


/**
 
 手工处理任务的Controller
 
 */

@Controller
public class WorkerController
{
	private Queue<DeferredResult<User>> queue;
	
	@Resource(name="queue")
	public void setQueue(Queue<DeferredResult<User>> queue)
	{
		this.queue = queue;
	}

	
	

	@RequestMapping(value="/doWork",produces="text/plain")
	@ResponseBody
	public String doWork()
	{
		//取出一个任务
		DeferredResult<User> result = queue.poll();
		
		result.setResult(new User("123","jack") );
			
		return "OK";
	}
	

}
