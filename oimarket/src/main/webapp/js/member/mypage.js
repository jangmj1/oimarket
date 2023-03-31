
// index.jsp 로 이동 ( 홈으로 이동 )
function logo(){
	location.href="/oimarket/main.jsp"
}

console.log(memberInfo)
// [최성아] 회원 탈퇴
getLogin();
function getLogin() {
	$.ajax({
		url : "/oimarket/login" ,
		method : "get" ,
		async : false ,
		success : (r) => {
			memberInfo = r;
			let html = '';
			
			if ( r.mid != null){
				html += `
					<div class="updateLine">
						<h3> 회원 정보 출력 </h3>
						<div>
							<button class="updatebtn" onclick="modal_Update()" type="button"> 회원 정보 수정 </button>
						</div>
					</div>
					<div class="mypageInfo"> <div class="mypageH">아이디</div>   ${r.mid} </div>
					<div class="mypageInfo"> <div class="mypageH">프로필</div>   ${r.mimg} </div>
					<div class="mypageInfo"> <div class="mypageH">닉네임</div>   ${r.mname} </div>
					<div class="mypageInfo"> <div class="mypageH">핸드폰</div>   ${r.mphone} </div>
					<div class="mypageInfo"> <div class="mypageH">거주지</div>   ${r.mresidence} </div>
					

					
					<div class="deleteLine">
						<div class="delete_input">
							<input type="text" placeholder="비밀번호 입력 후 탈퇴 버튼 누를시 탈퇴됩니다!"> 
						</div>
						<div>
							<button class="deletebtn" onclick="setDelete();" type="button"> 회원 탈퇴 </button> 
						</div>
					</div>
					
					
					`
			}else if ( r.mid == null ){
				alert('로그인 후 이용가능합니다.')
				location.href = "/oimarket/member/login.jsp";
			}	
			document.querySelector('.mypageInfobox').innerHTML = html;
			
		} // success end
	}) // ajax end
}

// [최성아] 회원 탈퇴
function setDelete() {
	
	$.ajax({
		url : "/oimarket/login" ,
		method : "delete" ,
		data : {"mpwd" : document.querySelector('.deleteinput').value } ,
		success : (r) => {
			if( r == 'true'){
				alert('회원 탈퇴 성공')
				location.href="/oimarket/member/index.jsp"
			}else{
				alert('입력 비밀번호가 옳지 않습니다.')
			}
			
		}
	}) // ajax end
}
// [최성아] 수정창으로 이동
function modal_Update() {
	location.href = "/oimarket/member/update.jsp"
}