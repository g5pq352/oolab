<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<link rel="stylesheet" href="stylesheets/style.css">
</head>
<body>
	<div class="relative bg-[#EDEDED]">
		<img src="test/about-banner.png">
		<div class="hidden md:!block w-full absolute top-[30px] tf-x"><img src="https://gdlinode.tw/oolab/images/about-head-1.svg" class="mx-auto"></div>
		<div class="hidden md:!block w-full absolute bottom-[30px] tf-x"><img src="https://gdlinode.tw/oolab/images/about-head-2.svg" class="mx-auto"></div>
		<div class="absolute vw-left-[96] vw-top-[110] md:hidden">
			<div class="relative inline-block pt-16 pl-16">
				<svg width="100%" height="100%" class="absolute -top-5 -left-5">
					<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h412" style="fill: none; stroke: none; stroke-miterlimit: 10;" />

					<text class="fill-[#D6A18E] font-bold vw-text-[20px] tracking-normal" style="transform: translate(36px, 38px);">
						<textPath class="aboutText" href="#aboutPath">ABOUT US</textPath>
					</text>
				</svg>
				<img src="images/about-head.svg" class="vw-max-w-[548]">
			</div>
		</div>
		<div class="absolute right-0 tf-y about-item md:hidden"><img src="test/about-banner-item.png" class="vw-max-w-[1088]"></div>
	</div>
	<div class="h-screen relative bg-[#EDEDED]">
		<div class="move-item z-10 pointer-events-none w-full h-full">
			<div class="lottie-item mx-auto h-full" id="move"></div>
		</div>
		<img src="images/about-move2.png">
	</div>
	<div class="h-screen relative bg-green">
		<div class="absolute left-[14vw] tf-y md:left-auto md:top-[70px] md:px-[32px]" data-trigger-fn="triggerPathOne">
			<div class="relative inline-block pt-16 pl-16 lg:pt-4 lg:pl-4 md:pl-0 md:pt-0">
				<svg width="100%" height="100%" class="absolute -top-5 -left-5 xl:-top-[22px] xl:-left-[18px] lg:-top-[36px] lg:-left-[36px] md:-top-[46px] md:-left-[44px]">
					<path id="aboutPath-path-1" d="M1,195.73v-56.45c0-76.37,61.91-138.28,138.28-138.28h481.08" style="fill: none; stroke: none; stroke-miterlimit: 10;" />
  					<path id="aboutPath-path-1-mobile" d="M1.03,296.8c-.02-.66-.03-1.32-.03-1.99V61c0-33.14,26.86-60,60-60h156.96s3.04,0,3.04,0" style="fill: none; stroke: none; stroke-miterlimit: 10;"/>

					<text class="fill-[#1d7068] font-bold vw-text-[17px] tracking-normal lg:text-[12px]" style="transform: translate(36px, 38px);">
						<textPath class="about-item-text-1 lg:hidden" href="#aboutPath-path-1">EMPATHY‧EMOTIONAL CONNECTION‧COLLECTIVE GOODNESS</textPath>
						<textPath class="about-item-text-1 hidden lg:!block" href="#aboutPath-path-1-mobile">EMPATHY‧EMOTIONAL CONNECTION‧COLLECTIVE GOODNESS</textPath>
					</text>
				</svg>
				<img src="images/about-item-1.png" class="vw-max-w-[626] md:max-w-full">
			</div>
		</div>
	</div>
	<div class="h-screen relative bg-gray">
		<div class="absolute right-[13vw] tf-y md:right-auto md:top-[70px] md:px-[32px]" data-trigger-fn="triggerPathTwo">
			<div class="relative inline-block pt-16 pl-16 lg:pt-4 lg:pl-4 md:pl-0 md:pt-0">
				<svg width="100%" height="100%" class="absolute -top-5 -left-5 xl:-top-[22px] xl:-left-[18px] lg:-top-[36px] lg:-left-[36px] md:-top-[46px] md:-left-[44px]">
					<path id="aboutPath-path-2" d="M1,195.73v-56.45c0-76.37,61.91-138.28,138.28-138.28h481.08" style="fill: none; stroke: none; stroke-miterlimit: 10;" />
					<path id="aboutPath-path-2-mobile" d="M1.03,296.8c-.02-.66-.03-1.32-.03-1.99V61c0-33.14,26.86-60,60-60h156.96s3.04,0,3.04,0" style="fill: none; stroke: none; stroke-miterlimit: 10;"/>

					<text class="fill-[#1D7068] font-bold vw-text-[17px] tracking-normal lg:text-[12px]" style="transform: translate(36px, 38px);">
						<textPath class="about-item-text-2 lg:hidden" href="#aboutPath-path-2">EMPATHY‧SHARED FEELING‧MUTUAL BENEFIT ...</textPath>
						<textPath class="about-item-text-2 hidden lg:!block" href="#aboutPath-path-2-mobile">EMPATHY‧SHARED FEELING‧MUTUAL BENEFIT ...</textPath>
					</text>
				</svg>
				<img src="images/about-item-2.png" class="vw-max-w-[626] md:max-w-full">
			</div>
		</div>
	</div>
	<div class="h-screen relative bg-pink">
		<div class="absolute left-[14vw] tf-y md:left-auto md:top-[70px] md:px-[32px]" data-trigger-fn="triggerPathThree">
			<div class="relative inline-block pt-16 pl-16 lg:pt-4 lg:pl-4 md:pl-0 md:pt-0">
				<svg width="100%" height="100%" class="absolute -top-5 -left-5 xl:-top-[20px] xl:-left-[20px] lg:-top-[40px] lg:-left-[36px] md:-top-[46px] md:-left-[44px]">
					<path id="aboutPath-path-3" d="M1,195.73v-56.45c0-76.37,61.91-138.28,138.28-138.28h481.08" style="fill: none; stroke: none; stroke-miterlimit: 10;" />
					<path id="aboutPath-path-3-mobile" d="M1,230.73V61c0-33.14,26.86-60,60-60h160c.13,0,.26,0,.39,0,1.11,0,2.22.04,3.31.11" style="fill: none; stroke: none; stroke-miterlimit: 10;"/>

					<text class="fill-[#F4F4F2] font-bold vw-text-[17px] tracking-normal lg:text-[12px]" style="transform: translate(36px, 38px);">
						<textPath class="about-item-text-3 lg:hidden" href="#aboutPath-path-3">EMPATHY‧SHARED FEELING‧MUTUAL BENEFIT ...</textPath>
						<textPath class="about-item-text-3 hidden lg:!block" href="#aboutPath-path-3-mobile">EMPATHY‧SHARED FEELING‧MUTUAL BENEFIT ...</textPath>
					</text>
				</svg>
				<img src="images/about-item-3.png" class="vw-max-w-[626] md:max-w-full">
				<div class="absolute top-[38vh] left-0 md:-left-[16px] md:top-[70%]"><img src="images/dango.svg" class="md:max-w-[60px]"></div>
				<div class="absolute bottom-[20vh] -right-[3.5vw] md:bottom-[72%]"><img src="images/dango.svg" class="md:max-w-[60px]"></div>
			</div>
		</div>
	</div>
	<div class="h-screen relative">
		<div class="w-full h-full absolute inset-0 flex md:flex-col">
			<div class="hidden md:!block mx-auto pt-[64px] pb-[56px]"><img src="https://gdlinode.tw/oolab/images/about-s5-head.svg"></div>
			<div class="w-[50vw] flex flex-col items-center justify-center bg-[#F4F4F2] md:order-2 md:w-full">
				<div class="">
					<div class="md:hidden"><img src="images/about-item-4.svg" class="vw-max-w-[600]"></div>
					<nav class="space-y-5 flex flex-col vw-pl-[142px] mt-[60px] lg:mt-16 md:pl-0 md:mt-[80px]">
						<a href="" class="about-button w-[216px] bg-white lg:w-[180px]"><span>全系列產品</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a>
						<a href="" class="about-button w-[216px] bg-white lg:w-[180px]"><span>門市據點</span> <div class="arrow"><svg width="33" height="33" viewBox="0 0 32.52 32.55"><path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/><polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;"/></svg></div></a>
					</nav>
				</div>
			</div>
			<div class="components_about flex w-[50vw] md:order-1 md:w-full md:hidden">
				<div class="about-scroll-wrapper">
					<ul class="about-scroll about-scroll-top">
						<li><img src="images/about-scroll-1.png"></li>
						<li><img src="images/about-scroll-1-2.png"></li>
						<li><img src="images/about-scroll-1-3.png"></li>
						<!-- 重複一份 -->
						<li><img src="images/about-scroll-1.png"></li>
						<li><img src="images/about-scroll-1-2.png"></li>
						<li><img src="images/about-scroll-1-3.png"></li>
					</ul>
				</div>

				<div class="about-scroll-wrapper">
					<ul class="about-scroll about-scroll-bottom">
						<li><img src="images/about-scroll-2.png"></li>
						<li><img src="images/about-scroll-2-2.png"></li>
						<li><img src="images/about-scroll-2-3.png"></li>
						<!-- 重複一份 -->
						<li><img src="images/about-scroll-2.png"></li>
						<li><img src="images/about-scroll-2-2.png"></li>
						<li><img src="images/about-scroll-2-3.png"></li>
					</ul>
				</div>
			</div>
			<div class="overflow-hidden hidden md:!block">
				<div class="flex w-max index-scroll-left">
					<img src="https://gdlinode.tw/oolab/images/about-scroll-1.png" class="max-w-none max-h-[278px]">
					<img src="https://gdlinode.tw/oolab/images/about-scroll-1-2.png" class="max-w-none max-h-[278px]">
					<img src="https://gdlinode.tw/oolab/images/about-scroll-1-3.png" class="max-w-none max-h-[278px]">
					<img src="https://gdlinode.tw/oolab/images/about-scroll-1.png" class="max-w-none max-h-[278px]">
					<img src="https://gdlinode.tw/oolab/images/about-scroll-1-2.png" class="max-w-none max-h-[278px]">
					<img src="https://gdlinode.tw/oolab/images/about-scroll-1-3.png" class="max-w-none max-h-[278px]">
				</div>
			</div>
		</div>
	</div>
