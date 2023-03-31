<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> oi Market</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<!-- 개인 css -->
	<link href="/oimarket/css/member/header.css" rel="stylesheet">
	<link href="/oimarket/css/member/login.css" rel="stylesheet">
	<link href="/oimarket/css/index.css" rel="stylesheet">
	
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
	
	<style type="text/css">
		
		@media (max-width: 600px) {
		  .footerbox{
		  	display: flex !important;
		  }

		}
	
		.footerbox{
			width : 600px; 
			position : fixed;
			bottom:0px;
			border-top: 1px solid #e8e8e8;		
			padding: 10px;
			 display: flex;
    		justify-content: space-around;
    		background-color: white;
    		z-index: 999;
		}
		

		
		.menubox{
			width: 19%;
			padding: 10px;
			display: flex;
		    flex-direction: column;
		    align-items: center;
		    font-size: 25px;
		}
		.menuname{
		
			margin-top : 5px;
			font-size: 12px;
		}

	</style>

</head>
<body>


	<div class="wrap">
		<div class="footerbox">
			<div class="menubox">
				<div onclick="homeGo()"><i class="fas fa-home"></i> </div>
				<div class="menuname">홈(물품출력)</div>
			</div>
			<div class="menubox">
				<div><i class="fas fa-newspaper"></i>   </div>
				<div class="menuname"><a href="/oimarket/board/list.jsp">게시판</a></div>
			</div>
			<div class="menubox">
				<div><i class="fas fa-edit"></i>   </div>
				<div class="menuname">물품등록</div>
			</div>
			<div class="menubox">
				<div><i class="fas fa-comments"></i>   </div>
				<div class="menuname">쪽지함</div>
			</div>
			<div  onclick="mypageGo()" class="menubox">
				<div><i class="fas fa-carrot"></i>   </div>
				<div class="menuname"> 마이페이지 </div>
			</div>
			
		</div>
	</div>
	
	



	<!-- jquery -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>	
	<script src="/oimarket/js/footer.js" type="text/javascript"></script>
</body>
</html>