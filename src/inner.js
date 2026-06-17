if ($(this).width() > 768) {
	window.device = 'desktop';
}else{
	window.device = 'mobile';
}

function createFlexibleObserver(configs, threshold = 0.3) {
	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const el = entry.target;
				configs.forEach(cfg => {
					const fnName = el.getAttribute(`data-${cfg.attr}`);
					if (fnName && typeof window[fnName] === 'function') {
						// 若有條件，檢查是否符合
						if (!cfg.threshold || entry.intersectionRatio >= cfg.threshold) {
							window[fnName](el);
						}
					}	
				});
			}
		});
	}, {
		threshold: configs.map(cfg => cfg.threshold || 0.3) // 收集所有門檻點
	});

	// 收集所有有對應 data-* 的元素
	const selectors = configs.map(cfg => `[data-${cfg.attr}]`).join(',');
	document.querySelectorAll(selectors).forEach(el => observer.observe(el));
}

const playOnScroll = (selector, action) => {
	new IntersectionObserver(([entry], obs) => {
		if (entry.isIntersecting) {
			action();
			obs.unobserve(entry.target);
		}
	}, { threshold: 0.5 }).observe(document.querySelector(selector));
};

$(function(){
	createFlexibleObserver([
		{ attr: 'trigger-fn', threshold: 0.3 },
		{ attr: 'trigger-steel', threshold: 0.5 }
	]);

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

	$(".navigation-menu-second-layer").each(function() {
		var $layer = $(this);
		$layer.wrap('<div class="navigation-menu-second-bg"></div>');
	});
})
if(location.href == 'https://oolabtwtest.shoplineapp.com/') {
	$("body").addClass("is-pink")
	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative mb-[52px] pt-[7vh] md:mb-0 md:pt-[2vh]");
	$("#Content .CustomPage .shopline-section").eq(0).find(".section-width").addClass("slider-width");

	var _slider_bg = 
	'<div class="absolute tf w-[110%] -z-10 lg:hidden"><img src="https://gdlinode.tw/oolab/images/index-slider-bg.svg" class="mx-auto"></div>';
	$("#Content .CustomPage .shopline-section").eq(0).find(".slider-width >div").append(_slider_bg);

	var _slider_go = 
	'<div class="absolute -left-[45px] -top-[45px] w-full h-full md:-left-1 md:-top-2">' +
		'<div class="relative inline-block w-full h-full">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
				'<path id="sliderPath" class="md:hidden" d="M1,135.91v-54.91C1,36.82,36.82,1,81,1h570.57" style="fill: none; stroke: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +
				'<path id="sliderPath-mobile" class="hidden md:!block" d="M.75,87.8V22.75C.75,10.6,10.6.75,22.75.75h233.8" style="fill: none; stroke: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +

				'<text class="fill-[#1D7068] font-bold text-[20px] tracking-normal md:text-[16px]" style="transform: translate(36px, 38px);">' +
					'<textPath class="aboutText md:hidden" href="#sliderPath">TREASURE EVERY MOMENT</textPath>' +
					'<textPath class="aboutText-mobile hidden md:!block" href="#sliderPath-mobile">TREASURE EVERY MOMENT</textPath>' +
				'</text>' +
			'</svg>' +
		'</div>' +
	'</div>' +
	'<div class="absolute z-10 -left-[2vw] bottom-[16vh] ani-head md:hidden"><img src="https://gdlinode.tw/oolab/images/slider-deco-1.svg" class="vw-max-w-[480]"></div>' +
	'<div class="absolute z-10 -right-[2.5vw] bottom-[19vh] pointer-events-none pop-items md:right-4 md:bottom-auto md:top-[90px] md:hidden">' +
		'<div class="mb-6"><img src="https://gdlinode.tw/oolab/images/slider-deco-2.svg" class="vw-max-w-[260] ml-auto md:max-w-[116px]"></div>' +
		'<div class=""><img src="https://gdlinode.tw/oolab/images/slider-deco-3.svg" class="vw-max-w-[280] ml-auto md:max-w-[128px]"></div>' +
	'</div>' +
	'<div class="absolute tf-x z-10 bottom-0 pointer-events-none md:bottom-[52px] md:min-w-[80%] md:text-center">' +
		'<div class="lottie-item w-[54vw] md:max-w-[130px] md:mx-auto" id="lottie"></div>' +
		'<div class="font-bold text-white tracking-wide hidden mt-3 text-[18px] md:!block">一起共好生活</div>' +
		'<div class="font-medium text-white tracking-normal hidden mt-[26px] text-[14px] md:!block">每一樣物件，都是一場你與生活的對話。</div>' +
	'</div>' +
	'<div class="absolute tf w-full h-full px-1 hidden -z-[1] md:!block"><img src="https://gdlinode.tw/oolab/images/index-banner-bg-mobile.svg"></div>' +
	'<div class="absolute tf-x z-10 -bottom-[4vh] opacity-0 trasition-all duration-500 scroll-item pointer-events-none md:hidden">' +
		'<div class="font-bold text-lg text-white tracking-wide">往下滑動你的日常好陪伴</div>' +
		'<div class="index-scroll">' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .shopline-section").eq(0).find(".section-width").append(_slider_go);

	$(".slideshow__indicator").hide();

	const animationData = {
		"v":"5.12.2","fr":29.9700012207031,"ip":0,"op":67.0000027289659,"w":2138,"h":673,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":343,"h":547,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_0.png","e":0},{"id":"image_1","w":347,"h":346,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_1.png","e":0},{"id":"image_2","w":90,"h":545,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_2.png","e":0},{"id":"image_3","w":345,"h":349,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_3.png","e":0},{"id":"image_4","w":557,"h":560,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_4.png","e":0},{"id":"comp_0","nm":"250701-Oolab-1920-首頁","fr":29.9700012207031,"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"b","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.507,"y":0},"t":32,"s":[2778.574,2526.829,0],"to":[0,0,0],"ti":[0,0,0]},{"t":60.0000024438501,"s":[2778.574,1851.306,0]}],"ix":2,"l":2},"a":{"a":0,"k":[171.309,549.085,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"a","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.507,"y":0},"t":25,"s":[2327.574,2318.579,0],"to":[0,0,0],"ti":[0,0,0]},{"t":53.0000021587343,"s":[2327.574,1851.056,0]}],"ix":2,"l":2},"a":{"a":0,"k":[173.352,348.595,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"l","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.507,"y":0},"t":18,"s":[2001.574,2510.579,0],"to":[0,0,0],"ti":[0,0,0]},{"t":46.0000018736184,"s":[2001.574,1848.056,0]}],"ix":2,"l":2},"a":{"a":0,"k":[44.714,544.233,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"o2","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.051,"y":1},"o":{"x":0.358,"y":0},"t":7,"s":[1681.574,2323.079,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.507,"y":1},"o":{"x":0.455,"y":0},"t":33,"s":[1681.574,1766.556,0],"to":[0,0,0],"ti":[0,0,0]},{"t":51.0000020772726,"s":[1681.574,1855.579,0]}],"ix":2,"l":2},"a":{"a":0,"k":[172.107,354.252,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":7,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":17,"s":[100,110,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0.167,0]},"t":36,"s":[100,100,100]},{"i":{"x":[0.615,0.145,0.667],"y":[1.095,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":50,"s":[100,85,100]},{"t":64.0000026067734,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"o1","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.197,"y":1},"o":{"x":0.34,"y":0},"t":0,"s":[1161.574,2547.079,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.313,"y":1},"o":{"x":0.394,"y":0},"t":26,"s":[1161.574,1758.556,0],"to":[0,0,0],"ti":[0,0,0]},{"t":46.0000018736184,"s":[1161.574,1859.079,0]}],"ix":2,"l":2},"a":{"a":0,"k":[278.063,563.969,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":10,"s":[100,110,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0.167,0]},"t":28,"s":[100,100,100]},{"i":{"x":[0.615,0.086,0.667],"y":[1.095,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":48,"s":[100,85,100]},{"t":62.0000025253118,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"250701-Oolab-1920-首頁","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1069,-199.5,0],"ix":2,"l":2},"a":{"a":0,"k":[1920,980,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":3840,"h":1960,"ip":0,"op":180.00000733155,"st":0,"bm":0}],"markers":[],"props":{}
	};
	gsap.set(".aboutText", { 
		attr: { 
			startOffset: "100%" 
		},
	})
	gsap.set(".aboutText-mobile", { 
		attr: { 
			startOffset: "100%" 
		},
	})
	var _ani_pop = gsap.timeline({
		paused: true,
		onComplete: () =>{
			$(".scroll-item").removeClass("opacity-0")
		}
	}).fromTo(".ani-head", {
		opacity: 0,
		y: 40,
	}, {
		y: 0,
		opacity: 1,
		duration: 0.7,
		ease: "power1.out",
	}, 0).fromTo(".pop-items >div", {
		opacity: 0,
		y: 40,
		scale: 0,
	}, {
		y: 0,
		scale: 1,
		opacity: 1,
		duration: 0.4,
		stagger: 0.3,
		ease: "back.out",
	}, 0).to(".aboutText", { 
		attr: { 
			startOffset: "2%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	}, 0);
	var _ani_pop_mobile = gsap.timeline({
		paused: true,
		onComplete: () =>{
			$(".scroll-item").removeClass("opacity-0")
		}
	}).fromTo(".ani-head", {
		opacity: 0,
		y: 40,
	}, {
		y: 0,
		opacity: 1,
		duration: 0.7,
		ease: "power1.out",
	}, 0).fromTo(".pop-items >div", {
		opacity: 0,
		y: 40,
		scale: 0,
	}, {
		y: 0,
		scale: 1,
		opacity: 1,
		duration: 0.4,
		stagger: 0.3,
		ease: "back.out",
	}, 0).to(".aboutText-mobile", { 
		attr: { 
			startOffset: "2%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	}, 0);
	var animation_json = lottie.loadAnimation({
	    container: document.getElementById('lottie'),
	    renderer: 'svg',
	    loop: false,
	    autoplay: false,
	    animationData: animationData
	});

	$(function(){
		animation_json.play()
		animation_json.onComplete = () => {
			if($(this).width() > 768){
				gsap.to("#lottie", {
					opacity: 0,
				})
			}
			if($(this).width() < 768){
				_ani_pop_mobile.play()
			}else{
				_ani_pop.play()
			}
		};
	})
	

	// $("#Content .CustomPage .shopline-section").eq(1).addClass("relative");
	// var _item_section_two =
	// '<div class="absolute top-[22vh] right-[10vw]" data-trigger-fn="cupPon">' +
	// 	'<div class=""><img src="https://gdlinode.tw/oolab/images/is2-circle.svg" class="animate-spin-slow"></div>' +
	// 	'<div class="absolute tf w-full flex items-center justify-center -mt-2 ml-2">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/is2-deco-1.png">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/is2-deco-2.png" class="cup-pon">' +
	// 	'</div>' +
	// '</div>';
	// $("#Content .CustomPage .shopline-section").eq(1).append(_item_section_two);

	// var _item_section_three =
	// '<div class="overflow-hidden border-y-[2px] border-[#4B4C4E] z-10">' +
	// 	'<div class="flex w-max index-scroll-left">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/index-marquee-1.svg" class="max-w-none">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/index-marquee-1.svg" class="max-w-none">' +
	// 	'</div>' +
	// '</div>';
	// $(_item_section_three).insertAfter($("#Content .CustomPage .shopline-section").eq(3));

	// var _item_section_five =
	// '<div class="overflow-hidden border-y-[2px] border-[#4B4C4E] z-10">' +
	// 	'<div class="flex w-max index-scroll-right">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/index-marquee-2.svg" class="max-w-none">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/index-marquee-2.svg" class="max-w-none">' +
	// 	'</div>' +
	// '</div>';
	// $(_item_section_five).insertAfter($("#Content .CustomPage .shopline-section").eq(4));

	$("#Content .CustomPage .shopline-section").eq(5).addClass("productsWrap")
	$(function(){

		$(".productsWrap .owl-stage .owl-item").each(function(i, el){
			var _url = $(".product-item", el).find("a").attr("href");
			var _item_heaf = '<div class="more text-center"><a href="' + _url + '" class="inline-block bg-green-300 text-white font-bold leading-none rounded-[28px] px-4 py-5">更多</a></div>';
			$(".product-item", el).find("a").append(_item_heaf);
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

		if($(this).width() < 768){
			$(".productsWrap .section-width").prepend('<div class="head"><img src="https://gdlinode.tw/oolab/images/index-item-8-head.svg"></div>');
		}
	})


	$("#Content .CustomPage .shopline-section").eq(4).addClass("productCats")
	$('<div class="pt-[140px] mb-20 md:pt-[68px] md:mb-5"><img src="https://gdlinode.tw/oolab/images/index-cats-head.svg" class="vw-max-w-[550] mx-auto md:hidden"><img src="https://gdlinode.tw/oolab/images/index-cats-head-mobile.svg" class="mx-auto hidden md:!block"></div>').insertBefore($("#Content .CustomPage .productCats"));
	$(function(){
		$(".productCats .category__item-container .category__item").each(function(i, el){
			// var _url_cats = $(el).attr("href");
			var _url_cats = "";
			var _item_en = "";
			switch(i){
				case 0:
					_url_cats = "/pages/strawtumbler";
					_item_en = "STEEL STRAW TUMBLER";
				break;
				case 1:
					_url_cats = "/pages/pp-straw-tumbler";
					_item_en = "PP STRAW TUMBLER";
				break;
				case 2:
					_url_cats = "/pages/travel-tumbler";
					_item_en = "TRAVEL TUMBLER";
				break;
				case 3:
					_url_cats = "/pages/sports-bottles-shaker-cups";
					_item_en = "SPORTS BOTTLES & SHAKER CUPS";
				break;
				case 4:
					_url_cats = "/pages/daily-tumblers";
					_item_en = "DAILY TUMBLERS";
				break;
				case 5:
					_url_cats = "/pages/lifestyle-accessories";
					_item_en = "LIFESTYLE ACCESSORIES";
				break;
			}
			$(el).attr("href", _url_cats)

			var _item_title_en = '<div class="category__item-title-en">'+_item_en+'</div>';
			$(_item_title_en).insertAfter($(".category__item-title", el))

			var _item_button = '<div class="inline-block md:hidden"><a href="'+_url_cats+'" class="about-button bg-white"><span>閱讀更多</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a></div>';
			$(_item_button).insertAfter($(".category__item-title-en", el))
		})

		if($(this).width() < 768){
			var _dots_html = '<ul id="drink-dots-mobile"></ul>';
			$(_dots_html).insertAfter(".productCats .category__item-container");

			var elem = document.querySelector('.productCats .category__item-container');
			if (elem) {
				var flkty = new Flickity(elem, {
					prevNextButtons: false,
					pageDots: false,
					wrapAround: true,
					autoPlay: 5000,
					cellAlign: 'center',
					imagesLoaded: true,
					pauseAutoPlayOnHover: false,
					arrowShape: ""
				});
				
				// // --- 自定義 Dots 分頁球功能 ---
				// // 取得所有 Cell 元素
				var cellElements = flkty.getCellElements();
				var $dotsContainer = $("#drink-dots-mobile");
				
				for (var i = 0; i < cellElements.length; i++) {
					$dotsContainer.append('<li></li>');
				}
				$dotsContainer.children().first().addClass("current");

				$dotsContainer.on("click", "li", function() {
					var index = $(this).index();
					flkty.select(index);
				});

				flkty.on('select', function() {
					var index = flkty.selectedIndex;
					$dotsContainer.children().eq(index).addClass("current")
						.siblings().removeClass("current");
				});
			}
		}
	})

	var _item_all =
	'<div class="relative text-center pointer-events-none">' +
		'<div class="all-product relative inline-block md:!block md:px-8">' +
			'<div class=""><img src="https://gdlinode.tw/oolab/images/all-product.svg" class="md:hidden"><img src="https://gdlinode.tw/oolab/images/all-product-mobile.svg" class="hidden md:!block mx-auto"></div>' +
			'<div class="absolute tf-x bottom-12 arrow pointer-events-auto md:bottom-[16px]"><a href="/pages/all-products"><svg width="59.86" height="59.91" viewBox="0 0 59.86 59.91" class="md:max-w-[28px] h-auto">' +
				'<path d="M59.39,24.14c-.15-1.11-.34-2.2-.59-3.29-2.27-9.75-8.13-16.37-17.82-19.25-7.01-2.09-14.15-2.1-21.21-.24C10.85,3.73,4.77,9.35,1.9,18.15c-2.48,7.59-2.51,15.33-.2,22.97,2.67,8.85,8.54,14.67,17.43,17.24,7.18,2.08,14.44,2.06,21.63.03,7.69-2.17,13.26-6.92,16.45-14.31,1.31-3.03,2.06-6.17,2.4-9.39,0-.07.01-.14.02-.21.15-1.49.21-2.99.2-4.51.01,0,.03,0,.04,0-.06-2.5-.34-4.84-.47-5.82Z" style="fill: #1d7068;"/>' +
				'<polyline points="25.83 39.15 35.6 29.27 24.26 20.76" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/>' +
			'</svg></a></div>' +
			'<div class="absolute right-3 -bottom-10 flex items-center justify-center md:right-[72px] md:-bottom-[26px]" data-trigger-fn="cupPon">' +
				'<img src="https://gdlinode.tw/oolab/images/allp-deco-1.png" class="md:max-w-[32px]">' +
				'<img src="https://gdlinode.tw/oolab/images/allp-deco-2.png" class="cup-pon two -ml-2 md:-ml-1 md:max-w-[32px]">' +
			'</div>' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .productCats").append(_item_all);

	var _item_bg ='<div class="absolute tf pointer-events-none md:w-full md:px-[16px] md:pb-[132px]"><img src="https://gdlinode.tw/oolab/images/all-product-bg.svg" class="md:hidden"><img src="https://gdlinode.tw/oolab/images/all-product-bg-mobile.svg" class="hidden md:!block"></div>';
	$("#Content .CustomPage .productCats").append(_item_bg);


	$("#Content .CustomPage .shopline-section").eq(2).addClass("indexItemSlider");
	$("#Content .CustomPage .shopline-section").eq(3).addClass("indexItemSlider");
	$(".indexItemSlider").find(".section-full-width >div style").remove();
	var elem = document.querySelector('.indexItemSlider .section-full-width >div');
	var elements = document.querySelectorAll('.indexItemSlider .section-full-width >div >div');
	var count = elements.length;
	if (count > 1) {
		var flkty = new Flickity(elem, {
			fade: true,
			prevNextButtons: false,
			pageDots: false,
			wrapAround: true,
			autoPlay: 3000,
			cellAlign: 'center',
			imagesLoaded: true,
			pauseAutoPlayOnHover: false, // 你的原設定
			arrowShape: ""
		});
		flkty.on('dragEnd', function() {
			flkty.playPlayer();
		});
		flkty.on('staticClick', function() {
			flkty.playPlayer();
		});
	}
}

if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/cooperation-offers' || location.href == 'https://oolabtwtest.shoplineapp.com/pages/storepromotions') {
	$("body").addClass("is-pink")
	$("#Content .CustomPage").addClass("intros-items");

	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative");

	if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/cooperation-offers') {
		var _item_banner = 
		'<div class="absolute vw-left-[96] vw-top-[165] lg:left-0 md:hidden">' +
			'<div class="relative inline-block pt-16 pl-16">' +
				'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
					'<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h412" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +
					'<text class="fill-[#1D7068] font-bold vw-text-[20px] tracking-normal" style="transform: translate(36px, 38px);">' +
						'<textPath class="aboutText" href="#aboutPath">LATEST NEWS</textPath>' +
					'</text>' +
				'</svg>' +
				'<img src="https://gdlinode.tw/oolab/images/cooperation-head.svg" class="vw-max-w-[453px]">' +
			'</div>' +
		'</div>' +
		'<div class="rotate absolute vw-right-[90] vw-top-[35] md:hidden"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate-3.svg" class="animate-spin-slow vw-max-w-[174px]"></div>' + 
		'<div class="absolute tf-x z-10 -bottom-[4vh] trasition-all duration-500 scroll-item pointer-events-none hidden md:!block md:bottom-5">' +
			'<div class="index-scroll"></div>' +
			'<div class="font-bold text-lg text-white tracking-wide md:text-[14px]">往下滑動</div>' +
		'</div>';
		$("#Content .CustomPage .shopline-section").eq(0).append(_item_banner);
	}
	if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/storepromotions') {
		var _item_banner = 
		'<div class="absolute vw-left-[96] vw-top-[165] lg:left-0 md:hidden">' +
			'<div class="relative inline-block pt-16 pl-16">' +
				'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
					'<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h600" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +
					'<text class="fill-[#1D7068] font-bold vw-text-[20px] tracking-normal" style="transform: translate(36px, 38px);">' +
						'<textPath class="aboutText" href="#aboutPath">MONTHLY STORE EVENTS</textPath>' +
					'</text>' +
				'</svg>' +
				'<img src="https://gdlinode.tw/oolab/images/storepromotions-head.svg" class="vw-max-w-[598px]">' +
			'</div>' +
		'</div>' +
		'<div class="rotate absolute vw-right-[90] vw-top-[35] md:hidden"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate-3.svg" class="animate-spin-slow vw-max-w-[174px]"></div>' +
		'<div class="absolute tf-x z-10 -bottom-[4vh] trasition-all duration-500 scroll-item pointer-events-none hidden md:!block md:bottom-5">' +
			'<div class="index-scroll"></div>' +
			'<div class="font-bold text-lg text-white tracking-wide md:text-[14px]">往下滑動</div>' +
		'</div>';
		$("#Content .CustomPage .shopline-section").eq(0).append(_item_banner);

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
	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative");

	var _item_banner = 
	'<div class="hidden w-full absolute top-[36px] tf-x md:!block"><img src="https://gdlinode.tw/oolab/images/about-head-1.svg" class="mx-auto"></div>' +
	'<div class="hidden md:!block w-full absolute bottom-[30px] tf-x"><img src="https://gdlinode.tw/oolab/images/about-head-2.svg" class="mx-auto"></div>' +
	'<div class="absolute vw-left-[96] vw-top-[110] md:hidden">' +
		'<div class="relative inline-block pt-16 pl-16">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
				'<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h412" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +

				'<text class="fill-[#D6A18E] font-bold vw-text-[20px] tracking-normal" style="transform: translate(36px, 38px);">' +
					'<textPath class="about-section-1" href="#aboutPath">ABOUT OOLAB</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/about-head.svg" class="vw-max-w-[548]">' +
		'</div>' +
	'</div>' +
	'<div class="absolute right-0 tf-y about-item md:hidden"><img src="https://gdlinode.tw/oolab/images/about-gif.gif" class="vw-max-w-[1088]"></div>';
	$("#Content .CustomPage .shopline-section").eq(0).append(_item_banner);

	gsap.fromTo(".about-section-1", { 
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

	// animation
	$("#Content .CustomPage .shopline-section").eq(1).addClass("relative");
	var _item_animation = 
	'<div class="move-item z-10 pointer-events-none w-full h-full">' +
		'<div class="lottie-item mx-auto h-full" id="move"></div>' +
	'</div>';
	$("#Content .CustomPage .shopline-section").eq(1).append(_item_animation);

	var animation_json_move = lottie.loadAnimation({
		container: document.getElementById('move'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		animationData: animationJson
	});
	playOnScroll('#move', () => animation_json_move.play());

	// section one
	$("#Content .CustomPage .shopline-section").eq(2).find(".section-width").addClass("relative");
	var _item_section_one = 
	'<div class="absolute left-[14vw] tf-y md:left-auto md:top-[70px] md:px-[32px]" data-trigger-fn="triggerPathOne">' +
		'<div class="relative inline-block pt-16 pl-16 lg:pt-4 lg:pl-4 md:pl-0 md:pt-0">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5 xl:-top-[22px] xl:-left-[18px] lg:-top-[36px] lg:-left-[36px] md:-top-[46px] md:-left-[44px]">' +
				'<path id="aboutPath-path-1" d="M1,383.53V81c0-44.18,35.82-80,80-80h362.54" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +
				'<path id="aboutPath-path-1-mobile" d="M.6,185.6V22.6c0-12.15,9.85-22,22-22h251.35" style="fill: none; stroke: none; stroke-miterlimit: 10;"/>' +

				'<text class="fill-white font-bold vw-text-[17px] tracking-normal lg:text-[12px]" style="transform: translate(36px, 38px);">' +
					'<textPath class="about-item-text-1 lg:hidden" href="#aboutPath-path-1">EMPATHY‧EMOTIONAL CONNECTION‧COLLECTIVE GOODNESS</textPath>' +
					'<textPath class="about-item-text-1 hidden lg:!block" href="#aboutPath-path-1-mobile">EMPATHY‧EMOTIONAL CONNECTION‧COLLECTIVE GOODNESS</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/about-item-1.png" class="vw-max-w-[626] md:max-w-full md:hidden"><img src="https://gdlinode.tw/oolab/images/about-item-1-mobile.png" class="hidden md:!block">' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .shopline-section").eq(2).find(".section-width").append(_item_section_one);

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
	$("#Content .CustomPage .shopline-section").eq(3).find(".section-width").addClass("relative");
	var _item_section_two = 
	'<div class="absolute right-[13vw] tf-y md:right-auto md:top-[70px] md:px-[32px]" data-trigger-fn="triggerPathTwo">' +
		'<div class="relative inline-block pt-16 pl-16 lg:pt-4 lg:pl-4 md:pl-0 md:pt-0">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5 xl:-top-[22px] xl:-left-[18px] lg:-top-[36px] lg:-left-[36px] md:-top-[46px] md:-left-[44px]">' +
				'<path id="aboutPath-path-2" d="M1,382.38V81c0-44.18,35.82-80,80-80h339.2" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +
				'<path id="aboutPath-path-2-mobile" d="M.6,185.6V22.6c0-12.15,9.85-22,22-22h251.26" style="fill: none; stroke: none; stroke-miterlimit: 10;"/>' +

				'<text class="fill-[#1D7068] font-bold vw-text-[17px] tracking-normal lg:text-[12px]" style="transform: translate(36px, 38px);">' +
					'<textPath class="about-item-text-2 lg:hidden" href="#aboutPath-path-2">EMPATHY‧EMOTIONAL CONNECTION‧COLLECTIVE GOODNESS</textPath>' +
					'<textPath class="about-item-text-2 hidden lg:!block" href="#aboutPath-path-2-mobile">EMPATHY‧EMOTIONAL CONNECTION‧COLLECTIVE GOODNESS</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/about-item-2.png" class="vw-max-w-[626] md:max-w-full md:hidden"><img src="https://gdlinode.tw/oolab/images/about-item-2-mobile.png" class="hidden md:!block">' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .shopline-section").eq(3).find(".section-width").append(_item_section_two);

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
	$("#Content .CustomPage .shopline-section").eq(4).find(".section-width").addClass("relative");
	var _item_section_three = 
	'<div class="absolute left-[14vw] tf-y md:left-auto md:top-[70px] md:px-[32px]" data-trigger-fn="triggerPathThree">' +
		'<div class="relative inline-block pt-16 pl-16 lg:pt-4 lg:pl-4 md:pl-0 md:pt-0">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5 xl:-top-[20px] xl:-left-[20px] lg:-top-[40px] lg:-left-[36px] md:-top-[46px] md:-left-[44px]">' +
				'<path id="aboutPath-path-3" d="M1,195.22v-114.22c0-44.18,35.82-80,80-80h444.88" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +
				'<path id="aboutPath-path-3-mobile" d="M.6,185.76V22.6c0-12.15,9.85-22,22-22h251.55" style="fill: none; stroke: none; stroke-miterlimit: 10;"/>' +

				'<text class="fill-[#F4F4F2] font-bold vw-text-[17px] tracking-normal lg:text-[12px]" style="transform: translate(36px, 38px);">' +
					'<textPath class="about-item-text-3 lg:hidden" href="#aboutPath-path-3">EMPATHY‧EMOTIONAL CONNECTION‧COLLECTIVE GOODNESS</textPath>' +
					'<textPath class="about-item-text-3 hidden lg:!block" href="#aboutPath-path-3-mobile">EMPATHY‧EMOTIONAL CONNECTION‧COLLECTIVE GOODNESS</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/about-item-3.png" class="vw-max-w-[626] md:max-w-full md:hidden"><img src="https://gdlinode.tw/oolab/images/about-item-3-mobile.png" class="hidden md:!block">' +
			'<div class="absolute top-[38vh] left-0 md:-left-[16px] md:top-[70%]"><img src="https://gdlinode.tw/oolab/images/dango.svg" class="md:max-w-[60px]"></div>' +
			'<div class="absolute bottom-[20vh] -right-[3.5vw] md:bottom-[72%]"><img src="https://gdlinode.tw/oolab/images/dango.svg" class="md:max-w-[60px]"></div>' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .shopline-section").eq(4).find(".section-width").append(_item_section_three);

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
	$("#Content .CustomPage .shopline-section").eq(5).find(".section-width").addClass("relative");
	var _section_five = 
	'<div class="w-full h-full absolute inset-0 flex md:flex-col">' +
		'<div class="hidden md:!block mx-auto pt-[64px] pb-[56px]"><img src="https://gdlinode.tw/oolab/images/about-s5-head.svg"></div>' +
		'<div class="w-[50vw] flex flex-col items-center justify-center md:order-2 md:w-full">' +
			'<div class="">' +
				'<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/about-item-4.svg" class="vw-max-w-[600]"></div>' +
				'<nav class="space-y-5 flex flex-col mt-[60px] lg:mt-16 md:mt-[80px]">' +
					'<a href="/pages/all-products" class="about-button w-[216px] bg-white lg:w-[180px]"><span>全系列產品</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a>' +
					'<a href="/pages/store" class="about-button w-[216px] bg-white lg:w-[180px]"><span>門市據點</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a>' +
				'</nav>' +
			'</div>' +
		'</div>' +
		'<div class="components_about flex w-[50vw] md:order-1 md:w-full md:hidden">' +
			'<div class="about-scroll-wrapper">' +
				'<ul class="about-scroll about-scroll-top">' +
					'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-1.png"></li>' +
					'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-1-2.png"></li>' +
					'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-1-3.png"></li>' +
				'</ul>' +
			'</div>' +

			'<div class="about-scroll-wrapper">' +
				'<ul class="about-scroll about-scroll-bottom">' +
					'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-2.png"></li>' +
					'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-2-2.png"></li>' +
					'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-2-3.png"></li>' +
					'<li><img src="https://gdlinode.tw/oolab/images/about-scroll-2-4.png"></li>' +
				'</ul>' +
			'</div>' +
		'</div>' +
		'<div class="overflow-hidden hidden md:!block">' +
			'<div class="flex w-max index-scroll-left">' +
				'<img src="https://gdlinode.tw/oolab/images/about-scroll-1.png" class="max-w-none max-h-[278px]">' +
				'<img src="https://gdlinode.tw/oolab/images/about-scroll-1-2.png" class="max-w-none max-h-[278px]">' +
				'<img src="https://gdlinode.tw/oolab/images/about-scroll-1-3.png" class="max-w-none max-h-[278px]">' +
				'<img src="https://gdlinode.tw/oolab/images/about-scroll-1.png" class="max-w-none max-h-[278px]">' +
				'<img src="https://gdlinode.tw/oolab/images/about-scroll-1-2.png" class="max-w-none max-h-[278px]">' +
				'<img src="https://gdlinode.tw/oolab/images/about-scroll-1-3.png" class="max-w-none max-h-[278px]">' +
			'</div>' +
		'</div>' +
	'</div>';
	$("#Content .CustomPage .shopline-section").eq(5).find(".section-width").append(_section_five);

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


if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/store') {
	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative");
	var _item_banner = 
	'<div class="absolute vw-left-[96] vw-top-[165] lg:left-0 md:hidden">' +
		'<div class="relative inline-block pt-16 pl-16">' +
			'<svg width="100%" height="100%" class="absolute -top-5 -left-5">' +
				'<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h412" style="fill: none; stroke: none; stroke-miterlimit: 10;" />' +
				'<text class="fill-white font-bold vw-text-[20px] tracking-normal" style="transform: translate(36px, 38px);">' +
					'<textPath class="aboutText" href="#aboutPath">STORE LOCATIONS</textPath>' +
				'</text>' +
			'</svg>' +
			'<img src="https://gdlinode.tw/oolab/images/store-head.svg" class="vw-max-w-[454px]">' + 
		'</div>' +
	'</div>' +
	'<div class="rotate absolute vw-right-[140] vw-top-[60] md:hidden"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate-3.svg" class="animate-spin-slow vw-max-w-[174px]"></div>' +
	'<div class="absolute tf-x z-10 -bottom-[4vh] trasition-all duration-500 scroll-item pointer-events-none hidden md:!block md:bottom-5">' +
		'<div class="index-scroll"></div>' +
		'<div class="font-bold text-lg text-white tracking-wide md:text-[14px]">往下滑動</div>' +
	'</div>';
	$("#Content .CustomPage .shopline-section").eq(0).append(_item_banner);

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

	new Vue({
		el: '#store',
		data: {
			cat: 0,
		},
		computed: {},
		methods: {
			catHandler(i, now) {
				this.cat = i
				$(".store-position").html(now)
			},
		},
		filters: {},
		mounted() {},
		updated() {},
	})


	// $(document).ready(function () {
	// $(".text__container .text-block__item").each(function () {
	// const $item = $(this);
	// const $content = $item.find(".text-block__content");
	// const $ps = $content.find("p");

	// // 1. 處理圖片段：第 0 個 <p> 是 img 字串
	// const $imgP = $ps.eq(0);
	// let $picWrapper = null;

	// if ($imgP.length) {
	// const htmlStr = $imgP.html(); // 可能是字串：<img src="...">
	// const match = htmlStr.match(/src=["']([^"']+)["']/);
	// if (match) {
	// const imgSrc = match[1];
	// const $newP = $('<p></p>').append(`<img src="${imgSrc}">`);
	// $picWrapper = $('<div class="pic mb-10"></div>').append($newP);
	// }
	// }

	// // 2. 第 5 個 <p> 的 <a href> 用來替換 Google Link
	// const $linkP = $ps.eq(5);
	// let customHref = "javascript:;";
	// if ($linkP.length) {
	// const $a = $linkP.find("a[href]");
	// if ($a.length) {
	// customHref = $a.attr("href");
	// }
	// }

	// // 3. 處理 h3 + h4 標題區
	// const $h3 = $item.find("h3.text-block__title");
	// const $h4 = $item.find("h4.text-block__subtitle");

	// let $headArea = null;
	// if ($h3.length && $h4.length) {
	// const h3HTML = $h3.prop("outerHTML");
	// const h4HTML = $h4.prop("outerHTML");

	// $headArea = $(`
	// <div class="flex items-end head-area">
	// <div class="text-green flex-auto pr-5">
	// <div class="text-[21px] font-bold leading-none tracking-wide">
	// ${h3HTML}
	// </div>
	// <div class="font-medium text-[17px] leading-none tracking-normal mt-3">
	// ${h4HTML}
	// </div>
	// </div>
	// <div class="shrink-0 text-xs">
	// <a href="${customHref}" target="_blank" class="flex items-center">
	// <div>GOOGLE</div>
	// <div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
	// </a>
	// </div>
	// </div>
	// `);

	// $h3.remove();
	// $h4.remove();
	// }

	// // 4. 處理 p[1]~p[4] 成為 .text-gray-300 內容
	// const $grayWrap = $('<div class="text-gray-300"></div>');

	// const mappings = [
	// {
	// index: 1,
	// html: (text) => `
	// <div class="flex items-center font-bold mb-1">
	// <div class="address">A</div>
	// <div class="text-[19px]">${text}</div>
	// </div>`
	// },
	// {
	// index: 2,
	// html: (text) => `
	// <div class="flex items-center font-bold mb-3">
	// <div class="tell">T</div>
	// <div class="text-[19px]">${text}</div>
	// </div>`
	// },
	// {
	// index: 3,
	// html: (text) => `
	// <div class="flex items-center font-medium mb-1">
	// <div class="day">SUN－THU</div>
	// <div class="text-[17px]">${text}</div>
	// </div>`
	// },
	// {
	// index: 4,
	// html: (text) => `
	// <div class="flex items-center font-medium">
	// <div class="day">FRI－SAT</div>
	// <div class="text-[17px]">${text}</div>
	// </div>`
	// }
	// ];

	// mappings.forEach(({ index, html }) => {
	// const $p = $ps.eq(index);
	// if ($p.length) {
	// const text = $p.text().trim();
	// const $newEl = $(html(text));
	// $grayWrap.append($newEl);
	// $p.remove();
	// }
	// });

	// // 5. 移除第 5 個連結 <p>
	// $linkP.remove();

	// // 6. 插入內容
	// $content.empty().append($grayWrap);
	// if ($picWrapper) $item.prepend($picWrapper);
	// if ($headArea) {
	// $picWrapper ? $picWrapper.after($headArea) : $item.prepend($headArea);
	// }
	// });
	// });
}
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/all-products') {
	$("body").addClass("is-gray-300")

	$("#Content .CustomPage .Grid-row-wrapper").eq(0).addClass("category-banner all");
	$("#Content .CustomPage .Grid-row-wrapper").eq(1).addClass("category-head");

	var _slider_bg = 
    '<div class="absolute tf w-[110%] md:hidden"><img src="https://gdlinode.tw/oolab/images/index-slider-bg-2.svg" class="mx-auto"></div>';
    $("#Content .CustomPage .Grid-row-wrapper").eq(0).find(".Grid-row").append(_slider_bg);


    // 目標容器
	const isMobile = $(window).width() <= 767;
	
	const $wrapper = $("#Content .CustomPage .Grid-row-wrapper").eq(0);
	let titleText = $wrapper.find(".Grid-row .Grid-item-title p").eq(0).text().trim();
	if (isMobile) {
		titleText = titleText.replace(/[。…\.]+$/, "");
	}
	const aboutText = $wrapper.find(".Grid-row .Grid-item-title p").eq(1).text().trim();
	const colorText = $wrapper.find(".Grid-row .Grid-item-title p").eq(2).text().trim();

	// --- 拆解 Content ---
	const $allPs = $wrapper.find(".Grid-row .Grid-item-content p");
	let firstP = $allPs.eq(0).text().trim();
	if (isMobile) {
		firstP = firstP.replace(/[「」]/g, "");
	}
	const remainingText = $allPs.slice(1).map(function() { 
		return $(this).text().trim(); 
	}).get().join(' ');

	// 為了桌面版保留完整結構
	const contentHtml = $wrapper.find(".Grid-row .Grid-item-content").html();

	$("body").css("background-color", colorText);
	$("#Content .CustomPage .Grid-row-wrapper .category-banner").css("background-color", colorText);

	// STEP 3：組合新的 HTML
	var _item_banner =
	'<div class="absolute -vw-left-10 vw-top-[166] w-full z-10 md:left-0">' +
		'<div class="relative inline-block w-full pt-16 pl-16 lg:p-0">' +
			'<svg class="absolute -top-[48px] -left-[48px] w-[30vw] h-[15vh] md:hidden">' +
				'<path id="aboutPath" d="M1.5,65.27V51.93C1.5,24.08,24.08,1.5,51.93,1.5H397.09" style="fill: none; stroke: #none; stroke-miterlimit: 10; stroke-width: 2px;"/>' +
				'<text class="fill-green-300 font-bold text-[20px] tracking-normal lg:text-[14px]" style="transform: translate(36px, 38px);">' +
				'<textPath class="aboutText" href="#aboutPath">' + aboutText + '</textPath>' +
				'</text>' +
			'</svg>' +
			'<div class="head-area absolute top-0 left-0 z-10 md:w-full md:text-center md:-top-[14px]">' +
				'<div class="relative inline-block bg-white border-3 border-green-300 rounded-[50px] vw-py-[46px] vw-px-[62px] lg:rounded-[24px] md:bg-transparent md:border-0 md:p-0">' +
					'<h3 class="font-bold vw-text-[64px] text-green-300 tracking-wide leading-none lg:text-[28px] md:text-white md:text-[44px] md:tracking-[4px]" id="category-head">' + titleText + '</h3>' +
					'<div class="triangle absolute left-[5.5vw] -bottom-[24px] md:hidden"><svg width="64.1" height="28.76" viewBox="0 0 64.1 28.76">' +
						'<path d="M2.49,4.74h2.35s53.16,22.65,53.16,22.65c2.91,1.24,5.89-1.6,4.79-4.57l-6.7-18.08h3.67" style="fill: #fff; stroke: #004d47; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.14px;"/>' +
						'<rect width="62.2" height="5.08" style="fill: #fff;"/>' +
					'</svg></div>' +
				'</div>' +
				'<div class="text-white leading-normal tracking-wide font-bold vw-text-[31px] mt-[40px] ml-[3.5vw] lg:text-[15px] lg:ml-0 lg:mt-4 md:text-[13px] md:tracking-[2px]" id="category-intro">' +
					'<div class="md:hidden">' + contentHtml + '</div>' +
					'<div class="hidden md:!block">' + aboutText + '</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>' +
	'<div class="rotate z-10 absolute -vw-right-6 -vw-top-6 md:hidden"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate-5.svg" class="vw-max-w-[172] animate-spin-slow"></div>' +
	'<div class="absolute tf-x z-10 bottom-[46px] trasition-all duration-500 scroll-item pointer-events-none hidden md:!block">' +
		'<div class="index-scroll"></div>' +
		'<div class="font-bold text-lg text-white tracking-wide md:text-[14px]">往下滑動</div>' +
	'</div>';

	// STEP 4：刪除舊區塊並插入新內容
	$wrapper.find(".Grid-item-title").remove();
	$wrapper.find(".Grid-item-content").remove();
	$wrapper.find(".Grid-row").prepend(_item_banner);

	gsap.fromTo(".aboutText", { 
		attr: { 
			startOffset: "100%" 
		},
	},{ 
		attr: { 
			startOffset: "0%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	});

	$("#Content .CustomPage .Grid-row-wrapper").eq(2).addClass("category-cats");

	$(".Grid-products-item").closest(".Grid-row-wrapper").addClass("products-items")

	$("#Content .CustomPage .products-items").each(function(i, el){
		var _url = $(".Grid-products-item", el).find(".Grid-item-content p").text()

		if(_url != "" && _url != null){
			var _item_more =
			'<div class="text-center mt-32 md:mt-7 md:mb-16">' +
				'<a href="' + _url + '" class="more-arrow"><div class="inline-block border-2 border-green-300 rounded-full py-6 px-8 md:py-3">' +
					'<div class="flex items-center">' +
						'<span class="font-bold text-green-300 text-[21px] tracking-wide md:text-[16px]">閱讀更多</span>' +
						'<div class="arrow pointer-events-auto ml-8">' +
							'<svg width="33" height="33" viewBox="0 0 32.52 32.55">' +
								'<path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1D7068;"/>' +
							  	'<polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +
							'</svg>' +
						'</div>' +
					'</div>' +
				'</div></a>' +
			'</div>';

			$(".Grid-products-item", el).append(_item_more);

			$(".Grid-products-item", el).find(".Grid-item-content").remove();
		}

	})
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// features Item
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/features') {
	// banner
	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative -mt-[40px] md:mt-0");

	var _item_banner =
	'<div class="absolute vw-left-[178] vw-top-[186] md:left-0 md:top-[32px] md:px-[20px] md:w-full"><img src="https://gdlinode.tw/oolab/images/features-head-1.svg" class="vw-max-w-[690] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-head-1-mobile.svg" class="hidden md:!block"></div>' +

	'<div class="dialog-items absolute tf vw-w-[1500px] vw-h-[480] mx-auto -vw-mt-[70px] md:hidden">' +
		'<div class="dialog-item item-1 absolute opacity-0 vw-top-[100] vw-right-[100]"><img src="https://gdlinode.tw/oolab/images/dialog-1-1.svg" class="vw-max-w-[282]"></div>' +
		'<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[154] vw-left-[440]"><img src="https://gdlinode.tw/oolab/images/dialog-1-2.svg" class="vw-max-w-[198]"></div>' +
		'<div class="absolute bottom-0 right-0">' +
			'<div class="features-content relative font-bold vw-text-[37px] tracking-wide lg:text-[16px]">' +
				'#百萬熱銷人氣款！<br>' +
				'#手搖控的質感首選' +
			'</div>' +
		'</div>' +
	'</div>' +
	'<div class="dialog-items">' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 right-[16px] top-[188px]"><img src="https://gdlinode.tw/oolab/images/dialog-1-1.svg" class="max-w-[138px]"></div>' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 left-[32px] top-[324px]"><img src="https://gdlinode.tw/oolab/images/dialog-1-2.svg" class="max-w-[88px]"></div>' +
	'</div>';

	$("#Content .CustomPage .shopline-section").eq(0).find(".section-width").append(_item_banner);

	// var _item_marquee_two =
	// '<div class="overflow-hidden z-10">' +
	// 	'<div class="flex w-max index-scroll-right">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/fea-marquee-1.svg" class="max-w-none">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/fea-marquee-1.svg" class="max-w-none">' +
	// 	'</div>' +
	// '</div>';
	// $(_item_marquee_two).insertAfter($("#Content .CustomPage .shopline-section").eq(2));

	$("#Content .CustomPage .shopline-section").eq(3).addClass("productsWrap featuresWrap");
	var _item_products_head = '<div class="products-head"><img src="https://gdlinode.tw/oolab/images/feature-p-head.svg" class="md:hidden"><img src="https://gdlinode.tw/oolab/images/feature-p-head-mobile-2.svg" class="mx-auto hidden md:!block"></div>';
	$("#Content .CustomPage .featuresWrap .section-width").prepend(_item_products_head);

	$("#Content .CustomPage .shopline-section").eq(4).addClass("featureSlider");

	$(".productsWrap.featuresWrap .product-list-slider__products .product-item .boxify-image-wrapper").addClass("is-brown")
}
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-travel-tumbler') {
	// banner
	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative -mt-[40px] md:mt-0");

	var _item_banner =
	'<div class="absolute vw-left-[178] vw-top-[186] md:left-0 md:top-[32px] md:px-[20px] md:w-full"><img src="https://gdlinode.tw/oolab/images/features-head-2.svg" class="vw-max-w-[490] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-head-2-mobile.svg" class="hidden md:!block"></div>' +

	'<div class="dialog-items absolute tf vw-w-[1300px] vw-h-[220] mx-auto -vw-mt-[70px] md:hidden">' +
		'<div class="dialog-item item-1 absolute opacity-0 top-0 vw-right-[230] lg:-top-[28px]"><img src="https://gdlinode.tw/oolab/images/dialog-2-1.svg" class="vw-max-w-[147px] lg:max-w-[100px]"></div>' +
		'<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[8] vw-left-[280] lg:left-[50px] lg:-bottom-[10px]"><img src="https://gdlinode.tw/oolab/images/dialog-2-2.svg" class="vw-max-w-[188px] lg:max-w-[124px]"></div>' +
		'<div class="absolute bottom-0 right-0">' +
			'<div class="features-content relative font-bold vw-text-[37px] tracking-wide lg:text-[16px]">' +
				'#持久性保溫<br>' +
				'#戶外出走的補水戰友' +
			'</div>' +
		'</div>' +
	'</div>' +
	'<div class="dialog-items">' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 right-[16px] top-[188px]"><img src="https://gdlinode.tw/oolab/images/dialog-2-1.svg" class="max-w-[108px]"></div>' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 left-[32px] top-[324px]"><img src="https://gdlinode.tw/oolab/images/dialog-2-2.svg" class="max-w-[128px]"></div>' +
	'</div>';

	$("#Content .CustomPage .shopline-section").eq(0).find(".section-width").append(_item_banner);

	$("#Content .CustomPage .shopline-section").eq(2).addClass("productsWrap featuresWrap travel-tumbler");
	var _item_products_head = '<div class="products-head"><img src="https://gdlinode.tw/oolab/images/feature-p-head-2.svg" class="vw-max-w-[1374px] md:hidden"><img src="https://gdlinode.tw/oolab/images/feature-p-head-mobile.svg" class="mx-auto hidden md:!block"></div>';
	$("#Content .CustomPage .featuresWrap .section-width").prepend(_item_products_head);
	
	$("#Content .CustomPage .shopline-section").eq(3).addClass("featureSlider");

	$(".productsWrap.featuresWrap .product-list-slider__products .product-item .boxify-image-wrapper").addClass("is-green")
}
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-pp-straw-tumbler') {
	// banner
	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative -mt-[40px] md:mt-0");

	var _item_banner =
	'<div class="absolute vw-left-[178] vw-top-[186] md:left-0 md:top-[32px] md:px-[20px] md:w-full"><img src="https://gdlinode.tw/oolab/images/features-head-3.svg" class="vw-max-w-[490] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-head-3-mobile.svg" class="hidden md:!block"></div>' +

	'<div class="dialog-items absolute tf vw-w-[1300px] vw-h-[220] mx-auto -vw-mt-[70px] md:hidden">' +
		'<div class="dialog-item item-1 absolute opacity-0 top-0 vw-right-[230] lg:-top-[30px] lg:right-[40px]"><img src="https://gdlinode.tw/oolab/images/dialog-3-1.svg" class="vw-max-w-[206px] lg:max-w-[132px]"></div>' +
		'<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[8] vw-left-[280]"><img src="https://gdlinode.tw/oolab/images/dialog-3-2.svg" class="vw-max-w-[147px] lg:max-w-[100px]"></div>' +
		'<div class="absolute bottom-0 right-0">' +
			'<div class="features-content relative font-bold vw-text-[37px] tracking-wide lg:text-[16px]">' +
				'#外出輕巧首選<br>' +
				'#人氣輕量版吸管杯' +
			'</div>' +
		'</div>' +
	'</div>' +
	'<div class="dialog-items">' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 right-[16px] top-[188px]"><img src="https://gdlinode.tw/oolab/images/dialog-3-1.svg" class="max-w-[138px]"></div>' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 left-[32px] top-[324px]"><img src="https://gdlinode.tw/oolab/images/dialog-3-2.svg" class="max-w-[88px]"></div>' +
	'</div>';

	$("#Content .CustomPage .shopline-section").eq(0).find(".section-width").append(_item_banner);

	$("#Content .CustomPage .shopline-section").eq(2).addClass("productsWrap featuresWrap pp-straw-tumbler");
	var _item_products_head = '<div class="products-head"><img src="https://gdlinode.tw/oolab/images/feature-p-head-2.svg" class="vw-max-w-[1374px] md:hidden"><img src="https://gdlinode.tw/oolab/images/feature-p-head-mobile.svg" class="mx-auto hidden md:!block"></div>';
	$("#Content .CustomPage .featuresWrap .section-width").prepend(_item_products_head);
	
	$("#Content .CustomPage .shopline-section").eq(3).addClass("featureSlider");

	$(".productsWrap.featuresWrap .product-list-slider__products .product-item .boxify-image-wrapper").addClass("is-pink")
}
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-sports-handle-bottles') {
	// banner
	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative -mt-[40px] md:mt-0");

	var _item_banner =
	'<div class="absolute vw-left-[178] vw-top-[186] md:left-0 md:top-[32px] md:px-[20px] md:w-full""><img src="https://gdlinode.tw/oolab/images/features-head-4.svg" class="vw-max-w-[490] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-head-4-mobile.svg" class="hidden md:!block"></div>' +

	'<div class="dialog-items absolute tf vw-w-[1300px] vw-h-[220] mx-auto -vw-mt-[70px] md:hidden">' +
		'<div class="dialog-item item-1 absolute opacity-0 top-0 vw-right-[230] lg:-top-[40px] lg:right-[20px]"><img src="https://gdlinode.tw/oolab/images/dialog-4-1.svg" class="vw-max-w-[176px] lg:max-w-[120px]"></div>' +
		'<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[8] vw-left-[280] lg:-bottom-[70px] lg:left-[60px]"><img src="https://gdlinode.tw/oolab/images/dialog-4-2.svg" class="vw-max-w-[188px] lg:max-w-[124px]"></div>' +
		'<div class="absolute bottom-0 right-0">' +
			'<div class="features-content relative font-bold vw-text-[37px] tracking-wide lg:text-[16px] black">' +
				'#大容量設計<br>' +
				'#運動生活新選擇！' +
			'</div>' +
		'</div>' +
	'</div>' +
	'<div class="dialog-items">' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 right-[16px] top-[188px]"><img src="https://gdlinode.tw/oolab/images/dialog-4-1.svg" class="max-w-[124px]"></div>' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 left-[32px] top-[324px]"><img src="https://gdlinode.tw/oolab/images/dialog-4-2.svg" class="max-w-[132px]"></div>' +
	'</div>';

	$("#Content .CustomPage .shopline-section").eq(0).find(".section-width").append(_item_banner);

	$("#Content .CustomPage .shopline-section").eq(2).addClass("productsWrap featuresWrap sports-handle-bottles");
	var _item_products_head = '<div class="products-head"><img src="https://gdlinode.tw/oolab/images/feature-p-head-2.svg" class="vw-max-w-[1374px] md:hidden"><img src="https://gdlinode.tw/oolab/images/feature-p-head-mobile.svg" class="mx-auto hidden md:!block"></div>';
	$("#Content .CustomPage .featuresWrap .section-width").prepend(_item_products_head);
	
	$("#Content .CustomPage .shopline-section").eq(3).addClass("featureSlider");

	$(".productsWrap.featuresWrap .product-list-slider__products .product-item .boxify-image-wrapper").addClass("is-khaki")
}
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-ecozen-tumbler') {
	// banner
	$("#Content .CustomPage .shopline-section").eq(0).addClass("relative -mt-[40px] md:mt-0");

	var _item_banner =
	'<div class="absolute vw-left-[178] vw-top-[186] md:left-0 md:top-[32px] md:px-[20px] md:w-full"><img src="https://gdlinode.tw/oolab/images/features-head-5.svg" class="vw-max-w-[690] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-head-5-mobile.svg" class="hidden md:!block"></div>' +

	'<div class="dialog-items absolute tf vw-w-[1500px] vw-h-[480] mx-auto -vw-mt-[70px] md:hidden">' +
		'<div class="dialog-item item-1 absolute opacity-0 vw-top-[100] vw-right-[100]"><img src="https://gdlinode.tw/oolab/images/dialog-5-1.svg" class="vw-max-w-[282]"></div>' +
		'<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[154] vw-left-[440]"><img src="https://gdlinode.tw/oolab/images/dialog-5-2.svg" class="vw-max-w-[198]"></div>' +
		'<div class="absolute bottom-0 right-0">' +
			'<div class="features-content relative font-bold vw-text-[37px] tracking-wide lg:text-[16px] black">' +
				'#透明美學<br>' +
				'#盛裝多種風景' +
			'</div>' +
		'</div>' +
	'</div>' +
	'<div class="dialog-items">' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 right-[16px] top-[188px]"><img src="https://gdlinode.tw/oolab/images/dialog-5-1.svg" class="max-w-[138px]"></div>' +
		'<div class="dialog-item item-1 hidden md:!block absolute opacity-0 left-[32px] top-[324px]"><img src="https://gdlinode.tw/oolab/images/dialog-5-2.svg" class="max-w-[140px]"></div>' +
	'</div>';

	$("#Content .CustomPage .shopline-section").eq(0).find(".section-width").append(_item_banner);

	// var _item_marquee_two =
	// '<div class="overflow-hidden z-10">' +
	// 	'<div class="flex w-max index-scroll-right">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/fea-marquee-1.svg" class="max-w-none">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/fea-marquee-1.svg" class="max-w-none">' +
	// 	'</div>' +
	// '</div>';
	// $(_item_marquee_two).insertAfter($("#Content .CustomPage .shopline-section").eq(2));

	$("#Content .CustomPage .shopline-section").eq(3).addClass("productsWrap featuresWrap ecozen-tumbler");
	var _item_products_head = '<div class="products-head"><img src="https://gdlinode.tw/oolab/images/feature-p-head-3.svg" class="md:hidden"><img src="https://gdlinode.tw/oolab/images/feature-p-head-mobile-2.svg" class="mx-auto hidden md:!block"></div>';
	$("#Content .CustomPage .featuresWrap .section-width").prepend(_item_products_head);

	$("#Content .CustomPage .shopline-section").eq(4).addClass("featureSlider");

	$(".productsWrap.featuresWrap .product-list-slider__products .product-item .boxify-image-wrapper").addClass("is-sand")
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/features' || location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-travel-tumbler' || location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-pp-straw-tumbler' || location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-sports-handle-bottles' || location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-ecozen-tumbler') {
	var _item_banner =
	'<div class="fea-dots absolute tf-x w-full vw-bottom-[152] vw-px-[122] lg:bottom-[90px]">' +
		'<ul class="flex items-center justify-between">' +
			'<li class="relative">' +
				'<div class=""><svg width="66" height="22" viewBox="0 0 65.31 21.74">' +
					'<path d="M13.9,4.68C17.12-.89,3.53-.89,6.75,4.68,3.53-.89-3.26,10.87,3.17,10.87c-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
					'<path d="M36.23,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
					'<path d="M58.57,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
				'</svg></div>' +
				'<div class="maru-items absolute tf flex items-center opacity-0">' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
				'</div>' +
			'</li>' +
			'<li class="relative">' +
				'<div class="og-item"><svg width="48.56" height="22.58" viewBox="0 0 48.56 22.58">' +
					'<path d="M16.38,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1C3.3,7.29-.19,10.91,0,15.3c.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7C22.44,2.85,19.72.13,16.38,0Z" class="fea-fill-icon"/>' +
					'<path d="M42.37,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1-4.34,0-7.83,3.62-7.63,8,.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7-.13-3.34-2.85-6.06-6.19-6.19Z" class="fea-fill-icon"/>' +
				'</svg></div>' +
				'<div class="cups-item absolute tf opacity-0"><svg width="53.66" height="20.47" viewBox="0 0 53.66 20.47">' +
					'<path d="M50.5,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
					'<path d="M30.11,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
					'<path d="M9.72,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33C.71,19.28-.17,16.96.03,14.46c.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
				'</svg></div>' +
			'</li>' +
			'<li class="relative">' +
				'<div class=""><svg width="66" height="22" viewBox="0 0 65.31 21.74">' +
					'<path d="M13.9,4.68C17.12-.89,3.53-.89,6.75,4.68,3.53-.89-3.26,10.87,3.17,10.87c-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
					'<path d="M36.23,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
					'<path d="M58.57,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
				'</svg></div>' +
				'<div class="maru-items absolute tf flex items-center opacity-0">' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
				'</div>' +
			'</li>' +
			'<li class="relative">' +
				'<div class="og-item"><svg width="48.56" height="22.58" viewBox="0 0 48.56 22.58">' +
					'<path d="M16.38,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1C3.3,7.29-.19,10.91,0,15.3c.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7C22.44,2.85,19.72.13,16.38,0Z" class="fea-fill-icon"/>' +
					'<path d="M42.37,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1-4.34,0-7.83,3.62-7.63,8,.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7-.13-3.34-2.85-6.06-6.19-6.19Z" class="fea-fill-icon"/>' +
				'</svg></div>' +
				'<div class="cups-item absolute tf opacity-0"><svg width="53.66" height="20.47" viewBox="0 0 53.66 20.47">' +
					'<path d="M50.5,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
					'<path d="M30.11,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
					'<path d="M9.72,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33C.71,19.28-.17,16.96.03,14.46c.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
				'</svg></div>' +
			'</li>' +
			'<li class="relative md:hidden">' +
				'<div class=""><svg width="66" height="22" viewBox="0 0 65.31 21.74">' +
					'<path d="M13.9,4.68C17.12-.89,3.53-.89,6.75,4.68,3.53-.89-3.26,10.87,3.17,10.87c-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
					'<path d="M36.23,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
					'<path d="M58.57,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
				'</svg></div>' +
				'<div class="maru-items absolute tf flex items-center opacity-0">' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
				'</div>' +
			'</li>' +
			'<li class="relative md:hidden">' +
				'<div class="og-item"><svg width="48.56" height="22.58" viewBox="0 0 48.56 22.58">' +
					'<path d="M16.38,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1C3.3,7.29-.19,10.91,0,15.3c.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7C22.44,2.85,19.72.13,16.38,0Z" class="fea-fill-icon"/>' +
					'<path d="M42.37,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1-4.34,0-7.83,3.62-7.63,8,.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7-.13-3.34-2.85-6.06-6.19-6.19Z" class="fea-fill-icon"/>' +
				'</svg></div>' +
				'<div class="cups-item absolute tf opacity-0"><svg width="53.66" height="20.47" viewBox="0 0 53.66 20.47">' +
					'<path d="M50.5,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
					'<path d="M30.11,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
					'<path d="M9.72,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33C.71,19.28-.17,16.96.03,14.46c.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" class="fea-fill-icon"/>' +
				'</svg></div>' +
			'</li>' +
			'<li class="relative md:hidden">' +
				'<div class=""><svg width="66" height="22" viewBox="0 0 65.31 21.74">' +
					'<path d="M13.9,4.68C17.12-.89,3.53-.89,6.75,4.68,3.53-.89-3.26,10.87,3.17,10.87c-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
					'<path d="M36.23,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
					'<path d="M58.57,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" class="fea-stroke-icon"/>' +
				'</svg></div>' +
				'<div class="maru-items absolute tf flex items-center opacity-0">' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
					'<div class="w-[24px] h-[24px] rounded-full"></div>' +
				'</div>' +
			'</li>' +
		'</ul>' +
	'</div>';

	$("#Content .CustomPage .shopline-section").eq(0).find(".section-width").append(_item_banner);

	$(function(){
		var _steel_animate_one = gsap.timeline({
			paused: true,
		}).from($(".steel-line-1 path"), {
			duration: 0.8,
			drawSVG: device == 'mobile' ? '0% 0%' : '100% 100%',
		}).fromTo(".steel-item-1", {
			opacity: 0,
			x: -20,
		}, {
			x: 0,
			opacity: 1,
			duration: 0.4,
		});

		var _steel_animate_two = gsap.timeline({
			paused: true,
		}).from($(".steel-line-2 path"), {
			duration: 0.8,
			drawSVG: '0% 0%',
		}).fromTo(".steel-item-2", {
			opacity: 0,
			y: -20,
		}, {
			y: 0,
			opacity: 1,
			duration: 0.4,
		});

		var _steel_animate_three = gsap.timeline({
			paused: true,
		}).from($(".steel-line-3 path"), {
			duration: 0.8,
			drawSVG: device == 'mobile' ? '0% 0%' : '100% 100%',
		}).fromTo(".steel-item-3", {
			opacity: 0,
			x: -20,
		}, {
			x: 0,
			opacity: 1,
			duration: 0.4,
		});

		window.triggerStellOne= (el) => {
			_steel_animate_one.play()
		};
		window.triggerStellTwo= (el) => {
			_steel_animate_two.play()
		};
		window.triggerStellThree= (el) => {
			_steel_animate_three.play()
		};

		var _dialog_animate = gsap.timeline({
			paused: false,
			delay: device == 'mobile' ? 0 : .2,
		}).fromTo(".dialog-items .dialog-item.item-1", {
			opacity: 0,
			y: 40,
			scale: 0,
		}, {
			y: 0,
			scale: 1,
			opacity: 1,
			duration: 0.4,
			stagger: 0.2,
			ease: "back.out",
		})

		var delayTime = .5;
		var masterTimeline = gsap.timeline({
			repeat: -1,
			defaults: { duration: 0 }
		}).to(".maru-items, .cups-item", { 
			opacity: 1 
		}, delayTime).to(".og-item", { 
			opacity: 0 
		}, "<").to(".maru-items, .cups-item", { 
			opacity: 0 
		}, "+=" + delayTime).to(".og-item", { 
			opacity: 1 
		}, "<");
	})

	// var _item_marquee_one =
	// '<div class="overflow-hidden z-10">' +
	// 	'<div class="flex w-max index-scroll-left">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/fea-marquee-1.svg" class="max-w-none">' +
	// 		'<img src="https://gdlinode.tw/oolab/images/fea-marquee-1.svg" class="max-w-none">' +
	// 	'</div>' +
	// '</div>';
	// $(_item_marquee_one).insertAfter($("#Content .CustomPage .shopline-section").eq(1));

	// slider
	$(function(){
		$(".productsWrap .owl-stage .owl-item").each(function(i, el){
			var _url = $(".product-item", el).find("a").attr("href");

			var _item_heaf = '<div class="more text-center"><a href="' + _url + '" class="feature-product-more">更多</a></div>';

			$(".product-item", el).find("a").append(_item_heaf);
		})
		var _item_prev =
		'<svg width="17.46" height="26.44" viewBox="0 0 17.46 26.44">' +
		'<polyline points="3.5 1.5 15.96 14.09 1.5 24.94" style="fill: #fff; stroke: #4B4C4E; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +
		'</svg>';
		$(".productsWrap .owl-nav .owl-prev").html(_item_prev)
		var _item_next =
		'<svg width="17.46" height="26.44" viewBox="0 0 17.46 26.44">' +
		'<polyline points="3.5 1.5 15.96 14.09 1.5 24.94" style="fill: #fff; stroke: #4B4C4E; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>' +
		'</svg>';
		$(".productsWrap .owl-nav .owl-next").html(_item_next)
	})
	
	$(".featureSlider").find(".section-full-width >div style").remove();
	var elem = document.querySelector('.featureSlider .section-full-width >div');
	var elements = document.querySelectorAll('.featureSlider .section-full-width >div >div');
	var count = elements.length;
	if (count > 1) {
		var flkty = new Flickity(elem, {
			fade: true,
			prevNextButtons: false,
			pageDots: false,
			wrapAround: true,
			autoPlay: 3000,
			cellAlign: 'center',
			imagesLoaded: true,
			pauseAutoPlayOnHover: false, // 你的原設定
			arrowShape: ""
		});
		flkty.on('dragEnd', function() {
			flkty.playPlayer();
		});
		flkty.on('staticClick', function() {
			flkty.playPlayer();
		});
	}

	if (device == 'mobile') {
		var ftDeco = document.querySelector('.ft-deco-slider');
		var ftDecoSlider = new Flickity(ftDeco, {
			prevNextButtons: false,
			pageDots: true,
			wrapAround: true,
			autoPlay: 3000,
			cellAlign: 'center',
			imagesLoaded: true,
			pauseAutoPlayOnHover: false,
			arrowShape: ""
		});

		// var feaEx = document.querySelector('.fea-ex-slider');
		// var feaExSlider = new Flickity(feaEx, {
		// 	prevNextButtons: false,
		// 	pageDots: true,
		// 	wrapAround: true,
		// 	autoPlay: 3000,
		// 	cellAlign: 'center',
		// 	imagesLoaded: true,
		// 	pauseAutoPlayOnHover: false,
		// 	arrowShape: ""
		// });
	}
}
if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/features-pp-straw-tumbler') {
	$(".maru-items, .fea-stroke-icon, .fea-fill-icon").addClass("pp-straw")
}

if(location.href == 'https://oolabtwtest.shoplineapp.com/pages/storepromotions') {
	// Create and Append Lightbox Elements
	const $lightbox = $(`
		<div class="custom-lightbox">
			<div class="custom-lightbox__loader"></div>
			<button class="custom-lightbox__close" aria-label="Close lightbox">
				<div class="close-btn-circle">
					<svg width="59" height="59" viewBox="0 0 58.03 58.08">
						<path d="M56.59,23.6c-.14-1.04-.32-2.06-.55-3.08-2.13-9.13-7.61-15.32-16.68-18.02-6.57-1.95-13.25-1.97-19.85-.22C11.16,4.49,5.46,9.75,2.78,17.99c-2.32,7.11-2.35,14.35-.19,21.5,2.5,8.28,7.99,13.73,16.32,16.14,6.72,1.94,13.52,1.93,20.24.03,7.2-2.03,12.41-6.48,15.4-13.39,1.23-2.84,1.93-5.78,2.25-8.79,0-.06.01-.13.02-.19.14-1.39.2-2.8.18-4.22.01,0,.03,0,.04,0-.05-2.34-.32-4.53-.44-5.45Z" style="fill: #fff; stroke: #1d7068; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2px;"/>
						<g>
						<line x1="17.6" y1="38.4" x2="38.43" y2="19.68" style="fill: none; stroke: #1d7068; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2px;"/>
						<line x1="39.43" y1="38.4" x2="18.6" y2="19.68" style="fill: none; stroke: #1d7068; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2px;"/>
						</g>
					</svg>
				</div>
				<span class="close-btn-text">CLOSE</span>
			</button>
			<div class="custom-lightbox__content">
				<img class="custom-lightbox__image" src="" alt="Lightbox image">
			</div>
		</div>
	`).appendTo('body');

	const $lightboxImg = $lightbox.find('.custom-lightbox__image');

	// Open Lightbox
	$(document).on('click', '.image-with-text__image-container img, .image-with-text__image, .shopline-section img', function(e) {
		if ($(this).closest('.custom-lightbox').length) return;
		e.preventDefault();
		const imgSrc = $(this).prop('currentSrc') || $(this).attr('src');
		if (imgSrc) {
			$lightbox.addClass('is-loading');
			$lightboxImg.attr('src', imgSrc);
			$lightbox.addClass('is-open');
			$('body').addClass('lightbox-open');
		}
	});

	// Handle Image Load Finished
	$lightboxImg.on('load', function() {
		$lightbox.removeClass('is-loading');
	});

	// Close Lightbox function
	const closeLightbox = () => {
		$lightbox.removeClass('is-open');
		$('body').removeClass('lightbox-open');
		setTimeout(() => {
			if (!$lightbox.hasClass('is-open')) {
				$lightboxImg.attr('src', '');
				$lightbox.removeClass('is-loading');
			}
		}, 300);
	};

	// Close via Close Button
	$lightbox.on('click', '.custom-lightbox__close', function(e) {
		e.stopPropagation();
		closeLightbox();
	});

	// Close via Clicking Overlay
	$lightbox.on('click', function(e) {
		if ($(e.target).closest('.custom-lightbox__content').length === 0) {
			closeLightbox();
		}
	});

	// Close via Escape Key
	$(document).on('keydown', function(e) {
		if (e.key === 'Escape' && $lightbox.hasClass('is-open')) {
			closeLightbox();
		}
	});
}
window.onload = function() {
	// $("#preload").fadeOut(300)


	
	
}



// var productSettings = {
//   products_settings: {
//     data: [
//       "strawtumbler",
//       "best-seller",
//       "pp-straw-tumbler",
//       "travel-tumbler",
//       "sports-bottles-shaker-cups",
//       "daily-tumblers",
//       "lifestyle-accessories"
//     ]
//   }
// };

// const currentSlug = location.pathname.replace('/pages/', '').toLowerCase();
// const matched = productSettings.products_settings.data.find(item => item.toLowerCase() === currentSlug);

// if (matched) {
// 	$(".Grid-products-item").closest(".Grid-row-wrapper").addClass("products-items")

//     $("#Content .CustomPage .Grid-row-wrapper").eq(0).addClass("category-banner");
//     $("#Content .CustomPage .Grid-row-wrapper").eq(1).addClass("category-head");

//     var _slider_bg = 
//     '<div class="absolute tf w-[110%] md:hidden"><img src="https://gdlinode.tw/oolab/images/index-slider-bg.svg" class="mx-auto"></div>';
//     $("#Content .CustomPage .Grid-row-wrapper").eq(0).find(".Grid-row").append(_slider_bg);


//     // 目標容器
// 	const isMobile = $(window).width() <= 767;
	
// 	const $wrapper = $("#Content .CustomPage .Grid-row-wrapper").eq(0);
// 	let titleText = $wrapper.find(".Grid-row .Grid-item-title p").eq(0).text().trim();
// 	if (isMobile) {
// 		titleText = titleText.replace(/[。…\.]+$/, "");
// 	}
// 	const aboutText = $wrapper.find(".Grid-row .Grid-item-title p").eq(1).text().trim();
// 	const colorText = $wrapper.find(".Grid-row .Grid-item-title p").eq(2).text().trim();

// 	// --- 拆解 Content ---
// 	const $allPs = $wrapper.find(".Grid-row .Grid-item-content p");
// 	let firstP = $allPs.eq(0).text().trim();
// 	if (isMobile) {
// 		firstP = firstP.replace(/[「」]/g, "");
// 	}
// 	const remainingText = $allPs.slice(1).map(function() { 
// 		return $(this).text().trim(); 
// 	}).get().join(' ');

// 	// 為了桌面版保留完整結構
// 	const contentHtml = $wrapper.find(".Grid-row .Grid-item-content").html();

// 	$("body").css("background-color", colorText);
// 	$("#Content .CustomPage .Grid-row-wrapper .category-banner").css("background-color", colorText);

// 	// STEP 3：組合新的 HTML
// 	var _item_banner =
// 	'<div class="absolute -vw-left-10 vw-top-[166] w-full z-10 md:left-0">' +
// 		'<div class="relative inline-block w-full pt-16 pl-16 lg:p-0">' +
// 			'<svg class="absolute -top-[48px] -left-[48px] w-[30vw] h-[15vh] md:hidden">' +
// 				'<path id="aboutPath" d="M1,48.09v-11.09c0-19.88,16.12-36,36-36h470.57" style="fill: none; stroke: none; stroke-miterlimit: 10; stroke-width: 2px;"/>' +
// 				'<text class="fill-white font-bold text-[20px] tracking-normal lg:text-[14px]" style="transform: translate(36px, 38px);">' +
// 				'<textPath class="aboutText" href="#aboutPath">' + aboutText + '</textPath>' +
// 				'</text>' +
// 			'</svg>' +
// 			'<div class="head-area absolute top-0 left-0 z-10 md:w-full md:text-center">' +
// 				'<div class="relative inline-block bg-white border-3 border-green-300 rounded-[32px] vw-py-8 vw-px-[42px] lg:rounded-[24px] md:bg-transparent md:border-0 md:p-0">' +
// 					'<h3 class="font-bold vw-text-[45px] text-green-300 tracking-wide leading-none lg:text-[28px] md:text-white md:text-[40px]" id="category-head">' + titleText + '</h3>' +
// 					'<div class="triangle absolute left-[5vw] -bottom-[24px] md:hidden"><svg width="64.1" height="28.76" viewBox="0 0 64.1 28.76">' +
// 						'<path d="M2.49,4.74h2.35s53.16,22.65,53.16,22.65c2.91,1.24,5.89-1.6,4.79-4.57l-6.7-18.08h3.67" style="fill: #fff; stroke: #004d47; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.14px;"/>' +
// 						'<rect width="62.2" height="5.08" style="fill: #fff;"/>' +
// 					'</svg></div>' +
// 				'</div>' +
// 				'<div class="text-white leading-normal tracking-normal font-bold vw-text-[36px] mt-12 ml-[7vw] lg:text-[15px] lg:ml-0 lg:mt-4" id="category-intro">' +
// 					'<div class="md:hidden">' + contentHtml + '</div>' +
// 					'<div class="hidden md:!block">' + remainingText + '</div>' +
// 				'</div>' +
// 			'</div>' +
// 		'</div>' +
// 	'</div>' +
// 	'<div class="rotate z-10 absolute -vw-right-6 -vw-top-6 md:hidden"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate-3.svg" class="vw-max-w-[172] animate-spin-slow"></div>'+
// 	'<div class="speech-bubble absolute right-3 top-[160px] font-bold tracking-wide leading-none hidden md:!block">' + firstP + '</div>';

// 	// STEP 4：執行替換
// 	$wrapper.find(".Grid-item-title").remove();
// 	$wrapper.find(".Grid-item-content").remove();
// 	$wrapper.find(".Grid-row").prepend(_item_banner);

//     gsap.fromTo(".aboutText", { 
//         attr: { 
//             startOffset: "100%" 
//         },
//     },{ 
//         attr: { 
//             startOffset: "0%"
//         },      // 終點：文字停在路徑中間偏右（可調）
//         duration: 2,
//         ease: "power2.inOut",
//     });


//     $("#Content .CustomPage .Grid-row-wrapper").eq(2).addClass("category-cats");
// }