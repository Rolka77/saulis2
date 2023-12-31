/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50   ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')

   this.scrollY >= 350  ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId)

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         sectionsClass.classList.add('active-link')
      }else {
         sectionsClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 1000,
   delay: 400,
   reset: true
})

sr.reveal(`.home__data, .explore__data, .explore__user`)
// sr.reveal(`.home__data, .explore__data, .explore__user`)
// sr.reveal(`.home__card`, {delay: 600, distance:'100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
// sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.join__data`, {origin: 'left'})
// sr.reveal(`.popular__card`, {interval: 200})


/* ================================================ */
/* =============== Galery ============================ */


const filterItem = document.querySelector(".items")
const filterImg = document.querySelectorAll(".img")

window.onload = () => {
   filterItem.onclick = (selectedItem) => {
      if (selectedItem.target.classList.contains("item")){
         filterItem.querySelector(".active").classList.remove("active");
         selectedItem.target.classList.add("active");
         let filterName = selectedItem.target.getAttribute("data-name");
         filterImg.forEach((image) => {
            let filterImages = image.getAttribute("data-name");
            if ((filterImages === filterName) || filterName === "all") {
               image.classList.remove("hide");
               image.classList.add("show");
            } else {
               image.classList.add("hide");
               image.classList.remove("show");
            }
         })
         
      }
      
   }
   
   for (let index = 0; index < filterImg.length; index++) {
      filterImg[index].setAttribute("onclick", "preview(this)");
   }
   

}


const previewBox = document.querySelector(".preview-box"),
   previewImg = previewBox.querySelector("img"),
   categoryName = previewBox.querySelector(".title p"),
   shadow = document.querySelector(".shadow"),
   closeIcon = previewBox.querySelector(".icon");

function preview(element) {
   let selectedPrevImg = element.querySelector("img").src;
   let selectedImgCategory = element.getAttribute("data-name");
   categoryName.textContent = selectedImgCategory;
   previewImg.src = selectedPrevImg;
   previewBox.classList.add("show");
   shadow.classList.add("show");
   closeIcon.onclick = () => {
      previewBox.classList.remove("show");
      shadow.classList.remove("show");
   }
}


