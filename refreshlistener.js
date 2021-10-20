let refreshbutton = document.getElementById("refresh")
refreshbutton.addEventListener("mouseover", func, false);
refreshbutton.addEventListener("mouseout", func1, false);


function func()
{  
   var item = document.getElementById("refreshIcon"); 
   item.classList.add('animated')
}

function func1()
{  
   var item = document.getElementById("refreshIcon"); 
   item.classList.remove('animated')
}
