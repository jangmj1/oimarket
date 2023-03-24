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
	
		이름 : <input type="text" class="mname"> <br>
		핸드폰번호 : <input type="text" class="mphone">
	
			<button onclick="findid()" type="button"> 아이디 찾기 </button> <br>
		
		찾은 아이디 : <div class="getid"> </div>
		
		</div>
		
	</div>

	<script src="/oimarket/js/member/login.js" type="text/javascript"></script>
	
</body>
</html>