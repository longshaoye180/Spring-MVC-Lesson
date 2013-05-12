package com.ireland.controller;

import java.util.concurrent.Callable;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ireland.model.User;

/**
Spring MVC 3.2 introduced Servlet 3 based asynchronous request processing. 
Instead of returning a value, as usual, a controller method can now return a java.util.concurrent.Callable 
and produce the return value from a separate thread. 

Meanwhile the main Servlet container thread is released and allowed to process other requests. 

Spring MVC invokes the Callable in a separate thread with the help of a TaskExecutor and 

when the Callable returns, the request is dispatched back to the Servlet container to 

resume processing with the value returned by the Callable.


Spring MVC 默认使用SimpleAsyncTaskExecutor生成一个独立的线程来调用Callable,
Callable执行完毕后,底层调用AsyncContext.dispatch()来将请求转发给Servlet容器的线程来处理.

 */

/**
返回Callbale后,被CallableMethodReturnValueHandler处理


 */

@Controller
public class CallableAsyncController
{
	
	@RequestMapping(value="/doHeavyWork",produces="application/json")
	@ResponseBody
	public Callable<User> doHeavyWork()
	{
		System.out.println("..start...");
		
		return new Callable<User>() {

			@Override
			public User call() throws Exception
			{
				System.out.println("..doing heavy work..");
				
				Thread.sleep(5*1000);
				
				System.out.println("...finish...");
				
				return new User("123","jack");
			}
			
		};
		
	}

}
