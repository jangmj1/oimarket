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
			
		아이디 : <input type="text" class="mid"> <br>
		핸드폰번호 : <input type="text" class="mphone">
			
			<button onclick="findpwd()" type="button"> 비밀번호 찾기 </button> <br>
		
		<div class="noinfo"></div>
		
		임시 비밀번호 : <div class="tempwd"></div>
		
		</div>
		
	</div>

	

	<script src="/oimarket/js/member/login.js" type="text/javascript"></script>
</body>
</html>