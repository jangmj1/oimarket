
//푸터에 마이페이지를 눌럿을때 실행--연습용
if(memberInfo==null){
	alert('로그인하고오세요')
	location.href="/oimarket/index.jsp"
}

r=memberInfo;
 myinfo()
function myinfo(){
	
	let html=
		`<H3>내정보</H3>
		<img alt="" src="/oimarket/img/${r.mimg==null?'기본.png':r.mimg}"
		 style="width: 300px;   border: 1px solid #d1d1d1;   border-radius: 50%;">
		<div>${r.mname}</div>
		<button onclick="UpdateProfile()" type="button">내프로필</button>
		<button onclick="UpdateMyinfo()" type="button">보안설정</button>
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








