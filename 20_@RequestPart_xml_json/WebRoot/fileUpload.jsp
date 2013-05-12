<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html>
  <head>    
 
  </head>
  
  <body>
    <h1>文件上传</h1>
    
    
    <form action="readXml" method="post" enctype="multipart/form-data">
    
       xml<input type="file" name="xml"><br>
       json<input type="file" name="json"><br>
    
       <input type="submit" value="上传">
    
    </form>
    
  </body>
</html>
