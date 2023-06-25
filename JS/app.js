// Rolagem 3D

let espacamentoZ = -1000,
ultimaPosicao = espacamentoZ / 5
$quadros = document.getElementsByClassName('quadro')
quadros = Array.from($quadros),
valoresZ = []

window.onscroll = function(){
    let topo = document.documentElement.scrollTop
    delta = ultimaPosicao - topo

ultimaPosicao = topo

quadros.forEach(function(n, i){
    valoresZ.push((i * espacamentoZ) + espacamentoZ)
    valoresZ[i] += delta * -5.5
    let quadro = quadros[i],
    transform = `translateZ(${valoresZ[i]}px)`,
    opacidade = valoresZ[i] < Math.abs(espacamentoZ) / 1.8 ? 1 : 0
    quadro.setAttribute('style', `transform: ${transform}; opacity: ${opacidade}`)
})
}

window.scrollTo(0, 1)

// Áudio

let botaoSom = document.querySelector('.botao-som')
audio = document.querySelector('.audio')

botaoSom.addEventListener('click', e =>{
botaoSom.classList.toggle('pausado')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function(){
botaoSom.classList.contains('pausado') ? audio.pause() : audio.play()
}

window.onblur = function(){
audio.pause()
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
  
