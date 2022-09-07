var slide = new Array("imge1.jpg","imge2.jpg","imge3.jpg");
var suivant = 0;

function ChangeImg(a) {
    suivant = suivant + a;
    if (suivant < 0) suivant = slide.length - 1;
    if (suivant > slide.length - 1) suivant = 0;
    document.getElementById("img").src = slide[suivant];
}
