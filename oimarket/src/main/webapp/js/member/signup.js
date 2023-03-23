console.log('member js 연동')

// span 유효성검사 값 가져오기
let checkconfirm = document.querySelectorAll('.checkconfirm')

// 회원가입
function signup(){

	let count = 0;
	for ( let i = 0 ; i<checkconfirm.length; i++ ){
		if(checkconfirm[i].innerHTML == '✓'){ count ++ }
	}
	if( count != 5 ) { alert('정상적으로 입력되지 않은 데이터가 있습니다.'); return; }
	
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
	})
}

// 유효성검사-1(이름 null 검사)
function nullnamecheck(){
	let mname = document.querySelector('.mname').value;

		if( mname != '' ){ // 두 비밀번호간의 동일성 체크 [ 두 비밀번호가 서로 다르면 ]
			checkconfirm[0].innerHTML = '✓'
		}else{ // 같으면
			checkconfirm[0].innerHTML = '이름을 입력해주세요.'
		}	 
}

// 유효성검사0(거주지 null 검사)
function nullresidcheck(){
	let mresidence = document.querySelector('.mresidence').value;
		if( mresidence != '' ){ // 두 비밀번호간의 동일성 체크 [ 두 비밀번호가 서로 다르면 ]
			checkconfirm[4].innerHTML = '✓'
		}else{ // 같으면
			checkconfirm[4].innerHTML = '거주지를 입력해주세요.'
		}	 
	
}

// 유효성검사1(아이디 중복 검사)
function idcheck(){ 
	let mid = document.querySelector('.mid').value;
	console.log(mid)
	let midj = /^[a-z0-9]{5,30}$/	
	if( midj.test( mid ) ){	// 정규표현식 패턴이 true 이면 
		// 아이디 중복검사 [ js->서블릿->dao 에게 해당 아이디 검색 select ]
		$.ajax({
			url : "/oimarket//member/mconfirm1" ,
			method : "get" , 
			data : { "mid" : mid } ,			// 입력받은 아이디 보내기 
			success : (r)=>{ 
				if( r == 'true'){ 
					checkconfirm[1].innerHTML = '사용 중인 아이디입니다.';
				}else{
					checkconfirm[1].innerHTML = '✓';
				}
			}
		}) // ajax end 
		
	}else{ // 정규표현식 패턴이 false 이면 
		checkconfirm[1].innerHTML = '영소문자+숫자 조합 5~30사이로 입력해주세요';
	}
}

// 유효성검사2(비밀번호 정규식검사)
function pwdcheck(){ 
	let mpwd = document.querySelector('.mpwd').value; // 1. 입력받은 값 가져오기 
	// 2. 정규표현식 : 영대소문자+숫자 조합 5~20 글자 
	let mpwdj = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{5,20}$/
	// 3. 제어
	if( mpwdj.test( mpwd ) ){
		checkconfirm[2].innerHTML = '사용 가능한 비밀번호입니다.'; 
	}else{
		checkconfirm[2].innerHTML = '영대소문자 + 숫자 조합 5~20 글자'
	}
} // pwdcheck end

// 유효성검사3(비밀번호 일치 확인)
function pwdconfirmcheck(){
	let mpwd = document.querySelector('.mpwd').value;
	let mpwdconfirm = document.querySelector('.mpwdconfirm').value;

		if( mpwd != mpwdconfirm ){ // 두 비밀번호간의 동일성 체크 [ 두 비밀번호가 서로 다르면 ]
			checkconfirm[3].innerHTML = '비밀번호가 일치하지 않습니다.'
		}else{ // 같으면
			checkconfirm[3].innerHTML = '✓'
		}
	
} // pwdconfirmcheck end

// 유효성검사4(번호 중복 검사)
function phonecheck(){ // onkeyup : 키 누르고 떼었때
	let mphone = document.querySelector('.mphone').value;
	let mphonej = /^[0-9]{11}$/	
	if( mphonej.test( mphone ) ){	// 정규표현식 패턴이 true 이면 
		// 아이디 중복검사 [ js->서블릿->dao 에게 해당 아이디 검색 select ]
		$.ajax({
			url : "/oimarket//member/mconfirm2" ,
			method : "get" , 
			data : { "mphone" : mphone } ,			// 입력받은 아이디 보내기 
			success : (r)=>{ 
				if( r == 'true'){ 
					checkconfirm[5].innerHTML = '사용 중인 번호입니다.';
				}else{
					checkconfirm[5].innerHTML = '✓';
				}
			}
		}) // ajax end 
		
	}else{ // 정규표현식 패턴이 false 이면 
		checkconfirm[5].innerHTML = '숫자만을 이용해서 11자 입력해주세요.';
	}
}







