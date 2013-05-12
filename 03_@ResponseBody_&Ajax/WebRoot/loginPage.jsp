<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'loginPage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->


	<script type="text/javascript">
	
	
	var xmlHttpRequest = null; //声明一个空对象以接收XMLHttpRequest对象
	
	var ajaxSubmit = function()
	{
			xmlHttpRequest = new XMLHttpRequest();
 
	
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			
			
			//关联好ajax的回调函数
			xmlHttpRequest.onreadystatechange = ajaxCallBack;
			
			
			xmlHttpRequest.open("POST","/03/login",true);  //true表示异步,false:同步
						
			
			//设置POST的请求格式
			xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			
			
			//真正向服务器端发送数据   
			xmlHttpRequest.send("username="+username+"&password="+password);//send: POST方式时所发的信息
		
		
		
	};
	
	
	var ajaxCallBack = function()
	{
		if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200)
		{
			document.getElementById("reason").innerHTML = xmlHttpRequest.responseText;	
			
			alert(xmlHttpRequest.responseText);
		}
	};
	
	
	
	
	
	</script>
	

	
	
	

  </head>
  
  <body>
   
    
          用户名: <input type="text" name="username" id="username"><br>
          
          密码    : <input type="password" name="password" id="password"><br>
          
    
    <input type="button" value="登录" onclick="ajaxSubmit();">
       
    
    <div id="reason">
    </div>
    
  </body>
</html>
