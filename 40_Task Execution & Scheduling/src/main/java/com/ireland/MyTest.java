package com.ireland;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/applicationContext.xml"})
public class MyTest
{
	@Autowired
	private TaskScheduler scheduler;

	@Test
	public void schedule() throws InterruptedException
	{
		
		scheduler.scheduleAtFixedRate(new Runnable(){

							@Override
							public void run()
							{
								System.out.println("hello World!"+new Date().getTime());
								
							}}, 
			
							new Date((new Date()).getTime()+2000),
							1000
			);
		
		Thread.sleep(Long.MAX_VALUE);
	}
	
	

}
