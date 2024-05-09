const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");

toggle.addEventListener("click", () => {
   document.body.classList.toggle("dark");
   if (theme === "dark") {
     window.localStorage.setItem("theme", "light");
   } else window.localStorage.setItem("theme", "dark");
});

const observer =  new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    }
    else{
      entry.target.classList.remove('show')
    }
  });
});


const hiddentext = document.querySelectorAll('.tc');
hiddentext.forEach((txt) => observer.observe(txt));