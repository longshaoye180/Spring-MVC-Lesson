<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
  <head>
    <title>Welcome</title>
  </head>
  
  <body>
  
    <!-- 只在指定查找范围:如果在request中找不到,则不再查找 -->
  	<p>name: ${requestScope.user1.name}</p>
  	<p>age:  ${requestScope.user1.age}</p>
     

  </body>
</html>
