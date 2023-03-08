// const menu=document.querySelector(".menu");
// menu.addEventListener("click",function(){
//   expandSidebar()
// })

// function expandSidebar(){
//   document.querySelector("body").classList.toggle("sidemenus")
// }

function openClose() {
  var elems = document.getElementsByClassName('navsec');
  const side=document.getElementById('side1');

  
    for (var i=0;i<elems.length;i+=1){
      if (elems[i].style.display === "none") {
        elems[i].style.display="inline";
        elems[i].style.width = "20%";
        side.style.width="20%";

      } else {
        elems[i].style.display = "none";
        side.style.width="10%";

        
      }
    
     
    
      
      
    }
    
}