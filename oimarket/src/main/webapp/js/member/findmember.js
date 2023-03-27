
//아이디 찾기--연습용
function findid(){
	console.log('아이디찾자')
	
	let mname=document.querySelector('.mname').value;
	let mphone=document.querySelector('.mphone').value;
	
	$.ajax({
		url:"/oimarket/findmember",
		method:"get",
		data:{"mname":mname,"mphone":mphone,"type":3},
		success:(r)=>{
			console.log('성공');
			console.log(r)
			
			let html='';
			if(r!='null'){
				
			
			 html+=
			`
				<h3>찾으시는 아이디는 :"${r}"입니다.</h3>
				<div>
					<a href="/oimarket/member/findpwd.jsp">비밀번호찾기</a>
					<a href="/oimarket/member/login.jsp">로그인하기</a>
				</div>
			 `
			
			
			}else{
				html+=
				`<h3>존재하지 않는 회원입니다 가입을 진행해주세요</h3>
				<a href="/oimarket/member/signup.jsp">회원가입</a>`
				
				
			}
			
			document.querySelector('.findidbox').innerHTML=html;
		} 
		
			
	})
	
}

//비밀번호찾기--연습용
function findpwd(){
	console.log('비번찾자')
	let mid=document.querySelector('.mid').value;
	let mphone=document.querySelector('.mphone').value;
	
	
		$.ajax({
		url:"/oimarket/findmember",
		method:"get",
		data:{"mid":mid,"mphone":mphone,"type":4},
		success:(r)=>{
			console.log('성공');
			console.log(r)
			
			let html='';
			if(r!='null'){
				
			
			 html+=
			`
				<h3>새로운 비밀번호는 :"${r}"입니다.</h3><h5>마이페이지에서 비밀번호를 변경하세요</h5>
				<div>
					<a href="/oimarket/member/login.jsp">로그인하기</a>
				</div>
			 `
			
			
			}else{
				html+=
				`<h3>존재하지 않는 회원입니다 가입을 진행해주세요</h3>
				<a href="/oimarket/member/signup.jsp">회원가입</a>`
				
				
			}
			
			document.querySelector('.findpwbox').innerHTML=html;
		} 
		
	
	
	})
	
}

//로그인하기--연습용
function login(){
		console.log('로그인하자')
	let mid=document.querySelector('.mid').value;
	let mpwd=document.querySelector('.mpwd').value;
	
	$.ajax({
		url:"/oimarket/login",
		data:{"mid":mid,"mpwd":mpwd},
		method:"post",
		success:(r)=>{
			console.log(r)
			
			
			if(r=='true'){
				alert('로그인성공');
				location.href="/oimarket/footer.jsp"
			}else{
				let html=
				`<h3>존재하지 않는 회원입니다 가입을 진행해주세요</h3>
				<a href="/oimarket/member/signup.jsp">회원가입</a>`
				document.querySelector('.loginbox').innerHTML=html;
			}
		}
	})


}




























