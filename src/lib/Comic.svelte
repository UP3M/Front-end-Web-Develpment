<script lang='ts'>
let comicTitle: HTMLElement | null = null;
let displayComic: HTMLImageElement | null = null;
let comicAlt: HTMLElement | null = null;
let uploadDate: HTMLElement | null = null;

interface ComicObj {
    title: string;
    img: string;
    alt: string;
    year: string
    month: string;
    day: string;
}

async function fetchSomeComic(email: string): Promise<ComicObj> {
    const params = new URLSearchParams();
    if (email) {
        params.set('email', email);
    }
    const findId = await fetch('https://fwd.innopolis.app/api/hw2?email=' + params.toString())
    const getId: ComicObj = await findId.json()
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
    const date = new Date(parseInt(year), parseInt(month), parseInt(day));
    if(uploadDate) uploadDate.textContent = date.toLocaleDateString(undefined, options);
}

async function getComic(): Promise<void> {
    if(comicTitle) comicTitle.textContent = 'Loading...';
    const email = 'm.wedamerta@innopolis.university';
    const comic = await fetchSomeComic(email);
    handleComic(comic);
};
getComic();

</script>
<div>
<h2>XKCD comic</h2>
<h3 bind:this={comicTitle} style="text-align: center;">title</h3>
<p bind:this={comicAlt}></p>
<img src='https://anatomised.com/wp-content/uploads/2016/05/spinner-test4.gif' bind:this={displayComic} class="comic" alt="XKCD comic"/>
<p bind:this={uploadDate} style="text-align: center;"></p>
</div>

<style>
.comic {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>