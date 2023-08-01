$(function(){
	// Ленивая загрузка
	observer = lozad('.lozad:not(loaded)', {
		rootMargin: '400px 400px',
		threshold: 0,
		loaded: function(el) {
			el.classList.add('loaded')
		}
	})

	observer.observe()


	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')


	// Плавная прокрутка к якорю
	$('body').on('click', '.scroll-js', function(e) {
		e.preventDefault()

		var addOffset = $('.layout-header').height()

		$('html, body').stop().animate({
			scrollTop: $('#products-landing').offset().top - addOffset
		}, 1000)
	})
})

$(window).on("load", function () {
	var controller = new ScrollMagic.Controller()

	if ( $('#product1').length ) {
		var logoAnimation1 = new TimelineLite()
		.fromTo( $('#product1').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product1 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation1)
		.addTo(controller)
	}
	
	if ( $('#product2').length ) {
		var logoAnimation2 = new TimelineLite()
		.fromTo( $('#product2').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product2 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation2)
		.addTo(controller)
	}
	
	if ( $('#product3').length ) {
		var logoAnimation3 = new TimelineLite()
		.fromTo( $('#product3').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product3 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation3)
		.addTo(controller)
	}
	
	if ( $('#product4').length ) {
		var logoAnimation4 = new TimelineLite()
		.fromTo( $('#product4').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product4 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation4)
		.addTo(controller)
	}
	
	if ( $('#product5').length ) {
		var logoAnimation5 = new TimelineLite()
		.fromTo( $('#product5').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product5 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation5)
		.addTo(controller)
	}
	
	if ( $('#product6').length ) {
		var logoAnimation6 = new TimelineLite()
		.fromTo( $('#product6').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product6 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation6)
		.addTo(controller)
	}
	
	if ( $('#product7').length ) {
		var logoAnimation7 = new TimelineLite()
		.fromTo( $('#product7').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product7 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation7)
		.addTo(controller)
	}
	
	if ( $('#product8').length ) {
		var logoAnimation8 = new TimelineLite()
		.fromTo( $('#product8').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product8 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation8)
		.addTo(controller)
	}
	
	if ( $('#product9').length ) {
		var logoAnimation8 = new TimelineLite()
		.fromTo( $('#product9').find('.logo-anim__box'), 1, {x: 0, y: '0%'}, {x: '-27%', ease: Linear.easeNone})

		new ScrollMagic.Scene({
			triggerElement: '#product9 .logo-anim',
			duration: '100%',
			triggerHook: "onEnter"
		})
		.setTween(logoAnimation8)
		.addTo(controller)
	}


	if ( $(window).width() > 1024 ) {
		$('.first-items__slider1').each(function() {
			firstSlider1 = new Swiper('.first-items__slider1', {
				spaceBetween: 0,
				loop: false,
				effect: 'fade',
				speed: 0,
				allowTouchMove: false,
				simulateTouch: false,
				autoplay: {
					delay: 600,
					disableOnInteraction: false,
					stopOnLastSlide: true
				}
			})
		})


		$('.first-items__slider2').each(function() {
			firstSlider2 = new Swiper('.first-items__slider2', {
				spaceBetween: 0,
				loop: false,
				effect: 'fade',
				speed: 0,
				allowTouchMove: false,
				simulateTouch: false,
				autoplay: {
					delay: 650,
					disableOnInteraction: false,
					stopOnLastSlide: true
				}
			})
		})

		$('.first-items__slider3').each(function() {
			firstSlider3 = new Swiper('.first-items__slider3', {
				spaceBetween: 0,
				loop: false,
				effect: 'fade',
				speed: 0,
				allowTouchMove: false,
				simulateTouch: false,
				autoplay: {
					delay: 700,
					disableOnInteraction: false,
					stopOnLastSlide: true
				}
			})
		})

		setTimeout(function(){
			$('.first-logo').addClass('show')

			firstSlider1[0].removeSlide([0, 3])
			firstSlider1[0].destroy(true,true)
			firstSlider1[1].removeSlide([0, 1, 2, 3])
			firstSlider1[1].$el.addClass('notSlider')
			firstSlider1[1].destroy(true,true)
			firstSlider1[2].removeSlide([0, 3])
			firstSlider1[2].destroy(true,true)

			new Swiper('.first-items__slider1:not(.notSlider)', {
				spaceBetween: 0,
				loop: false,
				effect: 'fade',
				speed: 0,
				allowTouchMove: false,
				simulateTouch: false,
				autoplay: {
					delay: 600,
					disableOnInteraction: false,
				}
			})

			firstSlider2[0].removeSlide([0, 1, 2, 3])
			firstSlider2[0].$el.addClass('notSlider')
			firstSlider2[0].destroy(true,true)
			firstSlider2[1].removeSlide([2, 4])
			firstSlider2[1].destroy(true,true)
			firstSlider2[2].removeSlide([2, 4])
			firstSlider2[2].destroy(true,true)
		
			new Swiper('.first-items__slider2:not(.notSlider)', {
				spaceBetween: 0,
				loop: false,
				effect: 'fade',
				speed: 0,
				allowTouchMove: false,
				simulateTouch: false,
				autoplay: {
					delay: 650,
					disableOnInteraction: false,
				}
			})

			firstSlider3[0].removeSlide([1, 3])
			firstSlider3[0].destroy(true,true)
			firstSlider3[1].removeSlide([1, 3])
			firstSlider3[1].destroy(true,true)
			firstSlider3[2].removeSlide([0, 1, 2, 3])
			firstSlider3[2].$el.addClass('notSlider')
			firstSlider3[2].destroy(true,true)

			new Swiper('.first-items__slider3:not(.notSlider)', {
				spaceBetween: 0,
				loop: false,
				effect: 'fade',
				speed: 0,
				allowTouchMove: false,
				simulateTouch: false,
				autoplay: {
					delay: 700,
					disableOnInteraction: false,
				}
			})
		}, 3000)


		if ( $('#abs-img1').length ) {
			var imgAnimation1 = new TimelineLite()
			.fromTo('#abs-img1' , 1, {y: 0}, {y: '-50%', ease: Linear.easeNone})

			new ScrollMagic.Scene({
				triggerElement: '#abs-img1',
				duration: '100%',
				triggerHook: "onEnter"
			})
			.setTween(imgAnimation1)
			.addTo(controller)
		}

		if ( $('#abs-img2').length ) {
			var imgAnimation2 = new TimelineLite()
			.fromTo('#abs-img2' , 1, {y: 0}, {y: '-50%', ease: Linear.easeNone})

			new ScrollMagic.Scene({
				triggerElement: '#abs-img2',
				duration: '100%',
				triggerHook: "onEnter"
			})
			.setTween(imgAnimation2)
			.addTo(controller)
		}

		if ( $('#abs-img3').length ) {
			var imgAnimation3 = new TimelineLite()
			.fromTo('#abs-img3' , 1, {y: 0}, {y: '-50%', ease: Linear.easeNone})

			new ScrollMagic.Scene({
				triggerElement: '#abs-img3',
				duration: '100%',
				triggerHook: "onEnter"
			})
			.setTween(imgAnimation3)
			.addTo(controller)
		}

		if ( $('#abs-img4').length ) {
			var imgAnimation4 = new TimelineLite()
			.fromTo('#abs-img4' , 1, {y: 0}, {y: '-50%', ease: Linear.easeNone})

			new ScrollMagic.Scene({
				triggerElement: '#abs-img4',
				duration: '100%',
				triggerHook: "onEnter"
			})
			.setTween(imgAnimation4)
			.addTo(controller)
		}

		if ( $('#abs-img5').length ) {
			var imgAnimation5 = new TimelineLite()
			.fromTo('#abs-img5' , 1, {y: 0}, {y: '-50%', ease: Linear.easeNone})

			new ScrollMagic.Scene({
				triggerElement: '#abs-img5',
				duration: '100%',
				triggerHook: "onEnter"
			})
			.setTween(imgAnimation5)
			.addTo(controller)
		}
	}

	if( $(window).width() < 1025 ){
		$('.elit-item').height('auto')

		setHeight( $('.elit-item') )
	}

	slidersMob()

	productItems()
})

