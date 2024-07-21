// For Theme
document.getElementById('thm-box').addEventListener('click',(e)=> {
     
     
      let cls = document.getElementById('theme').classList
      // console.log("clicked");
      document.body.classList.toggle('light-theme');
      
      if(cls[1] === "bx-sun"){
        document.getElementById('theme').classList.remove("bx-sun")
        document.getElementById('theme').classList.add('bx-moon')
      }else{
        document.getElementById('theme').classList.remove("bx-moon")
        document.getElementById('theme').classList.add('bx-sun')
      }

})




