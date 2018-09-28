window.addEventListener('DOMContentLoaded',
    function() {
    
    //Code to execute at the timing when the page body is loaded
    var cancel = document.querySelector('#cancel');
    var subject = document.querySelector('#subject');
    var memo = document.querySelector('#memo');
    var save = document.querySelector('#save');
    
    save.addEventListener('click',
        function(e){
        //(1)Code to execute when the SAVE button is clicked
        e.preventDefault();
        if (subject.validity.valid === false ||
           memo.validity.valid === false){
            //(2)Alert Code 
            window.alert('件名、メモはいずれも必須です。')
            return;
        }
     },false
    )
    
    cancel.addEventListener('click',
     function(){
        location.href = 'index.html';
      }, false
     );
    }, false
);