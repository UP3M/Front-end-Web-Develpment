let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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
}

const comicTitle = document.getElementById('comicTitle');
const displayComic = document.getElementById('comicSrc')
const comicAlt = document.getElementById('comicAlt')
const uploadDate = document.getElementById('uploadDate')

async function fetchSomeComic(email) {
    const params = new URLSearchParams();
    if (email) {
        params.set('email', email);
    }
    const findId = await fetch('https://fwd.innopolis.app/api/hw2?email=' + params.toString())
    const getId = await findId.json()
    console.log(getId)
    return fetch('https://getxkcd.vercel.app/api/comic?num=' + getId)
        .then(r => r.json());
}

function handleComic(comicObj) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const { title, img, alt, year, month, day} = comicObj;
    comicTitle.textContent = title; // Note: never use innerHTML for unsantized input you don't control
    displayComic.src = img
    comicAlt.textContent = alt
    const date = new Date(Date.UTC(year, month, day, 0, 0, 0));
    uploadDate.textContent = date.toLocaleDateString(undefined, options)
}

async function getComic() {
    comicTitle.textContent = 'Loading...';
    const email = 'm.wedamerta@innopolis.university';
    const comic = await fetchSomeComic(email);
    handleComic(comic);
};
getComic();