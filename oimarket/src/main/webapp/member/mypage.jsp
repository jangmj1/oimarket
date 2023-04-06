<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<link href="/oimarket/css/member/mypage.css" rel="stylesheet">
	
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
			
			<!-- 1. 등록제품 출력 창  -->
			<div class="mypageRegistbox">
				<div> 내가 등록한 물품 출력 창 </div>
				<div> 내가 등록한 물품 출력 창 </div>
				<div> 내가 등록한 물품 출력 창 </div>
				<div> 내가 등록한 물품 출력 창 </div>
				<div> 내가 등록한 물품 출력 창 </div>
			</div>
				
			<!-- 2. 판매제품 출력 창  -->	
			<div class="mypageSellbox">
				<div> 내가 판매중인 물품 출력 창 </div>
				<div> 내가 판매중인 물품 출력 창 </div>
				<div> 내가 판매중인 물품 출력 창 </div>
				<div> 내가 판매중인 물품 출력 창 </div>
				<div> 내가 판매중인 물품 출력 창 </div>
			</div>
			
			<!-- 3. 구매제품 출력 창  -->
			<div class="mypageBuybox">
				<div> 내가 구매한 물품 출력 창 </div>
				<div> 내가 구매한 물품 출력 창 </div>
				<div> 내가 구매한 물품 출력 창 </div>
				<div> 내가 구매한 물품 출력 창 </div>
				<div> 내가 구매한 물품 출력 창 </div>
			</div>
			
			<!-- 4. 찜한 제품 출력 창  -->
			<div class="mypageLikebox">
				<div> 내가 찜한 물품 출력 창 </div>
				<div> 내가 찜한 물품 출력 창 </div>
				<div> 내가 찜한 물품 출력 창 </div>
				<div> 내가 찜한 물품 출력 창 </div>
				<div> 내가 찜한 물품 출력 창 </div>
			</div>						

			<!-- 5. 게시물 출력 창  -->
			<table border="1" class="mypageBoardbox">

			</table>
			
		</div>
		

		
	
	</div>	


	<script src="/oimarket/js/member/mypage.js" type="text/javascript"></script>
</body>
</html>