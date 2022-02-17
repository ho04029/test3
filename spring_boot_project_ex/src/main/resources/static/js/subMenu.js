/**
 * subMenu.js
 */

$(function(){
	//전체보기 클릭 시 모든 서브 메뉴 항목 보이게
	$('#showAllMenu').on('click',function(){
		if($(this).text()=='전체보기 ▼'){
			$('#subMenuBox').css('visibility','visible');
			$(this).text('메뉴닫기 ▲').css('color','blue');
		}else{
			$('#subMenuBox').css('visibility','hidden');
			$(this).text('전체보기 ▼').css('color','black');
		}
	});
});