console.log('열림');
let mphone='';
let type=0;
function register(){
	
	
let mphone1=document.querySelector('.mphone1').value;
let mphone2=document.querySelector('.mphone2').value;
let mphone3=document.querySelector('.mphone3').value;
	 mphone=mphone1+mphone2+mphone3;
	
	
	
let infoForm=document.querySelectorAll('.infoForm')[0];
let infoFormData= new FormData(infoForm);
infoFormData.set("mphone",mphone);
//infoFormData.set(mphone);

console.log(mphone)

console.log(infoFormData);//확인용

$.ajax({
	url:"/oimarket/member/info",
	method:"post",
	data:infoFormData,
	contentType:false,
	processData:false,
	success:(r)=>{
		console.log('통신완료');console.log(r);
		if(r=='true'){
			alert('회원가입성공')
		}else{
			alert('회원가입실패')
		}
	}//success e
		
})//ajax e

};//m e

/*function print(){
	
	$.ajax({
		url:"/oimarket/member/info",
		method:"get",
		success:(r)=>{
			console.log(r);
			let html='';
			
			r.forEach((o,i)=>{
				
				
				html+=`<tr>
							<th>${o.mno}</th>
							<th>${o.mname}</th>
							<th>${o.mresidence}</th>
							
							<th>${o.mmw}</th>
							<th>${o.mphone}</th>
							<th><img src="/oimarkt"${o.mimg}</th>
							
							
					  </tr>`
			})
			
		}//success e
		
	})//ajax e
}// m e*/

let checkconfirm=document.querySelectorAll('.checkconfirm')

//2.아이디 중복체크
function idcheck(){
	
	//1.입력받은 값 가져오기
	let mid=document.querySelector('.mid').value;
	//2.정규표현식
	let midj=/^[a-z0-9]{5,20}$/
	if(midj.test(mid)){
		$.ajax({
			url:"/oimarket/member/info",
			method:"get",
			data:{"mid":mid},
			success:(r)=>{
				console.log(r);
				if(r=='true'){
					checkconfirm[0].innerHTML='아이디 불가능'
				}else{
					checkconfirm[0].innerHTML='사용가능'
				}// else e
			}//success e
		})//ajax e
		
	}else{
		checkconfirm[0].innerHTML='영소문자+숫자조합 5~20사이로 입력해주세요';
	}
	
}
function pwdcheck(){
	//1.입력받은 값 가져오기
	let mpwd=document.querySelector('.mpwd').value;
	
	let mpwdj=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,20}$/
	
	if(mpwdj.test(mpwd)){
		checkconfirm[1].innerHTML='사용가능한 비밀번호';
	}else{
		checkconfirm[1].innerHTML='영대소문자+숫자 조합 5~20글자';
	}
};



	 
