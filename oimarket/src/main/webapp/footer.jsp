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
	
		.footerbox{
			width : 600px; 
			position : fixed;
			bottom : 0px;
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
				<div><i class="fas fa-home"></i> </div>
				<div class="menuname">홈</div>
			</div>
			<div class="menubox">
				<div><i class="fas fa-newspaper"></i>   </div>
				<div class="menuname">커뮤니티</div>
			</div>
			<div class="menubox">
				<div><i class="fas fa-edit"></i>   </div>
				<div class="menuname">제품등록</div>
			</div>
			<div class="menubox">
				<div><i class="fas fa-comments"></i>   </div>
				<div class="menuname">채팅</div>
			</div>
			<div class="menubox">
				<div><i class="fas fa-user"></i>   </div>
				<div class="menuname">나의당근</div>
			</div>
			
		</div>
	</div>


	<!-- jquery -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>	

</body>
</html>