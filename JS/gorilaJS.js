gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.secao-gorila', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.secao-gorila',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itensL = gsap.utils.toArray('.galeria-esquerda .item-galeria')

	itensL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itensR = gsap.utils.toArray('.galeria-direita .item-galeria')

	itensR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})
}

/*NAV BAR */

class MobileNavbar {
	constructor(mobileMenu, navList, navLinks) {
	  this.mobileMenu = document.querySelector(mobileMenu);
	  this.navList = document.querySelector(navList);
	  this.navLinks = document.querySelectorAll(navLinks);
	  this.activeClass = "active";
  
	  this.handleClick = this.handleClick.bind(this);
	}
  
	animateLinks() {
	  this.navLinks.forEach((link, index) => {
		link.style.animation
		  ? (link.style.animation = "")
		  : (link.style.animation = `navLinkFade 0.5s ease forwards ${
			  index / 7 + 0.3
			}s`);
	  });
	}
  
	handleClick() {
	  this.navList.classList.toggle(this.activeClass);
	  this.mobileMenu.classList.toggle(this.activeClass);
	  this.animateLinks();
	}
  
	addClickEvent() {
	  this.mobileMenu.addEventListener("click", this.handleClick);
	}
  
	init() {
	  if (this.mobileMenu) {
		this.addClickEvent();
	  }
	  return this;
	}
  }
  
  const mobileNavbar = new MobileNavbar(
	".mobile-menu",
	".nav-list",
	".nav-list li",
  );
  mobileNavbar.init();
  
