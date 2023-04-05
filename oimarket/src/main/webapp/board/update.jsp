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
	<%
		// 1. jsp로그인 여부 제어
		Object o = request.getSession().getAttribute("login");
		if(o==null){
			response.sendRedirect("/oimarket/member.login.jsp");
		}
		// 2. HTTP URL 안에있는 매개변수 bno 호출
		String bno = request.getParameter("bno");
	%>
	<input type="hidden" class="bno" value="<%=bno %>">
	<div class="container">
		<h3> 글수정페이지 </h3>
		<form>
			<div>
			
			</div>
		</form>
	</div>
	</div>
	<script src="/oimarket/js/board/update.js"></script>
</body>
</html>