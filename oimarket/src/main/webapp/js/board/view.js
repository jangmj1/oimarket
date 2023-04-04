

getBoard();
function getBoard(){
	
	let bno = document.querySelector('.bno').innerHTML;
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