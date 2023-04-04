
// 검색을 위해 정보들 한번에 보낼 객체
let boardObject={
	key:"",
	keyword:"",
	type:1
}

getBoardList()
function getBoardList(){
	$.ajax({
		url:"/oimarket/boardinfo",
		method:"get",
		data:boardObject,
		success:(r)=>{
			console.log(r)
			// 	 게시물 프로필 이미지 나중에 화긴
			let html = ``
			r.forEach( ( o , i ) => {
				html += `<div>
							<div> 
								<img alt="" class="premimg" src="/oimarket/img/${o.mimg == null ? 'default.webp' : o.mimg}">
								<span> <a href="/oimarket/board/view.jsp?bno=${ o.bno }">${ o.btitle }</a></span>
								<span> ${ o.mid } </span>
								<span> ${ o.bdate } </span>
							</div>
							<div>
								<span> ${ o.bview } </span>
								<span> ${ o.bup } </span> 
								<span> ${ o.bdown } </span> 
							</div>
						</div>`
			})
			document.querySelector('.boardTable').innerHTML = html;
		}
			
	})
}
// 다운로드 함수
function boardUpload(){
	location.href="write.jsp"
}

// 검색
function getsearch(){
	console.log("검색 실행")
	boardObject.key = document.querySelector('.key').value;
	boardObject.keyword = document.querySelector('.keyword').value;
	getBoardList();
	console.log(boardObject)
}

function setsearch(){
	boardObject.key = "";
	boardObject.keyword = "";
	getBoardList();
}