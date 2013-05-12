<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
  <head>
    <title>请注册</title>
  </head>
  
  <script type="text/javascript">
  var xmlHttpRequest = null; //声明一个空对象以接收XMLHttpRequest对象
	
	var ajaxSubmit = function()
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
			
			xmlHttpRequest.open("POST","JSON2Object",true);  //true表示异步,false:同步
			
			xmlHttpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			
			//JS对象
		  	var person = {name:'zhangsan',age:18};
			
		  	//JS对象转换为JSON字符串
			var json = JSON.stringify(person);//{"name":"zhangsan","age":18} 
	
						
			//真正向服务器端发送 请求体
			xmlHttpRequest.send(json);//发送请求体request body部分
			//xmlHttpRequest.send("{'name':'zhangsan','age':18}");
		}
		
	};
	
	
	var ajaxCallBack = function()
	{
		if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200)
		{
			document.getElementById("hello").innerHTML = xmlHttpRequest.responseText;	
		}
	};
	
  </script>
  
  <body>
  
 	<button onclick="ajaxSubmit();"  >发送JSON数据</button>
   

  </body>
</html>
