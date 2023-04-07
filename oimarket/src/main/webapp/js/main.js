
// ----------------- 스크롤막대가 바닥이면 --------------- //

let pcount = 5;

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	   pcount +=5;
      getproduct();
   }
});


// ------------------------------------------------


getproduct();//기본 메인페이지에 전체출력부터 시작

let productInfo=""; //전체 물품들의 리스트들이 들어있음

function getproduct(){//등록된 물품전체출력 and 카테고리별 출력 !기본은 전체출력
	let html='';
	let pcno=document.querySelector('.form-select').value
	if(pcno==0){
		document.getElementById('map').style.display='none';
	}
	$.ajax({
		url:"/oimarket/product",
		data:{type:1,pcno:pcno , pcount : pcount },
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
	document.getElementById('map').style.display='flex';
	console.log(i) //인덱스
	console.log(pno) //pno로 네츄럴 조인을 해서 글쓴 사람과 카테고리를 뽑아내야함
		let html='';
		let pimglistbox='';
		let btn='';	
		
		$.ajax({
			url:"/oimarket/product",
			data:{pno:pno,type:2},
			method:"get",
			success:(r)=>{
				console.log(r);
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
						<!-- 김은영//찜하기,조회수,채팅하기!!!!!!!!!!!!!!! -->
						<button class="likebtn" type="button" onclick="setlike(${pno})"><img src="/oimarket/img/likeoff.png"style="width:25px;height:25px; margin-top: 25px;"></button>
				  		<span  class="view">조회:${productInfo[i].pview}</span>
				  		<button type="button"  onclick="">채팅하기</button>
					</div>

				  		
				  		
				  		
					
				</div>																						
					
				<div class="rmnocontent">
					<h3>${productInfo[i].ptitle}</h3>
					<h5>${productInfo[i].pcname}</h5>
					<h3>${(productInfo[i].pprice).toLocaleString()} 원</h3>
					<p>${productInfo[i].pcontent}</p>
				</div>`
				
			
			
			
			
		
				//<!--[김은영]//수정버튼,상태수정버튼,삭제버튼  -->
			let html1='';
		if(memberInfo.mno!=r.mno){//제품등록한 사람과 사는사람이 같지 않으면 구매하기버튼 보이기
			html1+=`		
				<div>
					<button onclick="state(${pno})" type="button">구매하기</button>
					
					
				</div>`
			}else if(memberInfo.mno==r.mno){//제품등록한 사람과 제품사는 사람이 같으면 수정/삭제 보이기 
				html1+=`
				<button type="button">수정</button>
				<button onclick="Deleteproduct(${pno})" type="button">삭제</button>`
			}
				document.querySelector('.btns').innerHTML=html1;


			
			
			
	
				
		//카카오지도 
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	    mapOption = { 
	        center: new kakao.maps.LatLng(productInfo[i].plat, productInfo[i].plng), // 지도의 중심좌표
	        level: 3 // 지도의 확대 레벨
	    };
	
		var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
		
		var imageSrc = '/oimarket/img/maker.png', // 마커이미지의 주소입니다    
		    imageSize = new kakao.maps.Size(40, 43), // 마커이미지의 크기입니다
		    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		      
		// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
		var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		    markerPosition = new kakao.maps.LatLng(productInfo[i].plat, productInfo[i].plng); // 마커가 표시될 위치입니다
		
	
		
		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
		    position: markerPosition,
		    image: markerImage // 마커이미지 설정
		});
		
		
		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);
				
		
		
	
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

function category(pcno){ //카테고리선택 변경했을때 
	getproduct(); //카테고리별 출력
}

function search(){//제목검색했을때
	let keyword = document.querySelector('.keyword').value;
	console.log("keyword:"+keyword)
	if(keyword==""){
		alert("검색창에 찾으실 제목을 써주세요!")
	}else{//키워드가 있을경우에 아작트실행
		let html='';
		
		$.ajax({
			url:"/oimarket/product",
			method:"get",
			data:{keyword:keyword,type:3},
			success:(r)=>{
				console.log(r)
				if(r.length>0){
					
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
			
				}else{
					html+='<h3>검색결과가 없습니다.</h3>'
				}
				
			
			document.querySelector('.keyword').value="";
			document.querySelector('.contentbox').innerHTML=html;
			}
			
		})
	} 
	
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



//김은영//판매상태
function state(pno){
	console.log('상태변경')
	
	
	$.ajax({
		url:"/oimarket/productstate",
		method:"get",
		data:{"pno":pno},
		success:(r)=>{
			console.log('통신됐나영');
			console.log(r);
			if(r==2){
				alert('구매완료 되었습니다');
				location.href="/oimarket/main.jsp"
				
			}
		}
	})
}






