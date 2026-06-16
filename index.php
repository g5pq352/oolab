<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<link rel="stylesheet" href="stylesheets/style.css">
</head>

<body>
	<div class="h-screen relative flex items-center justify-center bg-pink overflow-hidden">
		<div class="relative z-10 mb-[52px] pt-[7vh] md:mb-0 md:pt-[2vh]">
			<img src="test/index-banner-1.png">

			<div class="absolute -left-[45px] -top-[45px] w-full h-full md:-left-1 md:-top-2">
				<div class="relative inline-block w-full h-full">
					<svg width="100%" height="100%" class="absolute -top-5 -left-5">
						<path id="sliderPath" class="md:hidden" d="M1.5,180.31v-30.91C1.5,67.72,67.72,1.5,149.4,1.5h663.15" style="fill: none; stroke: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>
						<path id="sliderPath-mobile" class="hidden md:!block" d="M.75,87.8V22.75C.75,10.6,10.6.75,22.75.75h233.8" style="fill: none; stroke: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>

						<text class="fill-[#1D7068] font-bold text-[20px] tracking-normal md:text-[16px]" style="transform: translate(36px, 38px);">
							<textPath class="aboutText md:hidden" href="#sliderPath">TREASURE EVERY MOMENT  ...</textPath>
							<textPath class="aboutText-mobile hidden md:!block" href="#sliderPath-mobile">TREASURE EVERY MOMENT  ...</textPath>
						</text>
					</svg>
				</div>
			</div>
			<div class="absolute z-10 -left-[2vw] bottom-[16vh] ani-head md:hidden"><img src="images/slider-deco-1.svg" class="vw-max-w-[480]"></div>
			<div class="absolute z-10 -right-[2.5vw] bottom-[19vh] pointer-events-none pop-items md:right-4 md:bottom-auto md:top-[90px] md:hidden">
				<div class="mb-6"><img src="images/slider-deco-2.svg" class="vw-max-w-[260] ml-auto md:max-w-[116px]"></div>
				<div class=""><img src="images/slider-deco-3.svg" class="vw-max-w-[280] ml-auto md:max-w-[128px]"></div>
			</div>

			<div class="absolute tf-x z-10 bottom-0 pointer-events-none md:bottom-[52px] md:min-w-[80%] md:text-center">
				<div class="lottie-item w-[54vw] md:max-w-[130px] md:mx-auto" id="lottie"></div>
				<div class="font-bold text-white tracking-wide text-center mt-3 text-[18px] hidden md:!block">一起共好生活</div>
				<div class="font-medium text-white tracking-normal hidden mt-[26px] text-[14px] md:!block">每一樣物件，都是一場你與生活的對話。</div>
			</div>

			<div class="absolute tf w-full h-full px-1 hidden -z-[1] md:!block"><img src="https://gdlinode.tw/oolab/images/index-banner-bg-mobile.svg"></div>

			<div class="absolute tf-x z-10 -bottom-[4vh] opacity-0 trasition-all duration-500 scroll-item pointer-events-none md:bottom-5 md:hidden">
				<div class="font-bold text-lg text-white tracking-wide md:text-[14px]">往下滑動你的日常好陪伴</div>
				<div class="index-scroll"></div>
			</div>
		</div>

		<div class="absolute tf w-[110%] -z-10"><img src="https://gdlinode.tw/oolab/images/index-slider-bg.svg" class="mx-auto"></div>
	</div>

	<div class="relative bg-[#EDEDED] vw-pt-[200px] vw-pb-[238px] md:pt-[62px]">
		<div class="ids2Wrap vw-max-w-[1560] mx-auto md:max-w-full">
			<div class="head relative vw-mb-[142px] md:ml-0 md:mb-[40px]">
				<img src="https://gdlinode.tw/oolab/images/ids-2-head.svg" class="vw-max-w-[300] mx-auto lg:max-w-[260px] md:max-w-[148px]">
			</div>
			<div class="index-setion-2 flex items-center justify-center md:flex-col">
				<div class="left-area vw-mr-[110] md:mr-0 md:px-16 md:mb-32">
					<div class="pic-area relative md:ml-[40px]">
						<div class="absolute w-full h-[190px] -left-[3.5rem] -top-[3rem] xl:-top-[4.5rem] xl:-left-[3.2rem] md:-top-[16px] md:-left-[20px] md:hidden">
							<div class="relative inline-block w-full h-full pt-16 pl-16">
								<svg width="100%" height="100%" class="absolute -top-5 -left-5">
									<path id="id2Path" class="lg:hidden" d="M1.25,160.49v-79.24C1.25,37.25,37.25,1.25,81.25,1.25h393.39" style="fill: none; stroke: none; stroke-miterlimit: 10;" />
									<path id="id2Path-mobile" class="hidden lg:!block" d="M.75,74.01v-28.26C.75,20.9,20.9.75,45.75.75h166.11" style="fill: none; stroke: none; stroke-miterlimit: 10;"/>

									<text class="fill-[#1D7068] font-bold vw-text-[25px] tracking-normal md:text-[16px]" style="transform: translate(24px, 20px);">
										<textPath class="id2Text lg:hidden" href="#id2Path">ABOUT OOLAB</textPath>
										<textPath class="id2Text-mobile hidden lg:!block" href="#id2Path-mobile">ABOUT OOLAB</textPath>
									</text>
								</svg>
							</div>
						</div>
						<div class="pic relative">
							<img src="https://gdlinode.tw/oolab/images/ids-2-left-1.png" class="vw-max-w-[638] lg:hidden">
							<img src="https://gdlinode.tw/oolab/images/ids-2-left-1-mobile.png" class="hidden lg:!block">
							<img src="https://gdlinode.tw/oolab/images/ids-2-left-2.png" class="vw-max-w-[320] absolute -vw-left-[145px] -vw-bottom-[102px] md:max-w-[140px] md:-left-[48px] md:-bottom-[52px]">
						</div>
					</div>
				</div>
				<div class="right-area md:text-center md:px-[40px]">
					<div class="head font-bold vw-text-[42px] text-green-300 vw-mb-[62] -vw-ml-[25px] md:text-[23px] md:ml-0">「 珍惜，無所不在 」</div>
					<div class="text-area font-medium vw-text-xl text-[#4B4C4E] space-y-12 md:text-[14px]">
						<p class="leading-[2.5] tracking-normal md:leading-[2]">
							每一款由 Oolab 製造的物件，<br>
							不僅僅是一個容器，<br>
							而是一份珍惜的禮物 。
						</p>
						<p class="leading-[2.5] tracking-normal md:leading-[2]">
							為你自己、身邊重視的人，<br>
							還有滋養著我們的土地 ，<br>
							獻上一份真摯的心意與關愛 ，<br>
							願我們持續溫暖彼此 。
						</p>
					</div>
					<a href="/pages/about" class="more-arrow">
						<div class="inline-block border-2 border-[#1d7068] bg-white rounded-full py-[10px] vw-pl-[24] vw-pr-[12] mt-[62px] md:px-[6px] md:pl-[18px] md:pr-[10px]">
							<div class="flex items-center">
								<span class="font-bold text-[#1d7068] vw-text-[21px] tracking-wide md:text-[16px]">閱讀更多</span>
								<div class="arrow pointer-events-auto ml-8">
									<svg width="33" height="33" viewBox="0 0 32.52 32.55">
										<path
											d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z"
											style="fill: #1d7068;" />
										<polyline points="14.03 21.27 19.34 15.9 13.18 11.28"
											style="fill: none; stroke: #f4f4f2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;" />
									</svg>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>

			<div class="absolute top-[22vh] vw-right-[180] md:top-[124px] md:right-10" data-trigger-fn="cupPon">
				<div class="">
					<img src="https://gdlinode.tw/oolab/images/is2-circle.svg" class="animate-spin-slow vw-max-w-[174] md:max-w-[88px] md:hidden">
					<img src="https://gdlinode.tw/oolab/images/is2-circle-mobile.svg" class="animate-spin-slow hidden md:!block">
				</div>
				<div class="absolute tf w-full flex items-center justify-center -mt-2 ml-1 md:ml-0">
					<img src="https://gdlinode.tw/oolab/images/is2-deco-1.png" class="vw-max-w-[42] md:max-w-[22px] md:-rotate-[10deg]">
					<img src="https://gdlinode.tw/oolab/images/is2-deco-2.png" class="cup-pon vw-max-w-[42] md:max-w-[22px] md:rotate-[10deg]">
				</div>
			</div>
		</div>
	</div>

	<div class="bg-pink relative">
		<div class="pt-[140px] mb-20 md:pt-[68px] md:mb-5"><img src="images/index-cats-head.svg" class="vw-max-w-[550] mx-auto md:max-w-full"></div>

		<div class="h-screen"></div>

		<div class="relative text-center pointer-events-none">
			<div class="all-product relative inline-block md:!block md:px-8">
				<div class=""><img src="https://gdlinode.tw/oolab/images/all-product.svg" class="md:hidden"><img src="https://gdlinode.tw/oolab/images/all-product-mobile.svg" class="hidden md:!block mx-auto"></div>
				<div class="absolute tf-x bottom-12 arrow pointer-events-auto md:bottom-[16px]"><a href="javascript:;"><svg width="59.86" height="59.91" viewBox="0 0 59.86 59.91" class="md:max-w-[28px] h-auto">
					<path d="M59.39,24.14c-.15-1.11-.34-2.2-.59-3.29-2.27-9.75-8.13-16.37-17.82-19.25-7.01-2.09-14.15-2.1-21.21-.24C10.85,3.73,4.77,9.35,1.9,18.15c-2.48,7.59-2.51,15.33-.2,22.97,2.67,8.85,8.54,14.67,17.43,17.24,7.18,2.08,14.44,2.06,21.63.03,7.69-2.17,13.26-6.92,16.45-14.31,1.31-3.03,2.06-6.17,2.4-9.39,0-.07.01-.14.02-.21.15-1.49.21-2.99.2-4.51.01,0,.03,0,.04,0-.06-2.5-.34-4.84-.47-5.82Z" style="fill: #1d7068;" />
					<polyline points="25.83 39.15 35.6 29.27 24.26 20.76" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 3px;" />
				</svg></a></div>
				<div class="absolute right-3 -bottom-10 flex items-center justify-center md:right-[72px] md:-bottom-[26px]" data-trigger-fn="cupPon">
					<img src="images/allp-deco-1.png" class="md:max-w-[32px]">
					<img src="images/allp-deco-2.png" class="cup-pon -ml-2 md:-ml-1 md:max-w-[32px]">
				</div>
			</div>
		</div>

		<div class="absolute tf pointer-events-none md:w-full md:px-[16px] md:pb-[132px]"><img src="https://gdlinode.tw/oolab/images/all-product-bg.svg" class="md:hidden"><img src="https://gdlinode.tw/oolab/images/all-product-bg-mobile.svg" class="hidden md:!block mx-auto"></div>
	</div>

	<div class="h-screen relative overflow-hidden md:bg-[#EDEDED] md:pt-[95px] md:pb-[100px] md:h-auto">
		<div class="absolute top-0 left-0 w-full h-full -z-10 md:z-0 md:h-auto"><img src="https://gdlinode.tw/oolab/images/marquee-bg.png" class="h-full md:hidden"><img src="https://gdlinode.tw/oolab/images/marquee-bg.svg" class="h-full w-full hidden lg:!block"></div>
		<div class="flex h-full items-center ml-[150px] relative md:ml-0 md:block">
			<div class="shrink-0 mr-[10vw] mb-20 md:mr-0 md:mb-16">
				<div class=""><img src="https://gdlinode.tw/oolab/images/marquee-head.svg" class="vw-max-w-[450] md:hidden"><img src="https://gdlinode.tw/oolab/images/marquee-head-mobile.svg" class="hidden md:!block mx-auto"></div>
				<a href="javascript:;" class="more-arrow md:hidden">
					<div class="inline-block border-2 border-white rounded-full py-4 px-[18px] mt-[62px]">
						<div class="flex items-center">
							<span class="font-bold text-white text-[18px] tracking-wide">更多生活分享</span>
							<div class="arrow pointer-events-auto ml-8">
								<svg width="33" height="33" viewBox="0 0 32.52 32.55">
									<path
										d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z"
										style="fill: #f4f4f2;" />
									<polyline points="14.03 21.27 19.34 15.9 13.18 11.28"
										style="fill: none; stroke: #1d7068; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
			<div class="relative mt-20 md:mt-0">
				<div class="absolute left-[17vw] -top-[22vh] w-[650px] md:hidden">
					<ul class="grid grid-cols-4 gap-x-3 gap-y-3">
						<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>
						<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>
						<li class=""><img src="https://gdlinode.tw/oolab/images/marquee-circle.svg" class="animate-spin-slow"></li>
						<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>
						<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>
						<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>
						<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>
						<li class="w-[152px] h-[152px] bg-pink rounded-full"></li>
					</ul>
				</div>
				<div class="overflow-hidden border-[3px] border-pink rounded-l-[40px] md:border-0 md:ml-4">
					<div class="flex w-max index-scroll-left">
						<img src="https://gdlinode.tw/oolab/images/index-marquee-1.jpg" class="max-w-none md:max-h-[278px]">
						<img src="https://gdlinode.tw/oolab/images/index-marquee-2.jpg" class="max-w-none md:max-h-[278px]">
						<img src="https://gdlinode.tw/oolab/images/index-marquee-3.jpg" class="max-w-none md:max-h-[278px]">
						<img src="https://gdlinode.tw/oolab/images/index-marquee-4.jpg" class="max-w-none md:max-h-[278px]">
						<img src="https://gdlinode.tw/oolab/images/index-marquee-1.jpg" class="max-w-none md:max-h-[278px]">
						<img src="https://gdlinode.tw/oolab/images/index-marquee-2.jpg" class="max-w-none md:max-h-[278px]">
						<img src="https://gdlinode.tw/oolab/images/index-marquee-3.jpg" class="max-w-none md:max-h-[278px]">
						<img src="https://gdlinode.tw/oolab/images/index-marquee-4.jpg" class="max-w-none md:max-h-[278px]">
					</div>
				</div>
				<div class="hidden md:!block mt-[48px]"><img src="https://gdlinode.tw/oolab/images/marquee-head-mobile-2.svg" class="mx-auto"></div>
				<a href="javascript:;" class="more-arrow text-center hidden md:!block">
					<div class="inline-block border-2 border-white rounded-full py-4 px-[18px] mt-[62px] ml-[72px] md:ml-0 md:mt-[60px] md:py-2">
						<div class="flex items-center">
							<span class="font-bold text-white text-[18px] tracking-wide md:text-[16px]">更多生活分享</span>
							<div class="arrow pointer-events-auto ml-8">
								<svg width="33" height="33" viewBox="0 0 32.52 32.55">
									<path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #f4f4f2;" />
									<polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #1d7068; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>

	<div class="overflow-hidden border-y-[2px] border-[#4B4C4E]">
		<div class="flex w-max index-scroll-left">
			<img src="images/index-marquee-1.svg" class="max-w-none">
			<img src="images/index-marquee-1.svg" class="max-w-none">
		</div>
	</div>

	<div class="overflow-hidden border-y-[2px] border-[#4B4C4E]">
		<div class="flex w-max index-scroll-right">
			<img src="images/index-marquee-2.svg" class="max-w-none">
			<img src="images/index-marquee-2.svg" class="max-w-none">
		</div>
	</div>


	<div class="h-screen relative bg-pink">
		<img src="test/banner-1.png">
		<div class="absolute vw-left-[96] vw-top-[165] lg:left-0 md:hidden">
			<div class="relative inline-block pt-16 pl-16">
				<svg width="100%" height="100%" class="absolute -top-5 -left-5">
					<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h412" style="fill: none; stroke: none; stroke-miterlimit: 10;" />

					<text class="fill-[#1D7068] font-bold vw-text-[20px] tracking-normal lg:text-[15px]" style="transform: translate(36px, 38px);">
						<textPath class="aboutText" href="#aboutPath">PARTNERSHIP OFFERS...</textPath>
					</text>
				</svg>
				<img src="images/cooperation-head.svg" class="vw-max-w-[453px]">
			</div>
		</div>
		<div class="rotate absolute vw-right-[90] vw-top-[35]"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate.svg" class="animate-spin-slow vw-max-w-[174px]"></div>
		<div class="absolute tf-x z-10 -bottom-[4vh] trasition-all duration-500 scroll-item pointer-events-none hidden md:!block md:bottom-5">
			<div class="index-scroll"></div>
			<div class="font-bold text-lg text-white tracking-wide md:text-[14px]">往下滑動</div>
		</div>
	</div>
	<div class="h-screen relative bg-pink">
		<img src="test/banner-2.png">
		<div class="absolute vw-left-[96] vw-top-[165] lg:left-0 md:hidden">
			<div class="relative inline-block pt-16 pl-16">
				<svg width="100%" height="100%" class="absolute -top-5 -left-5">
					<path id="aboutPath" d="M.5,70.35v-7.65C.5,28.35,28.35.5,62.7.5h600" style="fill: none; stroke: none; stroke-miterlimit: 10;" />

					<text class="fill-[#1D7068] font-bold vw-text-[20px] tracking-normal lg:text-[15px]" style="transform: translate(36px, 38px);">
						<textPath class="aboutText" href="#aboutPath">MONTHLY STORE EVENTS...</textPath>
					</text>
				</svg>
				<img src="images/storepromotions-head.svg" class="vw-max-w-[598px]">
			</div>
		</div>
		<div class="rotate absolute vw-right-[90] top-[35]"><img src="https://gdlinode.tw/oolab/images/cooperation-rotate.svg" class="animate-spin-slow vw-max-w-[174px]"></div>
		<div class="absolute tf-x z-10 -bottom-[4vh] trasition-all duration-500 scroll-item pointer-events-none hidden md:!block md:bottom-5">
			<div class="index-scroll"></div>
			<div class="font-bold text-lg text-white tracking-wide md:text-[14px]">往下滑動</div>
		</div>
	</div>

	<div class="footerWrap relative bg-pink pt-[12vh] xl:pt-[10vh] h-[93vh] overflow-hidden" data-trigger-fn="triggerFooter">
		<div class="absolute vw-right-[142px] vw-top-[170px] xl:vw-right-10"><img src="https://gdlinode.tw/oolab/images/footer-deco-3.svg" class="vw-max-w-[636]"></div>

		<div class="flex justify-between">
			<div class="relative vw-pt-[236px] vw-pb-[90px] vw-pl-[186px] rounded-full xl:vw-pl-28">
				<div class="footer-deco-1 absolute top-0 -left-[12vw] xl:-left-[400px]"><img src="https://gdlinode.tw/oolab/images/footer-deco-1.svg" class="max-w-none"></div>
				<div class="footer-item-1 relative z-10">
					<div class="vw-mb-[104px]"><a href="../" class="inline-block"><img src="https://gdlinode.tw/oolab/images/footer-logo.svg"></a></div>
					<div class="tracking-normal font-bold">
						<div class="leading-none text-[18px] text-center border-2 border-green rounded-full px-3 py-2 text-green bg-[#F4F4F2] inline-block mb-8">CONTACT US</div>
						<div class="vw-text-[15px] flex space-x-12 pl-3">
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
								<div class="mb-3">
									<div class="text-green mb-1">公關邀約 / 行銷異業合作信箱</div>
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
			<div class="relative vw-pt-[178px] vw-pb-[112px] vw-pr-[260px] vw-mt-[252px] rounded-full xl:vw-pr-40">
				<div class="footer-deco-2 absolute top-0 -right-[2vw] xl:-right-[340px]"><img src="https://gdlinode.tw/oolab/images/footer-deco-2.svg" class="max-w-none"></div>
				<div class="footer-item-2 relative z-10 text-pink font-bold text-[15px] tracking-normal flex">
					<div class="flex space-x-6">
						<div class="">
							<div class="leading-none vw-text-[18px] bg-[#F4F4F2] text-center border-2 border-pink rounded-full px-3 py-2 mb-9">COMPANY</div>
							<ul class="space-y-2 pl-3">
								<li><a href="javascript:;">品牌理念</a></li>
								<li><a href="javascript:;">檢驗報告</a></li>
								<li><a href="javascript:;">門市資訊</a></li>
							</ul>
						</div>
						<div class="">
							<div class="leading-none vw-text-[18px] bg-[#F4F4F2] text-center border-2 border-pink rounded-full px-3 py-2 mb-9">SERVICE</div>
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
					<div class="vw-mt-[59px] vw-ml-[112px]">
						<div class="tracking-normal mb-5">
							<div class="mb-1">佐伊選物股份有限公司</div>
							<div class="">統編 52555796</div>
						</div>
						<div class="">
							<nav class="flex items-center space-x-4">
								<a href="javascript:;" class="basic-hover"><img src="https://gdlinode.tw/oolab/images/footer-sns-1.svg"></a>
								<a href="javascript:;" class="basic-hover"><img src="https://gdlinode.tw/oolab/images/footer-sns-2.svg"></a>
								<a href="javascript:;" class="basic-hover"><img src="https://gdlinode.tw/oolab/images/footer-sns-3.svg"></a>
								<a href="javascript:;" class="basic-hover"><img src="https://gdlinode.tw/oolab/images/footer-sns-4.svg"></a>
							</nav>
						</div>
						<div class="vw-mt-[62px]">
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

	<div class="bottom-[46px] md:mb-16"></div>
	<div class="max-w-[108px]"></div>
	<div class="max-w-[128px]"></div>
	<div class="max-w-[124px]"></div>
	<div class="max-w-[132px]"></div>
	<div class="max-w-[140px]"></div>
	<div class="vw-max-w-[400px]"></div>
</body>

<?php include 'script.php'; ?>

</html>

<script>
	gsap.fromTo(".id2Text", {
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

	window.cupPon = (el) => {
		$(".cup-pon").addClass("is-pon")
	};

	gsap.set(".aboutText", {
		attr: {
			startOffset: "100%"
		},
	})
	var _ani_pop = gsap.timeline({
		paused: true,
		onComplete: () => {
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
	}).fromTo(".pop-items >div", {
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
	}).to(".aboutText", {
		attr: {
			startOffset: "2%"
		},      // 終點：文字停在路徑中間偏右（可調）
		duration: 2,
		ease: "power2.inOut",
	});
	var animation_json = lottie.loadAnimation({
		container: document.getElementById('lottie'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: `https://gdlinode.tw/oolab/json/oolab/data.json` // 確保這個 JSON 存在且可讀取
	});
	animation_json.play()
	animation_json.onComplete = () => {
		gsap.to("#lottie", {
			opacity: 0,
		})

		_ani_pop.play()
	};
</script>