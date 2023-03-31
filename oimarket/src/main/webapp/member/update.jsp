<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@ include file="/footer.jsp" %>
	
	<div class="wrap">
		<div class="mainbox">
			
			<h3> ------------------회원 정보 수정 창 --------------</h3>
			<form class="updateForm">
				<div>
					
					<div>
						<div> 아이디 </div>
						<div class="mid">  </div>
					</div>
					
					<div>
						<img class="mimg" style="width: 30%;" src="/oimarket/img/default.webp">
						프로필변경 : <input type="file" name="newmimg"> <br>
						<input class="defaultimg" type="checkbox"> 기본프로필 사용
					</div>					
					
					<div>
						<div> 닉네임 </div> <input type="text" name="newmname">
						
					</div>

					<div>
						<div> 핸드폰 </div> <input type="text" name="newmphone">
					</div>
					
					<div>
						<div> 거주지 </div> <input type="text" name="newmresidence">
					</div>
					
					<div>
						<div> 현재비밀번호 </div>
						<input type="text" class="mpwd" name="mpwd">
					</div>
					<div>
						<div> 새 비밀번호 </div>
						<input type="text" class="newmpwd" name="newmpwd">
					</div>

					

					<button onclick="setUpdate()" type="button"> 회원 수정 </button>
				</div>
			</form>		
			
			
		</div>
	
	</div>
	
	
	<script src="/oimarket/js/member/update.js" type="text/javascript"></script>
</body>
</html>