/**
 * slideShow.js
 */

$(function(){
	//이동한 이미지의 index값 저장(현재위치)
	var movedIndex = 0;
	
	//슬라이드 패널을 움직이는 함수
	function moveSlide(index){
		movedIndex = index;
		
		//슬라이드 이동
		var moveLeft = -(index*1280); //왼쪽으로의 이동거리
		$('#slidePanel').animate({'left':moveLeft},'slow');
	}
	
	//prev버튼 클릭
	$('#prevButton').on('click',function(){
		if(movedIndex != 0)
			movedIndex = movedIndex - 1;
		
		moveSlide(movedIndex);
	});
	
	//next버튼 클릭
	$('#nextButton').on('click',function(){
		if(movedIndex != 4)
			movedIndex = movedIndex + 1;
		
		moveSlide(movedIndex);
	});
	
	//초기슬라이더 위치 랜덤하게 지정
	var rNumf =Math.floor(Math.random() *5);
	moveSlide(rNumf);
	
	//각 컨트롤 버튼에 대해
	$('.controlButton').each(function(index){
		$(this).hover(
			function(){
				$(this).attr('src','image/controlButton2.png');
			},
			function(){
				$(this).attr('src','image/controlButton1.png');
			}
		);
		
		//
		$(this).on('click',function(){
			moveSlide(index);
		});
	}); //each끝
	
});//첫번째 function끝