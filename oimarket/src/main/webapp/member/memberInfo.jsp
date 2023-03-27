<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="/oimarket/css/info.css">

</head>

<body>
	<%@ include file="/header.jsp" %>

	<div class ="wrap"> 
		<div class="mainbox">
			
		
		
		<button onclick="setDelete()"> 회원 탈퇴 </button>
		<input type="text" class="deleteinput" placeholder="비밀번호 입력 후 탈퇴 버튼 누를시 탈퇴됩니다!"> <br>
		
		<button onclick="setUpdate()"> 회원 수정 </button>
		
		</div>
	</div>

	<script src="/oimarket/js/member/memberInfo.js" type="text/javascript"></script>
</body>
</html>