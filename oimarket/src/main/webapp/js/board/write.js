console.log('글쓰기 열림여')

function bwrite(){
	let writeForm = document.querySelectorAll('.writeForm');
	console.log(writeForm)
	
	let writeFormData = new FormData(writeForm[0]);
	console.log(writeFormData)
	
	$.ajax({
		url:"/oimarket/boardinfo",
		method:"post",
		data:writeFormData,
		contentType : false,
		processData : false,
		success:(r)=>{
			console.log(r)
		}
	})
}