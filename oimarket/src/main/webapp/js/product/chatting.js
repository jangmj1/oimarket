console.log("채팅하기")
let chatSocket = null;
let pno=document.querySelector('.pno').value;
if(memberInfo.mid==null){
	alert('회원공간입니다 로그인해주세요')
	location.href="/oimarket/member/login.jsp"
}else{
	//소켓과 연결
	chatSocket=new WebSocket('ws://localhost:8080/oimarket/chatting/'+memberInfo.mid);console.log(chatSocket)
	chatSocket.onopen=function(e){console.log("연동완료")}
	
	}





function send(){
	let textbox =document.querySelector('.textbox').value
	
	
	
	
}