$(window).on("resize", function () {
	if( $(window).width() < 1025 ){
		$('.elit').removeClass('elit__scroll')

		$('.elit-item').height('auto')

		setHeight( $('.elit-item') )
	}

	if( $(window).width() > 1024 && $('.elit__anim').hasClass('elit__scroll') ){
		var offsetTop = $('.layout-header').innerHeight()

		var durationEl = $('.elit__anim').innerHeight() - $(window).height() + offsetTop

		scene.duration(durationEl)
		scene.offset(offsetTop*-1)
		scene.refresh()
	}

	slidersMob()

	productItems()
})


// Вспомогательные функции
var supportsCssVars = function() {
    var s = document.createElement('style'),
	support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}

function widthScroll() {
    var div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    var scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}

function setHeight(className){
    var maxheight = 0
    var object = $(className)

    object.each(function() {
    	var elHeight = $(this).innerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    object.innerHeight( maxheight )
}


function slidersMob(){
	if ( $(window).width() < 480 && !$('.product-images').hasClass('swiper-container-initialized') ) {
		$('.product-images').addClass('swiper-container')
		$('.product-images__wrap').addClass('swiper-wrapper')
		$('.product-images__img').addClass('swiper-slide')

		galleryImages = new Swiper('.product-images', {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: false,
			pagination: {
				el: '.product-images__pag',
				type: 'progressbar',
			},
			on: {
				slideChange: function (swiper) {
					if ( swiper.realIndex == swiper.slides.length - 1 ) {
						$(swiper.$el).addClass('last_slide')
					} else {
						$(swiper.$el).removeClass('last_slide')
					}

					if ( swiper.realIndex > 0 ) {
						$(swiper.$el).addClass('all_slide')
					} else {
						$(swiper.$el).removeClass('all_slide')
					}
				},
			}
		})
	} else if ( $(window).width() > 479 && $('.product-images.swiper-container').hasClass('swiper-container-initialized') ) {
		$('.product-images').removeClass('swiper-container')
		$('.product-images__wrap').removeClass('swiper-wrapper')
		$('.product-images__img').removeClass('swiper-slide')

		galleryImages.forEach(function(element){
			element.destroy(true, true)
		})
	}
}

function productItems(){
	if ( $(window).width() < 600 && !$('.product-items').hasClass('swiper-container-initialized') ) {
		$('.product-items').addClass('swiper-container')
		$('.product-items__wrap').removeClass('flex').addClass('swiper-wrapper')
		$('.product-item').addClass('swiper-slide')
		
		itemsSlider = new Swiper('.product-items', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: false,
			navigation:{
				nextEl: '.product-items__next',
				prevEl: '.product-items__prev',
			}
		})
	} else if ( $(window).width() > 599 && $('.product-items.swiper-container').hasClass('swiper-container-initialized') ) {
		$('.product-items').removeClass('swiper-container')
		$('.product-items__wrap').removeClass('swiper-wrapper').addClass('flex')
		$('.product-item').removeClass('swiper-slide')

		itemsSlider.forEach(function(element){
			element.destroy(true, true)
		})
	}
}