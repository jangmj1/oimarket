<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%@include file="/footer.jsp" %>
	<div class="wrap">
		<div class="container">
			<h3> 글목록 </h3>
			
			
			<table class="boardTable table">

			</table>
			<button onclick="boardUpload()" type="button">글쓰기</button> 
		</div>
	</div>
	
	<script src="/oimarket/js/board/list.js" type="text/javascript"></script>
</body>
</html>