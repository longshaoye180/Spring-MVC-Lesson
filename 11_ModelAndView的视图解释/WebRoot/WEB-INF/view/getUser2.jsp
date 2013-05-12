<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
  <head>
    <title>Welcome</title>
  </head>
  
  <body>
  
    
  	<p>name: ${requestScope.user.name}</p>
  	<p>age:  ${requestScope.user.age}</p>
     

  </body>
</html>
