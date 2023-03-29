<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="/oimarket/css/member/login.css" rel="stylesheet">
</head>
<body>
		
	<div class="wrap">
		<div class="mainbox">
			<div class="findid_mphone_loc">
				<a href="/oimarket/index.jsp"><img onclick="logo()" class="logo" alt="" src="/oimarket/img/아이콘.png"></a>
		
		
		
			
			<div class="title">
				<input  type="text" name="mid"class="mid" placeholder="아이디">	
			</div>			
			<div class="title">
				<input  type="text" name="mphone"class="mphone" placeholder="휴대폰번호">				
			</div>
		</div>
			<div class="findpwd_btn"> 
				<button class="findpwd"onclick="findpwd()"type="button" >비밀번호 찾기</button>
			</div>
	</div>
<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="/oimarket/js/member/login.js" type="text/javascript"></script>


</body>
</html>