$(function(){
	let button = $('.right-block-header');
	let ulMenu = $('.right-block-ul-mobail');
	button.click(function(){
		button.toggleClass('close');
		ulMenu.slideToggle();	
	});
    $(document).ready(function(){
         $(".owl-carousel").owlCarousel({
            loop:true,
            margin:30,
		    responsive:{
		    	0:{
		            items:1,
		            dots:true,
		            nav:false
		        },
		        768:{
		            items:2,
		            dots:true,
		            nav:false 
		        },
		        1024:{
		            items:3,
		            navContainer: '.arrows',
		            navText:('','')
		        }
		    }
        });
    });
});
