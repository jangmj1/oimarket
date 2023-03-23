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
	
	<!-- 개인 css -->
	<link href="/oimarket/css/member/signup.css" rel="stylesheet">
		
</head>
<body>

	

	<div class="wrap">
		
		
		<img alt="" src="/oimarket/img/배경.png" width="100%">
		
		<div class="mainbox">
			<form class="signupForm">
				이름 :		<input maxlength="10" type="text" name="mname"> 		<br>
				<div class="checkconfirm"></div>		
					
				아이디 :		<input onkeyup="idcheck()" maxlength="20" type="text" name="mid">			<br>
				<div class="checkconfirm"></div>		
								
				비밀번호 :		<input onkeyup="pwdcheck()" maxlength="30" type="text" name="mpwd">			<br>
				<div class="checkconfirm"></div>		
				
				비밀번호 확인 :	<input onkeyup="pwdconfirmcheck()" maxlength="30" type="text" name="mpwdconfirm">	<br>
				<div class="checkconfirm"></div>		
				
				사는 지역 :	<input type="text" name="mresidence">	<br>
				
				이메일 :		<input onkeyup="emailcheck()" maxlength="30" type="text" name="memail">		<br>
				<div class="checkconfirm"></div>		
								
				성별 : 		<input type="radio" name="mmw" value="남자" checked="checked"> 남자
							<input type="radio" name="mmw" value="여자"> 여자	<br>
				<div class="checkconfirm"></div>		
											
				핸드폰번호 :	<input onkeyup="phonecheck()" maxlength="30" type="number" name="mphone">		<br>
				<div class="checkconfirm"></div>		
								
				프로필 :		<input type="file" name="mimg">			<br>
				<button onclick="signup()" type="button"> 가입하기 </button>
			</form>
		
		</div>
		
	</div>
	
	
	
	
	<!-- 개인 js -->
	<script src="/oimarket/js/member/signup.js" type="text/javascript"></script>


</body>
</html>