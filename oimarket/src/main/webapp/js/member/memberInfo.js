
let memberInfo = null;

// [최성아] 회원 수정 , 탈퇴 위한 로그인 정보 호출 
getLogin();
function getLogin() {
	$.ajax({
		url : "/oimarket/login" ,
		method : "get" ,
		async : false ,
		success : (r) => {
			memberInfo = r;
			console.log(r);
			let html = '';
			
			if ( r.mid != null){
				html += `
					<div> ${r.mid} </div>
					<div> ${r.mimg} </div>
					<div> ${r.mmw} </div>
					<div> ${r.mname} </div>
					<div> ${r.mphone} </div>
					<div> ${r.mresidence} </div>
						`
			}else if ( r.mid == null ){
				alert('로그인 후 이용가능합니다.')
				location.href = "/oimarket/member/login.jsp";
			}	
			document.querySelector('.mainbox').innerHTML = html;
			
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

// [최성아] 회원 수정
function setUpdate() {
	location.href = "/oimarket/member/update.jsp"
}









