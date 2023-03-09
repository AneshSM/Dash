// const menu=document.querySelector(".menu");
// menu.addEventListener("click",function(){
//   expandSidebar()
// })

// function expandSidebar(){
//   document.querySelector("body").classList.toggle("sidemenus")
// }

//const side=document.getElementById('side1');

//console.log(side.childNodes)
// const sidemenus=document.getElementsByClassName('sidemenus')
// for(var i=0;i<sidemenus.length;i++){
//     sidemenus[i].style.backgroundColor="yellow";

// }


function openClose() {
  var elems = document.getElementsByClassName('navsec');
  const side=document.getElementById('side1');
 

    for (var i=0;i<elems.length;i++){
      if (elems[i].style.display === "none")
      {
        elems[i].style.display="inline";
      
        side.style.width="20%";

      } 
      else 
      {
        elems[i].style.display = "none";
        side.style.width="5%";

        
      }
      
     
    
      
      
    }
    
}