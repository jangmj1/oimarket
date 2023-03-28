<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<form class="updateForm">
			<div>
				<img width="20%"class="mimg" alt="" src="/jspweb/member/pimg/기본프로필.webp">
				<br>프로필변경:<input type="file" name="newmimg">
			</div>
			<div>
				<div>아이디</div>
				<div class="mid"></div>
			</div>
			<div class="title">이름</div>
				<input type="text" name="mname" class="name">
			<div>
				<div>현재비밀번호</div>
				<input class="mpwd" name="mpwd">
			</div>
			<div>
				<div>새비밀번호</div>
				<input class="newmpwd" name="newmpwd">
			</div>
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
				<div>핸드폰번호</div>
				<input class="mphone1"name="mphone1"> -
				<input class="mphone2"name="mphone2"> -
				<input class="mphone3"name="mphone3">
			</div>
			<button onclick="setUpdate()" type="button">회원수정</button>
		</form>
	</div>









<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="/oimarket/js/member/update.js"type="text/javascript"></script>
</body>
</html>