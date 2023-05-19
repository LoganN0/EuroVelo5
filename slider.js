const slide = ['calais_1.png','calais_2.jpg','lens_1.jpeg','lens_2.jpg','lille_1.jpg','lille_2.jpg','marais_audomarois_1.jpg','marais_audomarois_2.jpg','marais_audomarois_3.jpg'];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length -1)
    numero = 0;
    if (numero < slide.lengthc -1)
    numero = 0;
   document.getElementById('slide').src = 'images/Caroussel/' + slide [numero];
}

setInterval("ChangeSlide (1)", 4000)
