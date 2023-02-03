
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
  
// Add class "active" to the first marker by default
document.querySelector('.marker-1').classList.add('active');

// Show the first tab by default
document.querySelector('.tab-1').classList.add('show');

// Show/hide different tabs on clicking markers
const markers = document.querySelectorAll('.marker');

markers.forEach((marker, index) => {
  marker.addEventListener('click', () => {
    // Remove "active" class from all markers
    markers.forEach(marker => marker.classList.remove('active'));

    // Add "active" class to the clicked marker
    marker.classList.add('active');

    // Hide all tabs
    const tabs = document.querySelectorAll('.bookmarking');
    tabs.forEach(tab => tab.classList.remove('show'));

    // Show the tab corresponding to the clicked marker
    document.querySelector(`.tab-${index + 1}`).classList.add('show');
  });
});


        
      

