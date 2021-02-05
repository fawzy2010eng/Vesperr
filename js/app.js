window.onload = function(){
    // adding animation to the banner parts on loading
    let left = document.querySelector('.banner .left').children;
    let right = document.querySelector('.banner .right');
    for(let i = 0; i < left.length; i++){
        left[i].classList.add('animate__animated', 'animate__bounceInUp');
        left[i].style.animationDuration = `${(i+1)*1.1}s`;
    }
    //adding shaky animation to the right part
    setTimeout(() => {
        right.classList.replace('animate__fadeInRight' , 'animate__shakeY')
        right.style.animationIterationCount = 'infinite'
        right.style.animationDuration = '10s'
    }, 770);

    
}

// counter function

function update_users_count(id,counter) {
    id.animate({
        counter: counter
    }, {
        duration: 3000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        },
        complete: update_users_count
    });
};

// activate the counter when the scroll made it to 1400
window.addEventListener('scroll',function(){
	var currentScrollPos = window.pageYOffset;
	 if(currentScrollPos < 1400){
        update_users_count($('#counter1'),65);
        update_users_count($('#counter2'),85);
        update_users_count($('#counter3'),12);
        update_users_count($('#counter4'),55);		
	}
})


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  $('.testimonials .owl-carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    items:2,
    dots: true,
    dotsEach: 2,
    responsive : {
        0 : {
            items: 1
        },
        992 : {
           items: 2 
        }

    }


})




// hovering on portfolio

//declaring the buttons of the filter
var btns = document.querySelectorAll('.portfolio .btns button');
//declaring the tiles of the filter
var tiles = document.querySelectorAll('.portfolio .tiles .tile');
//adding functions to the different buutons
btns[0].addEventListener('click',function(){
	for(var j = 0; j < tiles.length; j++){
			tiles[j].style.display = 'block'
		}
        this.style.backgroundColor = '#3498db';
		for(var i = 1; i < btns.length; i++){
			btns[i].style.backgroundColor = 'transparent'
		}
	// document.querySelector('.tiles').style.gridTemplateColumns = 'auto auto auto'
})
for(var i = 1; i < btns.length; i++){
	btns[i].addEventListener('click',function(){
		for(var j = 0; j < btns.length; j++){
			btns[j].style.backgroundColor = 'transparent'
		}
        this.style.backgroundColor = '#3498db';
		for(var j = 0; j < tiles.length; j++){
			tiles[j].style.display = 'none'
		}
		for(var j = 0; j < tiles.length; j++){
			if( this.getAttribute('data-filter') == tiles[j].getAttribute('data-filter')){
				tiles[j].style.display = 'block'
				
			}
		}
		// document.querySelector('.tiles').style.gridTemplateColumns = 'auto auto auto'
	})
}