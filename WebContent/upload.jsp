<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>文件上传 - 老牟是傻逼</title>
</head>
<body>
<h1>文件上传 - 老牟是傻逼</h1>
<form method="post" action="/YYJG/UploadServlet" enctype="multipart/form-data">
	选择一个文件:
	<input type="file" name="uploadFile" />
	<br/><br/>
	<input type="submit" value="上传" />
	<br/>
	<br/>
	<input type="button" name="Submit" onclick="javascript:history.back(-1);" value="返回上一页">
</form>
</body>
</html>