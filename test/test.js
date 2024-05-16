
document.addEventListener("DOMContentLoaded", function() {
  var dataForm = document.getElementById("data-form");
  var resultParentContainer = document.querySelector(".forma");
  
  // Скрыть блок результатов при загрузке страницы
  var resultContainer = document.querySelector(".result-container");
  resultContainer.style.display = "none";

  dataForm.addEventListener("submit", function() {
      var height = parseInt(document.getElementById("height").value);
      var weight = parseInt(document.getElementById("weight").value);
      var leg = parseFloat(document.getElementById("leg").value);
      var pulse = parseInt(document.getElementById("pulse").value);
      var upper = parseInt(document.getElementById("upper").value);
      var lower = parseInt(document.getElementById("lower").value);

      var minH = 150;
      var maxH = 190;
      var minW = 60; 
      var maxW = 90;
      var maxl = 29.5;
      var minP = 45; 
      var maxP = 80;
      var minUp = 120; 
      var maxUp = 140;
      var minLp = 80; 
      var maxLp = 90;

      var resultText;
      if ((height <= maxH && height >= minH) && 
          (weight <= maxW && weight >= minW) && 
          (leg <= maxl) && 
          (pulse <= maxP && pulse >= minP) && 
          (upper <= maxUp && upper >= minUp) && 
          (lower <= maxLp && lower >= minLp)) {
          resultText = "Поздравляем! Ваши физические характеристики, указанные в анкете, полностью соответствуют первоначальным требованиям для кандидатуры космонавта. Это великолепная новость! Возможно именно вы станете новым героем, который покорит космос!";
      } else {
          resultText = "К сожалению ваши физические показатели, указанные в анкете, не соответствуют начальным требованиям для претендования на звание космонавта. Не расстраивайтесь, в вашем будущем еще много возможностей для достижения великих высот!";
      }

      //создание блока с ответом
      var resultContainer = document.createElement("div");
      resultContainer.className = "result-container";
      resultContainer.innerHTML = "<p>" + resultText + "</p>";

      // Создание кнопки возврата к форме
      var bkb = document.createElement("button");
      bkb.textContent = "К форме";
      bkb.className = "bkb";

      
      document.getElementById("height").value=" ";
      document.getElementById("weight").value=" ";
      document.getElementById("leg").value=" ";
      document.getElementById("pulse").value=" ";
      document.getElementById("upper").value=" ";
      document.getElementById("lower").value=" ";
      //функция удаления блока результата
      bkb.addEventListener("click", function() {
          resultParentContainer.removeChild(resultContainer);
          resultParentContainer.appendChild(dataForm.parentNode);
          resultContainer.style.display = "none"; 
      });

      resultContainer.appendChild(bkb);
      
      resultParentContainer.innerHTML = ""; 
      resultParentContainer.appendChild(resultContainer);
      resultContainer.style.display = "block"; 
  });
});

// const observer =  new IntersectionObserver((entries)=>{
//   entries.forEach((entry)=>{
//     if (entry.isIntersecting){
//       entry.target.classList.add('show')
//     }
//     else{
//       entry.target.classList.remove('show')
//     }
//   });
// });


// const hiddentext = document.querySelectorAll('.form-container');
// hiddentext.forEach((form) => observer.observe(form));