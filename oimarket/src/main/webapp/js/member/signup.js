console.log('gg');


let checkconfirm = document.querySelectorAll('.checkconfirm');



// 2. 아이디 유효성 검사 [1.문자패턴체크 2.중복검사]
function idcheck(){//아이디 유효성(정규식 표현 및 존재여부)

	let mid=document.querySelector('.mid').value;
	console.log(mid)
	//특수문자검사할것
	if(mid.length<1){
		checkconfirm[1].innerHTML='';
		return;
	}
	
	let midj= /^[a-z]+[a-z0-9]{5,19}$/g;
	if(midj.test(mid)){//정규표현식대로 아이디 기재를 했으면!
		
		$.ajax({// 같은 아이디가 DB상에 존재하는지 확인을 위해 보낸다.
			url:"/oimarket/mconfirm",
			method:"get",
			data:{"mid":mid , "type" : 2}, 
			success:(r)=>{
				console.log('아이디 체크 연공성공')
				console.log(r)
				if(r=='true'){
					checkconfirm[0].innerHTML='O'
					
				}else{
					checkconfirm[0].innerHTML='같은 아이디가 존재합니다'
					
				}
			}
		})
	}
	else{checkconfirm[0].innerHTML='아이디는 영소문자로 시작하는 6~19로 기재해주세요'}		
}// end

// 3. 비번체크
function pwdcheck(){
	let mpwd = document.querySelector('.mpwd').value;
	console.log("mpwd :" +mpwd);
	// 정규표현식
	let mpwdj = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,20}$/	// 영어 1개이상 필수입력 / 숫자 1개이상필수입력인 영어 숫자 조합의 5~20글자
	console.log(mpwdj.test(mpwd))
	if(mpwdj.test(mpwd)){
		checkconfirm[1].innerHTML='O';	pwdrecheck(); // pwdrecheck(); 얘를 둠으로써 비번확인까지 올바르게 입력해야 O가 나옴
	}else{
		checkconfirm[1].innerHTML='영문자+숫자조합 5~20 글자'
	}
}
// 4. 비번확인 유효성체크
function pwdrecheck(){
	let mpwd = document.querySelector('.mpwd').value;	// 얘도 가져와야 둘이 비교가 가능하기때문
	let mpwdconfirm = document.querySelector('.mpwdconfirm').value;
		console.log("mpwdconfirm :" +mpwdconfirm)
	let mpwdj = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,20}$/	// 영어 1개이상 필수입력 / 숫자 1개이상필수입력인 영어 숫자 조합의 5~20글자
	if(mpwdj.test(mpwdconfirm)){
		if(mpwd != mpwdconfirm){
			checkconfirm[1].innerHTML='동일하게 입력하시오'
		}else{
			checkconfirm[1].innerHTML='O'
		}
	}else{
		checkconfirm[1].innerHTML='영문자+숫자조합 5~20 글자'
	}
}

// 5. 전화번호 유효성체크
let mphone = '' // 이렇게 안하면 인풋 3개 입력받은걸 보낼수가 업다
function phone(){
	// 1. 전화번호 구역의 input에 입력한 값 모두 가져오기
	let phone1 = document.querySelector('.phone1').value;
	let phone2 = document.querySelector('.phone2').value;
	let phone3 = document.querySelector('.phone3').value;
		mphone = phone1+phone2+phone3;
		console.log(mphone)
		let phonej1 = /^[\d]{3,3}$/
		let phonej2	= /^[\d]{4,4}$/
		let phonej3 = /^[\d]{4,4}$/
		if(phonej1.test(phone1)){// if1 s
			if(phonej2.test(phone2) && phonej3.test(phone3)){
					$.ajax({
						url:"/oimarket/mconfirm",
						method:"get",
						data:{"mphone" : mphone , "type" : 2},
						success:(r)=>{
							if(r=='true'){
								checkconfirm[2].innerHTML = "사용가능 번호"
							}else{
								checkconfirm[2].innerHTML = "이미 사용중인 번호입니다."
							}
							
						}
						
					})
					console.log('성공'); getauth();
			}else{
				checkconfirm[2].innerHTML = "전화번호 형식(네자릿수)에 맞춰서 입력해주십시오."
			}
			
		}// if1 end
		else{
			checkconfirm[2].innerHTML = "전화번호 형식(010)에 맞춰서 입력해주십시오."
		}
}
// 6. 전번 인증 구역 생성
function getauth(){
	// 1. 인증구역 html
	let html =
			`<input type="text" class="authinput" placeholder="인증코드">
			 <button onclick="authconfirm()" type="button">확인</button>
			`
	// 2. 대입
	document.querySelector('.authbox').innerHTML=html;
}
// 7. 전번인증
function authconfirm(){
	let authinput = document.querySelector('.authinput').value;
	if(authinput=='1234'){
		document.querySelector('.authbox').style.display='none';
		console.log('인증성공')
		checkconfirm[2].innerHTML = "O"
	}else{
		checkconfirm[2].innerHTML = "인증번호가 틀렸습니다."
	}
}

// * 첨부파일 이미지 미리보기 *
function premimg(object){
	console.log('첨부파일 바뀜' + object);
	console.log(object.files[0]);	// 이벤트 실행한 input에 등록된 파일 이름 가져옴
	console.log(document.querySelector('.mimg').files[0])
	
	let file = new FileReader();
	file.readAsDataURL(object.files[0])
	file.onload = (e)=>{
		console.log(e.target.result)
		document.querySelector('.premimg').src=e.target.result;
	}
}

// 1. 회원가입
function signup(){
	
	let count = 0;
	for(let i = 0 ; i<checkconfirm.length ; i++){
		if(checkconfirm[i].innerHTML=='O'){count++;}
	}
	console.log(count)
	if(count == 3 ){
	
	let signupForm = document.querySelectorAll('.signupForm')[0];
	let signupFormData = new FormData(signupForm);
	signupFormData.set("mphone" , mphone);
	
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
				else{alert('회원가입 실패...(관리자에게 문의)')}
			}
		
		})
	}else{
		alert('기입하지 않은 부분이 있습니다.')
	}
}