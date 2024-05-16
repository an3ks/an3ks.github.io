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
