(function($) {
	//SKROLLR PARALLAX JS
	// window.onbeforeunload = function () {
	// 	window.scrollTo(0, 0);
	// }
	$( window ).on("load", function() {
		
	});/* load function end */

	

	jQuery(document).ready(function($){

		var wow = new WOW(
			{
				boxClass: 'wow',      // default
				animateClass: 'animated', // default
				offset: 200,          // default
				mobile: false,       // default
				live: false        // default
			}
		)
		wow.init();
		//WOW ANIMATION JS end

		// fixed header	
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 10) {
				$('.mainheader').addClass('sticky');
			
			} else {
				$('.mainheader').removeClass('sticky');
			
			}
		});
		//FullScreen Slider Function Start
		$('.carousel').carousel({
			interval: 8000,
			pause: "false",
			ride:"true",
			swipe: 50
		});

		// $('#carouselProduct').carousel({
		// 	interval: false,
		// 	pause: "false",
		// 	ride:"true",
		// 	swipe: 50
		// });

		//FullScreen Slider Function End
		
		//Smooth Scrolldown js For FullScreen Slider Start
		// $(document).on('click','.slider-down a',function(event){
		// 	event.preventDefault();
		// 	$('html, body').animate({
		// 		scrollTop: $(this.hash).offset().top - 150}, 700);
		// });
		//Smooth Scrolldown js For FullScreen Slider End

		//blog comment function
		$(document).on('click','.commentdown',function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $(this.hash).offset().top - 150}, 700);
		});


		// menu function navigaion
		$('.navbartoggle').click(function (e) {
			$('.headermenucol ').addClass("slide");
			$('.black-overlay').fadeIn(400);
			e.stopPropagation();
		});
		$('.headerclose > a').click(function (e) {
			e.preventDefault();
			$('.headermenucol ').removeClass("slide");
			$('.black-overlay').fadeOut(400);
		});
		$('.headermenucol ').click(function (e) {
			e.stopPropagation();
		});

		// prodcut detail popup
		// menu function navigaion
		$('.ProductToggle').on('click', function (e) {
			e.preventDefault();
			setTimeout(function(){ $('.prodcutdetailModal ').addClass("slide"); }, 500);
			//$('.prodcutdetailModal ').addClass("slide");
			$('body').addClass("OpenProcut");
			// $('.prodcutclose').fadeIn();
		});
		$('.prodcutclose > a').on('click', function (e) {
			e.preventDefault();
			$('.prodcutdetailModal').removeClass("slide");
			$('body').removeClass("OpenProcut");
			// $('.prodcutclose').fadeOut();
		
		});

		if (window.outerWidth < 1200) {

			$(document).click(function () {
				$('.headermenucol ').removeClass("slide");
				$('.black-overlay').fadeOut(400);
			});

			// $('.navmenu > ul li.menu-item-has-children').append('<span class="sub-menu-arrow"><i class="fas fa-chevron-down"></i></span>');

			// $('.sub-menu-arrow').on("click", function () {
			// 	var $icon = $(this).find('i');
			// 	$icon.toggleClass('fa-chevron-down  fa-chevron-up');

			// 	if ($icon.hasClass('fa-chevron-down')) {
			// 		//$(this).parent( 'li' ).find( 'ul' ).slideUp();
			// 		$(this).siblings('ul').slideUp();
			// 	}
			// 	else {
			// 		//$(this).parent( 'li' ).find( 'ul' ).slideDown();
			// 		$(this).siblings('ul').slideDown();

			// 	}
			// });
		}
		// menu function navigaion End

		//  Testy slider produt
		$('.testysliderproduct').slick({
			dots: false,
			infinite: true,
			speed: 700,
			fade:true,
			autoplay:true,
			cssEase: 'linear',
			autoplaySpeed: 3000,
			responsive: [
				{
				  breakpoint: 580,
				  settings: {
					dots: true,
					arrows:false
				  }
				}
				
			  ]
		});
		// Mobiel Emoji Slider

		// infrastrcure slider
		$('.infrastructureslider').slick({
			dots: false,
			arrows:true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
  			slidesToScroll: 1,
			autoplay:true,
			pauseOnHover:false,
			pauseOnFocus:false,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 580,
				  settings: {
					slidesToShow: 1,
				  }
				}
				
			  ]
		});

		$('[data-fancybox]').fancybox({
            youtube: {
                controls: 0,
                showinfo: 0
            },
            vimeo: {
                color: 'f00'
            },
            buttons: [
                "close"
            ],

        });
		
		$('.emojomobileslider').slick({
			dots: true,
			arrows:false,
			infinite: true,
			speed: 700,
			fade:true,
			autoplay:false,
			cssEase: 'linear',
			autoplaySpeed: 3000,
			
		});

		// emoji click full image show
		$('.emojicontent').on('click',function(event){
			event.preventDefault();
			$(this).addClass('active').siblings().removeClass('active');
			var getImage = $(this).find('.emoji-full-thumb-img').data('img');
			var getAlt = $(this).find('.emojithumb img').attr('alt');
			$('.emojithumbcol img').attr('src', getImage);
			$('.emojithumbcol img').attr('alt', getAlt);
		});

		// fileupload controls function
		$("#file-upload").on("change", function() {
            var fileName = $(this).val().split("\\").pop();
            $(".custom-file-upload").addClass("selected").html(fileName);
        });

		
		
				

	});// ready funciton end

	
})(jQuery);

