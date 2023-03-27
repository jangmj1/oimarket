
// 1. [최성아] 로그인
function login() {
	let mid = document.querySelector('.mid').value;
	let mpwd = document.querySelector('.mpwd').value;	
	
	$.ajax({
		url : "/oimarket/login" ,
		method : "post" ,
		data : { "mid" : mid , "mpwd" : mpwd } ,
		success : (r) => {

			if ( r == 'true' ){
				alert('로그인 성공')
				location.href = "/oimarket/member/memberInfo.jsp"	
			} else { 
				alert('아이디나 비밀번호가 옳지 않습니다.')
			}

		} // success end
	}) // ajax end
	
} // login end

// 2. [최성아] 아이디 찾기
function findid() {
	let mname = document.querySelector('.mname').value
	let mphone = document.querySelector('.mphone').value
	
	$.ajax({
		url : "/oimarket/find" ,
		data : { "type" : 1 , "mname" : mname , "mphone" : mphone } ,
		success : (r) => {
			if ( r == 'false'){
				document.querySelector('.getid').innerHTML = '일치하는 회원정보가 없습니다.';
				
			}else{
				document.querySelector('.getid').innerHTML = r;
			}
		} // success end
	}) // ajax end
	
}

// 3. [최성아] 비밀번호 찾기
function findpwd() {
	let info = {
		type : 2 ,
		mid : document.querySelector('.mid').value,
		mphone : document.querySelector('.mphone').value,	
	}
	
	$.ajax({
		url : "/oimarket/find" ,
		data : info ,
		success : (r) => {
			if ( r == 'false'){
				document.querySelector('.noinfo').innerHTML = '일치하는 회원정보가 없습니다.';
					
				}else{
					document.querySelector('.tempwd').innerHTML = r;
			}
		} // success end
	}) // ajax end

	
}
