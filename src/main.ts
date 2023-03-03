let slideIndex: number = 1;
    showSlides(slideIndex);

function plusSlides(n: number): void {
    showSlides(slideIndex += n);
}

function currentSlide(n: number): void {
    showSlides(slideIndex = n);
}

function showSlides(n: number): void {
    let i: number;
    let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        (dots[i] as HTMLElement).className = (dots[i] as HTMLElement).className.replace(" active", "");
    }
    (slides[slideIndex-1] as HTMLElement).style.display = "block";
    (dots[slideIndex-1] as HTMLElement).className += " active";
}

const comicTitle: HTMLElement | null = document.getElementById('comicTitle');
const displayComic: HTMLImageElement | null = document.getElementById('comicSrc') as HTMLImageElement;
const comicAlt: HTMLElement | null = document.getElementById('comicAlt');
const uploadDate: HTMLElement | null = document.getElementById('uploadDate');

interface ComicObj {
    title: string;
    img: string;
    alt: string;
    year: number;
    month: number;
    day: number;
}

async function fetchSomeComic(email: string): Promise<ComicObj> {
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

function handleComic(comicObj: ComicObj): void {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;
    const { title, img, alt, year, month, day} = comicObj;
    if(comicTitle) comicTitle.textContent = title; // Note: never use innerHTML for unsanitized input you don't control
    if(displayComic) {
        displayComic.src = img;
        displayComic.setAttribute('alt', alt);
    };
    if(comicAlt) comicAlt.textContent = alt;
    const date = new Date(year, month, day, 0, 0, 0);
    if(uploadDate) uploadDate.textContent = date.toLocaleDateString(undefined, options);
}

async function getComic(): Promise<void> {
    if(comicTitle) comicTitle.textContent = 'Loading...';
    const email = 'm.wedamerta@innopolis.university';
    const comic = await fetchSomeComic(email);
    handleComic(comic);
};
getComic();