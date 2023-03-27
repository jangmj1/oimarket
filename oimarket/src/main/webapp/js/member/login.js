
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
				location.href="/oimarket/main.jsp";
			} else { 
				alert('아이디나 비밀번호가 옳지 않습니다.')
			}

		} // success end
	}) // ajax end
	
} // login end
