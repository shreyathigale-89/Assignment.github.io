var container = document.getElementById("grid-container");
var numDiv = document.getElementById("num");
var colorGenBtn=document.getElementById('generateColor');


 colorGenBtn.addEventListener("click", ()=>{
      var value=numDiv.value;
    
       while(container.firstChild) {
         container.removeChild(container.firstChild);
        }

    for (var i =1; i<=value; i++) {
        // creating new div with unique id
        var newDiv=document.createElement('div');
        newDiv.setAttribute('class',"box");
        newDiv.setAttribute('id',`div_${i}`)
        newDiv.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;

        container.appendChild(newDiv);
        newDiv.addEventListener('click',(ref)=>{
          clickDiv=document.getElementById(ref.path[0].id);
          if(clickDiv.style.backgroundColor.toString()=='rgb(255, 255, 255)'){
           bgColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;

           while(bgColor==='rgb(255, 255, 255)'){
            bgColor=`#${Math.floor(Math.random()*16777215).toString(16)}`; 
           }
           clickDiv.style.backgroundColor=bgColor; 
          }
          else{
            clickDiv.style.backgroundColor='rgb(255, 255, 255)';
          }
        })
    }
  
 })