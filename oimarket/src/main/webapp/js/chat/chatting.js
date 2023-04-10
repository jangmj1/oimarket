	let pno=document.querySelector('.pno').value;
	let mno=memberInfo.mno
	let chattingbox=document.querySelector('.chattingbox')
function 보내기(){
	let textbox =document.querySelector('.textbox').value
	console.log(textbox)
	console.log(pno)
	console.log(mno)
	$.ajax({
		url:"/oimarket/chat/db",
		data:{textbox:textbox,pno:pno,mno:mno},
		method:"post",
		success:(r)=>{
			console.log(r);
			메세지출력()
			
		}
		
		
	})
	
}

function 메세지출력(){
		$.ajax({
		url:"/oimarket/chat/db",
		method:"get",
		data:{pno:pno,mno:mno},
		success:(r)=>{
			console.log(r);
			
		let html='';
		chattingbox.innerHTML='';
		r.forEach( (o)=>{
			
		if(o.frommno==memberInfo.mno){//내가 보낸 메세지
			chattingbox.innerHTML+=
			`	
			<div class="sendmessage">
				<div class="sendtime">${o.ndate}</div>
				<div class="sendtext">${o.ncontent}</div>
			<div>
			`
		}else{//내가 받은 메세지
			chattingbox.innerHTML+=
			`
			<div >
				<div>
					<div class="frommember">${o.frommno}</div>
				</div>
				<div class="receivemessage">
					<div class="receivetext">${o.ncontent}</div>
					<div class="sendtime">${o.ndate}</div>
				</div>
			<div>`
			}
		})
		
			
			
		}
		
		
	})
	
}