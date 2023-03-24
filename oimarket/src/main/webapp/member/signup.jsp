<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<form class="signupForm">
			<h3>회원가입</h3>
			<div>
				이름:<input onkeyup="namecheck()" class="mname"  name="mname" type="text">
				<div class="checkname" ></div>
			</div>
			<div>
				아이디:<input onkeyup="idcheck()" class="mid" name="mid" type="text">
				<div class="checkid" ></div>
			</div>
			<div>
				비밀번호:<input onkeyup="pwdcheck()" class="mpwd" name="mpwd" type="text">
				<div class="checkpwd"></div>
			</div>
			<div>
				비밀번호확인:<input onkeyup="repwdcheck()" class="repwdck" type="text">
				<div class="repwdcheck"></div>
			</div>
			<div>
				사는지역:
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
			</div>
			<div>
				성별:
				<input name="mmw" value="1" type="radio">남
				<input name="mmw" value="2" type="radio">여
			</div>
			<div>
				핸드폰번호: <span onkeyup="phone()" class="phone"> <input style="width: 40px;" type="text">-<input style="width: 40px;" type="text">-<input style="width: 40px;" type="text"></span>
			</div>
			<div>
			프로필사진:<input name="mimg" type="file">
			</div>
			<button onclick="signup()" type="button">가입하기</button>
		</form>
	</div>
	

	<script src="http://code.jquery.com/jquery-latest.min.js"></script> <!-- 아작트 쓰기위한용도 -->
	<script src="/oimarket/js/member/signup.js" type="text/javascript"></script>



</body>
</html>