console.log('연동')

//아이디 존재 여부 확인 특수문자 문자길이 체크 함수 
function namecheck(){//이름 유효성(한글만가능)
	let mid=document.querySelector('.mname').value;
	let testname=/^[ㄱ-힣]{2,5}$/
	if(testname.test(mid)){
			document.querySelector('.checkname').innerHTML='OK'
			document.querySelector('.checkname').style.color='blue';
	}else{
			document.querySelector('.checkname').innerHTML='한글로입력해주세요'
			document.querySelector('.checkname').style.color='red';
		
	}
}

function idcheck(){//아이디 유효성(정규식 표현 및 존재여부)
	let mid=document.querySelector('.mid').value;
	console.log(mid.length)
	//특수문자검사할것
	if(mid.length<1){//아무런글자도없으면 => 아무것도안썼는데 자꾸 ok뜨길래..
		document.querySelector('.checkid').innerHTML='';
		return;
	}
	
	let testid= /^[a-z]+[a-z0-9]{5,19}$/g;
	if(testid.test(mid)){//정규표현식대로 아이디 기재를 했으면!
		
		$.ajax({//아이디가 있는지 없는지 두번째 유효성 검사
			url:"/oimarket/findmember",
			method:"get",
			data:{"mid":mid},
			success:(r)=>{
				console.log('아이디 체크 연공성공')
				console.log(r)
				if(r=='true'){
					document.querySelector('.checkid').innerHTML='OK'
					document.querySelector('.checkid').style.color='blue';
					
				}else{
					document.querySelector('.checkid').innerHTML='같은 아이디가 존재합니다'
					document.querySelector('.checkid').style.color='red';
					
				}
			}
		})
	}else{
					document.querySelector('.checkid').innerHTML='아이디는 영소문자로 시작하는 6~19로 기재해주세요'
					document.querySelector('.checkid').style.color='red';
		
	}
		
}

function pwdcheck(){//비밀번호 유효성 검사
	let mpwd=document.querySelector('.mpwd').value;
	
	let testpwd=/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
	
	if( testpwd.test(mpwd) ) {//정규식 통과시
					document.querySelector('.checkpwd').innerHTML='OK'
					document.querySelector('.checkpwd').style.color='blue';
	}else{
		
					document.querySelector('.checkpwd').innerHTML='비밀번호는 8 ~ 16자 영문, 숫자 조합 해주세요'
					document.querySelector('.checkpwd').style.color='red';
	}
}


function repwdcheck(){
	let repwdcheck=document.querySelector('.repwdck').value;
	let mpwd=document.querySelector('.mpwd').value;
	if(repwdcheck==mpwd){
					document.querySelector('.repwdcheck').innerHTML='OK'
					document.querySelector('.repwdcheck').style.color='blue';
					
	}else{
					document.querySelector('.repwdcheck').innerHTML='비밀번호가 서로 다릅니다'
					document.querySelector('.repwdcheck').style.color='red';
	}
}

function phone(){
	let phone = document.querySelector('.phone').value
	console.log(phone)
}




function signup(){
	console.log('회원가입연동')
	
	let signupForm=document.querySelectorAll('.signupForm')[0];
	let signupFormData=new FormData(signupForm);
	console.log(signupFormData);
	
	$.ajax({
		url:"/oimarket/member/info",
		method:"post",
		data:signupFormData,
		contentType:false,
		processData:false,
		success:(r)=>{
			console.log('연동성공')
			console.log(r)
			if(r=='true'){
				alert('가입을 축하합니다.')
			}
		}
		
	});
	
	
};