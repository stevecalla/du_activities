// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox"); //section: it is selecting the carouselbox class
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

// carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  console.log('1= ', index, direction)
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
    console.log('2= ', index, direction)
  } else if (index > images.length - 1) { 
    index = 0;
    console.log('3= ', index, direction)
  }
  console.log('4= ', index, direction)
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function(event) {
  console.log(event.target)
  // window.location.href = "https://google.com";
  console.log(window.location.href);
  window.location.href = images[index]; //section:this event listener is waiting for a click on the img in the carousel box; when the box is clicked it is setting the href equal to the images array at the index variable

  console.log(window.location.href);
});

// TODO: Describe the functionality of the following event listener.
//section:this event listener listens for a click onthe next photo button; if the next photo button is clicked this function executes the navigate fuction incrementing the photo index by 1
next.addEventListener("click", function(event) {
  console.log(event.target)
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation(); //section:event.stopPropagation prevents the "carousel" event listener from running

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//section:this event listener listens for a click onthe next photo button; if the next photo button is clicked this function executes the navigate fuction DECREMENTING the photo index by 1
prev.addEventListener("click", function(event) {
  console.log(event.target)
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation(); //SECTION:event.stopPropagation prevents the "carousel" event listener from running

  navigate(-1);
});

navigate(0);