</body>

<?php include 'script.php'; ?>

</html>

<script src="https://gdlinode.tw/oolab/js/aboutAnimation.js"></script>
	
<script>

const animationData = {
	"v":"5.12.2","fr":29.9700012207031,"ip":0,"op":67.0000027289659,"w":2138,"h":673,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":343,"h":547,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_0.png","e":0},{"id":"image_1","w":347,"h":346,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_1.png","e":0},{"id":"image_2","w":90,"h":545,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_2.png","e":0},{"id":"image_3","w":345,"h":349,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_3.png","e":0},{"id":"image_4","w":557,"h":560,"u":"https://gdlinode.tw/oolab/json/oolab/images/","p":"img_4.png","e":0},{"id":"comp_0","nm":"250701-Oolab-1920-首頁","fr":29.9700012207031,"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"b","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.507,"y":0},"t":32,"s":[2778.574,2526.829,0],"to":[0,0,0],"ti":[0,0,0]},{"t":60.0000024438501,"s":[2778.574,1851.306,0]}],"ix":2,"l":2},"a":{"a":0,"k":[171.309,549.085,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"a","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.507,"y":0},"t":25,"s":[2327.574,2318.579,0],"to":[0,0,0],"ti":[0,0,0]},{"t":53.0000021587343,"s":[2327.574,1851.056,0]}],"ix":2,"l":2},"a":{"a":0,"k":[173.352,348.595,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"l","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.507,"y":0},"t":18,"s":[2001.574,2510.579,0],"to":[0,0,0],"ti":[0,0,0]},{"t":46.0000018736184,"s":[2001.574,1848.056,0]}],"ix":2,"l":2},"a":{"a":0,"k":[44.714,544.233,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"o2","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.051,"y":1},"o":{"x":0.358,"y":0},"t":7,"s":[1681.574,2323.079,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.507,"y":1},"o":{"x":0.455,"y":0},"t":33,"s":[1681.574,1766.556,0],"to":[0,0,0],"ti":[0,0,0]},{"t":51.0000020772726,"s":[1681.574,1855.579,0]}],"ix":2,"l":2},"a":{"a":0,"k":[172.107,354.252,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":7,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":17,"s":[100,110,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0.167,0]},"t":36,"s":[100,100,100]},{"i":{"x":[0.615,0.145,0.667],"y":[1.095,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":50,"s":[100,85,100]},{"t":64.0000026067734,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"o1","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.197,"y":1},"o":{"x":0.34,"y":0},"t":0,"s":[1161.574,2547.079,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.313,"y":1},"o":{"x":0.394,"y":0},"t":26,"s":[1161.574,1758.556,0],"to":[0,0,0],"ti":[0,0,0]},{"t":46.0000018736184,"s":[1161.574,1859.079,0]}],"ix":2,"l":2},"a":{"a":0,"k":[278.063,563.969,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":10,"s":[100,110,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0.167,0]},"t":28,"s":[100,100,100]},{"i":{"x":[0.615,0.086,0.667],"y":[1.095,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":48,"s":[100,85,100]},{"t":62.0000025253118,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ip":0,"op":180.00000733155,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"250701-Oolab-1920-首頁","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1069,-199.5,0],"ix":2,"l":2},"a":{"a":0,"k":[1920,980,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":3840,"h":1960,"ip":0,"op":180.00000733155,"st":0,"bm":0}],"markers":[],"props":{}
};
var animation_json_move = lottie.loadAnimation({
	container: document.getElementById('move'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	animationData: animationJson
	// path: 'https://gdlinode.tw/oolab/json/oolab/json/about.json' // the path to the animation json
});
animation_json_move.play()

// var lot = lottie.loadAnimation({
// 	container: $(".handwriting-arae").get(0), // the dom element that will contain the animation
// 	renderer: 'svg',
// 	loop: false,
// 	autoplay: false,
// 	path: 'images/ae/data.json' // the path to the animation json
// });

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

var _about_text_path_one_mobile = gsap.timeline({
	paused: true,
}).fromTo(".about-item-text-1-mobile", { 
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

$(function(){
	window.triggerPathOne= (el) => {
		_about_text_path_one.play()
		_about_text_path_one_mobile.play()
	};
	window.triggerPathTwo= (el) => {
		_about_text_path_two.play()
	};
	window.triggerPathThree= (el) => {
		_about_text_path_three.play()
	};
})


</script>