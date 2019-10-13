let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});

jQuery(document).ready(function() {
	jQuery('li').click(function(){
			switch(jQuery(this).text().trim()){
			case 'Sobre mim':
		  $('html, body').animate({
			  scrollTop: 0
		  }, 500);
		  break;
		  case 'Projetos':
		  $('html, body').animate({
			  scrollTop: 500
		  }, 500);
		  break;
		  case 'Experiências':
		  $('html, body').animate({
			  scrollTop: 1000
		  }, 500);
		  break;
		}
	})
  });