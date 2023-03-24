console.log('열렸따!')
// 1. 로그인 함수
function login(){
	console.log('로그인버튼 눌린다!')
	let mid = document.querySelector('.mid').value;
	let mpwd = document.querySelector('.mpwd').value;
	
	$.ajax({
		url:"",
		method:"post",
		data:{"mid" : mid , "mpwd" : mpwd},
		success:(r)=>{
			console.log(r);
		}
	})
}