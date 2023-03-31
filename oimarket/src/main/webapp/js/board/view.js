

getBoard();
function getBoard(){
	$.ajax({
		url:"/oimarket/boardinfo",
		method:"get",
		data:{"type" : 2 , "bno" : bno},
		success:(r)=>{
			console.log(r)
		}
	})
}