
function toggle(){
    
    const dropdown = document.getElementById("dropdown")

    if(dropdown.classList.contains("hidden") || dropdown.style.display == "none"){
        dropdown.classList.remove("hidden")
    } else{
        dropdown.classList.add("hidden")
    }
}
 
document.addEventListener('DOMContentLoaded', function () {
  
    
    new Splide('#image-slider1', {
        type: 'fade',
        rewind: true,
        perPage: 1,
        autoplay: true,
    }).mount();

    new Splide('#image-slider2', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        breakpoints : {
            768 : {
                perPage: 2,
                },
                
                480: {
                    perPage: 1,
                    }
                    
                }
            }).mount();
                    
                    
});