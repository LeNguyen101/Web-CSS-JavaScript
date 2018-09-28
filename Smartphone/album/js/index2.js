window.addEventListener ('DOMContentLoaded',
   
     function(){	//無名関数
	//myAlert();
    var myObj2 = 
        document.querySelector('#menu a:first-child');
    var myColor;
    var myBack;
    myObj2.addEventListener('mouseover',
        function(){
          myBack = this.style.backgroundColor;
		  this.style.backgroundColor='green';
          myColor =this.style.color;
          this.style.color='white';
		},false
     );
    
    myObj2.addEventListener('mouseout',
         function(){
         this.style.backgroundColor = myBack;
         this.style.color = myColor;
          
		},false
     );
                            
    var myObj = document.getElementById('stopwatch');
	myObj.addEventListener ('click', myAlert, false);
	
    myObj.addEventListener ('mouseover',
         function(){
		  this.style.color='red';//イベントが発生するオブジェクト
		},false
    );
    
	myObj.addEventListener ('mouseout',
		  function(){
		  this.style.color='black';
		},false
     );
    
   },false
);
                         

function myAlert(){
  alert('I226');  
  alert('レーヒコイグエン');  
  alert('s177166');
    
  var date = new Date();	//現在の日時 2018/07/02 月
  var year = date.getFullYear();
  var month = date.getMonth()+1;  // 6
  var day = date.getDate();	// 2
  var week = date.getDay();	// 
  var weekDay = ['日','月','火','水','木','金','土'];
  var myDay = weekDay[week];

  alert('今日は'+ year+ '年'+ month +'月'+ day +'日'+ myDay +'です。');
  


}