<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="width: 100%">
<head>
<meta charset="UTF-8">

	<link href="/oimarket/css/member/update.css" rel="stylesheet">
	<link href="/oimarket/css/main.css" rel="stylesheet">
</head>
<body style="width: 100%">
	<%@ include file="/footer.jsp" %>
	
	<div class="wrap main Updatewrap">

		<div class="mypageMainbox">
			<div class="updateLogo" >
				<img onclick="logo()" alt="" src="/oimarket/img/아이콘.png"> 
			</div>			
			
			<form class="updateForm">
				<div class="updateMainbox">
					<div class="imgbox">
						<img class="mimg"src="/oimarket/img/default.webp">
						<div class="imgbtn">
							<input class="defaultimg" type="checkbox"><span>기본프로필 사용</span>
							<input style=" width: 200px;" type="file" name="newmimg">
						</div>
					</div>		
					<div class="updatemyinfo">
					
						<div> 아이디 </div>
						<div class="mid">  </div>
					
						<div> 닉네임 </div> <input class="mname" type="text" name="newmname">
						
						<div> 핸드폰 </div> <input class="mphone"  type="text" name="newmphone">
					
						<div> 거주지 </div> <input class="mresidence" type="text" name="newmresidence">
					
					
						<div> 현재비밀번호 </div>
						<input class="nowpwd" type="text"  name="mpwd">
					
						<div> 새 비밀번호 </div>
						<input class="newPwd" type="text"  name="newmpwd">
						
					</div>

					

					<button class="updatebtn" onclick="setUpdate()" type="button"> 회원 수정 </button>
				</div>
			</form>		
			
			
		</div>
	
	</div>
	
	
	<script src="/oimarket/js/member/update.js" type="text/javascript"></script>
</body>
</html>