let btn = document.querySelector("#btn");
let h1 = document.querySelector("h1");

(function(){
    btn.addEventListener("click", function(){
        h1.style.color = "green";
    });
    btn.addEventListener("mouseover", function(){
        h1.style.color = "blue";
    });
    btn.addEventListener("mouseout", function(){
        h1.style.color = "red";
    });
})()