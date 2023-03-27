<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>
<body>

	<%@ include file="/header.jsp" %>
	

	<div class="wrap">
		
			
		<div class="mainbox">
			<form class="signupForm">
				이름 :		<input onkeyup="nullnamecheck()" maxlength="10" type="text" name="mname" class="mname"> 		
				<span class="checkconfirm"></span>	<br>	
					
				아이디 :		<input onkeyup="idcheck()" maxlength="20" type="text" name="mid" class="mid">			
				<span class="checkconfirm"></span> <br>		
								
				비밀번호 :		<input onkeyup="pwdcheck()" maxlength="30" type="password" name="mpwd" class="mpwd">			
				<span class="checkconfirm"></span> <br>		
				
				비밀번호 확인 :	<input onkeyup="pwdconfirmcheck()" maxlength="30" type="password" name="mpwdconfirm" class="mpwdconfirm">	
				<span class="checkconfirm"></span> <br>		
				
				사는 지역 :	<select name="mresidence">
								<option class="mresidence"> 서울
								<option class="mresidence"> 경기
								<option class="mresidence"> 전남
								<option class="mresidence"> 전북
								<option class="mresidence"> 경상남도
								<option class="mresidence"> 경상북도					
							</select> <br>
								
				성별 : 		<input type="radio" name="mmw" value="남자" checked="checked"> 남자
							<input type="radio" name="mmw" value="여자"> 여자	<br>
											
				핸드폰번호 :	<input onkeyup="phonecheck()" maxlength="3" type="number" class="mphone1">	
							<input onkeyup="phonecheck()" maxlength="4" type="number" class="mphone2">
							<input onkeyup="phonecheck()" maxlength="4" type="number" class="mphone3">
				<span class="checkconfirm"></span> <br>		
								
				프로필 :		<input type="file" name="mimg">			<br>
				<button onclick="signup()" type="button"> 가입하기 </button>
			</form>
			
		
		</div>
		
	</div>
	
	
	
	<!-- jquery -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>	
	<!-- 개인 js -->
	<script src="/oimarket/js/member/signup.js" type="text/javascript"></script>


</body>
</html>