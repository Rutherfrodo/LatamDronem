window.onload = function () {
    //Buttony menu
    var toTopButton = document.getElementById("homeButton");
    var kontaktButton = document.getElementById("kontaktButton");
    var portfolioButton = document.getElementById("portfolioButton");
    //Dolny button
    var buttonUP = document.getElementById("buttonUP");

    toTopButton.onclick = function () {
         document.getElementById("homeButton").scrollIntoView( );
    };

    portfolioButton.onclick = function () {
        // window.scrollBy(0,-1 * window.pageYOffset);
        document.getElementById("galeria_id").scrollIntoView( );

    };

    kontaktButton.onclick = function () {
        document.getElementById("stopka").scrollIntoView( );

    };

    //Obsługa wyskakujacego dolengo przycisku
    window.onscroll = function () {
        var buttonUP = document.getElementById("buttonUP");
        var yScrollAxis = window.pageYOffset;
        if (yScrollAxis > 700)
            buttonUP.style.display = "block";
        else
            buttonUP.style.display = "none";
    };

    buttonUP.onclick = function () {
        window.scrollBy(0, -1 * window.pageYOffset );
    };
    //===================================================
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
    //======  0




};

//Obsługa galerii
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
};

function openModal() {
  document.getElementById("carouselExampleCaptions").style.display = "block";
}

function closeModal() {
  document.getElementById("carouselExampleCaptions").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
