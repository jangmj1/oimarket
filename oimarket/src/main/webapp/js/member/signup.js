console.log('gg');

// 1. 회원가입

function signup(){
	let signupForm = document.querySelectorAll('.signupForm')[0];
	let signupFormData = new FormData(signupForm);
	console.log(signupFormData);
	
	$.ajax({
		url:"/oimarket/oimarket/member/info",
		method:"post",
		data:signupFormData,
		contentType : false ,
		processData : false , 
		success:(r)=>{
			console.log(r);
			if(r=='true'){alert('회원가입 성공(DB에 저장댐)'); location.href="/oimarket/index.jsp"}
			else{alert('회원가입 실패...')}
		}
	})
}

// 2. 아이디 유효성 검사 [1.문자패턴체크 2.중복검사]
function idcheck(){
	let mid = document.querySelector('.mid').value; // 입력때마다 값 가져오기
	console.log(mid)
	
	let midj = /^[a-zA-Z0-9]{5,15}$/	// 정규표현식 영문+숫자 포함 5~15글자
	
	console.log(midj.test(mid))
	if(midj.test(mid)){
		$.ajax({
			url :"/oimarket/mconfirm",
			method: "get",
			data:{"mid" : mid},
			success:(r)=>{
				console.log('ajax 통신')
				console.log(r)
				if(r=='true'){document.querySelector('.midconfirm').innerHTML='사용불가능한아이디';}
				else{document.querySelector('.midconfirm').innerHTML='사용가능한아이디';}
			}
		})
	}
}