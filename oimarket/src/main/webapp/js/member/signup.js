console.log('member js 연동')

function signup(){
		
	let signupForm = document.querySelectorAll('.signupForm')[0];
	let signupFormdata = new FormData ( signupForm );
	
	console.log( signupForm )
	console.log( signupFormdata )
	
	$.ajax({
		url : "/oimarket/member/info" ,
		method : "post" ,
		data : signupFormdata ,
		contentType : false ,
		processData : false ,
		success : (r) => {
			console.log(r);
				if ( r == 'true'){
					alert('회원가입 성공')
				} else {
					alert('회원가입 실패')
				}
			} // success end 
	}) // ajax end
}

let checkconfirm = document.querySelectorAll('.checkconfirm')

/*// id 유효성검사
function idcheck(){ // onkeyup : 키 누르고 떼었때
	let mid = document.querySelector('.mid').value;
	let midj = /^[a-z0-9]{5,30}$/	
	if( midj.test( mid ) ){	// 정규표현식 패턴이 true 이면 
		// 아이디 중복검사 [ js->서블릿->dao 에게 해당 아이디 검색 select ]
		$.ajax({
			url : "/jspweb/projectmconfirm" ,
			method : "get" , 
			data : { "mid" : mid } ,			// 입력받은 아이디 보내기 
			success : (r)=>{ 
				if( r == 'true'){ 
					checkconfirm[0].innerHTML = '사용중인 아이디입니다.';
				}else{
					checkconfirm[0].innerHTML = 'O';
				}
			}
		}) // ajax end 
		
	}else{ // 정규표현식 패턴이 false 이면 
		checkconfirm[0].innerHTML = '영소문자+숫자 조합 5~30사이로 입력해주세요';
	}
}*/



