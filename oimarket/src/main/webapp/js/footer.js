

memberInfo=null;
getlogin();
//멤버정보 호출하기 (푸터에 항상 따라다닐것)
function getlogin(){
	
	$.ajax({
	url:"/oimarket/login",
	method:"get",
	async:false,
	success:(r)=>{
		console.log(r)
		memberInfo=r;
		}		
	})
	
	
}

function myPage(){
	location.href="/oimarket/member/MyPage.jsp"
}