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
		<form class="updateForm">
			<div>
			카테고리 : <select name="bcno" class="bcno">
						<option value="1">커뮤니티</option>
						<option value="2">QnA</option>
						<option value="3">노하우</option>
					</select>
			</div>
			<div>
				글 제목 : <input name="btitle" class="btitle" type="text">
			</div>
			<div>
				글 내용 : <textarea name="bcontent" class="bcontent"></textarea>
			</div>
			<div class="bfilebox">
			
			</div>
			<button onclick="bupdate()" type="button">수정</button>
		</form>
	</div>
	</div>
	<script src="/oimarket/js/board/update.js"></script>
</body>
</html>