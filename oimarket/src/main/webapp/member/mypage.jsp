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

			<div class="mypageLikebox">
				<div> 내가 찜한 물품 출력 창 </div>
				<div> 내가 찜한 물품 출력 창 </div>
				<div> 내가 찜한 물품 출력 창 </div>
				<div> 내가 찜한 물품 출력 창 </div>
				<div> 내가 찜한 물품 출력 창 </div>
			</div>
			
			<div class="mypageBoardbox">
				<div> 내가 게시한 글 출력 창 </div>
				<div> 내가 게시한 글 출력 창 </div>
				<div> 내가 게시한 글 출력 창 </div>
				<div> 내가 게시한 글 출력 창 </div>
				<div> 내가 게시한 글 출력 창 </div>
			</div>
			
		</div>
		

		
	
	</div>	


	<script src="/oimarket/js/member/mypage.js" type="text/javascript"></script>
</body>
</html>