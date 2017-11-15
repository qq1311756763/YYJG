<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/action/tools/file.js" ></script>
<script type="text/javascript" src="js/reconnecting-websocket.js" ></script>
<title>文件上传 - MZC is SuperBoy</title>
</head>
<body onload="connect()">
<h1>文件上传 - MZC is SuperBoy</h1>
<form method="post" action="/YYJG/UploadServlet" enctype="multipart/form-data">
	选择一个文件:
	<input type="file" name="uploadFile" />
	<br/><br/>
	<input type="submit" value="上传" />
	<br/>
	<br/>
	<input type="button" name="Submit" onclick="javascript:history.back(-1);" value="返回上一页">
</form>
	<div id="file_list">
			
		</div>
</body>
</html>