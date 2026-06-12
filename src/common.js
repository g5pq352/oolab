// Flickity.createMethods.push('_createPrevNextCells');

// Flickity.prototype._createPrevNextCells = function() {
// 	this.on('select', this.setPrevNextCells);
// };

// Flickity.prototype.setPrevNextCells = function() {
// 	// remove classes
// 	changeSlideClasses(this.previousSlide, 'remove', 'is-prev');
// 	changeSlideClasses(this.nextSlide, 'remove', 'is-next');
// 	// set slides
// 	this.previousSlide = this.slides[(this.selectedIndex - 1 + this.slides.length) % this.slides.length];
// 	this.nextSlide = this.slides[(this.selectedIndex + 1 + this.slides.length) % this.slides.length];
// 	// add classes
// 	changeSlideClasses(this.previousSlide, 'add', 'is-prev');
// 	changeSlideClasses(this.nextSlide, 'add', 'is-next');
// };

// function changeSlideClasses(slide, method, className) {
// 	if (!slide) {
// 		return;
// 	}
// 	slide.getCellElements().forEach(function(cellElem) {
// 		cellElem.classList[method](className);
// 	});
// }

$(window).on("resize", function() {
	if ($(this).width() > 1700) {
		if (window.device == 'mobile' || window.device == 'laptop') {
			location.reload()
		}
		window.device = 'desktop';
	} else if ($(this).width() > 1200) {
		if (window.device == 'mobile' || window.device == 'desktop') {
			location.reload()
		}
		window.device = 'laptop';
	} else {
		if (window.device == 'desktop' || window.device == 'laptop') {
			location.reload()
		}
		window.device = 'mobile';
	}
}).trigger("resize");

$.fn.ryderCool = function(option) {
	return this.each(function() {
		var $this = $(this);

		var deFault = {
			hook: 0.9,
			repeat: false,
			enter_check: true,
			leave_check: true,
			count: 0,
			enter() {},
			leave() {}
		};

		var setting = $.extend(deFault, option);

		function ryderScrolling() {
			var scrollTop = $(window).scrollTop(),
				elementOffset = $this.offset().top,
				distance = (elementOffset - scrollTop),
				windowHeight = $(window).height(),
				breakPoint = windowHeight * setting.hook,
				leavePoint = $this.height() - windowHeight * (1 - setting.hook);

			if (distance > breakPoint || distance < -leavePoint) {

				if (setting.count >= 1) {
					setting.enter_check = setting.repeat;
				}

				setting.leave_check && setting.leave($this);
				setting.leave_check = false;

			}else if (distance < breakPoint) {

				setting.enter_check && setting.enter($this);
				setting.enter_check && setting.count++;
				setting.enter_check = false;
				setting.leave_check = true;
			}
		}

		$(window).on("scroll", ryderScrolling).trigger("scroll");
	});
};

class RyderMarquee {
	constructor(el, direct = 0) {
		this.hero = $(el).parent().get(0)
		this.wrapper = el
		this.delta = 0
		this.transform = 0
		this.step = (device == 'mobile') ? 0.4 : 0.8
		this.direct = direct % 2
		this.hover = false

		if (this.direct == 1) {
			this.wrapper.style.transform = `translate3d(-${this.wrapper.getBoundingClientRect().width / 2}px, 0, 0)`;
			this.transform = -this.wrapper.getBoundingClientRect().width / 2
		}

		// if (device != 'mobile') {
		// 	$(el).hover(() => {
		// 		this.hover = true
		// 	}, () => {
		// 		this.hover = false
		// 	})
		// }
	}

	animate() {
		if (!this.hover) {
			this.transform += this.step
		}

		if (this.direct == 1) {
			if (this.transform > 0) {
				this.transform = -this.wrapper.getBoundingClientRect().width / 2;
			}
			this.wrapper.style.transform = `translate3d(${this.transform}px, 0, 0)`;
		} else {
			if (this.transform > this.wrapper.getBoundingClientRect().width / 2) {
				this.transform = 0;
			}
			this.wrapper.style.transform = `translate3d(-${this.transform}px, 0, 0)`;
		}
	}

	render() {
		this.scrollY = $(window).scrollTop()

		const bounding = this.hero.getBoundingClientRect();
		const distance = (window.innerHeight + this.scrollY) - (bounding.top + this.scrollY);
		const percentage = distance / ((window.innerHeight + bounding.height) / 100);

		this.animate();
	}

	create() {
		gsap.ticker.add(this.render.bind(this));
	}
}

$(".marquee").each(function (i, el) {
	var $copy = $(el).contents().clone()
	$(el).append($copy)

	var ryderMarquee = new RyderMarquee(el, i).create()
})


function ryderenter() {
	$("[data-r]").each(function(i, el) {

		if (device == 'mobile' && $(el).data("mobile-r") != undefined) {
			var _p = $(el).data("mobile-r")
		} else {
			var _p = $(el).data("r")
		}

		var _st_default = {
			trigger: el,
			start: "top 80%",
			end: "bottom 0%",
			toggleActions: "play none play none",
			// toggleActions: "play reverse play reverse",
			// markers: true,
		}

		var _st = Object.assign(_st_default, _p.scrollTrigger)

		var _t = $(el).offset().top
		var _hook = $(window).height() * _st.start.replace(/[^0-9]/g, '') / 100

		if (_t <= _hook) {
			_p.delay = (_p.delay != undefined) ? _p.delay += 1.5 : 1.5
		}

		delete _p.scrollTrigger

		var _setting = {
			scrollTrigger: _st,
			duration: 2,
			opacity: 0,
			ease: "power2.out",
		}
		
		if (_p != '' && "stagger" in _p) {
			var $el = $(el).children()
		} else {
			var $el = el
		}

		var _obj = Object.assign(_setting, _p);

		gsap.from($el, _obj);
	})
}


var _scrollLast = 0
$(window).on("scroll", () => {
	var _scrollTop = $(window).scrollTop()
	var _allBottom = $("body").height() - $(window).height() - 100

	if (_scrollTop < 0 || _scrollTop > _allBottom) {
		return false;
	}

	if (_scrollTop > _scrollLast) {
		$("#topmenuWrap").addClass("is-hide")
	} else {
		$("#topmenuWrap").removeClass("is-hide")
	}

	_scrollLast = _scrollTop
})

$(function(){
	ryderenter()
})