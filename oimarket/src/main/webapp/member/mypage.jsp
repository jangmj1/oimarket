<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<link href="/oimarket/css/member/mypage.css" rel="stylesheet">
	<link href="/oimarket/css/main.css" rel="stylesheet">
</head>
<body>

	<%@include file="/footer.jsp" %>
	
	
	
	<div class="wrap mypageWrap">
		<div class="mypageMainbox">
			<div class="mypageLogo" >
				<img onclick="logo()" alt="" src="/oimarket/img/아이콘.png"> 
			</div>
			
			<!-- 개인정보 호출 -->
			<div class="container mypageInfobox"></div>

			<h3> ------------------ 등록제품 출력 창 ------------------ </h3>				
			<!-- 1. 등록제품 출력 창  -->	
			<table border="1" class="mypageRegistbox">

			</table>
			
			<h3> ------------------ 판매제품 출력 창 ------------------ </h3>				
			<!-- 2. 판매제품 출력 창  -->	
			<table border="1" class="mypageSellbox">

			</table>
			
			<h3> ------------------ 구매제품 출력 창 ------------------ </h3>			
			<!-- 3. 구매제품 출력 창  -->
			<table border="1" class="mypageBuybox">

			</table>
			
			<!-- 4. 찜한 제품 출력 창  -->
			<h3> ------------------ 찜한제품 출력 창 ------------------ </h3>
			<table border="1" class="mypageLikebox">

			</table>
					

			<h3> ------------------ 게시물 출력 창 ------------------ </h3>
			<!-- 5. 게시물 출력 창  -->
			<table border="1" class="mypageBoardbox">

			</table>
			
		</div>
		

		
	
	</div>	


	<script src="/oimarket/js/member/mypage.js" type="text/javascript"></script>
	
</body>
</html>