const hero = document.getElementById("hero");

// images klasöründeki fotoğraflar
const resimler = [
    "resimler/1.png",
    "resimler/2.png",
    "resimler/3.png",
    
];

let index = 0;

// ilk görsel
hero.style.backgroundImage = `url(${resimler[index]})`;

setInterval(() => {
    index = (index + 1) % resimler.length;
    hero.style.backgroundImage = `url(${resimler[index]})`;
}, 5000); // 5 saniye
