
//푸터에 마이페이지를 눌럿을때 실행--연습용 이페이지전부다
if(memberInfo==null){
	alert('로그인하고오세요')
	location.href="/oimarket/index.jsp"
}

r=memberInfo;
myinfo();


function myinfo(){
	
	let html=
		`<H3>내정보</H3>
		
		<img alt="" src="/oimarket/img/${r.mimg==null?'기본.png':r.mimg}"
		 style="width: 300px;   border: 1px solid #d1d1d1;   border-radius: 50%;">
		<div>${r.mname}</div>
		<button onclick="UpdateProfile()" type="button">내프로필</button>
		<button onclick="UpdateMyinfo()" type="button">보안설정</button>
		<button onclick="outmember()" type="button">회원탈퇴</button>
		<form class="test">
			<input type="hidden"  class="promptmpwd" name ="promptmpwd">
		</form>
		`
		document.querySelector('.UpdateMypage').innerHTML=html;
	
}

function UpdateProfile(){
	
	let html=
	`<h3>내프로필 수정</h3>
		<img class="premimg" alt="" src="/oimarket/img/${r.mimg==null?'기본.png':r.mimg}" style="width: 300px;">
		<form class="updateProfile">
			<div>
				<input name="updatemimg" onchange="premimg(this)" type="file" class="mimg" style="display: none;">
				<button class="mimgbtn" type="button"  onclick="document.querySelector('.mimg').click();"
				style="background-color: white;border: 1px solid #80808057;border-radius: 5px;padding: 10px 30px;font-size: 15px;">
				사진변경</button>
			</div>
			<div>
				<input name="updatamname" class="updatamname" type="text" placeholder="${r.mname}">
			</div>
			<button onclick="updatemname()" type="button">적용</button>
			<button onclick="" type="button">취소</button>
		</form>
		`
		
		document.querySelector('.UpdateMypage').innerHTML=html;
		
}
let updatemimg='';//새로운 이미지값은 null
function premimg(object){//변경할 프로필 미리보기
	let file=new FileReader;
	console.log(object.files[0].name)
	updatemimg=object.files[0].name; //선택한 파일의 이름을넣는다
	file.readAsDataURL(object.files[0]);
	file.onload= (e)=>{
		document.querySelector('.premimg').src=e.target.result;
	}
	
	
}


function updatemname(){//변경적용
	console.log()
	let updateProfile=document.querySelectorAll('.updateProfile')[0];
	let updateProfileDate=new FormData(updateProfile);
	updateProfileDate.set("type",1);
	console.log(updateProfileDate)
	$.ajax({
		url:"/oimarket/member/info",
		data:updateProfileDate,
		method:"put",
		contentType:false,
		processData:false,
		success:(s)=>{//위에 r을 memberInfo로 대입해서..
			console.log(s);
			if(s=='true'){
				alert('프로필이 변경 되었습니다')
				location.reload( );
			}else{
				alert('변경이 실패되었습니다 관리자에게 문의하세요')
			}
		}
	})
	
	
	
}


function UpdateMyinfo(){
	
	let html=
		`	<h3>보안설정</h3>
		<form  class="updateForm">
			<div>
				<div>현재비밀번호</div>
				<input onkeyup="oldpwd()" name="mpwd" class="mpwd" type="text">
				<div class="okbox1"></div>
			</div>
			<div>
				<div>새비밀번호</div>
				<input onkeyup="pwdcheck()" name="upmpwd" class="upmpwd" type="text">
				<div class="okbox2"></div>
			</div>
			<div>
				<div>새비밀번호 확인</div>
				<input onkeyup="repwdcheck()" class="upconfpwd" type="text">
				<div class="okbox3" ></div>
			</div>
			<div class="mresidence">
				<h5>사는지역</h5>
				<select name="mresidence">
					<option value="1">서울</option>
					<option value="2">경기</option>
					<option value="3">강원도</option>
					<option value="4">인천</option>
					<option value="5">충청도</option>
					<option value="6">경상도</option>
					<option value="7">전라도</option>
					<option value="8">부산</option>
					<option value="9">울산</option>
					<option value="10">제주</option>
					<option value="11">그외</option>
				</select>
			</div>
			<div class="mphone mtext">
				<h5>핸드폰번호</h5>
				<span ><input class="phone1" type="text">-<input class="phone2" type="text">-<input class="phone3" type="text">
				<button class="phone" onclick="phone()" type="button">인증하기</button></span>
						
				<div class="okbox4" ></div>
				<div class="confirmphone">
				<h5>인증번호 : </h5>
				<span><input class="confirmphoneNo" style="width: 40px;" type="text"><button class="confirmphonebtn" onclick="confirmphone()" type="button">확인</button></span>
				</div>
			</div>
		<form>
		<button onclick="updatemydata()" type="button">변경</button>`
		
		document.querySelector('.UpdateMypage').innerHTML=html;
}


function oldpwd(){//이전비밀번호

	let mpwd=document.querySelector('.mpwd').value
	console.log(mpwd)
	let mno=memberInfo.mno
	$.ajax({
		url:"/oimarket/findmember",
		method:"get",
		data:{mpwd:mpwd,type:5},
		success:(r)=>{
			console.log(r)
			if(r=='true'){
				document.querySelector('.okbox1').innerHTML='ok'
				document.querySelector('.okbox1').style.color='gray';
				
				
			}else{
				document.querySelector('.okbox1').innerHTML='비밀번호가 틀렸습니다'
				document.querySelector('.okbox1').style.color='red';
			}
		}
	})
}


