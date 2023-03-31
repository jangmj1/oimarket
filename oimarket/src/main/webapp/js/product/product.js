console.log('열림라라라라');

let plat=0;
let plng=0;
//1.물품등록
function productbtn(){
	console.log('함수실행')
	//1. 폼전송
	let productform =document.querySelectorAll('.productform')[0];
	let productformDate= new FormData(productform);//2.폼데이터 객체선언하기
	console.log(productformDate);//확인용
	productformDate.set("plat",plat);//위도,경도 추가
	productformDate.set("plng",plng);
	//서블릿으로 보내기
	$.ajax({
		url:"/oimarket/product",
		method:"post",
		data:productformDate,
		contentType:false,
		processData:false,
		success:(r)=>{
			console.log('제품등록 통신완료');
			console.log(r);
			
			
		}
	})

	
}

	//---------------------------카카오 지도를 표시할 div 객체----------------------
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다