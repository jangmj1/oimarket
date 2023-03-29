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
			<form class="signupForm">
				<h3>회원가입</h3>
				<div class="title">이름</div>
				<input class="mname" name="mname" type="text">
				
				<div class="title">아이디</div>
				<input onkeyup="idcheck()" class="mid" name="mid" type="text">
				<div class="checkconfirm"></div>
				
				<div class="title">비밀번호</div>
				<input onkeyup="pwdcheck()" class="mpwd" name="mpwd" type="text">
				
				<div class="title">비밀번호 확인</div>
				<input onkeyup="pwdrecheck()" maxlength="20" type="password" name="mpwdconfirm" 	class="mpwdconfirm">	
				<div class="checkconfirm"></div>
				
				<div class="title">사는장소</div>
					<select name="mresidence">
						<option value="1">서울</option>
						<option value="2">경기</option>
						<option value="3">강원도</option>
						<option value="4">인천</option>
						<option value="5">충청도</option>
						<option value="6">경상도</option>
						<option value="7">전라도</option>
						<option value="8">부산</option>
						<option value="9">울산</option>
						<option value="10">제주</option>
						<option value="11">그외</option>
					</select>					
				
				<div class="title">성별</div>
				<input type="radio" name="mmw" value="남">남
				<input type="radio" name="mmw" value="여">여			<br/>
				
				<div class="title">핸드폰번호</div>
				<span ><input class="phone1" type="text">-<input class="phone2" type="text">-<input class="phone3" type="text">
				<button class="phone" onclick="phone()" type="button">인증하기</button></span>
				<div class="checkconfirm"></div>
				
				<div class="authbox"> <!-- 인증코드자리 --> 
				
				</div>
				
				<div class="title">프로필</div>
				<input onchange="premimg(this)" type="file" name="mimg" class="mimg">
				<img class="premimg" alt="" src="/oimarket/img/default.webp">
				<button class="signupbtn" onclick="signup()" type="button">가입하기</button>
			</form>
		</div>
	</div>
	
	<script  src="http://code.jquery.com/jquery-latest.min.js"></script> 
	<script src="/oimarket/js/member/signup.js" type="text/javascript"></script>
	
</body>
</html>