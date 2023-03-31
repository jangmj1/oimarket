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
			<h3> 글쓰기 페이지 </h3>
			<form class="writeForm">
				카테고리 : <select name="bcno">
							<option value="1"> 공지사항 </option>
							<option value="2"> 자유게시판 </option>
							<option value="3"> QnA </option>
							<option value="4"> 나만의 팁 </option>
						</select>
				제목 : <input name="btitle" type="text">
				내용 : <textarea name="bcontent" rows="10" cols="10"></textarea>
				첨부파일 : <input name="bfile" type="file">
			</form>
			<button onclick="bwrite()">글쓰기</button>
		</div>
 	</div>
	<script src="/oimarket/js/board/write.js" type="text/javascript"></script>
</body> 
</html>