function pwdcheck(){//비밀번호 유효성 검사--연습용
	let upmpwd=document.querySelector('.upmpwd').value;
	
	let testpwd=/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
	
	if( testpwd.test(upmpwd) ) {//정규식 통과시
				document.querySelector('.okbox2').innerHTML='ok'
				document.querySelector('.okbox2').style.color='gray';
	}else{
				document.querySelector('.okbox2').innerHTML='비밀번호는 8 ~ 16자 영문, 숫자 조합 해주세요'
				document.querySelector('.okbox2').style.color='red';
	}
}


function repwdcheck(){//비밀번호 재확인 유효성--연습용
	let upconfpwd=document.querySelector('.upconfpwd').value;
	let upmpwd=document.querySelector('.upmpwd').value;
	if(upconfpwd==upmpwd){
				document.querySelector('.okbox3').innerHTML='ok'
				document.querySelector('.okbox3').style.color='gray';
					
	}else{
				document.querySelector('.okbox3').innerHTML='비밀번호가 서로 다릅니다'
				document.querySelector('.okbox3').style.color='red';
	}
}

let mphone=''; // 나중에 회원가입할때 따로 가져가야해서 전역변수로뺌
function phone(){//핸드폰 번호 유효성 검사
	//1.핸드폰 번호 받기
	let phone1 = document.querySelector('.phone1').value
	let phone2 = document.querySelector('.phone2').value
	let phone3 = document.querySelector('.phone3').value
	 mphone=phone1+phone2+phone3
	console.log(mphone)
	
	//유효성검사하기 준비물
	let testphone1=/^[0-9]{3,3}$/g;
	let testphone2=/^[0-9]{4,4}$/g;
	let testphone3=/^[0-9]{4,4}$/g;
	
	
	if( testphone1.test(phone1) ){//첫번째 010 구간제대로 썼으면 아래 실행
		
		if(testphone2.test(phone2)&&testphone3.test(phone3) ){//두번째와 세번째구간 4자리이면
			//동일한 핸드폰이 있는지 확인할것 , 통과시 인증번호시작
			
			
			$.ajax({// aj s
				url:"/oimarket/findmember",
				method:"get",
				data:{"mphone":mphone,"type":2},
				success:(r)=>{//s s
					console.log(r)
					if(r=='true'){//if  s
						console.log('같은 번호의 회원은없다')//등록 가능상태 이면 인증번호 칸 쓸수있음
						
						document.querySelector('.confirmphone').style.display='flex';//동일한 핸드폰 번호가 없으면 인증번호칸 flex
						
						
					//if  e
					}else{
						document.querySelector('.okbox4').innerHTML='이미 존재하는 핸드폰 번호입니다'
						document.querySelector('.okbox4').style.color='red'
						
						}
					
				}//s e
			})//aj e
			
			console.log('성공')
		//2번째 if e	
		}else{
			console.log('두번째 세번째칸은 4글자로 기제해주세요')
		}
			
	//1번째 if e
	}else {
			console.log('첫번째칸은 세글자로 기제해주세요')
			}
	
	 
	console.log(phone)
	
	
}

function confirmphone(){//인증번호 확인
	
	//인증번호받기
	let confirmphoneNo=document.querySelector('.confirmphoneNo').value
	
	if(confirmphoneNo=='1234'){//if  s 인증번호 인풋창에기재값이 1234이면
							
						document.querySelector('.confirmphone').style.display='none'; //다시숨기기
						console.log('인증성공!')
						document.querySelector('.okbox4').innerHTML='ok'
						document.querySelector('.okbox4').style.color='gray';
						
					//if  e
					}else{console.log('인증번호가 틀렸습니다.')}
}





function updatemydata(){
	

let okbox1= document.querySelector('.okbox1').innerHTML
let okbox2= document.querySelector('.okbox2').innerHTML
let okbox3= document.querySelector('.okbox3').innerHTML
let okbox4= document.querySelector('.okbox4').innerHTML


let testok='ok';
if(testok==okbox1 && testok==okbox2 &&testok==okbox3&&testok==okbox4){
	
	let updateForm=document.querySelectorAll('.updateForm')[0];
	let updateFormdata=new FormData(updateForm);
	updateFormdata.set("type",2);
	updateFormdata.set("mphone",mphone);
	
	$.ajax({
		url:"/oimarket/member/info",
		method:"put",
		data:updateFormdata,
		contentType:false,
		processData:false,
		success:(r)=>{
			console.log(r)
			if(r=='true'){
				alert('보안설정이 변경되었습니다 재 로그인 해주세요')
				location.href="/oimarket/index.jsp"
			}
		}
	})
	
}
	
	
	
	
}

function outmember(){
	//$('#promptmpwd').val(prompt('비밀번호를 입력해주세요'))
	document.querySelector('.promptmpwd').value = prompt('비밀번호를 입력해주세요') // 이건 못넘기는것인가..??	
	let test=document.querySelectorAll('.test')[0];
	let testdata=new FormData(test);
	
	
	console.log(test) 
		$.ajax({
		url:"/oimarket/member/info",
		data:testdata,
		method:"delete",
		contentType:false,
		processData:false,
		success:(r)=>{
			console.log(r)
			if(r=='true'){
				alert('정상 탈퇴 되었습니다')
				location.href="/oimarket/index.jsp"
			}else if(r=='null'){
				alert('비밀번호가 틀렸습니다.')
			}else{
				alert('탈퇴 실패 관리자에게 문의하세요')
			}
		}
	})	
	
	
	
}






