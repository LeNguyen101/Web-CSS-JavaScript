window.addEventListener('DOMContentLoaded',
	function(){
		var dsp = document.querySelector('#dsp');
		var clr = document.querySelector('#clr');
		var result = document.querySelector('#result');
		dsp.addEventListener('click',display,false);
		clr.addEventListener('click',
			function(e){
				//alert(e.type);
				//e.preventDefault();
				result.innerHTML = '';
			},false
		);				
	},
	false
);

function display(){
	// array
	var str = '';
	var color = ['red', 'blue', 'yellow'];
	var hash = {
		'no': 'A100',
		'pass': 'abc123'
	};
    alert(hash.no);
	// hash map
	for( var i=0; i<color.length; ++i)
		str += color[i] + '</br>';
	
	for( var key in hash){
		str += key + '：';
		str += hash[key] + '</br>';
	}
	result.innerHTML = str;
}