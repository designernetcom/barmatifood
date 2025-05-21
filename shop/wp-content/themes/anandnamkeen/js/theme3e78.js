jQuery(document).ready(function() { 
var $=jQuery;
/**
 * navigation
 */
	$(".site-navigation-toggle,i.menu-close-icon").click(function() {  
		$(".site-navigation-toggle-holder").toggleClass("active"); 
		$(".site-navigation").toggleClass("dropdown");
	});
	
	$('body.mobile ul.menu li > ul.sub-menu').hide();
	$('ul.menu li > ul.sub-menu').parents("li").prepend('<i class="fa fa-chevron-down chevron"></i>');
	$('body.mobile ul.menu .chevron').click(function() {
		$(this).closest('li').find('ul.sub-menu').first().slideToggle();
	});
	
/**
 * header sticky
 */
	$(window).scroll(function() {
		if ($(this).scrollTop() > 40) {
			$('.main-header').addClass("sticky");
		} 
		else {
			$('.main-header').removeClass("sticky");
		}
	});
	

/**
 * dropdown
	
	$(document).on("change", "select", function()
	{
		if ($(this).val() != "") {
			$(this).css("color", "#333");
		} 
		else {
			$(this).css("color", "#7a7a7a");
		}	
	}); */
	

/**
 * mini cart
 */	
	$(".mcart-basket,.mcart-close").click(function() {  
		$(".mcart-container").toggleClass("open"); 
	});	

/**
 * slider
 */	
	var mySwiper=new Swiper('.elementor-slides .swiper-container',{
		speed: 500,
		loop: true,
		effect: 'slide',
		grabCursor: true,
		autoHeight : false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false 
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true 
		},
		navigation: {
			nextEl: '.elementor-swiper-button-next',
			prevEl: '.elementor-swiper-button-prev' 
		},
		on: {
			slideChangeTransitionStart: function(){
				var swiper=this;
				if($(swiper.slides[swiper.activeIndex]).filter('.swiper-slide-active').length>0){
					$.each(swiper.slides[swiper.activeIndex],function(){
						if(!$(this).hasClass('swiper-slide-active')){
							var animate=$(this).find('.animation');
							$(animate).each(function(){   
								var thistyle=$(this);
								thistyle.removeClass('curr_swiper');
								thistyle.removeClass('animated '+thistyle.data('animation'));
							});
						}
                    });
                }
			},
            slideChangeTransitionEnd: function(){
				var swiper=this;
				var activeslide=$(swiper.slides[swiper.activeIndex]).filter('.swiper-slide-active');
				$(activeslide).each(function(){
					var animate=$(this).find('.animation');
					$(animate).each(function(){
						if(!$(this).hasClass('curr_swiper')){
							$(this).addClass('curr_swiper');
							if($(this).data('animation')){
								$(this).addClass('animated '+$(this).data('animation'));
							}
						}
					});
				});
			}
		},
    });

/**
 * corousel
 */
	function swiper_corousel(clasname,slide_desctop,space_desctop,slide_tablet,space_tablet,slide_mobile,space_mobile) {
		var swiper=new Swiper('.'+clasname + ' .swiper-container',{
			speed: 500,
			loop: true,
			effect: 'slide',
			grabCursor: true,
			autoHeight : false,
			autoplay: {
				delay: 5000,
				disableOnInteraction: true ,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true 
			},
			navigation: {
				nextEl: '.elementor-swiper-button-next',
				prevEl: '.elementor-swiper-button-prev' 
			},
			breakpoints: {
				0: {
					slidesPerView: slide_mobile,
					spaceBetween: space_mobile,
				},
				768: {
					slidesPerView: slide_tablet,
					spaceBetween: space_tablet,
				},
				991: {
					slidesPerView: slide_desctop,
					spaceBetween: space_desctop,
				},
			}
		});
	}
	
	swiper_corousel("procat",5,15,4,10,2,5);
	
	
/**
 * remove billing & shipping details (thank You page)
 */
	$(".woocommerce-order-received .woocommerce-customer-details").remove();
	 
/**
 * add my account navigation toggle (my account)
 */	
	$(".account-toggle-menu span,.account-toggle-menu i.fa-times").click(function()
	{  
		$(".account-toggle-menu").parent().toggleClass("dropdown");  
	});
	

});