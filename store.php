<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<link rel="stylesheet" href="stylesheets/style.css">
</head>
<body>
	<div class="h-screen relative bg-pink">
		<img src="test/store-banner.png">
		<div class="absolute vw-left-[96] vw-top-[165] lg:left-0">
			<div class="relative inline-block pt-16 pl-16">
				<svg width="100%" height="100%" class="absolute -top-5 -left-5">
					<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h412" style="fill: none; stroke: none; stroke-miterlimit: 10;" />

					<text class="fill-white font-bold vw-text-[20px] tracking-normal" style="transform: translate(36px, 38px);">
						<textPath class="aboutText" href="#aboutPath">STORE LOCATIONS</textPath>
					</text>
				</svg>
				<img src="images/store-head.svg" class="vw-max-w-[454px]">
			</div>
		</div>
		<div class="rotate absolute vw-right-[140] vw-top-[60] md:hidden"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate-3.svg" class="animate-spin-slow vw-max-w-[174px]"></div>
	</div>

	<div class="vw-pt-[190px] vw-pb-[320px] md:pt-[48px] md:pb-[80px]">
		<div class="max-w-[1600px] mx-auto px-[100px] lg:px-10 md:px-[40px]" id="store">
			<div class="">
				<div class=""><img src="https://gdlinode.tw/oolab/images/store-head-2.svg" class="vw-max-w-[500px] lg:max-w-[320px] md:hidden"><img src="https://gdlinode.tw/oolab/images/store-head-2-mobile.svg" class="hidden md:!block mx-auto"></div>
				<div class="inline-block vw-text-[38px] text-[#4B4C4E] font-bold leading-none border-b-3 border-[#4B4C4E] mb-3 mt-6 vw-ml-[152px] md:hidden">#【門市據點】<span class="store-position">北</span>部地區</div>
			</div>
			<div class="max-w-[1200px] mx-auto">
				<div class="vw-mb-[140px] md:mb-0 md:mt-7">
					<ul class="store-cats flex items-center justify-end space-x-[30px] md:justify-center md:space-x-5">
						<li class="basic-hover" :class="{'current': cat == 0}" @click='catHandler(0, "北")'>北</li>
						<li class="basic-hover" :class="{'current': cat == 1}" @click='catHandler(1, "中")'>中</li>
						<li class="basic-hover" :class="{'current': cat == 2}" @click='catHandler(2, "南")'>南</li>
					</ul>
				</div>
				<div class="hidden md:!block text-center mb-10 mt-12">
					<div class="text-[23px] text-[#4B4C4E] font-bold leading-none border-b-3 border-[#4B4C4E] mb-3 mt-6 inline-block">#【門市據點】<span class="store-position">北</span>部地區</div>
				</div>
				<transition name="fade" mode="out-in">	
					<div class="storeListWrap" id="north" v-if="cat == 0" key="a0">
						<ul class="storeList">
							<li>
								<div class="pic mb-10"><img src="https://gdlinode.tw/oolab/images/store-pic-1.jpg"></div>
								<div class="flex items-end head-area">
									<div class="text-green flex-auto pr-5">
										<div class="title">新光三越 A11店</div>
										<div class="title-2">(Yes！Life裕隆城商場)</div>
									</div>
									<div class="shrink-0 text-xs"><a href="javascript:;" target="_blank" class="flex items-center">
										<div>GOOGLE</div>
										<div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
									</a></div>
								</div>
								<div class="text-gray-300 md:px-6">
									<div class="flex items-center font-bold mb-1">
										<div class="address">A</div>
										<div class="info">台北市信義區松壽路11號B1</div>
									</div>
									<div class="flex items-center font-bold mb-3">
										<div class="tell">T</div>
										<div class="info">0986-825-763</div>
									</div>
									<div class="flex items-center font-medium mb-1">
										<div class="day">SUN－THU</div>
										<div class="time">11:00-21:30</div>
									</div>
									<div class="flex items-center font-medium">
										<div class="day">FRI－SAT</div>
										<div class="time">11:00-22:00</div>
									</div>
								</div>
							</li>
							<li>
								<div class="pic mb-10"><img src="https://gdlinode.tw/oolab/images/store-pic-2.jpg"></div>
								<div class="flex items-end head-area">
									<div class="text-green flex-auto pr-5">
										<div class="title">新光三越 A11店</div>
										<div class="title-2">(Yes！Life裕隆城商場)</div>
									</div>
									<div class="shrink-0 text-xs"><a href="javascript:;" target="_blank" class="flex items-center">
										<div>GOOGLE</div>
										<div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
									</a></div>
								</div>
								<div class="text-gray-300 md:px-6">
									<div class="flex items-center font-bold mb-1">
										<div class="address">A</div>
										<div class="info">台北市信義區松壽路11號B1</div>
									</div>
									<div class="flex items-center font-bold mb-3">
										<div class="tell">T</div>
										<div class="info">0986-825-763</div>
									</div>
									<div class="flex items-center font-medium mb-1">
										<div class="day">SUN－THU</div>
										<div class="time">11:00-21:30</div>
									</div>
									<div class="flex items-center font-medium">
										<div class="day">FRI－SAT</div>
										<div class="time">11:00-22:00</div>
									</div>
								</div>
							</li>
							<li>
								<div class="pic mb-10"><img src="https://gdlinode.tw/oolab/images/store-pic-3.jpg"></div>
								<div class="flex items-end head-area">
									<div class="text-green flex-auto pr-5">
										<div class="title">新光三越 A11店</div>
										<div class="title-2">(Yes！Life裕隆城商場)</div>
									</div>
									<div class="shrink-0 text-xs"><a href="javascript:;" target="_blank" class="flex items-center">
										<div>GOOGLE</div>
										<div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
									</a></div>
								</div>
								<div class="text-gray-300 md:px-6">
									<div class="flex items-center font-bold mb-1">
										<div class="address">A</div>
										<div class="info">台北市信義區松壽路11號B1</div>
									</div>
									<div class="flex items-center font-bold mb-3">
										<div class="tell">T</div>
										<div class="info">0986-825-763</div>
									</div>
									<div class="flex items-center font-medium mb-1">
										<div class="day">SUN－THU</div>
										<div class="time">11:00-21:30</div>
									</div>
									<div class="flex items-center font-medium">
										<div class="day">FRI－SAT</div>
										<div class="time">11:00-22:00</div>
									</div>
								</div>
							</li>
							<li>
								<div class="pic mb-10"><img src="https://gdlinode.tw/oolab/images/store-pic-4.jpg"></div>
								<div class="flex items-end head-area">
									<div class="text-green flex-auto pr-5">
										<div class="title">新光三越 A11店</div>
										<div class="title-2">(Yes！Life裕隆城商場)</div>
									</div>
									<div class="shrink-0 text-xs"><a href="javascript:;" target="_blank" class="flex items-center">
										<div>GOOGLE</div>
										<div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
									</a></div>
								</div>
								<div class="text-gray-300 md:px-6">
									<div class="flex items-center font-bold mb-1">
										<div class="address">A</div>
										<div class="info">台北市信義區松壽路11號B1</div>
									</div>
									<div class="flex items-center font-bold mb-3">
										<div class="tell">T</div>
										<div class="info">0986-825-763</div>
									</div>
									<div class="flex items-center font-medium mb-1">
										<div class="day">SUN－THU</div>
										<div class="time">11:00-21:30</div>
									</div>
									<div class="flex items-center font-medium">
										<div class="day">FRI－SAT</div>
										<div class="time">11:00-22:00</div>
									</div>
								</div>
							</li>
							<li>
								<div class="pic mb-10"><img src="https://gdlinode.tw/oolab/images/store-pic-5.jpg"></div>
								<div class="flex items-end head-area">
									<div class="text-green flex-auto pr-5">
										<div class="title">新光三越 A11店</div>
										<div class="title-2">(Yes！Life裕隆城商場)</div>
									</div>
									<div class="shrink-0 text-xs"><a href="javascript:;" target="_blank" class="flex items-center">
										<div>GOOGLE</div>
										<div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
									</a></div>
								</div>
								<div class="text-gray-300 md:px-6">
									<div class="flex items-center font-bold mb-1">
										<div class="address">A</div>
										<div class="info">台北市信義區松壽路11號B1</div>
									</div>
									<div class="flex items-center font-bold mb-3">
										<div class="tell">T</div>
										<div class="info">0986-825-763</div>
									</div>
									<div class="flex items-center font-medium mb-1">
										<div class="day">SUN－THU</div>
										<div class="time">11:00-21:30</div>
									</div>
									<div class="flex items-center font-medium">
										<div class="day">FRI－SAT</div>
										<div class="time">11:00-22:00</div>
									</div>
								</div>
							</li>
							<li>
								<div class="pic mb-10"><img src="https://gdlinode.tw/oolab/images/store-pic-6.jpg"></div>
								<div class="flex items-end head-area">
									<div class="text-green flex-auto pr-5">
										<div class="title">新光三越 A11店</div>
										<div class="title-2">(Yes！Life裕隆城商場)</div>
									</div>
									<div class="shrink-0 text-xs"><a href="javascript:;" target="_blank" class="flex items-center">
										<div>GOOGLE</div>
										<div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
									</a></div>
								</div>
								<div class="text-gray-300 md:px-6">
									<div class="flex items-center font-bold mb-1">
										<div class="address">A</div>
										<div class="info">台北市信義區松壽路11號B1</div>
									</div>
									<div class="flex items-center font-bold mb-3">
										<div class="tell">T</div>
										<div class="info">0986-825-763</div>
									</div>
									<div class="flex items-center font-medium mb-1">
										<div class="day">SUN－THU</div>
										<div class="time">11:00-21:30</div>
									</div>
									<div class="flex items-center font-medium">
										<div class="day">FRI－SAT</div>
										<div class="time">11:00-22:00</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="storeListWrap" id="side" v-if="cat == 1" key="a1">
						<ul class="storeList">
							<li>
								<div class="pic mb-10"><img src="https://gdlinode.tw/oolab/images/store-pic-2.jpg"></div>
								<div class="flex items-end head-area">
									<div class="text-green flex-auto pr-5">
										<div class="title">新光三越 A11店</div>
										<div class="title-2">(Yes！Life裕隆城商場)</div>
									</div>
									<div class="shrink-0 text-xs"><a href="javascript:;" target="_blank" class="flex items-center">
										<div>GOOGLE</div>
										<div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
									</a></div>
								</div>
								<div class="text-gray-300 md:px-6">
									<div class="flex items-center font-bold mb-1">
										<div class="address">A</div>
										<div class="info">台北市信義區松壽路11號B1</div>
									</div>
									<div class="flex items-center font-bold mb-3">
										<div class="tell">T</div>
										<div class="info">0986-825-763</div>
									</div>
									<div class="flex items-center font-medium mb-1">
										<div class="day">SUN－THU</div>
										<div class="time">11:00-21:30</div>
									</div>
									<div class="flex items-center font-medium">
										<div class="day">FRI－SAT</div>
										<div class="time">11:00-22:00</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="storeListWrap" id="south" v-if="cat == 2" key="a2">
						<ul class="storeList">
							<li>
								<div class="pic mb-10"><img src="https://gdlinode.tw/oolab/images/store-pic-6.jpg"></div>
								<div class="flex items-end head-area">
									<div class="text-green flex-auto pr-5">
										<div class="title">新光三越 A11店</div>
										<div class="title-2">(Yes！Life裕隆城商場)</div>
									</div>
									<div class="shrink-0 text-xs"><a href="javascript:;" target="_blank" class="flex items-center">
										<div>GOOGLE</div>
										<div class="ml-2"><img src="https://gdlinode.tw/oolab/images/store-arrow.svg"></div>
									</a></div>
								</div>
								<div class="text-gray-300 md:px-6">
									<div class="flex items-center font-bold mb-1">
										<div class="address">A</div>
										<div class="info">台北市信義區松壽路11號B1</div>
									</div>
									<div class="flex items-center font-bold mb-3">
										<div class="tell">T</div>
										<div class="info">0986-825-763</div>
									</div>
									<div class="flex items-center font-medium mb-1">
										<div class="day">SUN－THU</div>
										<div class="time">11:00-21:30</div>
									</div>
									<div class="flex items-center font-medium">
										<div class="day">FRI－SAT</div>
										<div class="time">11:00-22:00</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</transition>
			</div>
		</div>
	</div>

	<div class="footerWrap relative bg-pink pt-[114px] h-[93vh] overflow-hidden" data-trigger-fn="triggerFooter">
		<div class="absolute right-[10vw] top-[170px]"><img src="https://gdlinode.tw/oolab/images/footer-deco-3.svg"></div>

		<div class="flex justify-between">
			<div class="relative pt-[236px] pb-[90px] pl-[186px] rounded-full">
				<div class="footer-deco-1 absolute top-0 -left-[12vw]"><img src="https://gdlinode.tw/oolab/images/footer-deco-1.svg" class="max-w-none"></div>
				<div class="footer-item-1 relative z-10">
					<div class="mb-[104px]"><a href="../" class="inline-block"><img src="https://gdlinode.tw/oolab/images/footer-logo.svg"></a></div>
					<div class="tracking-normal font-bold">
						<div class="font-archivo leading-none text-[18px] text-center border-2 border-green rounded-full px-3 py-2 text-green bg-[#F4F4F2] inline-block mb-8">CONTACT US</div>
						<div class="text-[15px] flex space-x-12 pl-3">
							<div class="">
								<div class="mb-7">
									<div class="text-green mb-1">客服信箱</div>
									<div class="text-[#4B4C4E]">oolab.service@gmail.com</div>
								</div>
								<div class="mb-7">
									<div class="text-green mb-1">客服電話</div>
									<div class="text-[#4B4C4E]">07-7223267(#20)</div>
								</div>
								<div class="">
									<div class="text-green mb-1">客服服務時間</div>
									<div class="text-[#4B4C4E]">
										週一至週五 9:00-17:30<br>
										(中午12:00至下午1:00為休息時間)
									</div>
								</div>
							</div>
							<div class="">
								<div class="mb-7">
									<div class="text-green mb-1">公關邀約 / 行銷異業合作</div>
								</div>
								<div class="mb-3">
									<div class="text-green mb-1">信箱</div>
									<div class="text-[#4B4C4E]">oolabtw@oolabtw.com</div>
								</div>
								<div class="mb-4">
									<div class="text-green mb-1">聯絡電話</div>
									<div class="text-[#4B4C4E]">07-7223267 (#24)</div>
								</div>
								<div class="">
									<div class="text-green mb-1">倉庫地址</div>
									<div class="text-[#4B4C4E]">高雄市大樹區瓦厝街168-3號 (不開放面交)</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="relative pt-[178px] pb-[112px] pr-[260px] mt-[252px] rounded-full">
				<div class="footer-deco-2 absolute top-0 -right-[2vw]"><img src="https://gdlinode.tw/oolab/images/footer-deco-2.svg" class="max-w-none"></div>
				<div class="footer-item-2 relative z-10 text-pink font-bold text-[15px] tracking-normal flex">
					<div class="flex space-x-6">
						<div class="">
							<div class="font-archivo leading-none text-[18px] bg-[#F4F4F2] text-center border-2 border-pink rounded-full px-3 py-2 mb-9">COMPANY</div>
							<ul class="space-y-2 pl-3">
								<li><a href="javascript:;">品牌理念</a></li>
								<li><a href="javascript:;">檢驗報告</a></li>
								<li><a href="javascript:;">門市資訊</a></li>
							</ul>
						</div>
						<div class="">
							<div class="font-archivo leading-none text-[18px] bg-[#F4F4F2] text-center border-2 border-pink rounded-full px-3 py-2 mb-9">SERVICE</div>
							<ul class="space-y-2 pl-3">
								<li><a href="javascript:;">環保杯保養</a></li>
								<li><a href="javascript:;">會員制度</a></li>
								<li><a href="javascript:;">點數換好禮</a></li>
								<li><a href="javascript:;">常見問題</a></li>
								<li><a href="javascript:;">購物須知</a></li>
								<li><a href="javascript:;">隱私權政策</a></li>
							</ul>
						</div>
					</div>
					<div class="mt-[59px] ml-[112px]">
						<div class="tracking-normal mb-5">
							<div class="mb-1">佐伊選物股份有限公司</div>
							<div class="">統編  52555796</div>
						</div>
						<div class="">
							<nav class="flex items-center space-x-4">
								<a href="javascript:;" class="basic-hover"><img src="https://gdlinode.tw/oolab/images/footer-sns-1.svg"></a>
								<a href="javascript:;" class="basic-hover"><img src="https://gdlinode.tw/oolab/images/footer-sns-2.svg"></a>
								<a href="javascript:;" class="basic-hover"><img src="https://gdlinode.tw/oolab/images/footer-sns-3.svg"></a>
								<a href="javascript:;" class="basic-hover"><img src="https://gdlinode.tw/oolab/images/footer-sns-4.svg"></a>
							</nav>
						</div>
						<div class="mt-[62px]">
							<nav class="flex items-center space-x-4">
								<a href="javascript:;"><img src="https://gdlinode.tw/oolab/images/pay-1.png"></a>
								<a href="javascript:;"><img src="https://gdlinode.tw/oolab/images/pay-2.png"></a>
								<a href="javascript:;"><img src="https://gdlinode.tw/oolab/images/pay-3.png"></a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

<?php include 'script.php'; ?>

</html>

<script>
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
</script>