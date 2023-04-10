<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="/oimarket/css/product/chatting.css" rel="stylesheet">
<link href="/oimarket/css/main.css" rel="stylesheet"> 

	<!-- css 부트스트립 -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<link href="/oimarket/css/main.css" rel="stylesheet"> 
</head>
<body>
	<%@include file="/footer.jsp" %>
	<% int pno=Integer.parseInt(request.getParameter("pno"));  %> 
	<!-- http://localhost:8080/oimarket/product/chatting.jsp?pno=8 주소 이렇게 넘어옴 -->	
	<!-- ws://localhost:8080/oimarket/chatting/asd1 연결소켓..이건뭐임? -->	
			<input class="pno" type="hidden" value="<%=pno%>">
		<div class="wrap chat">
			<div class="chattingbox">
				
				
			</div>
			<div class="belowArea">
				<textarea class="textbox msgbox" rows="" cols=""></textarea>
				<div class="btnbox">
					<button onclick="보내기()" class="send" type="button">보내기</button>
				</div>
			</div>
		</div>
	
	<script src="/oimarket/js/chat/chatting.js" type="text/javascript"></script>
</body>
</html>