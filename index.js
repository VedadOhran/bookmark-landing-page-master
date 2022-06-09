
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("menu-items")[0];
var toggle = document.querySelector('.nav-toggle');

//Mobile navbar
toggleButton.addEventListener("click",()=>{
  navbarLinks.classList.toggle('active')
  toggle.classList.toggle('opened');
})

//Accordion
let answers=document.querySelectorAll(".faq-questions-answers");
        answers.forEach((event)=>{
            event.addEventListener('click',()=>{
                if(event.classList.contains("active")){
                    event.classList.remove("active");
                }
                else{
                    event.classList.add("active");
                }
            });
        });

  //Features slider      
const marker1 = document.querySelector('.marker-1')
const tab1 = document.querySelector('.tab-1')

const marker2 = document.querySelector('.marker-2')
const tab2 = document.querySelector('.tab-2')

const marker3 = document.querySelector('.marker-3')
const tab3 = document.querySelector('.tab-3')

marker1.addEventListener('click', function () {
  marker1.classList.add('active')
  marker2.classList.remove('active')
  marker3.classList.remove('active')

  tab1.classList.add('show')
  tab2.classList.remove('show')
  tab3.classList.remove('show')
})
marker2.addEventListener('click', function () {
  marker2.classList.add('active')
  marker1.classList.remove('active')
  marker3.classList.remove('active')

  tab2.classList.add('show')
  tab3.classList.remove('show')
  tab1.classList.remove('show')
})
marker3.addEventListener('click', function () {
  marker3.classList.add('active')
  marker1.classList.remove('active')
  marker2.classList.remove('active')

  tab3.classList.add('show')
  tab2.classList.remove('show')
  tab1.classList.remove('show')
})
        
      

