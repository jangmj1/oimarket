getproduct();
function getproduct(){//전체 출력
	
	$.ajax({
		url:"/oimarket/product",
		method:"get",
		success:(r)=>{
			console.log('성공')
			console.log(r)
		}
	})
}