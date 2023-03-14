// variables
 openClose()
function openClose() {
    const navelemens = document.getElementsByClassName('navsec');
    const sidenav = document.getElementById('sidebar')
    for (var i = 0; i < navelemens.length; i++) {
        if ( navelemens[i].style.display === 'none') {
            navelemens[i].style.display = 'flex';
            sidenav.style.width = '20%';

        }
         else {
            navelemens[i].style.display = 'none';
            sidenav.style.width = '10%';
            
         }

    }

}

//Navigation 

const list=document.getElementsByClassName('tabs');
navigate()
function navigate(active='dashboard'){
    const tabs=document.getElementById(active);
    for(i=0;i<list.length;i++){
        list[i].style.color='#f22022';
    }
    tabs.style.color='#fff';
    tabs.style.backgroundColor='#3963AD'

}
