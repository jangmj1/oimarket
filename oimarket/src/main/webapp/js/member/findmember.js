function findid(){
	console.log('아이디찾자')
	
	let mname=document.querySelector('.mname').value;
	let mphone=document.querySelector('.mphone').value;
	
	$.ajax({
		url:"/oimarket/findmember",
		method:"get",
		data:{"mname":mname,"mphone":mphone,"type":3},
		success:((r)=>{
			console.log('성공');
			console.log(r)
		} )
	})
	
}