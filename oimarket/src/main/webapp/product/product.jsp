<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="/oimarket/css/product/product.css" rel="stylesheet">
<link href="/oimarket/css/main.css" rel="stylesheet"> 

</head>
<body>
	
	<div class="wrap main">
			<form class="productform">
				<div class="form-floating">
				  <select  class=" form-select " id="floatingSelect" aria-label="Floating label select example" name="pcno" style="width: 200px;">
				    <option value="1">생활가전</option>
				    <option value="2">의류</option>
				    <option value="3">뷰티미용</option>
				    <option value="4">가공식품</option>
				    <option value="5">식물</option>
				  </select>
				  <label for="floatingSelect">카테고리를 선정해주세요</label>
				</div>
				<div class="productInfo">
				  <input type="text" class=" ptitle_1" id="floatingInput"  name="ptitle" placeholder="제목을 적어주세요">
				  <textarea   class="pcontent_1" name="pcontent"  style="height: 100px" placeholder="내용을 적어주세요" ></textarea>
				  <input type="number" class="pprice_1" id="floatingInput"  name="pprice" placeholder="금액을 적어주세요" >
				</div>
				
				
				<p>장소를 지정해 주세요</p>
				<div id="map" style="height:300px;"></div>
				<div>
					<input type="file" name="pfiles" class="pfiles"  multiple="multiple" accept="image/*">
				</div> 
				<button class="btn" onclick="productbtn()" type="button">물품 등록</button>
				
			</form>	
		
	</div>
<!-- 카카오지도 -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=302a2d5c43d29cb22e0d5d10d6434665"></script>

<!-- 사용자 -->
<script src="/oimarket/js/product/product.js" type="text/javascript"></script>


<%@include file="/footer.jsp" %>


</body>
</html>