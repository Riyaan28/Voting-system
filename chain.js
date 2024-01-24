
 function goToPageTwo() {
  window.location.href = "page2.html";
}

 window.onload = function() {
  const imageBox = document.getElementById("imageBox");
  const addButton = document.getElementById("addButton");
  const storedImage = sessionStorage.getItem("uploadedImage");
  const storedName = sessionStorage.getItem("imageName");

  if (storedImage && storedName) {
    const img = document.createElement("img");
    img.src = storedImage;

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = storedName;

    imageBox.appendChild(img);
    imageBox.appendChild(nameParagraph);

    addButton.style.display = "none";
}
};



 function htk1(){
 document.getElementById("vot1").style.display ="none";
 document.getElementById("vot2").style.display ="none";
 document.getElementById("vot3").style.display ="none";
 document.getElementById("vot4").style.display ="none";
 document.getElementById("vot5").style.display ="none";

 document.getElementById("cn").innerHTML="1 vote to bitcoin";
 }

 function htk2(){
   document.getElementById("vot1").style.display ="none";
   document.getElementById("vot2").style.display ="none";
   document.getElementById("vot3").style.display ="none";
   document.getElementById("vot4").style.display ="none";
   document.getElementById("vot5").style.display ="none";
  
   document.getElementById("cn").innerHTML="1 vote to Dogecoin";
   }

   function htk3(){
     document.getElementById("vot1").style.display ="none";
     document.getElementById("vot2").style.display ="none";
     document.getElementById("vot3").style.display ="none";
     document.getElementById("vot4").style.display ="none";
     document.getElementById("vot5").style.display ="none";
    
     document.getElementById("cn").innerHTML="1 vote to Ethereum";
     }

     function htk4(){
       document.getElementById("vot1").style.display ="none";
       document.getElementById("vot2").style.display ="none";
       document.getElementById("vot3").style.display ="none";
       document.getElementById("vot4").style.display ="none";
       document.getElementById("vot5").style.display ="none";
      
       document.getElementById("cn").innerHTML="1 vote to Tether";
       }

       function htk5(){
         document.getElementById("vot1").style.display ="none";
         document.getElementById("vot2").style.display ="none";
         document.getElementById("vot3").style.display ="none";
         document.getElementById("vot4").style.display ="none";
         document.getElementById("vot5").style.display ="none";
        
         document.getElementById("cn").innerHTML="1 vote to your prefered cyrptocurrency";
         }


 const video = document.getElementById("backgroundVideo");

        video.addEventListener("ended", function() {
            video.currentTime = video.duration - 2;
            video.play();
        });
        video.play();