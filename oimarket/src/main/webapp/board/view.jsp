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
	<%
		String bno = request.getParameter("bno");
		String btitle = request.getParameter("btitle");
	%>
	<div class="wrap">
		<div class="container">
			<div>
			
				<div> 게시물번호 </div>
				<div class="bno"><%=bno %></div>
			
			</div>
			
			<div>
			
				<div> 작성일 / 조회수 / 좋아요 / 싫어요 </div>
				<div class="infobox"></div>
			
			</div>
			
			<div>
			
				<div> 작성자(프로필) </div>
				<div class="pimgbox"></div>
			
			</div>
			
			<div>
			
				<div> 제목 </div>
				<div class="btitle"></div>
			
			</div>
			
			<div>
			
				<div> 내용 </div>
				<div class="bcontent"></div>
			
			</div>
			
			<div>
			
				<div> 첨부파일 </div>
				<div class="bfile"></div>
			
			</div>
			<div class="bbtnbox">
			
			</div>
			
		</div>
	</div>
	
	<script src="/oimarket/js/board/view.js" type="text/javascript"></script>
</body>
</html>