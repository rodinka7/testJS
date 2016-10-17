'use strict';

(function(){
	var elems = document.getElementsByClassName('header');

	accordeon.onclick =  function(e) {

		var target = e.target,
			btns = document.getElementsByClassName('header'),
			lists = document.getElementsByClassName('inside'),
			triangle = target.firstElementChild.firstElementChild,
			triangleDown = target.firstElementChild.lastElementChild,
			triangles = document.getElementsByClassName('polygon-up'),
			trianglesDown = document.getElementsByClassName('polygon-down'),
			list = target.nextSibling.nextSibling,
			start = Date.now();

		for (var i = 0; i < btns.length; i++) {

			btns[i].id = '';
			triangles[i].style.display = 'none';
			trianglesDown[i].style.display = 'block';
			//lists[i].id = '';
		};

		target.id = 'active';
		triangleDown.style.display = 'none';
		triangle.style.display = 'block';
		//target.nextSibling.nextSibling.id = 'insideActive';

		var timer = setInterval(function() {

			var timePassed = Date.now() - start;
							
			/*slideUp(timePassed).then(removeId()
			).then(function() {
			    console.log('Done!');
			});*/

			slideUp(timePassed);

			slide(timePassed);

			if (timePassed >= 500) {
				clearInterval(timer);
				return;
			}

		}, 20);

		function slide(timePassed) {

			list.style.height = timePassed / 5 + 'px';
		}

		function slideUp(timePassed) {
		    return new Promise(function(resolve){

		    	for (var j = 0; j < lists.length; j++) {
		    		if (lists[j].id === 'before') {

		    			console.log(lists[j]);
		    			console.log(lists[j].id);

		    			lists[j].style.height = 100 - timePassed / 5 + 'px';
		    		
		    		}
		    	}
            
            	resolve();
        	});
    	}

    	function removeId() {
		    return new Promise(function(resolve){
		    	for (var j = 0; j < lists.length; j++) {
		    		lists[j].id = '';
		    	}
            	resolve();
        	});
    	}

		list.id = 'before';
	}

})();