<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/oimarket/css/main.css" rel="stylesheet">
<link href="/oimarket/css/board/view.css" rel="stylesheet">
</head>
<body>
	<%
		Object o = request.getSession().getAttribute("login");
		if(o==null){
			response.sendRedirect("/oimarket/member/login.jsp");
		}
	%>
	<%@include file="/footer.jsp" %>
	<%
		String bno = request.getParameter("bno");
		String btitle = request.getParameter("btitle");
	%>
	
	<div class="wrap">
	<input type="hidden" class="bno" value="<%=bno %>">
		<div class="container">
			<div>

				
			
			</div>
			
			<div class="biginfobox">

				<span class="infoboxdate"></span>
				<span class="infobox"></span>
			
			</div>
			
			<div>
			
				<img class="mimg hpimg">
						
				<div class="mid"></div>
			
			</div>
			
			
			
			<div>
			
				<div class="btitle"></div>
			
			</div>
			
			<div>
			
				<div class="bcontent"></div>
			
			</div>
			
			<div>
			
				<div> 첨부파일 </div>
				<div class="bfile"></div>
			
			</div>
			<div class="bbtnbox">
			
			</div>
			
			<div class="replycount"></div>
			
			<div class="replywritebox">
				<textarea class="rcontent" rows="" cols=""></textarea>
				<button class="rwritebtn bbtn" onclick="rwrite()" type="button">댓글 작성</button>
			</div>
			
			<div class="replylistbox"></div>
			
		</div>
	</div>
	
	<script src="/oimarket/js/board/view.js" type="text/javascript"></script>
</body>
</html>