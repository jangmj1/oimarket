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
		}	<!-- 나중에 싹 다 취합시 지우기 -->
	</style>
</head>
<body>
	<div class="wrap">	<!-- 나중에 싹 다 취합시 지우기 -->
		<div>
			<form class="loginForm">
				<h3>로그인</h3>
				<div class="title">아이디</div>
				<input class="mid" name="mid" type="text">
				<div class="midconfirm"></div>
				
				<div class="title">비밀번호</div>
				<input class="mpwd" name="mpwd" type="password">

				<button class="signupbtn" onclick="login()" type="button">로그인</button>
			</form>
		</div>
	</div>
	
	<script  src="http://code.jquery.com/jquery-latest.min.js"></script> 
	<script src="/oimarket/js/member/login.js" type="text/javascript"></script>
	
</body>
</html>