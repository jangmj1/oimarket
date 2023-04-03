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

function oneproduct(i,pno){
	
	console.log(i) //사진수 만큼 돌릴려고
	console.log(pno) //pno로 네츄럴 조인을 해서 글쓴 사람과 카테고리를 뽑아내야함
	
		let html='';
		let pimglistbox='';
		let btn='';	
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
						<img alt="" src="/oimarket/img/default.webp">
						<div>
							<h5>장민정</h5>
							<h5 class="residence">경기도</h5>
						</div>
					</div>
					<div>
						<button type="button" onclick="">좋아욤</button>
						<button type="button"  onclick="">채팅하기</button>
					</div>
				</div>
					
				<div class="rmnocontent">
					<h3>${productInfo[i].ptitle}</h3>
					<h5>카테고리</h5>
					<h3>${(productInfo[i]).toLocaleString()}</h3>
					<p>${productInfo[i].pcontent}</p>
				</div>
				
				`
		
	
		document.querySelector('.contentbox').innerHTML=html;
	 
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



















