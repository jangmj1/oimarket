getproduct();

let productInfo=""; //전체 물품들의 리스트들이 들어있음

function getproduct(){//전체 출력
	let html='';
	$.ajax({
		url:"/oimarket/product",
		data:{type:1},
		method:"get",
		success:(r)=>{
			console.log('성공')
			console.log(r);	productInfo=r;
			
			
			r.forEach( (o,i)=>{
				
				html+=
				` 
					<div class="content" onclick="oneproduct(${i},${o.pno})">
						<img  src="/oimarket/img/${o.pimglist[0]==null?'기본.png':o.pimglist[0]}">
						<div class="pinfo">
							<h3 class="ptitle">${o.ptitle}</h3>
							<h5 class="pdate">${o.pdate}</h5>
							<h3 class="pprice">${(o.pprice).toLocaleString()} 원</h3>
						</div>
						
					</div>
					
					`	
				
			})
			
			document.querySelector('.contentbox').innerHTML=html;
			
		}
		
	})
}

function oneproduct(i,pno){ // 제품 하나 클릭하면 상세 페이지로 전환
	
	console.log(i) //사진수 만큼 돌릴려고
	console.log(pno) //pno로 네츄럴 조인을 해서 글쓴 사람과 카테고리를 뽑아내야함
		let html='';
		let pimglistbox='';
		let btn='';	
		
		$.ajax({
			url:"/oimarket/product",
			data:{pno:pno,type:2},
			method:"get",
			success:(r)=>{
				console.log(r)
				view(pno);
				
		
	
	
	
		html=
			`<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
				
				  
				  <div class="carousel-indicators">
				  
				  
				  </div>
				 
				 
				  <div class="carousel-inner">
				  
				    
				    
				  </div>
				  <!-- 왼쪽버튼 -->
				  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span class="visually-hidden">Previous</span>
				  </button> 
				  <!-- 오른쪽버튼 -->
				  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
				    <span class="carousel-control-next-icon" aria-hidden="true"></span>
				    <span class="visually-hidden">Next</span>
				  </button>
				</div>
				
				<div class="rmnobox">
					<div class="rmnoinfo">
						<img alt="" src="/oimarket/img/${r.mimg==null?'기본.png':r.mimg}">
						<div>
							<h5>${r.mname}</h5>
							<h5 class="residence">${r.mresidence}</h5>
						</div>
					</div>
					<div>
						<button class="likebtn" type="button" onclick="setlike(${pno})"><img src="/oimarket/img/likeoff.png"style="width:25px;height:25px; margin-top: 25px;"></button>
						<!-- 김은영//조회수!!!!!!!!!!!!!!! -->
				  		<span  class="view">조회:${productInfo[i].pview}</span>
					</div>
				</div>																						
					
				<div class="rmnocontent">
					<h3>${productInfo[i].ptitle}</h3>
					<h5>${productInfo[i].pcname}</h5>
					<h3>${(productInfo[i].pprice).toLocaleString()} 원</h3>
					<p>${productInfo[i].pcontent}</p>
				</div>
				
			
			
			<!-- 김은영//수정버튼,상태수정버튼,삭제버튼 -->
		
			<div>
				<button type="button">상태수정[판매유무]</button>
				<button type="button">수정</button>
				<button onclick="Deleteproduct(${pno})" type="button">삭제</button>
				<button type="button"  onclick="">채팅하기</button>
			</div>
	
				`
		
	
		document.querySelector('.contentbox').innerHTML=html;
	 	getlike(pno);
	 	/*사진첩 포문돌려서 꺼내기*/
	 	
	 	productInfo[i].pimglist.forEach( (o,j)=>{
			 console.log(j)
			 console.log(o)
			 if(j==0){
			pimglistbox+=`
					 <div class="carousel-item active" data-bs-interval="10000">
				      <img src="/oimarket/img/${o}" class="d-block w-100" alt="...">
				    </div>`
			
			btn+=`
			 <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				`	    
				    
			 }else{
			 pimglistbox+=`
				  <div class="carousel-item" data-bs-interval="2000">
				      <img src="/oimarket/img/${o}" class="d-block w-100" alt="...">
				    </div>`
				    
			
			btn+=`
			 <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${j}" aria-label="Slide ${j+1}"></button>
			`	    
				
			 }
		
		
		 })
	 	
	 	
	 	document.querySelector('.carousel-inner').innerHTML=pimglistbox;
	 	document.querySelector('.carousel-indicators').innerHTML=btn;
	 
	 	}
			
	})
	
	
	
	
}


//김은영//삭제 
 Deleteproduct();
function Deleteproduct(pno){
	console.log(pno);
	console.log('삭제함수열라아')
	$.ajax({
		url:"/oimarket/product",
		method:"delete",
		data:{"pno":pno,"type":1},
		success:(r)=>{
			console.log('삭제통신');
			console.log(r);
			if(r=='true'){
				alert('삭제완료')
				location.href="/oimarket/main.jsp"
			}else{alert('삭제불가')}
		}//success e
	})//ajax e
}//m e

//[김은영]찜하기 버튼
function setlike(pno){
	console.log('하트함수')
	if(memberInfo==null){
		alert('회원기능입니다. 로그인후 사용해주세요'); return;
	}
	$.ajax({
		url:"/oimarket/productlike",
		method:"post",
		data:{"pno":pno},
		success:(r)=>{
			console.log('하트 통신');
			console.log(r);
			if(r=='true'){
				alert('찜 등록');
				document.querySelector('.likebtn').innerHTML='<img src="/oimarket/img/likeon.png"style="width:30px;height:30px;margin-top: 25px;">'
			}else{
				alert('찜 취소');
				document.querySelector('.likebtn').innerHTML='<img src="/oimarket/img/likeoff.png"style="width:25px;height:25px;margin-top: 25px;">'
			}
		}
	})
}
//김은영 //찜하기 상태
function getlike(pno){
	
	$.ajax({
		url:"/oimarket/productlike",
		method:"get",
		async:'false',
		data:{"pno":pno},
		success:(r)=>{
			console.log('통신완료?');
			console.log(r);
			if(r=='true'){
				
				document.querySelector('.likebtn').innerHTML='<img src="/oimarket/img/likeon.png"style="width:30px;height:30px;margin-top: 25px;">'
			}else{
				
				document.querySelector('.likebtn').innerHTML='<img src="/oimarket/img/likeoff.png"style="width:25px;height:25px;margin-top: 25px;">'
			}
		}
	})
}



//김은영// 조회수

function view(pno){
	$.ajax({
		url:"/oimarket/productview",
		method:"get",
		data:{"pno":pno},
		success:(r)=>{
			console.log('조회수 통신');
			console.log(r);
		}
	})
}








