package com.ireland.controller;


import java.util.Queue;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.async.DeferredResult;

import com.ireland.model.User;


@Controller
public class DeferredResultAsyncController
{
	private Queue<DeferredResult<User>> queue;
	
	@Resource(name="queue")
	public void setQueue(Queue<DeferredResult<User>> queue)
	{
		this.queue = queue;
	}

	
	

	@RequestMapping(value="/doDeferredResult",produces="application/json")
	@ResponseBody
	public DeferredResult<User> doDeferredResult()
	{

		DeferredResult<User> result = new DeferredResult<User>();
		
		//将任务放进任务队列
		queue.add(result);
		
		return result;
		
	}
	

}
