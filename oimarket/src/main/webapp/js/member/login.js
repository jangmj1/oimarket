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