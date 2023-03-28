function setUpdate(){
	console.log('수정');
	//첨부파일 있으니깐 전체폼 가져오기
	let mphone1=document.querySelector('.mphone1').value;
	let mphone2=document.querySelector('.mphone2').value;
	let mphone3=document.querySelector('.mphone3').value;
	let mphone=mphone1+mphone2+mphone3;
	let updateForm=document.querySelectorAll('.updateForm')[0];
	let updateFormDate= new FormData(updateForm);
	updateFormDate.set("mphone",mphone);
	
	$.ajax({
		url:"/oimarket/member/info",
		method:"put",
		data:updateFormDate,
		contentType:false,
      	processData:false,
		success:(r)=>{
			console.log(r);
			if(r=='true'){
				alert('회원수정 성공!')
			}else{
				alert('회원수정 실패!')
			}
			
		}
	})
	
};