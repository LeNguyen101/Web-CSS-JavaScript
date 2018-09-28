window.addEventListener('DOMContentLoaded',
 function() {
    var str ='こんにちは、JavaScript !';
    console.log(str);
    var result = document.querySelector('#result')
    result.innerHTML = str;
    result.style.color = 'red';
    
    var res = document.querySelector('[type="reset"]');
    res.addEventListener('click',
        function(){
        result.innerHTML ='';
       },false
     )
    
   },false
);
                        