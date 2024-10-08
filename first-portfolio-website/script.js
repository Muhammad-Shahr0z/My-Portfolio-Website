let toggleMenu = document.getElementById('menuButton')
let toggleCancel = document.getElementById('menuCancel')
let navBarSecond = document.getElementById('navBar2')


window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        navBarSecond.style.display = "none";
    }
  });


toggleMenu.addEventListener("click", ()=>{
 navBarSecond.style.display ="block" 
})


toggleCancel.addEventListener("click", ()=>{
    navBarSecond.style.display ="none"
})








// IntersectionObserver create karna
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]; // Pehli entry ko le rahe hain, kyunki sirf ek hi observe kar rahe hain
    if (entry.isIntersecting) {
      // Agar #skills section screen par aa gaya hai, to animation trigger karte hain
      document.querySelector('.innerhtml').classList.add('animateHtml');
      document.querySelector('.innercss').classList.add('animateCss');
      document.querySelector('.innerjavascript').classList.add('animateJavascript');
      document.querySelector('.innerreactjs').classList.add('animateReactjs');
      document.querySelector('.innernextjs').classList.add('animateNextjs');
      document.querySelector('.innertailwindcss').classList.add('animatetailwind');
    }
  });
  
  // #skills section ko observe karna
  observer.observe(document.querySelector('#skills'));
  

