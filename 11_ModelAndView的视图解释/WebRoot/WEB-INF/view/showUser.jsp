<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
  <head>
    <title>Welcome</title>
  </head>
  
  <body>
  
    <p>user.name: ${requestScope.user.name}</p>
  	<p>user.age:  ${requestScope.user.age}</p>
   
  	<p>user1.name: ${requestScope.user1.name}</p>
  	<p>user1.age:  ${requestScope.user1.age}</p>
     
    <p>user2.name: ${requestScope.user2.name}</p>
  	<p>user2.age:  ${requestScope.user2.age}</p>
  	

  </body>
</html>
