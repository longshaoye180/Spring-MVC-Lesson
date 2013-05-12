<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <title>Fans.html</title>
	
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="this is my page">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    
    <!--<link rel="stylesheet" type="text/css" href="./styles.css">-->
    
    
    <script type="text/javascript">
	
    var getBroserType = function()
	{
		var userAgent = navigator.userAgent;
		
		if(userAgent.lastIndexOf("MSIE") != -1)
			return "MSIE";
		
		if(userAgent.lastIndexOf("Firefox") != -1)
			return "Firefox";
		
		if(userAgent.lastIndexOf("Chrome") != -1)
			return "Chrome";
		
		if(userAgent.lastIndexOf("Safari") != -1)
			return "Safari";
	};
	
    </script>
    
    <!-- Ajax -->
    
    

	<script type="text/javascript">
	
	var xmlHttpRequest = null; //声明一个空对象以接收XMLHttpRequest对象
	
	var updateWeibo = function()
	{
		if(xmlHttpRequest == null)
		{
			if(window.XMLHttpRequest)  //IE7+、Firefox、Chrome、Safari, Opera
			{
				xmlHttpRequest = new XMLHttpRequest();
			}
			else if(window.ActiveXObject) //IE6
			{
				xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}

 
		//如果是其它浏览器没实现XMLHttpRequest的话,则不作处理
		if(null != xmlHttpRequest)
		{
			//关联好ajax的回调函数
			xmlHttpRequest.onreadystatechange = ajaxCallBack;
			
			var ram = Math.random()*100;
		
			xmlHttpRequest.open("GET","getWeibo/"+ram,true);  //true表示异步,false:同步
						
			//真正向服务器端发送数据   
			xmlHttpRequest.send();//send: POST方式时所发的信息
				
		}
		
	};
	
	
	var ajaxCallBack = function()
	{
		if(getBroserType() != "Firefox")
		{
			if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200)
			{
	
				handleResp();
			}
		}
		else
		{
			if(xmlHttpRequest.readyState == 3 && xmlHttpRequest.status == 200)
			{
				handleResp();
			}
		}
	};
	
	//处理请求
	var handleResp = function()
	{

		//如果超时或出错,则再次发出请求
		if( (xmlHttpRequest.responseText == "#Timeout#Error") || (xmlHttpRequest.responseText == "#Timeout") || (xmlHttpRequest.responseText == "#Error") )
		{
			//再次发出长链接!
			updateWeibo();
		}
		else
		{
			document.getElementById("ajaxResp").innerHTML +="<p>"+xmlHttpRequest.responseText+"</p>";
			
			//再次发出长链接!
			updateWeibo();
		}
	};
    
	
	</script>
	
  </head>
  
  <body onload="updateWeibo();">
    
    
    <p>亲爱的粉丝!</p>
    
     <p id = "ajaxResp"> </p>
    
    
    
  </body>
</html>
