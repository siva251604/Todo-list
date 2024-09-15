var a=document.querySelector(".three")

var b=document.querySelector(".btn")
var c=document.querySelector(".two")

 
b.addEventListener("click",function(){
    
    let box=document.createElement("li")
    box.style.padding="10px"
    box.innerHTML=a.value+"<button onclick='dele(event)' class='moo'>delete<button"
    c.appendChild(box)

})

var noo=document.querySelector(".ooo");
noo.addEventListener("click",function(){
    let koo=noo.parentNode;
    koo.remove()
})

function dele(event){
    
    event.target.parentElement.remove()

}















