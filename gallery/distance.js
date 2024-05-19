const bnt = document.getElementById("btn");
bnt.addEventListener("click",function(){
    var userNumber = parseFloat(document.getElementById("userNumber").value);
    const answ = document.getElementById("answ");
    const chosenOption = document.getElementById("typeselect").value;
    if (chosenOption === "par"){
        answ.innerHTML = userNumber*149597871*206265;
    }
    else if (chosenOption === "liye"){
        answ.innerHTML = userNumber*9460730472581;
    }
    else if (chosenOption === "aem"){
        answ.innerHTML = userNumber*149597871;
    }
  });