/**
 * 
 */
 
 $(document).ready(function(){
	
	$('#searchZip').on('click',function(){
		new daum.Postcode({
			oncomplete:function(data){
				//팝업창에서 검색결과 클릭했을 때 
				var address1='';
				
				//var dong_building='';
				
				//도로명 주소인 경우
				if(data.userSelectedType =='R'){
					address1 = data.roadAddress + "(" + data.bname + data.buildingName + ")";
				} else {  //지번 주소인 경우
					address1 = data.jibunAddress;
				}
				
				//우편번호와 주소1출력
				document.getElementById('zipcode').value = data.zonecode;
				document.getElementById('address1').value = address1;
				
				//상세 주소 입력하도록 입력되어 있는 값 삭제하고 포커스
				var address2 = document.getElementById('address2');
				address2.value="";
				address2.focus();
			}
		}).open();
	});
});