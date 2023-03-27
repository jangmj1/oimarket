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
		<h3>로그인</h3>
		아이디:<input type="text">
		비밀번호:<input type="text">
		<button type="button">로그인</button>
		<div class="findmember">
			<a href="/oimarket/member/findid.jsp">아이디찾기</a>
			<a href="/oimarket/member/findpwd.jsp">비밀번호찾기</a>
		</div>
	</div>
	<script src="/oimarket/js/member/findmember.js" type="text/javascript"></script>
</body>
</html>