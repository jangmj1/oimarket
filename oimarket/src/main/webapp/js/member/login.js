console.log('열렸따!')
// 1. 로그인 함수
function login(){
	// 1. 입력받은값 가져오기
	console.log('로그인버튼 눌린다!')
	let mid = document.querySelector('.mid').value;
	let mpwd = document.querySelector('.mpwd').value;
	
	// 2. 보내기
	$.ajax({
		url:"/oimarket/login",
		method:"post",
		data:{"mid" : mid , "mpwd" : mpwd},
		success:(r)=>{
			console.log(r);
			if(r=='true'){location.href="/oimarket/index.jsp";}
			else{document.querySelector('.checkconfirm').innerHTML = '회원정보가 다릅니다.'}
		}
	})
}