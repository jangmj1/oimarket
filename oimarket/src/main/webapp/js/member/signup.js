console.log('열림');


function register(){
let infoForm=document.querySelectorAll('.infoForm')[0];
let infoFormData= new FormData(infoForm);
console.log(infoFormData);//확인용

$.ajax({
	url:"/oimarket/member/info",
	method:"post",
	data:infoFormData,
	contentType:false,
	processData:false,
	success:(r)=>{
		console.log('통신완료');console.log(r);
		if(r=='true'){
			alert('회원가입성공')
		}else{
			alert('회원가입실패')
		}
	}//success e
		
})//ajax e

};//m e

/*function print(){
	
	$.ajax({
		url:"/oimarket/member/info",
		method:"get",
		success:(r)=>{
			console.log(r);
			let html='';
			
			r.forEach((o,i)=>{
				
				
				html+=`<tr>
							<th>${o.mno}</th>
							<th>${o.mname}</th>
							<th>${o.mresidence}</th>
							
							<th>${o.mmw}</th>
							<th>${o.mphone}</th>
							<th><img src="/oimarkt"${o.mimg}</th>
							
							
					  </tr>`
			})
			
		}//success e
		
	})//ajax e
}// m e*/