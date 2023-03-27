<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style type="text/css">
		.wrap{
			width: 600px;
			margin: 0 auto;
		}
	</style>
	
</head>
<body>
	<div class="wrap">
		<h3>아이디찾기 페이지 </h3>
			이름 :<input class="mname" type="text">
			핸드폰번호 :<input class="mphone" type="text">
			<button type="button" onclick="findid()">아이디찾기</button>
	</div>
	
	
	<script src="/oimarket/js/member/findmember.js" type="text/javascript"></script>
</body>
</html>