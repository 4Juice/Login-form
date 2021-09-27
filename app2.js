


let button1 = document.getElementById("but1");
let container = document.getElementById("cont2");
let input2 = document.getElementById("input1");

button1.addEventListener("click", function(){
    var paraghrap = document.createElement("p");
    container.appendChild(paraghrap);
    paraghrap.innerText = input2.value;
    input2.value = "";
     paraghrap.addEventListener("click", function(){
        paraghrap.style.textDecoration = "underline";
    })
     paraghrap.addEventListener("dblclick", function(){
        container.removeChild(paraghrap);      
    })
    

  
    
    console.log(paraghrap.innerText);
}); 