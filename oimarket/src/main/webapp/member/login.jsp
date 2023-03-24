<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="/oimarket/css/member/login.css" rel="stylesheet">

</head>
<body>

	<%@ include file="/header.jsp" %>

	<div class="wrap">
		<div class="mainbox">
		
		<div class="idpwinput">
			<div>
				아이디 : <input class="mid" type="text">
			</div>
			
			<div>
				비밀번호 : <input class="mpwd" type="password">
			</div>
		</div>
		
		<button onclick="login()" type="button"> 로그인 </button>
		
			<div><a href="/oimarket/member/findid.jsp"> 아이디 찾기 </a></div>
			<div><a href="/oimarket/member/findpwd.jsp"> 비밀번호 찾기 </a></div>
				
				
			
		</div>
	</div>
	

	<script src="/oimarket/js/member/login.js" type="text/javascript"></script>
</body>
</html>