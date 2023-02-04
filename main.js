const btn = document.querySelector(".top-btn");

btn.addEventListener("click", e=>{
  window.scrollTo(scrollX, 0);
});

 window.addEventListener('scroll', function() {
   
  //  console.log(pageYOffset);
   if(( (this.scrollY+150) < document.documentElement.clientHeight) 
   ) {
     btn.classList.add("is-active");
     console.log("nothing");
   }
   else{
     btn.classList.remove("is-active");
   }
   
 });