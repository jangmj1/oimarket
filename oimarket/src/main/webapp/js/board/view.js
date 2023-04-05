
// 게시물 개별 출력 함수
getBoard();
function getBoard(){
	
	let bno = document.querySelector('.bno').innerHTML;	// 게시물번호 가져오기
	console.log("bno:" +bno)
	
	$.ajax({
		url:"/oimarket/boardinfo",
		method:"get",
		data:{"type" : 2 , "bno" : bno},
		success:(r)=>{
			console.log(r)
			let html = `${ r.bdate } / 
						${ r.bview } / 
						${ r.bup } /
						${ r.bdown } /`

			document.querySelector('.infobox').innerHTML = html;
			document.querySelector('.pimgbox').innerHTML = r.mid;
			document.querySelector('.btitle').innerHTML = r.btitle;
			document.querySelector('.bcontent').innerHTML = r.bcontent;

			if( r.bfile == null ){ // 첨부파일 없을때 
				document.querySelector('.bfile').innerHTML = '첨부파일없음';
			}else{ // 첨부파일 있을때 
				html = ` ${ r.bfile } <button onclick="bdownload( '${ r.bfile }' )" type="button"> 다운로드 </button>`
				document.querySelector('.bfile').innerHTML = html;
			}
			if(memberInfo.mid==r.mid){
				html =`
					<button onclick="bdelete(${bno} , ${r.bcno})" type="button" class="bbtn">삭제</button>
					<button onclick="bdelete(${bno})" type="button" class="bbtn">수정</button>
					`;
				document.querySelector('.bbtnbox').innerHTML=html;
			}
		}
	})
}// function end

// 첨부파일 다운로드
function bdownload(bfile){
	console.log("선택한 파일명 : " +bfile)
	/*$.ajax({
		url:"/oimarket/filedownload",
		method : "get",
		data:{"bfile" : bfile},
		success:(r)=>{
			console.log(r)
		}
	})*/
	location.href="/oimarket/filedownload?bfile="+bfile;
}

// 3. 삭제
function bdelete(bno,bcno){
	$.ajax({
		url:"/oimarket/boardinfo",
		method : "delete",
		data:{"bno" : bno , "type" : 1},
		success:(r)=>{
			console.log(r)
			if(r=='true'){
				alert('삭제성공');
				location.href="/oimarket/board/list.jsp?cno="+cno;
			}else{
				alert('삭제실패');
			}
		}
	})
}























