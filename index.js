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
const side = document.getElementById('side1');
var elems = document.getElementsByClassName('navsec');
const button=document.getElementById('Button');
var mobielem=document.getElementsByClassName('mobileNav');
const MobileBtn=document.getElementById('mobileButton');

var winwidth, cltwidth;
window.onresize = window.onload = () => {
  winwidth = this.innerWidth;
  cltwidth = this.document.clientWidth;
     
 SideBar(windwidth);
}


function SideBar(winWidth){
 if (winWidth < 1000) {
      MobileBtn.addEventListener('click', mobileScreen);
      if (side.style.height === "5%") {
      side.style.height = "100%";

      for (var i = 0; i < mobielem.length; i++) {
      mobielem[i].style.display = "inline";
      }
    }

    else {
    side.style.height = "5%";
    for (var i = 0; i < mobielem.length; i++) {
      mobielem[i].style.display = "none";
    }

  }
  } 
  else {
      button.addEventListener('click',lapScreen);
           if (side.style.width === "5%") {
          side.style.width = "20%";
      
          for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "inline";
          }
        }
      
        else {
          side.style.width = "5%";
          for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
          }
      
        }
  }  
}


 function mobileScreen(){
  if (side.style.height === "5%") {
    side.style.height = "100%";

    for (var i = 0; i < mobielem.length; i++) {
      mobielem[i].style.display = "inline";
    }
  }

  else {
    side.style.height = "5%";
    for (var i = 0; i < mobielem.length; i++) {
      mobielem[i].style.display = "none";
    }

  }
 }
 function lapScreen(){
   if (side.style.width === "5%") {
          side.style.width = "20%";
      
          for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "inline";
          }
        }
      
        else {
          side.style.width = "5%";
          for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
          }
      
        }
 }

  
  


// Tabs

const tabs = document.getElementsByClassName('tabs');


// for(i=0;i<tabs.length;i++){
//   tabs[i].addEventListener('click',navigate)
// }
navigate()
function navigate(status = 'dashboard') {
  const navigator = document.getElementById(status);

  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.borderLeft = "none";
    tabs[i].style.color = "#FFFFFF";
    tabs[i].style.backgroundColor = "transparent";
    // console.log(tabs[i]);
  }
  // navigator.style.borderLeft="3px solid #DEECF6";
  navigator.style.color = "#DEECF6";
  navigator.style.backgroundColor = "#3963AD";
  navigator.style.borderRadius = '5px';
  const show = document.getElementsByClassName('showcase');
  for (i = 0; i < show.length; i++) {
    show[i].style.display = 'none';
  }
  document.getElementById(status + '_page').style.display = 'block';

}

