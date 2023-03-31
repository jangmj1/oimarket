
getBoardList()
function getBoardList(){
	$.ajax({
		url:"/oimarket/boardinfo",
		method:"get",
		success:(r)=>{
			console.log(r)
			
			let html = `<tr>
							<th> 번호 </th> <th> 제목 </th><th> 작성자 </th><th> 작성일 </th>
							<th> 조회수 </th>	<th> 좋아요 </th> <th> 싫어요 </th>
						 </tr>`
			r.forEach( ( o , i ) => {
				html += `	<tr>
						<td> ${ o.bno } </td> 
						<td> <a href="/oimarket/board/view.jsp?bno=${ o.bno }">${ o.btitle }</a></td>
						<td> ${ o.mid } </td>
						<td> ${ o.bdate } </td>
						<td> ${ o.bview } </td>
						<td> ${ o.bup } </td> 
						<td> ${ o.bdown } </td> </tr>`
			})
			document.querySelector('.boardTable').innerHTML = html;
		}
		
	})
}

function boardUpload(){
	location.href="write.jsp"
}