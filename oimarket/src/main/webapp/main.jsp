<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

	<style type="text/css">
	
		body{
		 -ms-overflow-style: none;
		 }
		 
		::-webkit-scrollbar {
		  display: none;
		}
		
		/*특정 부분 스크롤바 없애기*/
		
		.box{
		   -ms-overflow-style: none;
		}
		.box::-webkit-scrollbar{
		  display:none;
		}
	
	</style>

<link href="/oimarket/css/main.css" rel="stylesheet"> 

<!-- css 부트스트립 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>


	<%@include file="/footer.jsp" %>
	<div class="wrap main">
		<div class="container">
			
			<div class="topcontent">
				<select class="form-select " aria-label="Default select example">
					<option>전체보기</option>
					<option>생활가전</option>
					<option>의류</option>
					<option>뷰티미용</option>
					<option>가공식품</option>
					<option>식물</option>
				</select>
				<div >
					<input type="text">
					<i class="fas fa-search"></i>
				</div>
			</div>
			<div class="contentbox">
				
				
				
				
			</div>
			
		
		</div>
	</div>

<!-- 부트스트립 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<!-- 부트스트립 -->
<script src="/oimarket/js/main.js" type="text/javascript"></script>
</body>
</html>