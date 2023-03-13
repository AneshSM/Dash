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
  const list=document.getElementById('dash')
 

    for (var i=0;i<elems.length;i++){
      if (elems[i].style.display === "none")
      {
        side.style.width="20%";
        elems[i].style.display="inline";
        
      } 
      else 
      {
        elems[i].style.display = "none";
        side.style.width="5%"; 
        
      }      
    }
    
}



// Tabs

const tabs=document.getElementsByClassName('tabs');


// for(i=0;i<tabs.length;i++){
//   tabs[i].addEventListener('click',navigate)
// }
navigate()
function navigate(status='dashboard'){
  const navigator=document.getElementById(status);

  for(i=0;i<tabs.length;i++){
      tabs[i].style.borderLeft="none";
      tabs[i].style.color="#FFFFFF";
      tabs[i].style.backgroundColor="transparent";
      // console.log(tabs[i]);
  }
  navigator.style.borderLeft="3px solid #DEECF6";
  navigator.style.color="#DEECF6";
  navigator.style.backgroundColor="#3963AD";
  navigator.style.borderRadius='5px';
  const show=document.getElementsByClassName('showcase');
  for(i=0;i<show.length;i++){
    show[i].style.display='none';
  }
  document.getElementById(status+'_page').style.display='block';

}

