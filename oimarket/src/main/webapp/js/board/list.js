
// 검색에 필요한 정보+ 출력에필요한 정보들 한번에 보낼 객체 (카테고리별 출력)
let boardObject={
	key:"",
	keyword:"",
	type:1,
	bcno : document.querySelector('.bcno').value
}
// 검색에 필요한 정보+ 출력에필요한 정보들 한번에 보낼 객체 (전체 출력)
let boardObject2={
	key:"",
	keyword:"",
	type:3
}


// 카테고리 제목
let bcnameHTML ="";
if(boardObject.bcno == 1){bcnameHTML="커뮤니티";}
if(boardObject.bcno == 2){bcnameHTML="QnA";}
if(boardObject.bcno == 3){bcnameHTML="노하우";}
document.querySelector('.bcname').innerHTML = bcnameHTML;

// 카테고리별 전체 출력
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
								<img alt="" src="/oimarket/img/${o.mimg==null?'default.webp':o.mimg}">
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
// 전체 게시물 출력
getBoardListAll();
function getBoardListAll(){
	$.ajax({
		url:"/oimarket/boardinfo",
		method:"get",
		data:boardObject2,
		success:(r)=>{
			console.log(r)
			// 	 게시물 프로필 이미지 나중에 화긴
			let html = ``
			r.forEach( ( o , i ) => {
				html += `<div>
							<div> 
								<img alt="" src="/oimarket/img/${o.mimg==null?'default.webp':o.mimg}">
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
// 글쓰기버튼 함수
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

// 각 카테고리별 출력 리모콘(전체보기 포함)
function setsearch(){
	getBoardListAll();
}

function bcbtn1(){
	boardObject.bcno = 1;
	getBoardList();
	
}
function bcbtn2(){
	boardObject.bcno = 2;
	getBoardList();
}
function bcbtn3(){
	boardObject.bcno = 3;
	getBoardList();
}