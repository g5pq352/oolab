<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<link rel="stylesheet" href="stylesheets/style.css">

	<style>
    .slider-items {
		clip-path: url(#custom-mask);
    }
    .slider-items .item{
    	opacity: 0;
    }
    .slider-items .item.is-show{
    	opacity: 1;
    }
  </style>
</head>
<body>
	<div class="relative -mt-[40px] md:mt-0">
		<img src="test/features-banner.png">

		<div class="absolute vw-left-[178] vw-top-[186] md:left-0 md:top-[32px] md:px-[20px] md:w-full"><img src="images/features-head-1.svg" class="vw-max-w-[690]"></div>

		<div class="dialog-items absolute tf vw-w-[1500px] vw-h-[480] mx-auto -vw-mt-[70px] md:hidden">
			<div class="dialog-item item-1 absolute opacity-0 vw-top-[100] vw-right-[100]"><img src="https://gdlinode.tw/oolab/images/dialog-1-1.svg" class="vw-max-w-[282]"></div>
			<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[154] vw-left-[440]"><img src="https://gdlinode.tw/oolab/images/dialog-1-2.svg" class="vw-max-w-[198]"></div>
			<div class="absolute bottom-0 right-0">
				<div class="features-content relative font-bold text-white vw-text-[37px] tracking-wide lg:text-[16px]">
					#百萬熱銷人氣款！<br>
					#手搖控的質感首選
				</div>
			</div>
		</div>

		<div class="dialog-items">
			<div class="dialog-item item-1 hidden md:!block absolute opacity-0 right-[16px] top-[188px]"><img src="https://gdlinode.tw/oolab/images/dialog-1-1.svg" class="max-w-[138px]"></div>
			<div class="dialog-item item-1 hidden md:!block absolute opacity-0 left-[32px] top-[324px]"><img src="https://gdlinode.tw/oolab/images/dialog-1-2.svg" class="max-w-[88px]"></div>
		</div>

		<div class="fea-dots absolute tf-x w-full vw-bottom-[152] vw-px-[122] lg:bottom-[90px]">
			<ul class="flex items-center justify-between">
				<li class="relative">
					<div class=""><svg width="66" height="22" viewBox="0 0 65.31 21.74">
						<path d="M13.9,4.68C17.12-.89,3.53-.89,6.75,4.68,3.53-.89-3.26,10.87,3.17,10.87c-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
						<path d="M36.23,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
						<path d="M58.57,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
					</svg></div>
					<div class="maru-items absolute tf flex items-center opacity-0">
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
					</div>
				</li>
				<li class="relative">
					<div class="og-item"><svg width="48.56" height="22.58" viewBox="0 0 48.56 22.58">
						<path d="M16.38,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1C3.3,7.29-.19,10.91,0,15.3c.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7C22.44,2.85,19.72.13,16.38,0Z" style="fill: #fff;"/>
						<path d="M42.37,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1-4.34,0-7.83,3.62-7.63,8,.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7-.13-3.34-2.85-6.06-6.19-6.19Z" style="fill: #fff;"/>
					</svg></div>
					<div class="cups-item absolute tf opacity-0"><svg width="53.66" height="20.47" viewBox="0 0 53.66 20.47">
						<path d="M50.5,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
						<path d="M30.11,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
						<path d="M9.72,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33C.71,19.28-.17,16.96.03,14.46c.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
					</svg></div>
				</li>
				<li class="relative">
					<div class=""><svg width="66" height="22" viewBox="0 0 65.31 21.74">
						<path d="M13.9,4.68C17.12-.89,3.53-.89,6.75,4.68,3.53-.89-3.26,10.87,3.17,10.87c-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
						<path d="M36.23,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
						<path d="M58.57,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
					</svg></div>
					<div class="maru-items absolute tf flex items-center opacity-0">
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
					</div>
				</li>
				<li class="relative">
					<div class="og-item"><svg width="48.56" height="22.58" viewBox="0 0 48.56 22.58">
						<path d="M16.38,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1C3.3,7.29-.19,10.91,0,15.3c.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7C22.44,2.85,19.72.13,16.38,0Z" style="fill: #fff;"/>
						<path d="M42.37,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1-4.34,0-7.83,3.62-7.63,8,.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7-.13-3.34-2.85-6.06-6.19-6.19Z" style="fill: #fff;"/>
					</svg></div>
					<div class="cups-item absolute tf opacity-0"><svg width="53.66" height="20.47" viewBox="0 0 53.66 20.47">
						<path d="M50.5,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
						<path d="M30.11,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
						<path d="M9.72,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33C.71,19.28-.17,16.96.03,14.46c.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
					</svg></div>
				</li>
				<li class="relative md:hidden">
					<div class=""><svg width="66" height="22" viewBox="0 0 65.31 21.74">
						<path d="M13.9,4.68C17.12-.89,3.53-.89,6.75,4.68,3.53-.89-3.26,10.87,3.17,10.87c-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
						<path d="M36.23,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
						<path d="M58.57,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
					</svg></div>
					<div class="maru-items absolute tf flex items-center opacity-0">
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
					</div>
				</li>
				<li class="relative md:hidden">
					<div class="og-item"><svg width="48.56" height="22.58" viewBox="0 0 48.56 22.58">
						<path d="M16.38,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1C3.3,7.29-.19,10.91,0,15.3c.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7C22.44,2.85,19.72.13,16.38,0Z" style="fill: #fff;"/>
						<path d="M42.37,0c-3.67-.14-6.7,2.8-6.7,6.44,0,.08,0,.16,0,.24.02.44-.37.79-.81.72-.4-.07-.82-.1-1.24-.1-4.34,0-7.83,3.62-7.63,8,.18,3.91,3.36,7.09,7.27,7.27,4.38.2,8-3.29,8-7.63,0-.42-.04-.84-.1-1.24-.07-.44.27-.82.72-.81.08,0,.16,0,.24,0,3.64,0,6.58-3.02,6.44-6.7-.13-3.34-2.85-6.06-6.19-6.19Z" style="fill: #fff;"/>
					</svg></div>
					<div class="cups-item absolute tf opacity-0"><svg width="53.66" height="20.47" viewBox="0 0 53.66 20.47">
						<path d="M50.5,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
						<path d="M30.11,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33c-2.45-.86-3.33-3.18-3.13-5.68.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
						<path d="M9.72,20.14c-.95.34-2.29.33-3.28.33s-2.33,0-3.28-.33C.71,19.28-.17,16.96.03,14.46c.29-3.62,3.6-6.31,3.31-10.01-.21-2.7-.65-4.45-.65-4.45h7.51s-.43,1.74-.65,4.45c-.3,3.71,3.02,6.39,3.31,10.01.2,2.5-.68,4.82-3.13,5.68Z" style="fill: #fff;"/>
					</svg></div>
				</li>
				<li class="relative md:hidden">
					<div class=""><svg width="66" height="22" viewBox="0 0 65.31 21.74">
						<path d="M13.9,4.68C17.12-.89,3.53-.89,6.75,4.68,3.53-.89-3.26,10.87,3.17,10.87c-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
						<path d="M36.23,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
						<path d="M58.57,4.68c3.21-5.57-10.37-5.57-7.15,0-3.21-5.57-10.01,6.2-3.58,6.2-6.43,0,.36,11.76,3.58,6.2-3.21,5.57,10.37,5.57,7.15,0,3.21,5.57,10.01-6.2,3.58-6.2,6.43,0-.36-11.76-3.58-6.2Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/>
					</svg></div>
					<div class="maru-items absolute tf flex items-center opacity-0">
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
						<div class="w-[24px] h-[24px] rounded-full bg-white"></div>
					</div>
				</li>
			</ul>
		</div>
	</div>

	<!-- <div class="relative -mt-[40px]">
		<img src="test/features-banner.png">

		<div class="absolute vw-left-[178] vw-top-[186]"><img src="images/features-head-2.svg" class="vw-max-w-[490]"></div>

		<div class="dialog-items absolute tf vw-w-[1300px] vw-h-[220] mx-auto -vw-mt-[70px]">
			<div class="dialog-item item-1 absolute opacity-0 top-0 vw-right-[230]"><img src="images/dialog-1-1.svg"></div>
			<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[8] vw-left-[280]"><img src="images/dialog-1-2.svg"></div>
			<div class="absolute bottom-0 right-0">
				<div class="features-content relative font-bold text-white vw-text-[37px] tracking-wide">
					#百萬熱銷人氣款！<br>
					#手搖控的質感首選
				</div>
			</div>
		</div>
	</div> -->

	<div class="relative feature-item-area">
		 <div class="text-center vw-pt-[174] vw-pb-[220] md:pt-[70px]" style="background-color: #A98F73">
			<div class="hidden md:!block absolute top-[70px] tf-x"><img src="https://gdlinode.tw/oolab/images/fea-bg-deco.svg" class="max-w-none"></div>

			<div class="absolute right-[3vw] top-[8vh] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-circle.svg" class="animate-spin-slow vw-max-w-[156]"></div>

			<div class="vw-mb-[92]">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1.svg" class="mx-auto vw-max-w-[444] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1-mobile.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="relative inline-block">
				<div class="relative z-10 mb-12">
					<img src="https://gdlinode.tw/oolab/images/item-2-deco-2.png" class="relative z-10 vw-max-w-[430] md:max-w-[208px]">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-1.svg" class="absolute tf vw-max-w-[1274] md:hidden">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-1-mobile.svg" class="absolute tf max-w-none hidden md:!block">
				</div>

				<div class="absolute top-[120px] -right-[62px] xl:top-[60px] xl:-right-[130px] lg:vw-top-[124] lg:-vw-right-[40] md:top-[70px] md:-right-[12px]" data-trigger-steel="triggerStellOne">
					<div class="relative">
						<svg width="310.38" height="90.55" viewBox="0 0 310.38 90.55" class="steel-line-1 lg:vw-max-w-[310] lg:h-auto md:hidden">
							<path d="M310.38,0.67 L161.13,0.67 L0.33,89.96" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.35px;" />
						</svg>
						<svg width="129.75" height="18.55" viewBox="0 0 129.75 18.55" class="steel-line-1 md:!block hidden">
							<path d="M.38 18.17 L21.46 .38 L83.36 .38 L129.37 .38" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -top-[60px] -right-[202px] opacity-0 steel-item-1 xl:-right-[132px] lg:-vw-top-[70] lg:-vw-right-[200] md:-top-[80px] md:right-[57px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-1.svg" class="vw-max-w-[212]"></div>
							<div class="absolute top-[154px] -left-[32px] xl:top-[120px] xl:-left-[22px] lg:vw-top-[154] lg:-vw-left-[32]"><img src="https://gdlinode.tw/oolab/images/ft-deco-1-2.svg" class="vw-max-w-[308] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-1-2-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-top-[480px] -vw-left-[324px] md:top-[360px] md:-left-[20px]" data-trigger-steel="triggerStellTwo">
					<div class="relative">
						<svg width="374.11" height="216.14" viewBox="0 0 374.11 216.14" class="steel-line-2 lg:vw-max-w-[374] lg:h-auto md:hidden">
							<path d="M374.11,0.81 L61.22,0.81 L0.78,215.92" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.61px;" />
						</svg>
						<svg width="81.34" height="68.9" viewBox="0 0 81.34 68.9" class="steel-line-2 hidden md:!block">
							<path d="M80.97 .38 L.38 .38 L.38 68.52" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -bottom-[115px] -left-[124px] opacity-0 steel-item-2 xl:-bottom-[72px] xl:-left-[68px] lg:-vw-bottom-[115] lg:-vw-left-[124] md:-left-[30px] md:bottom-[20px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-2.svg" class="vw-max-w-[192]"></div>
							<div class="absolute top-[154px] -left-[32px] xl:top-[116px] xl:-left-[22px] lg:vw-top-[154] lg:-vw-left-[32]"><img src="https://gdlinode.tw/oolab/images/ft-deco-2-2.svg" class="vw-max-w-[216px] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-2-2-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute bottom-[228px] -right-[224px] xl:bottom-[148px] lg:vw-bottom-[320] lg:-vw-right-[224] md:bottom-[148px] md:-right-[26px]" data-trigger-steel="triggerStellThree">
					<div class="relative">
						<svg width="349.46" height="90.81" viewBox="0 0 349.46 90.81" class="steel-line-3 lg:vw-max-w-[350] lg:h-auto md:hidden">
							<path d="M349.46,0.79 L222.9,0.79 L0.3,90.08" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.59px;" />
						</svg>
						<svg width="65.12" height="150.08" viewBox="0 0 65.12 150.08" class="steel-line-3 hidden md:!block">
							<path d="M.38 .38 L64.75 .38 L64.75 149.71" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -top-[166px] -right-[228px] opacity-0 steel-item-3 xl:-top-[70px] xl:-right-[122px] lg:-vw-top-[206] lg:-vw-right-[250] md:top-[126px] md:right-[28px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-3.svg" class="vw-max-w-[212]"></div>
							<div class="absolute top-[152px] left-0 xl:top-[154px] xl:-left-[20px] lg:vw-top-[192] lg:-vw-left-[20]"><img src="https://gdlinode.tw/oolab/images/ft-deco-3-2.svg" class="vw-max-w-[210] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-3-2-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="hidden md:!block px-[32px] mb-[38px]">
				<ul class="ft-deco-slider">
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-1-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-2-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-3-mobile.svg"></li>
				</ul>
			</div>

			<div class="vw-mb-[58]">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-1.svg" class="mx-auto vw-max-w-[1062] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-1-mobile.svg" class="mx-auto hidden lg:!block">
			</div>

			<div class="text-center">
				<a href="/pages/strawtumbler" class="more-arrow">
					<div class="inline-block border-2 border-[#4B4C4E] bg-white rounded-full py-[10px] vw-pl-[24] vw-pr-[12] mt-[62px] lg:py-[6px] lg:pl-[18px] lg:pr-[10px] md:px-[6px] md:pl-[18px] md:pr-[10px]">
						<div class="flex items-center">
							<span class="font-bold text-[#4B4C4E] vw-text-[21px] tracking-wide lg:text-[14px] md:text-[16px]">前往選購</span>
							<div class="arrow pointer-events-auto vw-ml-[36]">
								<svg width="33" height="33" viewBox="0 0 32.52 32.55">
									<path
										d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z"
										style="fill: #4B4C4E;" />
									<polyline points="14.03 21.27 19.34 15.9 13.18 11.28"
										style="fill: none; stroke: #f4f4f2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>

	<div class="my-20">
		<div class="more text-center"><a href="javascript:;" class="inline-block bg-green-300 text-white font-bold leading-none rounded-[28px] px-4 py-5">更多</a></div>
	</div>

	<div class="relative overflow-hidden bg-[#C7B79F] vw-pt-[226] vw-pb-[316] md:pt-[50px] md:pb-[82px]">
		<div class="absolute w-full top-[236px] left-0 hidden sm:!block"><img src="https://gdlinode.tw/oolab/images/fea-bg-mobile-deco.png"></div>
		<div class="relative z-10">
			<div class="mb-[80px] md:mb-[36px]">
				<img src="https://gdlinode.tw/oolab/images/fea-ex-head.svg" class="mx-auto vw-max-w-[554] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-ex-head-mobile.svg" class="mx-auto hidden md:!block">
			</div>
			<div class="vw-max-w-[1400px] mx-auto md:max-w-full md:px-[48px]">
				<ul class="fea-ex-slider flex justify-between md:space-y-[52px] md:block">
					<li class="md:w-full">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-1.png" class="vw-max-w-[414] md:hidden">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-1-mobile.png" class="hidden md:!block">
					</li>
					<li class="md:w-full">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-2.png" class="vw-max-w-[414] md:hidden">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-2-mobile.png" class="hidden md:!block">
					</li>
					<li class="md:w-full">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-3.png" class="vw-max-w-[414] md:hidden">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-3-mobile.png" class="hidden md:!block">
					</li>
				</ul>
			</div>
		</div>
		<div class="absolute vw-bottom-[86] -right-[146px] md:bottom-0 md:right-0 md:hidden">
			<img src="https://gdlinode.tw/oolab/images/fea-ex-deco.svg" class="vw-max-w-[1884] md:hidden">
			<img src="https://gdlinode.tw/oolab/images/fea-ex-deco-mobile.svg" class="hidden md:!block w-full">
		</div>
	</div>

	<div class="h-screen bg-[#C7B79F]">
		<div class="products-head"><img src="https://gdlinode.tw/oolab/images/feature-p-head.svg"></div>
		<div class="more text-center"><a href="" class="feature-product-more">更多</a></div>
	</div>
	
	<!-- <div class="feature-sliderWrap bg-[#C7B79F] overflow-hidden">
		<div class="bg-[#1d7068] h-full rounded-t-[106px] pt-[132px] pb-[154px]">
			
			<div class="relative max-w-[1700px] mx-auto">
				<div class="absolute -right-[120px] -top-[64px] w-full h-full">
					<div class="relative inline-block w-full h-full">
						<svg width="100%" height="100%" class="absolute">
  							<path id="sliderPath" d="M0,1h1344.65c91.4,0,165.5,74.1,165.5,165.5v257.54" style="fill: none; stroke: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>

							<text class="fill-[#d6a18e] font-bold text-[20px] tracking-wide" style="transform: translate(36px, 38px);">
								<textPath class="featuresText" href="#sliderPath"># 專屬的愜意時分...  # MY LITTLE MOMENT # 輕柔舒適好搭配 ...  # NEW PRODUCT... # SUNBAKED CITRUS</textPath>
							</text>
						</svg>
					</div>
				</div>
				<div class="pic-area">
					<div class="pic bg-[#d6a18e]">
						<svg width="1762" height="782" viewBox="0 0 1753.64 781.43" class="w-full h-auto block py-[1px]" id="features-slider">
							<defs>
								<clipPath id="custom-mask">
									<path d="M1751.88,780.43H166.5c-91.4,0-165.5-74.1-165.5-165.5V166.5C1,75.1,75.1,1,166.5,1h1361.17c91.4,0,165.5,74.1,165.5,165.5v402.26c0,74.09,20.03,146.8,57.98,210.43l.74,1.24Z"/>
								</clipPath>
							</defs>

							<path d="M1751.88,780.43H166.5c-91.4,0-165.5-74.1-165.5-165.5V166.5C1,75.1,75.1,1,166.5,1h1361.17c91.4,0,165.5,74.1,165.5,165.5v402.26c0,74.09,20.03,146.8,57.98,210.43l.74,1.24Z" style="fill: none; stroke: #d6a18e; stroke-width: 2px;"/>

							<g class="slider-items">
								<image
									class="item is-show"
									href="test/fs-pic-1.jpg"
									width="1750.8842"
									height="779.4254"
									preserveAspectRatio="xMidYMid slice"
									clip-path="url(#custom-mask)"
								/>
								<image
									class="item"
									href="test/fs-pic-2.jpg"
									width="1750.8842"
									height="779.4254"
									preserveAspectRatio="xMidYMid slice"
									clip-path="url(#custom-mask)"
								/>
								<image
									class="item"
									href="test/fs-pic-3.jpg"
									width="1750.8842"
									height="779.4254"
									preserveAspectRatio="xMidYMid slice"
									clip-path="url(#custom-mask)"
								/>
							</g>
						</svg>
					</div>
				</div>
			</div>
			
			<div class=""></div>
			<div class="text-center">
				<a href="javascript:;" class="more-arrow"><div class="inline-block border-2 border-[#1d7068] bg-white rounded-full py-4 px-[18px] mt-[62px] ml-[72px]">
					<div class="flex items-center">
						<span class="font-bold text-[#1d7068] text-[25px] tracking-wide">系列產品</span>
						<div class="arrow pointer-events-auto ml-8">
							<svg width="33" height="33" viewBox="0 0 32.52 32.55">
								<path d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z" style="fill: #1d7068;"/>
							  <polyline points="14.03 21.27 19.34 15.9 13.18 11.28" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;"/>
							</svg>
						</div>
					</div>
				</div></a>
			</div>
		</div>
	</div> -->

	<!-- <div class="footerWrap relative bg-pink pt-[114px] h-[93vh] overflow-hidden" data-trigger-fn="triggerFooter">
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
	</div> -->

	<!-- 不鏽鋼保溫瓶 -->
	<div class="relative feature-item-area">
		 <div class="text-center vw-pt-[174] vw-pb-[220] md:pt-[70px]" style="background-color: #B5A978">
			<div class="hidden md:!block absolute top-[70px] tf-x"><img src="https://gdlinode.tw/oolab/images/fea-bg-deco.svg" class="max-w-none"></div>

			<div class="absolute right-[3vw] top-[8vh] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-circle.svg" class="animate-spin-slow vw-max-w-[156]"></div>

			<div class="vw-mb-[92]">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1.svg" class="mx-auto vw-max-w-[444] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1-mobile.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="relative inline-block">
				<div class="relative z-10 mb-12">
					<img src="https://gdlinode.tw/oolab/images/item-2-deco-2-2.png" class="relative z-10 left-[40px] vw-max-w-[508] lg:left-[16px] md:max-w-[208px] md:left-0">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-2.svg" class="absolute tf vw-max-w-[908] md:hidden">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-2-mobile.svg" class="absolute tf max-w-none hidden md:!block">
				</div>

				<div class="absolute vw-top-[120px] -vw-right-[62px] lg:vw-top-[124] lg:-vw-right-[40] md:top-[70px] md:-right-[12px]" data-trigger-steel="triggerStellOne">
					<div class="relative">
						<svg width="224.48" height="1.35" viewBox="0 0 224.48 1.35" class="steel-line-1 vw-max-w-[224] lg:h-auto md:hidden">
							<path d="M224.48 0.67 L0 0.67" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.35px;"/>
						</svg>
						<svg width="129.75" height="18.55" viewBox="0 0 129.75 18.55" class="steel-line-1 md:!block hidden">
							<path d="M.38 18.17 L21.46 .38 L83.36 .38 L129.37 .38" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-top-[84] -vw-right-[198] opacity-0 steel-item-1 xl:-right-[132px] lg:-vw-top-[70] lg:-vw-right-[200] md:-top-[80px] md:right-[57px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-3-1.svg" class="vw-max-w-[208]"></div>
							<div class="absolute top-[154px] -left-[32px] xl:top-[120px] xl:-left-[22px] lg:vw-top-[154] lg:-vw-left-[32]"><img src="https://gdlinode.tw/oolab/images/ft-text-3-1.svg" class="vw-max-w-[308] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-3-1-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-top-[326] -vw-left-[254] md:top-[360px] md:-left-[20px]" data-trigger-steel="triggerStellTwo">
					<div class="relative">
						<svg width="384.21" height="1.61" viewBox="0 0 384.21 1.61" class="steel-line-2 vw-max-w-[384] lg:h-auto md:hidden">
							<path d="M384.21 .81 L0 .81" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.61px;"/>
						</svg>	
						<svg width="81.34" height="68.9" viewBox="0 0 81.34 68.9" class="steel-line-2 hidden md:!block">
							<path d="M80.97 .38 L.38 .38 L.38 68.52" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-bottom-[34] -vw-left-[122] opacity-0 steel-item-2 lg:-vw-bottom-[30] lg:-vw-left-[124] md:-left-[30px] md:bottom-[20px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-3-2.svg" class="vw-max-w-[190]"></div>
							<div class="absolute vw-top-[142] left-0 lg:vw-top-[154] lg:-vw-left-[32]"><img src="https://gdlinode.tw/oolab/images/ft-text-3-2.svg" class="vw-max-w-[198] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-3-2-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-bottom-[508] -vw-right-[264] lg:-vw-right-[224] md:bottom-[148px] md:-right-[26px]" data-trigger-steel="triggerStellThree">
					<div class="relative">
						<svg width="400.67" height="177.01" viewBox="0 0 400.67 177.01" class="steel-line-3 vw-max-w-[400] lg:h-auto md:hidden">
							<path d="M400.67 176.22 L223.09 176.22 L0.49 0.62" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.59px;"/>
						</svg>
						<svg width="65.12" height="150.08" viewBox="0 0 65.12 150.08" class="steel-line-3 hidden md:!block">
							<path d="M.38 .38 L64.75 .38 L64.75 149.71" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute vw-top-[140] -vw-right-[180] opacity-0 steel-item-3 lg:top-[56px] lg:-right-[86px] md:top-[126px] md:right-[28px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-3-3.svg" class="vw-max-w-[208]"></div>
							<div class="absolute vw-top-[154] left-0 lg:vw-top-[192] lg:-vw-left-[20]"><img src="https://gdlinode.tw/oolab/images/ft-text-3-3.svg" class="vw-max-w-[210] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-3-3-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="hidden md:!block px-[32px] mb-[38px]">
				<ul class="ft-deco-slider">
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-21-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-22-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-23-mobile.svg"></li>
				</ul>
			</div>

			<div class="vw-mb-[58]">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-2.svg" class="mx-auto vw-max-w-[1062] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-2-mobile.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="text-center">
				<a href="/pages/travel-tumbler" class="more-arrow">
					<div class="inline-block border-2 border-[#4B4C4E] bg-white rounded-full py-[10px] vw-pl-[24] vw-pr-[12] mt-[62px] lg:py-[6px] lg:pl-[18px] lg:pr-[10px] md:px-[6px] md:pl-[18px] md:pr-[10px]">
						<div class="flex items-center">
							<span class="font-bold text-[#4B4C4E] vw-text-[21px] tracking-wide lg:text-[14px] md:text-[16px]">前往選購</span>
							<div class="arrow pointer-events-auto vw-ml-[36]">
								<svg width="33" height="33" viewBox="0 0 32.52 32.55">
									<path
										d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z"
										style="fill: #4B4C4E;" />
									<polyline points="14.03 21.27 19.34 15.9 13.18 11.28"
										style="fill: none; stroke: #f4f4f2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>

	<!-- 豆沙吸管杯 -->
	<div class="relative feature-item-area">
		 <div class="text-center vw-pt-[174] vw-pb-[220] md:pt-[70px]" style="background-color: #BFA69F">
			<div class="hidden md:!block absolute top-[70px] tf-x"><img src="https://gdlinode.tw/oolab/images/fea-bg-deco.svg" class="max-w-none"></div>

			<div class="absolute right-[3vw] top-[8vh] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-circle.svg" class="animate-spin-slow vw-max-w-[156]"></div>

			<div class="vw-mb-[252] md:mb-[100px]">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1.svg" class="mx-auto vw-max-w-[444] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1-mobile.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="relative inline-block">
				<div class="relative z-10 mb-12">
					<img src="https://gdlinode.tw/oolab/images/item-2-deco-2-3.png" class="relative z-10 vw-max-w-[700] -vw-right-[90] md:max-w-[300px]">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-3.svg" class="absolute tf vw-max-w-[914] md:hidden">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-3-mobile.svg" class="absolute tf max-w-none hidden md:!block">
				</div>

				<div class="absolute -vw-top-[60] vw-right-[120] lg:-vw-top-[48] lg:vw-right-[40] md:-top-[52px] md:right-[70px]" data-trigger-steel="triggerStellOne">
					<div class="relative">
						<svg width="161.46" height="90.46" viewBox="0 0 161.46 90.46" class="steel-line-1 vw-max-w-[162]">
							<path d="M161.13 89.87 L.33 .59" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.35px;"/>
						</svg>
						<div class="absolute -vw-top-[130] vw-right-[104] opacity-0 steel-item-1 lg:-top-[24] lg:vw-right-[56] md:-top-[20px] md:right-[64px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-2-1.svg" class="vw-max-w-[208]"></div>
							<div class="absolute vw-top-[32px] -vw-left-[334px] lg:top-[8px] lg:-left-[140px] md:top-[30px] md:-left-[110px]"><img src="https://gdlinode.tw/oolab/images/ft-text-2-1.svg" class="vw-max-w-[308] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-1-3-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-top-[440] -vw-left-[132] md:top-[250px] md:left-[10px]" data-trigger-steel="triggerStellTwo">
					<div class="relative">
						<svg width="374.04" height="109.65" viewBox="0 0 374.04 109.65" class="steel-line-2 lg:vw-max-w-[374] lg:h-auto md:hidden">
							<path d="M374.04 .81 L61.15 .81 L.7 109.26" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.61px;"/>
						</svg>
						<svg width="81.34" height="68.9" viewBox="0 0 81.34 68.9" class="steel-line-2 hidden md:!block">
							<path d="M80.97 .38 L.38 .38 L.38 68.52" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-bottom-[115px] -vw-left-[124px] opacity-0 steel-item-2 xl:-bottom-[72px] xl:-left-[68px] lg:-vw-bottom-[115] lg:-vw-left-[124] md:-left-[30px] md:bottom-[20px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-2-2.svg" class="vw-max-w-[212]"></div>
							<div class="absolute vw-top-[204] left-0 lg:top-[92px] lg:left-0 md:top-[28px] md:-left-[8px]"><img src="https://gdlinode.tw/oolab/images/ft-text-2-2.svg" class="vw-max-w-[436] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-2-3-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-bottom-[360] -vw-right-[110] lg:-vw-right-[224] md:bottom-[128px] md:right-[28px]" data-trigger-steel="triggerStellThree">
					<div class="relative">
						<svg width="349.65" height="177.01" viewBox="0 0 349.65 177.01" class="steel-line-3 lg:vw-max-w-[350] lg:h-auto md:hidden">
							<path d="M349.65 176.22 L223.09 176.22 L.49 .62" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.59px;"/>
						</svg>
						<svg width="65.12" height="150.08" viewBox="0 0 65.12 150.08" class="steel-line-3 hidden md:!block">
							<path d="M.38 .38 L64.75 .38 L64.75 149.71" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute vw-top-[114] -vw-right-[188px] opacity-0 steel-item-3 lg:vw-top-[36] lg:-vw-right-[48] md:top-[126px] md:right-[28px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-2-3.svg" class="vw-max-w-[192]"></div>
							<div class="absolute vw-top-[140] left-0 lg:top-[192px] lg:-left-[20px] md:top-[36px] md:-left-[12px]"><img src="https://gdlinode.tw/oolab/images/ft-text-2-3.svg" class="vw-max-w-[246] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-deco-3-3-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="hidden md:!block px-[32px] mb-[38px]">
				<ul class="ft-deco-slider">
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-31-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-32-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-33-mobile.svg"></li>
				</ul>
			</div>

			<div class="vw-mb-[58]">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-3.svg" class="mx-auto vw-max-w-[1062] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-3-mobile.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="text-center">
				<a href="/pages/pp-straw-tumbler" class="more-arrow">
					<div class="inline-block border-2 border-[#4B4C4E] bg-white rounded-full py-[10px] vw-pl-[24] vw-pr-[12] mt-[62px] lg:py-[6px] lg:pl-[18px] lg:pr-[10px] md:px-[6px] md:pl-[18px] md:pr-[10px]">
						<div class="flex items-center">
							<span class="font-bold text-[#4B4C4E] vw-text-[21px] tracking-wide lg:text-[14px] md:text-[16px]">前往選購</span>
							<div class="arrow pointer-events-auto vw-ml-[36]">
								<svg width="33" height="33" viewBox="0 0 32.52 32.55">
									<path
										d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z"
										style="fill: #4B4C4E;" />
									<polyline points="14.03 21.27 19.34 15.9 13.18 11.28"
										style="fill: none; stroke: #f4f4f2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
	
	<!-- 大容量輕便水壺 -->
	<div class="relative feature-item-area">
		 <div class="text-center vw-pt-[174] vw-pb-[220] md:pt-[70px]" style="background-color: #AA9885">
			<div class="hidden md:!block absolute top-[70px] tf-x"><img src="https://gdlinode.tw/oolab/images/fea-bg-deco.svg" class="max-w-none"></div>

			<div class="absolute right-[3vw] top-[8vh] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-circle.svg" class="animate-spin-slow vw-max-w-[156]"></div>

			<div class="vw-mb-[252]">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1.svg" class="mx-auto vw-max-w-[444] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1-mobile.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="relative inline-block">
				<div class="relative z-10 mb-12">
					<img src="https://gdlinode.tw/oolab/images/item-2-deco-2-4.png" class="relative z-10 vw-max-w-[736] -vw-right-[26] lg:-right-[30px] md:max-w-[300px] md:-right-[32px]">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-4.svg" class="absolute tf vw-max-w-[1048] md:hidden">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-4-mobile.svg" class="absolute tf max-w-none hidden md:!block">
				</div>

				<div class="absolute -vw-top-[40] vw-right-[290] lg:vw-top-[124] lg:-vw-right-[40] md:top-[16px] md:right-[8px]" data-trigger-steel="triggerStellOne">
					<div class="relative">
						<svg width="248.89" height="71.64" viewBox="0 0 248.89 71.64" class="steel-line-1 vw-max-w-[248] lg:h-auto md:hidden">
							<path d="M248.89 0.67 L51.55 0.67 L0.55 71.25" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.35px;"/>
						</svg>
						<svg width="129.75" height="18.55" viewBox="0 0 129.75 18.55" class="steel-line-1 md:!block hidden">
							<path d="M.38 18.17 L21.46 .38 L83.36 .38 L129.37 .38" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-top-[40] -vw-right-[198] opacity-0 steel-item-1 lg:-vw-top-[70] lg:-vw-right-[200] md:-top-[60px] md:right-[96px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-4-1.svg" class="vw-max-w-[208]"></div>
							<div class="absolute vw-top-[24] vw-left-[228] lg:vw-top-[154] lg:-vw-left-[32]"><img src="https://gdlinode.tw/oolab/images/ft-text-4-1.svg" class="vw-max-w-[222] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-4-1-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-top-[346] -vw-left-[208] md:top-[250px] md:left-[6px]" data-trigger-steel="triggerStellTwo">
					<div class="relative">
						<svg width="261.14" height="1.61" viewBox="0 0 261.14 1.61" class="steel-line-2 vw-max-w-[260] lg:h-auto md:hidden">
							<path d="M261.14 .81 L61.15 .81 L.7 109.26" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.61px;"/>
						</svg>
						<svg width="81.34" height="68.9" viewBox="0 0 81.34 68.9" class="steel-line-2 hidden md:!block">
							<path d="M80.97 .38 L.38 .38 L.38 68.52" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-bottom-[34] -vw-left-[120] opacity-0 steel-item-2 lg:-vw-bottom-[115] lg:-vw-left-[124] md:-left-[30px] md:bottom-[20px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-4-2.svg" class="vw-max-w-[190]"></div>
							<div class="absolute vw-top-[174] -vw-left-[16] lg:vw-top-[154] lg:-vw-left-[32]"><img src="https://gdlinode.tw/oolab/images/ft-text-4-2.svg" class="vw-max-w-[246] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-4-2-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-bottom-[484] -vw-right-[40] lg:-vw-right-[224] md:bottom-[210px] md:-right-[4px]" data-trigger-steel="triggerStellThree">
					<div class="relative">
						<svg width="186.35" height="1.59" viewBox="0 0 186.35 1.59" class="steel-line-3 vw-max-w-[186] lg:h-auto md:hidden">
							<path d="M186.35 .79 L43.56 .79 0 .79" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.59px;"/>
						</svg>
						<svg width="65.12" height="56.52" viewBox="0 0 65.12 56.52" class="steel-line-3 md:!block hidden">
							<path d="M 0.38 56.14 L 64.75 56.14 L 64.75 0.38" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-top-[120] -vw-right-[204] opacity-0 steel-item-3 lg:-vw-top-[206] lg:-vw-right-[250] md:-top-[88px] md:right-[62px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-4-3.svg" class="vw-max-w-[208]"></div>
							<div class="absolute vw-top-[164] left-0 lg:vw-top-[192] lg:-vw-left-[20]"><img src="https://gdlinode.tw/oolab/images/ft-text-4-3.svg" class="vw-max-w-[240] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-4-3-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="hidden md:!block px-[32px] mb-[38px]">
				<ul class="ft-deco-slider">
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-41-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-42-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-43-mobile.svg"></li>
				</ul>
			</div>

			<div class="vw-mb-[58]">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-4.svg" class="mx-auto vw-max-w-[1062] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-4-mobile.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="text-center">
				<a href="/pages/sports-bottles-shaker-cups" class="more-arrow">
					<div class="inline-block border-2 border-[#4B4C4E] bg-white rounded-full py-[10px] vw-pl-[24] vw-pr-[12] mt-[62px] lg:py-[6px] lg:pl-[18px] lg:pr-[10px] md:px-[6px] md:pl-[18px] md:pr-[10px]">
						<div class="flex items-center">
							<span class="font-bold text-[#4B4C4E] vw-text-[21px] tracking-wide lg:text-[14px] md:text-[16px]">前往選購</span>
							<div class="arrow pointer-events-auto vw-ml-[36]">
								<svg width="33" height="33" viewBox="0 0 32.52 32.55">
									<path
										d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z"
										style="fill: #4B4C4E;" />
									<polyline points="14.03 21.27 19.34 15.9 13.18 11.28"
										style="fill: none; stroke: #f4f4f2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>

	<!-- 可拆雙層布丁杯 -->
	<div class="relative feature-item-area">
		 <div class="text-center vw-pt-[174] vw-pb-[220] md:pt-[70px]" style="background-color: #F3DCBD">
			<div class="hidden md:!block absolute top-[70px] tf-x"><img src="https://gdlinode.tw/oolab/images/fea-bg-deco.svg" class="max-w-none"></div>

			<div class="absolute right-[3vw] top-[8vh] md:hidden"><img src="https://gdlinode.tw/oolab/images/features-circle-5.svg" class="animate-spin-slow vw-max-w-[156]"></div>

			<div class="vw-mb-[92]">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1.svg" class="mx-auto vw-max-w-[444] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-head-1-mobile-black.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="relative inline-block">
				<div class="relative z-10 mb-12">
					<img src="https://gdlinode.tw/oolab/images/item-2-deco-5.png" class="relative z-10 vw-max-w-[430] md:max-w-[208px]">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-5.svg" class="absolute tf vw-max-w-[908] md:hidden">
					<img src="https://gdlinode.tw/oolab/images/fea-bg-5-mobile.svg" class="absolute tf max-w-none hidden md:!block">
				</div>

				<div class="absolute vw-top-[120px] -vw-right-[62px] lg:vw-top-[124] lg:-vw-right-[40] md:top-[70px] md:-right-[40px]" data-trigger-steel="triggerStellOne">
					<div class="relative">
						<svg width="169.72" height="143.34" viewBox="0 0 169.72 143.34" class="steel-line-1 vw-max-w-[170] lg:h-auto md:hidden">
							<path d="M169.72 1 L72.89 1 L0.89 142.89" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
						</svg>
						<svg width="129.75" height="18.55" viewBox="0 0 129.75 18.55" class="steel-line-1 md:!block hidden">
							<path d="M.38 18.17 L21.46 .38 L83.36 .38 L129.37 .38" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-top-[60px] -vw-right-[198] opacity-0 steel-item-1 lg:-vw-right-[200] md:-top-[80px] md:right-[57px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-5-1.svg" class="vw-max-w-[208]"></div>
							<div class="absolute vw-top-[24] vw-left-[232] lg:vw-top-[154] lg:-vw-left-[32] md:top-[52px] md:-left-[40px]"><img src="https://gdlinode.tw/oolab/images/ft-text-5-1.svg" class="vw-max-w-[214] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-5-1-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-top-[442] -vw-left-[324px] md:top-[360px] md:-left-[20px]" data-trigger-steel="triggerStellTwo">
					<div class="relative">
						<svg width="374.11" height="216.14" viewBox="0 0 374.11 216.14" class="steel-line-2 vw-max-w-[374] lg:h-auto md:hidden">
							<path d="M374.11,0.81 L61.22,0.81 L0.78,215.92" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.61px;" />
						</svg>
						<svg width="81.34" height="68.9" viewBox="0 0 81.34 68.9" class="steel-line-2 hidden md:!block">
							<path d="M80.97 .38 L.38 .38 L.38 68.52" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-bottom-[110] -vw-left-[124px] opacity-0 steel-item-2 lg:-vw-bottom-[115] lg:-vw-left-[124] md:-left-[30px] md:bottom-[20px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-5-2.svg" class="vw-max-w-[190]"></div>
							<div class="absolute vw-top-[154px] left-0 lg:vw-top-[154] lg:-vw-left-[32]"><img src="https://gdlinode.tw/oolab/images/ft-text-5-2.svg" class="vw-max-w-[218] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-5-2-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>

				<div class="absolute vw-bottom-[192] -vw-right-[224px] lg:vw-bottom-[320] lg:-vw-right-[224] md:bottom-[148px] md:-right-[26px]" data-trigger-steel="triggerStellThree">
					<div class="relative">
						<svg width="349.46" height="90.81" viewBox="0 0 349.46 90.81" class="steel-line-3 vw-max-w-[350] lg:h-auto md:hidden">
							<path d="M349.46,0.79 L222.9,0.79 L0.3,90.08" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.59px;" />
						</svg>
						<svg width="65.12" height="150.08" viewBox="0 0 65.12 150.08" class="steel-line-3 hidden md:!block">
							<path d="M.38 .38 L64.75 .38 L64.75 149.71" style="fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: .75px;"/>
						</svg>
						<div class="absolute -vw-top-[238] -vw-right-[246] opacity-0 steel-item-3 lg:-vw-top-[206] lg:-vw-right-[250] md:top-[126px] md:right-[28px]">
							<div class="md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-icon-5-3.svg" class="vw-max-w-[208]"></div>
							<div class="absolute vw-top-[230] left-0 lg:vw-top-[192] lg:-vw-left-[20]"><img src="https://gdlinode.tw/oolab/images/ft-text-5-3.svg" class="vw-max-w-[192] md:hidden"><img src="https://gdlinode.tw/oolab/images/ft-text-5-3-mobile.svg" class="max-w-none hidden md:!block"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="hidden md:!block px-[32px] mb-[38px]">
				<ul class="ft-deco-slider">
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-51-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-52-mobile.svg"></li>
					<li class="w-full"><img src="https://gdlinode.tw/oolab/images/ft-deco-53-mobile.svg"></li>
				</ul>
			</div>

			<div class="vw-mb-[58]">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-5.svg" class="mx-auto vw-max-w-[1062] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-intro-5-mobile.svg" class="mx-auto hidden md:!block">
			</div>

			<div class="text-center">
				<a href="/pages/daily-tumblers" class="more-arrow">
					<div class="inline-block border-2 border-[#4B4C4E] bg-white rounded-full py-[10px] vw-pl-[24] vw-pr-[12] mt-[62px] lg:py-[6px] lg:pl-[18px] lg:pr-[10px] md:px-[6px] md:pl-[18px] md:pr-[10px]">
						<div class="flex items-center">
							<span class="font-bold text-[#4B4C4E] vw-text-[21px] tracking-wide lg:text-[14px] md:text-[16px]">前往選購</span>
							<div class="arrow pointer-events-auto vw-ml-[36]">
								<svg width="33" height="33" viewBox="0 0 32.52 32.55">
									<path
										d="M32.27,13.12c-.08-.6-.18-1.2-.32-1.79-1.24-5.3-4.42-8.89-9.68-10.46-3.81-1.13-7.69-1.14-11.52-.13C5.89,2.02,2.59,5.08,1.03,9.86c-1.35,4.13-1.36,8.33-.11,12.48,1.45,4.81,4.64,7.97,9.47,9.37,3.9,1.13,7.85,1.12,11.75.02,4.18-1.18,7.2-3.76,8.94-7.77.71-1.65,1.12-3.35,1.3-5.1,0-.04,0-.07.01-.11.08-.81.11-1.63.11-2.45,0,0,.01,0,.02,0-.03-1.36-.18-2.63-.26-3.16Z"
										style="fill: #4B4C4E;" />
									<polyline points="14.03 21.27 19.34 15.9 13.18 11.28"
										style="fill: none; stroke: #f4f4f2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3px;" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>

	<div class="relative overflow-hidden bg-[#EFEBDF] vw-pt-[226] vw-pb-[316] md:pt-[50px] md:pb-[82px]">
		<div class="absolute w-full top-[236px] left-0 hidden sm:!block"><img src="https://gdlinode.tw/oolab/images/fea-bg-mobile-deco.png"></div>
		<div class="relative z-10">
			<div class="mb-[80px] md:mb-[36px]">
				<img src="https://gdlinode.tw/oolab/images/fea-ex-head-2.svg" class="mx-auto vw-max-w-[554] md:hidden">
				<img src="https://gdlinode.tw/oolab/images/fea-ex-head-mobile-black.svg" class="mx-auto hidden md:!block">
			</div>
			<div class="vw-max-w-[1400px] mx-auto md:max-w-full md:px-[48px]">
				<ul class="fea-ex-slider flex justify-between md:space-y-[52px] md:block">
					<li class="md:w-full">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-2-1.png" class="vw-max-w-[414] md:hidden">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-2-1-mobile.png" class="hidden md:!block">
					</li>
					<li class="md:w-full">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-2-2.png" class="vw-max-w-[414] md:hidden">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-2-2-mobile.png" class="hidden md:!block">
					</li>
					<li class="md:w-full">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-2-3.png" class="vw-max-w-[414] md:hidden">
						<img src="https://gdlinode.tw/oolab/images/fea-ex-2-3-mobile.png" class="hidden md:!block">
					</li>
				</ul>
			</div>
		</div>
		<div class="absolute vw-bottom-[86] -right-[146px] md:bottom-0 md:right-0 md:hidden">
			<img src="https://gdlinode.tw/oolab/images/fea-ex-deco.svg" class="vw-max-w-[1884] md:hidden">
			<img src="https://gdlinode.tw/oolab/images/fea-ex-deco-mobile.svg" class="hidden md:!block w-full">
		</div>
	</div>
	<!--  -->



	<div class="dialog-item item-1 absolute opacity-0 top-0 vw-right-[230] lg:-top-[30px] lg:right-[40px]"><img src="https://gdlinode.tw/oolab/images/dialog-3-1.svg" class="vw-max-w-[206px] lg:max-w-[132px]"></div>
	<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[8] vw-left-[280]"><img src="https://gdlinode.tw/oolab/images/dialog-3-2.svg" class="vw-max-w-[147px] lg:max-w-[100px]"></div>

	<div class="dialog-item item-1 absolute opacity-0 top-0 vw-right-[230] lg:-top-[28px]"><img src="https://gdlinode.tw/oolab/images/dialog-2-1.svg" class="vw-max-w-[147px] lg:max-w-[100px]"></div>
	<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[8] vw-left-[280] lg:left-[50px] lg:-bottom-[10px]"><img src="https://gdlinode.tw/oolab/images/dialog-2-2.svg" class="vw-max-w-[188px] lg:max-w-[124px]"></div>

	<div class="dialog-item item-1 absolute opacity-0 top-0 vw-right-[230] lg:-top-[40px] lg:right-[20px]"><img src="https://gdlinode.tw/oolab/images/dialog-4-1.svg" class="vw-max-w-[176px] lg:max-w-[120px]"></div>
	<div class="dialog-item item-1 absolute opacity-0 vw-bottom-[8] vw-left-[280] lg:-bottom-[70px] lg:left-[60px]"><img src="https://gdlinode.tw/oolab/images/dialog-4-2.svg" class="vw-max-w-[188px] lg:max-w-[124px]"></div>


	<img src="https://gdlinode.tw/oolab/images/feature-p-head-2.svg" class="vw-max-w-[1374px] md:hidden">

</body>

<?php include 'script.php'; ?>

</html>

<script>
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
	drawSVG: device == 'mobile' ? '0% 0%' : '100% 100%',
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

// var _dialog_animate = gsap.timeline({
// 	paused: false,
// 	repeat: -1,
// 	repeatDelay: 2,
// }).fromTo(".dialog-items .dialog-item.item-1", {
// 	opacity: 0,
// 	y: 40,
// 	scale: 0,
// }, {
// 	y: 0,
// 	scale: 1,
// 	opacity: 1,
// 	duration: 0.4,
// 	stagger: 0.2,
// 	ease: "back.out",
// }).to(".dialog-items .dialog-item.item-1", {
// 	opacity: 0,
// 	duration: 0.1,
// 	delay: 1.5,
// }).fromTo(".dialog-items .dialog-item.item-2", {
// 	opacity: 0,
// 	y: 40,
// 	scale: 0,
// }, {
// 	y: 0,
// 	scale: 1,
// 	opacity: 1,
// 	duration: 0.4,
// 	stagger: 0.2,
// 	ease: "back.out",
// }).to(".dialog-items .dialog-item.item-2", {
// 	opacity: 0,
// 	duration: 0.1,
// 	delay: 1.5,
// }).fromTo(".dialog-items .dialog-item.item-3", {
// 	opacity: 0,
// 	y: 40,
// 	scale: 0,
// }, {
// 	y: 0,
// 	scale: 1,
// 	opacity: 1,
// 	duration: 0.4,
// 	stagger: 0.2,
// 	ease: "back.out",
// })

var _dialog_animate = gsap.timeline({
	paused: false,
	delay: .2,
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

gsap.fromTo(".featuresText", { 
	attr: { 
		startOffset: "0%" 
	},
}, { 
	attr: { 
		startOffset: "25%"
	},      // 終點：文字停在路徑中間偏右（可調）
	duration: 2,
	ease: "power2.inOut",
});

console.log($("#features-slider .slider-items >image").attr("href"))

// var _maru_animate = gsap.timeline({
// 	paused: false,
// 	repeat: -1,
// 	repeatDelay: 2,
// 	yoyo: 1,
// }).to(".maru-items >div", {
// 	opacity: 1,
// 	duration: 0,
// 	stagger: 0.1,
// 	delay: 2,
// }).to(".maru-items >div", {
// 	opacity: 0,
// 	duration: 0,
// 	stagger: 0.1,
// 	delay: 2,
// })

</script>