/*==================================================================*/
/*==================== SHOW MENU ====================*/
/*==================================================================*/
const showMenu = (toggleId, menuId) =>{
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);

  // Validate that variables exist
  if(toggle && menu){
      toggle.addEventListener('click', () => {
          // We add the show-menu class to the div tag with the nav__menu class
          menu.classList.toggle('active-menu');
          toggle.classList.toggle('active-bx');
      })
  }
}

showMenu('bx','menu');


const menu_links = Array.from(document.querySelectorAll('.menu-link'));
const bx = document.querySelector('.bx');
const menu = document.querySelector('.menu');
const cta_menu = document.querySelector('.cta-menu');

menu_links.forEach(item => {
  // Quando clicar em algum link, o menu precisa recolher sempre, desativar.
  item.addEventListener('click', () => {
      menu.classList.remove('active-menu');
      bx.classList.remove('active-bx');
  })
})

cta_menu.addEventListener('click', () => {
  menu.classList.remove('active-menu');
  bx.classList.remove('active-bx');
});


/*==================================================================*/    
/*==================== CHANGE BACKGROUND HEADER ====================*/
/*==================================================================*/
function scrollHeader(){
  const nav = document.querySelector('header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader);





/*==================================================================*/
/*==================== ACCORDION ====================*/
/*==================================================================*/
const contentAccordion = document.querySelectorAll('.accordion-content');

document.querySelectorAll('.accordion-button').forEach(button => {

  button.addEventListener('click', () => {
      //button.classList.remove('accordion-button-active');

      // Zerar a altura de todos quando houver algum clique
      contentAccordion.forEach(item => {
          item.style.maxHeight = 0;
          //button.classList.remove('accordion-button-active');
      })

      document.querySelectorAll('.accordion-button').forEach(item => {
          
          item.classList.remove('accordion-button-active');
      })

      const accordionContent = button.nextElementSibling;

      button.classList.toggle('accordion-button-active');

      if(button.classList.contains('accordion-button-active')){
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      }
      else{
          accordionContent.style.maxHeight = 0;
      }

  });
});


function initiate_accordion() {
  document.querySelectorAll('.accordion-button').forEach(button => {

      const conteudo = button.nextElementSibling;

      console.log('entrou');

      if(button.classList.contains('accordion-button-active')){
          conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
      }
  
  });
}

initiate_accordion();


/////////////////////////////////////////////////
const contentAccordionTransparent = document.querySelectorAll('.accordion-content-transparent');

document.querySelectorAll('.accordion-button-transparent').forEach(button_transparent => {

  button_transparent.addEventListener('click', () => {

      const contentAccordionTransparent = button_transparent.nextElementSibling;

      button_transparent.classList.toggle('accordion-button-transparent-active');

      if(button_transparent.classList.contains('accordion-button-transparent-active')){
          contentAccordionTransparent.style.maxHeight = contentAccordionTransparent.scrollHeight + 'px';
      }
      else{
          contentAccordionTransparent.style.maxHeight = 0;
      }

  });
});

/*==================================================================*/
/*==================== CHANGE BG HERO ====================*/
/*==================================================================*/
var i = 2;

// Função para gerar um número aleatório dentro de um intervalo
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.bg-hero').style.backgroundImage = "url(img/"+ i +"-min.webp)";

setInterval(() => {
  // Usando a função para gerar um número aleatório entre 1 e 15
  document.querySelector('.bg-hero').style.backgroundImage = "url(img/"+ gerarNumeroAleatorio(1, 8) +"-min.webp)";
}, 10000);

/*


/*==================================================================*/
/*==================== GRID PHOTOS ABOUT ====================*/
/*==================================================================*/
setInterval(() => {
  // Usando a função para gerar um número aleatório entre 1 e 15
  document.querySelector('.photo-about-1').style.backgroundImage = "url(img/parcerias/"+ gerarNumeroAleatorio(1, 9) +".png)";
}, 5000);

setInterval(() => {
  // Usando a função para gerar um número aleatório entre 1 e 15
  document.querySelector('.photo-about-2').style.backgroundImage = "url(img/parcerias/"+ gerarNumeroAleatorio(1, 9) +".png)";
}, 4000);

setInterval(() => {
  // Usando a função para gerar um número aleatório entre 1 e 15
  document.querySelector('.photo-about-3').style.backgroundImage = "url(img/parcerias/"+ gerarNumeroAleatorio(1, 9) +".png)";
}, 6000);



/*==================================================================*/
/*==================== GSAP ====================*/  
/*==================================================================*/


/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  /*--=========== TIMELINE LOADING E HERO ============- */
  var tl1 = gsap.timeline();


  tl1
  .to('.screen-loading', {
      duration: 2,
      opacity: 0, 
      delay: 3,
      ease: "power1.out",
  })
  .from("nav div", {
      duration: 2, 
      opacity: 0,
      stagger:{each: 0.1},
      ease: "power0.out",
  }, '-=1.8')
  .from(".hero div", {
      duration: 2,  
      opacity: 0,
      y: 200,
      stagger:{each: 0.2},
      ease: "power2.out",
  }, '-=2')


  gsap.from("#section-presentation div",{
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger:{each: 0.1},
      ease: "power4.out",
      scrollTrigger:{
          trigger: '#section-presentation',
          start: 'top 80%',
          end: 'bottom 00%',
      }
  });

  gsap.from("#section-solution div",{
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger:{each: 0.1},
      ease: "power4.out",
      scrollTrigger:{
          trigger: '#section-solution',
          start: 'top 80%',
          end: 'bottom 00%',
      }
  });

  gsap.from("#projects > div",{
      x: -100,
      opacity: 0,
      duration: 2,
      stagger:{each: 0.1},
      ease: "power4.out",
      scrollTrigger:{
          trigger: '#projects',
          start: 'top 80%',
          end: 'bottom 00%',
      }
  });

  gsap.from("#section-noworry div",{
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger:{each: 0.1},
      ease: "power4.out",
      scrollTrigger:{
          trigger: '#section-noworry',
          start: 'top 80%',
          end: 'bottom 00%',
      }
  });


  gsap.from("#section-advantages div",{
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger:{each: 0.1},
      ease: "power4.out",
      scrollTrigger:{
          trigger: '#section-advantages',
          start: 'top 80%',
          end: 'bottom 00%',
      }
  });

  gsap.from("#about div",{
      opacity: 0,
      duration: 1.5,
      stagger:{each: 0.1},
      ease: "power4.out",
      scrollTrigger:{
          trigger: '#about',
          start: 'top 80%',
          end: 'bottom 00%',
      }
  });






});


  


