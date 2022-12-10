var parent =  document.getElementById('imgParent');
var allImages = parent.getElementsByTagName("IMG");
var showSlide = document.getElementById('showSlide');
var imageIndex =0;


function renderSlide(){
    showSlide.src = allImages[imageIndex].src;
}

renderSlide();  

function nextSlide(){
    // length is 3 last image index will be 2 
    // we need to jump on O index 
    // 2->0->1->2
    if(imageIndex+1==allImages.length){
        imageIndex=0;
    }else{
        imageIndex++;
    }
    renderSlide();
}

function previousSlide(){
    //0->2->1->0
    if(imageIndex==0){
        imageIndex=allImages.length-1;
    }else{
        imageIndex--;
    }
    renderSlide();
}

setInterval(function(){
    nextSlide();
},3000)