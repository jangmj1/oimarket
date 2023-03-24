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
			<div>
				이름:<input type="text" name="mname">
			</div>
			<div>
				아이디:<input type="text" name="mid">
			</div>
			<div>
				비밀번호:<input type="password" name="mpwd">
			</div>
			<div>
				사는지역:<select name="mresidence">
						<option>서울</option>
						<option>경기</option>
						<option>안산</option>
						<option>수원</option>
						<option>인천</option>
					</select>
			</div>	
			
			<div>
				성별:<input type="radio" name="mmw" value="남">남
				   <input type="radio" name="mmw" value="여">여
			</div>
			<div>
				폰번호:<span><input type="text" name="mphone"> -</span>
					<span><input type="text" name="mphone"> -</span>
					<span><input type="text" name="mphone"></span>
			</div>
			<div>
				이미지프로필:<input type="file" name="mimg">
			</div>
			<div>
				<button onclick="register()" type="button">회원등록</button>
			</div>
		</form>
		
		<div>
			<table class="tablebox" border="1"></table>
		</div>
	</div>
		
		
		
		
		


<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
 <script src="/oimarket/js/member/signup.js" type="text/javascript"></script>




</body>
</html>