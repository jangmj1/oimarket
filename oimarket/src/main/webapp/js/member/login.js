function login(){
	console.log('ㅇㅇ')//확인용
	let mid=document.querySelector('.mid').value;
	let mpwd=document.querySelector('.mpwd').value;
	//2.ajax에게 보내기
	$.ajax({
		url:"/oimarket/login",
		method:"post",
		data:{"mid":mid,"mpwd":mpwd},
		success:(r)=>{
			console.log(r);
			if(r=='true'){
				alert('로그인성공');
			}else{alert('로그인실패')}
		}
	})
	
}

//아이디찾기
let type=0;
function findid(){//입력받은값 가져오기

	let mname=document.querySelector('.mname').value;
	let mphone=document.querySelector('.mphone').value;
	
	$.ajax({
		url:"/oimarket/login",
		method:"get",
		data:{"mname":mname,"mphone":mphone,"type":1},
		success:(r)=>{
			console.log(r);
			if(r=='false'){
				alert('회원정보가 없습니다')
			}else{alert('회원님의 id는'+r+'입니다');}
		}//success e
	})//ajax e
};//m e

//비밀번호찾기
function findpwd(){
	console.log('실행');//확인용
	let mid=document.querySelector('.mid').value;
	let mphone=document.querySelector('.mphone').value;
	 $.ajax({
		 url:"/oimarket/login",
		 method:"get",
		 data:{"mid":mid,"mphone":mphone,"type":2},
		 success:(r)=>{
			 console.log(r);
			 if(r=='false'){
				 alert('회원정보가 없습니다')
			 }else{alert('임시비밀번호 폰으로 전송했습니다')}
		 }
	 })
	
	
}
