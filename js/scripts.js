(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


	// code for menu

	$(document).ready(function() {
		$(".sm-menu-wrapper").click(function() {
			$(".sm-menu .menu-wrapper").slideToggle();
		});
	});

	// code for search box

	$(".serach-wrapper input").focus(function (){
		$(".ser-suggest").show();
	}).blur(function() {
    $(".ser-suggest").hide();
    });


	// code for dropdown

	$(".menu-sm-pop ul li").click(function (){
		$(this).children("ul").slideToggle();
	})


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);



document.addEventListener('DOMContentLoaded', function () {
    const engLink = document.querySelector('.eng-lang');
    const urduLink = document.querySelector('.urdu-lang');

    engLink.addEventListener('click', function (event) {
        event.preventDefault();
        engLink.classList.add('active');
        urduLink.classList.remove('active');
    });

    urduLink.addEventListener('click', function (event) {
        event.preventDefault();
        urduLink.classList.add('active');
        engLink.classList.remove('active');
    });
});




// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable the keyboard shortcut for copy (Ctrl+C or Command+C)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || (e.metaKey && e.key === 'c')) {
        e.preventDefault();
    }
});

// Disable the copy event
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

