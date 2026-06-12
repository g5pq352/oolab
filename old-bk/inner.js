function titleEnter(){
	const observer = new IntersectionObserver((entries, obs) => {
	    entries.forEach(entry => {
	        if (entry.isIntersecting) {
	            const fnName = entry.target.dataset.triggerFn;

	            if (typeof window[fnName] === 'function') {
	                window[fnName](entry.target);
	            }

	            // 可選：觸發一次後不再觸發
	            obs.unobserve(entry.target);
	        }
	    });
	}, {
	    threshold: 0.3 // 元素至少 50% 進入畫面才觸發
	});

	// 自動綁定所有有 data-trigger-fn 的元素
	document.querySelectorAll('[data-trigger-fn]').forEach(el => {
	    observer.observe(el);
	});
}

$(function(){
	titleEnter()

	var $footer_tl = gsap.timeline({
		paused: true,
	}).fromTo(".footer-deco-1", {
		y: "100vh",
	}, {
		y: 0,
		duration: 1,
		ease: "power1.out"
	}, .2).fromTo(".footer-deco-2", {
		y: "100vh",
	}, {
		y: 0,
		duration: 1,
		ease: "power1.out"
	}, .4).fromTo(".footer-item-1", {
		opacity: 0,
		y: 20,
	}, {
		opacity: 1,
		y: 0,
		duration: .8,
		ease: "power1.out"
	}).fromTo(".footer-item-2", {
		opacity: 0,
		y: 20,
	}, {
		opacity: 1,
		y: 0,
		duration: .8,
		ease: "power1.out"
	}, "<.3")

	window.triggerFooter= (el) => {
		$footer_tl.play()
	};

	window.cupPon= (el) => {
		$(".cup-pon").addClass("is-pon")
	};

	window.triggerSlideUp= (el) => {
		console.log(el)
	};
})
if(location.href == 'https://oolabtwtest.shoplineapp.com/') {
	$("body").addClass("is-pink")
	$("#Content .CustomPage .Grid-row-wrapper").eq(0).addClass("relative mb-[52px] pt-[7vh]");
	$("#Content .CustomPage .Grid-row-wrapper").eq(0).find(".Grid-row").addClass("slider-width");

	var _slider_bg = 
	'<div class="absolute tf w-[110%] -z-10"><img src="https://gdlinode.tw/oolab/images/index-slider-bg.svg" class="mx-auto"></div>';
	$("#Content .CustomPage .Grid-row-wrapper").eq(0).find(".slider-width").append(_slider_bg);

	var _slider_go = 
	'<div class="absolute -left-[45px] -top-[45px] w-full h-full">' +
		'<div class="relative inline-block w-full h-full">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
				'<path id="sliderPath" d="M1.5,180.31v-30.91C1.5,67.72,67.72,1.5,149.4,1.5h663.15" style="fill: none; stroke: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +

				'<text class="fill-[#1D7068] font-bold text-[20px] tracking-normal" style="transform: translate(36px, 38px);">' +
					'<textPath class="aboutText" href="#sliderPath">TREASURE EVERY MOMENT  ...</textPath>' +
				'</text>' +
			'</svg>' +
		'</div>' +
	'</div>' +
	'<div class="absolute z-10 -left-[2vw] bottom-[16vh]"><img src="https://gdlinode.tw/oolab/images/slider-deco-1.svg"></div>' +
	'<div class="absolute z-10 -right-[2.5vw] bottom-[19vh]">' +
		'<div class="mb-6"><img src="https://gdlinode.tw/oolab/images/slider-deco-2.svg" class="ml-auto"></div>' +
		'<div class=""><img src="https://gdlinode.tw/oolab/images/slider-deco-3.svg" class="ml-auto"></div>' +
	'</div>';
	$("#Content .CustomPage .Grid-row-wrapper").eq(0).find(".Grid-row").append(_slider_go);

	gsap.fromTo(".aboutText", { 
		attr: { 
			startOffset: "100%" 
		},
	}, { 
		attr: { 
			startOffset: "2%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
		delay: .5,
	});

	$("#Content .CustomPage .Grid-row-wrapper").eq(1).addClass("relative");
	var _item_section_two =
	'<div class="absolute top-[22vh] right-[10vw]" data-trigger-fn="cupPon">' +
		'<div class=""><img src="https://gdlinode.tw/oolab/images/is2-circle.svg" class="animate-spin-slow"></div>' +
		'<div class="absolute tf w-full flex items-center justify-center -mt-2 ml-2">' +
			'<img src="https://gdlinode.tw/oolab/images/is2-deco-1.png">' +
			'<img src="https://gdlinode.tw/oolab/images/is2-deco-2.png" class="cup-pon">' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .Grid-row-wrapper").eq(1).append(_item_section_two);

	var _item_section_three =
	'<div class="overflow-hidden border-y-[2px] border-[#4B4C4E]">' +
		'<div class="flex w-max index-scroll-left">' +
			'<img src="https://gdlinode.tw/oolab/images/index-marquee-1.svg" class="max-w-none">' +
			'<img src="https://gdlinode.tw/oolab/images/index-marquee-1.svg" class="max-w-none">' +
		'</div>' +
	'</div>';
	$(_item_section_three).insertAfter($("#Content .CustomPage .Grid-row-wrapper").eq(3));

	var _item_section_five =
	'<div class="overflow-hidden border-y-[2px] border-[#4B4C4E]">' +
		'<div class="flex w-max index-scroll-right">' +
			'<img src="https://gdlinode.tw/oolab/images/index-marquee-2.svg" class="max-w-none">' +
			'<img src="https://gdlinode.tw/oolab/images/index-marquee-2.svg" class="max-w-none">' +
		'</div>' +
	'</div>';
	$(_item_section_five).insertAfter($("#Content .CustomPage .Grid-row-wrapper").eq(5));


	$("#Content .CustomPage .Grid-row-wrapper").eq(6).addClass("productsWrap")
	$(function(){

		$(".productsWrap .owl-stage .owl-item").find(".product-item").each(function(i, el){
			var _url = $(el).find("a").attr("href");
		})
		var _item_prev =
		'<svg width="17.46" height="26.44" viewBox="0 0 17.46 26.44">' +
		'<polyline points="3.5 1.5 15.96 14.09 1.5 24.94" style="fill: #fff; stroke: #1d7068; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +
		'</svg>';
		$(".productsWrap .owl-nav .owl-prev").html(_item_prev)
		var _item_next =
		'<svg width="17.46" height="26.44" viewBox="0 0 17.46 26.44">' +
		'<polyline points="3.5 1.5 15.96 14.09 1.5 24.94" style="fill: #fff; stroke: #1d7068; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +
		'</svg>';
		$(".productsWrap .owl-nav .owl-next").html(_item_next)
	})


	$("#Content .CustomPage .Grid-row-wrapper").eq(4).addClass("productCats once")
	$('<div class="pt-[140px] mb-20"><img src="https://gdlinode.tw/oolab/images/index-cats-head.svg" class="mx-auto"></div>').insertBefore($("#Content .CustomPage .productCats"));
	$(function(){
		$(".productCats.once .Grid-row .Grid-text-item").each(function(i, el){
			var _url_cats = $(el).find("p a").attr("href");
			var _item_button = '<div class="inline-block"><a href="'+_url_cats+'" class="about-button w-[216px] bg-white"><span>閱讀更多</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a></div>';
			$(_item_button).insertAfter($(".Grid-item-content", el))
		})
	})

	$("#Content .CustomPage .Grid-row-wrapper").eq(5).addClass("productCats second")
	$(function(){
		$(".productCats.second .Grid-row .Grid-text-item").each(function(i, el){
			var _url_cats = $(el).find("p a").attr("href");
			var _item_button = '<div class="inline-block"><a href="'+_url_cats+'" class="about-button w-[216px] bg-white"><span>閱讀更多</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a></div>';
			$(_item_button).insertAfter($(".Grid-item-content", el))
		})
	})

	var _item_all =
	'<div class="relative text-center pointer-events-none">' +
		'<div class="all-product relative inline-block">' +
			'<div class=""><img src="https://gdlinode.tw/oolab/images/all-product.svg"></div>' +
			'<div class="absolute tf-x bottom-12 arrow pointer-events-auto"><a href="javascript:;"><svg width="60" height="60" viewBox="0 0 59.86 59.91">' +
				'<path d="M59.39,24.14c-.15-1.11-.34-2.2-.59-3.29-2.27-9.75-8.13-16.37-17.82-19.25-7.01-2.09-14.15-2.1-21.21-.24C10.85,3.73,4.77,9.35,1.9,18.15c-2.48,7.59-2.51,15.33-.2,22.97,2.67,8.85,8.54,14.67,17.43,17.24,7.18,2.08,14.44,2.06,21.63.03,7.69-2.17,13.26-6.92,16.45-14.31,1.31-3.03,2.06-6.17,2.4-9.39,0-.07.01-.14.02-.21.15-1.49.21-2.99.2-4.51.01,0,.03,0,.04,0-.06-2.5-.34-4.84-.47-5.82Z" style="fill: #1d7068;"/>' +
				'<polyline points="25.83 39.15 35.6 29.27 24.26 20.76" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/>' +
			'</svg></a></div>' +
			'<div class="absolute right-3 -bottom-10 flex items-center justify-center" data-trigger-fn="cupPon">' +
				'<img src="https://gdlinode.tw/oolab/images/allp-deco-1.png">' +
				'<img src="https://gdlinode.tw/oolab/images/allp-deco-2.png" class="cup-pon -ml-2">' +
			'</div>' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .productCats.second").append(_item_all);

	var _item_bg ='<div class="absolute tf pointer-events-none"><img src="https://gdlinode.tw/oolab/images/all-product-bg.svg"></div>';
	$("#Content .CustomPage .productCats.second").append(_item_bg);


	var _item_marquee =
	'<div class="h-screen relative overflow-hidden">' +
		'<div class="absolute top-0 left-0 w-full h-full -z-10"><img src="https://gdlinode.tw/oolab/images/marquee-bg.png"></div>' +
		'<div class="flex h-full items-center ml-[150px]">' +
			'<div class="shrink-0 mr-[10vw] mb-20">' +
				'<div class=""><img src="https://gdlinode.tw/oolab/images/marquee-head.svg"></div>' +
				'<a href="javascript:;" class="more-arrow"><div class="inline-block border-2 border-white rounded-full py-4 px-[18px] mt-[62px] ml-[72px]">' +
					'<div class="flex items-center">' +
						'<span class="font-bold text-white text-[18px] tracking-wide">更多生活分享</span>' +
						'<div class="arrow pointer-events-auto ml-8">' +
							'<svg width="33" height="33" viewBox="0 0 32.52 32.55">' +
								'<path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #f4f4f2;"/>' +
							  '<polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #1d7068; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +
							'</svg>' +
						'</div>' +
					'</div>' +
				'</div></a>' +
			'</div>' +
			'<div class="relative mt-20">' +
				'<div class="absolute left-[17vw] -top-[22vh] w-[650px]">' +
					'<ul class="grid grid-cols-4 gap-x-3 gap-y-3">' +
						'<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>' +
						'<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>' +
						'<li class=""><img src="https://gdlinode.tw/oolab/images/marquee-circle.svg" class="animate-spin-slow"></li>' +
						'<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>' +
						'<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>' +
						'<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>' +
						'<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>' +
						'<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>' +
					'</ul>' +
				'</div>' +
				'<div class="overflow-hidden border-[3px] border-pink rounded-l-[40px]">' +
					'<div class="flex w-max index-scroll-left">' +
						'<img src="https://gdlinode.tw/oolab/images/index-marquee-1.jpg" class="max-w-none">' +
						'<img src="https://gdlinode.tw/oolab/images/index-marquee-2.jpg" class="max-w-none">' +
						'<img src="https://gdlinode.tw/oolab/images/index-marquee-3.jpg" class="max-w-none">' +
						'<img src="https://gdlinode.tw/oolab/images/index-marquee-4.jpg" class="max-w-none">' +
						'<img src="https://gdlinode.tw/oolab/images/index-marquee-1.jpg" class="max-w-none">' +
						'<img src="https://gdlinode.tw/oolab/images/index-marquee-2.jpg" class="max-w-none">' +
						'<img src="https://gdlinode.tw/oolab/images/index-marquee-3.jpg" class="max-w-none">' +
						'<img src="https://gdlinode.tw/oolab/images/index-marquee-4.jpg" class="max-w-none">' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>';
	$(_item_marquee).insertAfter($("#Content .CustomPage .Grid-row-wrapper").eq(6));


	

    // $(function(){
    // 	console.log($("carousel-display"))
    // 	setTimeout(function() {
	// 		$("carousel-display").owlCarousel({
	// 			loop: true,
	// 			items: 3,
	// 			margin: 10,
	// 			nav: false,
	// 			lazyLoad: true,
	// 			onLoadedLazy: function(event) {
	// 			window.resizeImages(event.target);
	// 			},
	// 			onInitialized: function() {
	// 			//owl-stage have transition: 0.25s Time difference
	// 			setTimeout(function() {
	// 			owl.prev('.owl-carousel-first-initializing').hide();
	// 			owl
	// 			.removeClass('initializing')
	// 			.trigger('refresh.owl.carousel');
	// 			}, 300);
	// 			},
	// 			autoplay: true,
	// 			autoplayTimeout: (parseFloat($jq(this).data('interval')) || 5) * 1000,
	// 			autoHeight: true,
	// 			autoplayHoverPause: false // https://github.com/OwlCarousel2/OwlCarousel2/pull/1777
	// 		});
	// 		console.log(123)
	// 	}, 2000);
	// })

}

if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/cooperation-offers' || location.href == 'https://oolabtwtest.shoplineapp.com/pages/storepromotions') {
	$("body").addClass("is-pink")
	$("#Content .CustomPage").addClass("intros-items");

	$("#Content .CustomPage .Grid-row-wrapper").eq(0).addClass("relative");

	if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/cooperation-offers') {
		var _item_banner = 
		'<div class="absolute left-[5vw] top-[18vh]">' +
			'<div class="relative inline-block pt-16 pl-16">' +
				'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
					'<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h412" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +
					'<text class="fill-[#1D7068] font-bold text-[20px] tracking-normal" style="transform: translate(36px, 38px);">' +
						'<textPath class="aboutText" href="#aboutPath">PARTNERSHIP OFFERS...</textPath>' +
					'</text>' +
				'</svg>' +
				'<img src="https://gdlinode.tw/oolab/images/cooperation-head.svg">' +
			'</div>' +
		'</div>' +
		'<div class="rotate absolute right-[7vw] top-[5vh]"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate.svg" class="animate-spin-slow"></div>';
		$("#Content .CustomPage .Grid-row-wrapper").eq(0).append(_item_banner);
	}
	if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/storepromotions') {
		var _item_banner = 
		'<div class="absolute left-[5vw] top-[18vh]">' +
			'<div class="relative inline-block pt-16 pl-16">' +
				'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
					'<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h600" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +
					'<text class="fill-[#1D7068] font-bold text-[20px] tracking-normal" style="transform: translate(36px, 38px);">' +
						'<textPath class="aboutText" href="#aboutPath">MONTHLY STORE EVENTS...</textPath>' +
					'</text>' +
				'</svg>' +
				'<img src="https://gdlinode.tw/oolab/images/storepromotions-head.svg">' +
			'</div>' +
		'</div>' +
		'<div class="rotate absolute right-[7vw] top-[5vh]"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate.svg" class="animate-spin-slow"></div>';
		$("#Content .CustomPage .Grid-row-wrapper").eq(0).append(_item_banner);

		$(".image-with-text__image-container").addClass("is-medium")
	}

	gsap.fromTo(".aboutText", { 
		attr: { 
			startOffset: "100%" 
		},
	}, { 
		attr: { 
			startOffset: "2%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	});
	

	$('.text-block__button').each(function () {
	    $(this).append('<span class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></span>');
	});
}
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/about') {
	$("body").addClass("is-gray")

	// banner
	$("#Content .CustomPage .Grid-row-wrapper").eq(0).addClass("relative");

	var _item_banner = 
	'<div class="absolute left-[5vw] top-[12vh]">' +
		'<div class="relative inline-block pt-16 pl-16">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
				'<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h412" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +

				'<text class="fill-[#D6A18E] font-bold text-[20px] tracking-normal" style="transform: translate(36px, 38px);">' +
					'<textPath class="about-section-1" href="#aboutPath">ABOUT US</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/about-head.svg">' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .Grid-row-wrapper").eq(0).append(_item_banner);

	gsap.fromTo(".about-section-1", { 
		attr: { 
			startOffset: "100%" 
		},
	}, { 
		attr: { 
			startOffset: "2%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	});

	// section one
	$("#Content .CustomPage .Grid-row-wrapper").eq(2).find(".section-width").addClass("relative");
	var _item_section_one = 
	'<div class="absolute left-[14vw] tf-y" data-trigger-fn="triggerPathOne">' +
		'<div class="relative inline-block pt-16 pl-16">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
				'<path id="aboutPath-path-1" d="M1,195.73v-56.45c0-76.37,61.91-138.28,138.28-138.28h481.08" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +

				'<text class="fill-[#F4F4F2] font-bold text-[17px] tracking-normal" style="transform: translate(36px, 38px);">' +
					'<textPath class="about-item-text-1" href="#aboutPath-path-1">EMPATHY‧SHARED FEELING‧MUTUAL BENEFIT ...</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/about-item-1.png">' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .Grid-row-wrapper").eq(2).find(".section-width").append(_item_section_one);

	var _about_text_path_one = gsap.timeline({
		paused: true,
	}).fromTo(".about-item-text-1", { 
		attr: { 
			startOffset: "100%" 
		},
	}, { 
		attr: { 
			startOffset: "0%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	});

	// section two
	$("#Content .CustomPage .Grid-row-wrapper").eq(3).find(".section-width").addClass("relative");
	var _item_section_two = 
	'<div class="absolute right-[13vw] tf-y" data-trigger-fn="triggerPathTwo">' +
		'<div class="relative inline-block pt-16 pl-16">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
				'<path id="aboutPath-path-1" d="M1,195.73v-56.45c0-76.37,61.91-138.28,138.28-138.28h481.08" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +

				'<text class="fill-[#1D7068] font-bold text-[17px] tracking-normal" style="transform: translate(36px, 38px);">' +
					'<textPath class="about-item-text-2" href="#aboutPath-path-1">EMPATHY‧SHARED FEELING‧MUTUAL BENEFIT ...</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/about-item-2.png">' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .Grid-row-wrapper").eq(3).find(".section-width").append(_item_section_two);

	var _about_text_path_two = gsap.timeline({
		paused: true,
	}).fromTo(".about-item-text-2", { 
		attr: { 
			startOffset: "100%" 
		},
	}, { 
		attr: { 
			startOffset: "0%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	});

	// section three
	$("#Content .CustomPage .Grid-row-wrapper").eq(4).find(".section-width").addClass("relative");
	var _item_section_three = 
	'<div class="absolute left-[14vw] tf-y" data-trigger-fn="triggerPathThree">' +
		'<div class="relative inline-block pt-16 pl-16">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
				'<path id="aboutPath-path-1" d="M1,195.73v-56.45c0-76.37,61.91-138.28,138.28-138.28h481.08" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +

				'<text class="fill-[#F4F4F2] font-bold text-[17px] tracking-normal" style="transform: translate(36px, 38px);">' +
					'<textPath class="about-item-text-3" href="#aboutPath-path-1">EMPATHY‧SHARED FEELING‧MUTUAL BENEFIT ...</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/about-item-3.png">' +
			'<div class="absolute top-[38vh] left-0"><img src="https://gdlinode.tw/oolab/images/dango.svg"></div>' +
			'<div class="absolute bottom-[20vh] -right-[3.5vw]"><img src="https://gdlinode.tw/oolab/images/dango.svg"></div>' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .Grid-row-wrapper").eq(4).find(".section-width").append(_item_section_three);

	var _about_text_path_three = gsap.timeline({
		paused: true,
	}).fromTo(".about-item-text-3", { 
		attr: { 
			startOffset: "100%" 
		},
	}, { 
		attr: { 
			startOffset: "0%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	});

	// section five
	$("#Content .CustomPage .Grid-row-wrapper").eq(5).find(".section-width").addClass("relative");
	var _section_five = 
	'<div class="w-full h-full absolute inset-0 flex">' +
			'<div class="w-[50vw] flex flex-col items-center justify-center">' +
				'<div class="">' +
					'<div class=""><img src="https://gdlinode.tw/oolab/images/about-item-4.svg"></div>' +
					'<nav class="space-y-5 flex flex-col pl-[142px] mt-20">' +
						'<a href="" class="about-button w-[216px]"><span>全系列產品</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a>' +
						'<a href="" class="about-button w-[216px]"><span>門市據點</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a>' +
					'</nav>' +
				'</div>' +
			'</div>' +
			'<div class="components_about flex w-[50vw]">' +
				'<div class="about-scroll-wrapper">' +
					'<ul class="about-scroll about-scroll-top">' +
						'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-1.jpg"></li>' +
						'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-1-2.jpg"></li>' +
						'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-1.jpg"></li>' +
						'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-1-2.jpg"></li>' +
					'</ul>' +
				'</div>' +

				'<div class="about-scroll-wrapper">' +
					'<ul class="about-scroll about-scroll-bottom">' +
						'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-2.jpg"></li>' +
						'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-2-2.jpg"></li>' +
						'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-2.jpg"></li>' +
						'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-2-2.jpg"></li>' +
					'</ul>' +
				'</div>' +
			'</div>' +
		'</div>';
	$("#Content .CustomPage .Grid-row-wrapper").eq(5).find(".section-width").append(_section_five);

	$(function(){
		window.triggerPathOne= (el) => {
			_about_text_path_one.play()
		};
		window.triggerPathTwo= (el) => {
			_about_text_path_two.play()
		};
		window.triggerPathThree= (el) => {
			_about_text_path_three.play()
		};
	})
}






window.onload = function() {
	// $("#preload").fadeOut(300)


	
	
}