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
    var mainImage0 = document.getElementsByClassName("mainImage")[0];
    var thumbnail0 = document.getElementsByClassName("thumbnail")[0];

    // TODO obsługa wielu fotek na raz
    thumbnail0.onclick = function () {
        if (thumbnail0.id == 1) {
            var obrazken0 = document.getElementById("img01");
            var obrazko0 = thumbnail0.src;
            mainImage0.style.display = "block";
            obrazken0.src = obrazko0;

             // zamyka okno
            var span0 = document.getElementsByClassName("modal-content")[0];
            span0.onclick = function () {
            mainImage0.style.display = "none";
            }
        }

    }
    //=========== 1
    var mainImage1 = document.getElementsByClassName("mainImage")[0];
    var thumbnail1 = document.getElementsByClassName("thumbnail")[1];

    thumbnail1.onclick = function () {
        if (thumbnail1.id == 2) {
            var obrazken1 = document.getElementById("img01");
            var obrazko1 = thumbnail1.src;
            mainImage1.style.display = "block";
            obrazken1.src = obrazko1;

            var span1 = document.getElementsByClassName("modal-content")[0];
            span1.onclick = function () {
            mainImage1.style.display = "none";
            }
        }

    }

    //======  2
    var mainImage2 = document.getElementsByClassName("mainImage")[0];
    var thumbnail2 = document.getElementsByClassName("thumbnail")[2];

    thumbnail2.onclick = function () {
        if (thumbnail2.id == 3) {
            var obrazken2 = document.getElementById("img01");
            var obrazko2 = thumbnail2.src;
            mainImage2.style.display = "block";
            obrazken2.src = obrazko2;

            var span2 = document.getElementsByClassName("modal-content")[0];
            span2.onclick = function () {
            mainImage2.style.display = "none";
            }
        }

    }

    var mainImage3 = document.getElementsByClassName("mainImage")[0];
    var thumbnail3 = document.getElementsByClassName("thumbnail")[3];

    thumbnail3.onclick = function () {
        if (thumbnail3.id == 4) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail3.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }

    var thumbnail4 = document.getElementsByClassName("thumbnail")[4];
    thumbnail4.onclick = function () {
        if (thumbnail4.id == 5) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail4.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }
    var thumbnail5 = document.getElementsByClassName("thumbnail")[5];
    thumbnail5.onclick = function () {
        if (thumbnail5.id == 6) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail5.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }
    var thumbnail6 = document.getElementsByClassName("thumbnail")[6];
    thumbnail6.onclick = function () {
        if (thumbnail6.id == 7) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail6.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }

    var thumbnail7 = document.getElementsByClassName("thumbnail")[7];
    thumbnail7.onclick = function () {
        if (thumbnail7.id == 8) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail7.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }

        var thumbnail8 = document.getElementsByClassName("thumbnail")[8];
    thumbnail8.onclick = function () {
        if (thumbnail8.id == 9) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail8.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }

        var thumbnail9 = document.getElementsByClassName("thumbnail")[9];
    thumbnail9.onclick = function () {
        if (thumbnail9.id == 10) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail9.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }

        var thumbnail10 = document.getElementsByClassName("thumbnail")[10];
    thumbnail10.onclick = function () {
        if (thumbnail10.id == 11) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail10.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }
            var thumbnail11 = document.getElementsByClassName("thumbnail")[11];
    thumbnail11.onclick = function () {
        if (thumbnail11.id == 12) {
            var obrazken3 = document.getElementById("img01");
            var obrazko3 = thumbnail11.src;
            mainImage3.style.display = "block";
            obrazken3.src = obrazko3;

            var span3 = document.getElementsByClassName("modal-content")[0];
            span3.onclick = function () {
            mainImage3.style.display = "none";
            }
        }

    }


    /*
    var mainImage = document.getElementsByClassName("mainImage")[0];
    var i = 5;
    var thumbo = document.getElementsByClassName("thumbnail")[i];
    var a = thumbo.id;
    if(a==6){
        thumbo.onclick = function (){
            var obrazken = document.getElementById("img01");
            var obrazko = thumbo.src;
            mainImage.style.display = "block";
            obrazken.src = obrazko;

            var span = document.getElementsByClassName("modal-content")[0];
            span.onclick = function () {
            mainImage.style.display = "none";
            }
        }

    }*/

    //=====================



};

//Obsługa galerii
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
};
