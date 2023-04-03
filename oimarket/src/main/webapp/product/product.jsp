<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="/oimarket/css/product/product.css" rel="stylesheet">
</head>
<body>
	<%@include file="/footer.jsp" %>
	<div class="wrap">
		<div class="container main">
		
			<form class="productform">
				<div>카테고리:
					<select name="pcno">
						<option value="1">생활가전</option>
						<option value="2">의류</option>
						<option value="3">뷰티미용</option>
						<option value="4">가공식품</option>
						<option value="5">식물</option>
					</select>
				</div>
				<div>제목:
					<input type="text" name="ptitle">
				</div>
				
				<div>내용:
					<input type="text" name="pcontent">
				</div>
				
				<div>가격:
					<input type="text" name="pprice">
				</div>
				위치:
				<div id="map" style="width:100%;height:350px;"></div>
				<div>
					<input type="file" name="pfiles" multiple="multiple" accept="image/*">
				</div> 
				<div>
					<button onclick="productbtn()" type="button">물품 등록</button>
				</div>
			</form>	
		
		</div>
	</div>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7a040eb3ed49e99fca18b3683cbee375"></script>
<script src="/oimarket/js/product/product.js" type="text/javascript"></script>


</body>
</html>