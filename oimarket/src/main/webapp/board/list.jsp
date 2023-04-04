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
	 	// 1. HTTP GET <a href="URL경로?변수명=값"> 전달된 매개변수 가져오기 
	 	String cno = request.getParameter("cno");
	 	// 2. 표현식을 이용한 input , div 등등 대입 
	 %>
	 <!-- cno 숨겨서 js에게 전달  -->
	<input type="hidden" class="cno" value="<%=cno%>">
		<div class="container">
			<h3 class="cname"></h3>
			<span>
				<select class="key">
					<option value="btitle">제목</option>
					<option value="mid">작성자</option>
				</select>
			</span>
			<span><input class="keyword" type="text"></span>
			<span><button onclick="getsearch()" type="button">검색</button></span>
			<span><button onclick="setsearch()" type="button">전체보기</button></span>
			<span><button onclick="boardUpload()" type="button">글쓰기</button> </span>
			
			
			<div class="boardTable table">

			</div>			
		</div>
	</div>
	
	<script src="/oimarket/js/board/list.js" type="text/javascript"></script>
</body>
</html>