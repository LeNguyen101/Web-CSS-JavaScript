window.addEventListener('DOMContentLoaded',
    function today () {
     var dateObj = new Date();
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth()+1;
    var date = dateObj.getDate();
    var day = dateObj.getDay();
    var hour = dateObj.getHours();
    var minute = dateObj.getMinutes();
    var second = dateObj.getSeconds;
    var weekDay = ["日","月","火","水","木","金","土"];
    var addDate = document.querySelector('#addDate');
    
    addDate.innerHTML = dateObj;
    
  }, false
 );
