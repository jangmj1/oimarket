<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>




	 <!-- 부트스트랩 css -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
	<!-- 반응형 -->
	 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div class="container">
		<h3>회원가입</h3>
		<form class="infoForm">
			<div class="title">이름</div>
			<input type="text" name="mname" class="name">
				
			
			
			<div class="title">아이디</div>
			<input onkeyup="idcheck()" type="text" name="mid" class="mid">
			<div class="checkconfirm"> </div>
			
			<div>비밀번호 </div>
			<input onkeyup="pwdcheck()" type="password" name="mpwd" class="mpwd">
			<div class="checkconfirm"></div>
			
			<div>
				사는지역:<select name="mresidence" class="mresidence">
						<option>서울</option>
						<option>경기</option>
						<option>안산</option>
						<option>수원</option>
						<option>인천</option>
					</select>
			</div>	
			
			<div>
				성별:<input type="radio" name="mmw" value="남" class="mmw">남
				   <input type="radio" name="mmw" value="여" class="mmw">여
			</div>
			<div class="title"> 폰번호</div>
				<div><input  type="text" name="mphone1" class="mphone1"></div>
				<div><input  type="text" name="mphone2" class="mphone2"></div>
				<div><input  type="text" name="mphone2" class="mphone3"></div>
				<button onclick="getauth()" type="button">인증하기</button>
					
			
			<div>
				이미지프로필:<input type="file" name="mimg" class="mimg">
			</div>
			<div>
				<button onclick="register()" type="button">회원등록</button>
			</div>
		</form>
		
		
	</div>
		
		
		
		


<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
 <script src="/oimarket/js/member/signup.js" type="text/javascript"></script>




</body>
</html>