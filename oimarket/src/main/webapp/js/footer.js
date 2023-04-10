// [최성아] 마이페이지 버튼 클릭시 마이페이지로 이동하기
function mypageGo() {
	location.href="/oimarket/member/mypage.jsp"
}
function homeGo() {
	location.href="/oimarket/main.jsp"
}
function productrigster(){
	location.href="/oimarket/product/product.jsp"
}
function boardGo(){
	location.href="/oimarket/board/list.jsp";
	getBoardListAll()
}
function chattingListGo(){
	location.href="/oimarket/chat/mychattingList.jsp";
	
}

let memberInfo = null;

// [최성아] 회원 수정 , 탈퇴 위한 로그인 정보 호출 
getLogin();
function getLogin() {
	$.ajax({
		url : "/oimarket/login" ,
		method : "get" ,
		async : false ,
		success : (r) => {
			memberInfo = r;
			console.log(r);
} // success end
	}) // ajax end
}
