<script lang='ts'>
  import { onMount } from 'svelte';

  let slideIndex: number = 1;

  function plusSlides(n: number): void {
    showSlides(slideIndex += n);
  }

  function showSlides(n: number): void {
    let i: number;
    let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    (slides[slideIndex-1] as HTMLElement).style.display = "block";
  }

  onMount(() => {
    showSlides(slideIndex);
  });
</script>

<h2>About My Hometown</h2>
<h3>Bali, Indonesia</h3>
    <div class="slideshow-container">
    
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="https://th.bing.com/th/id/R.bedf92f28e109a308d5a18d841d6b900?rik=ok1ziYGyFmM0Mw&pid=ImgRaw&r=0" alt="Beratan Tample" style="width:100%">
          <div class="text">Beratan Tample</div>
        </div>
      
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="https://th.bing.com/th/id/R.d4104c9b6be70e7cb8490bfdcf912ee9?rik=UrfWVOm6ktjxbg&pid=ImgRaw&r=0" alt="Tegenungan Waterfall" style="width:100%">
          <div class="text">Tegenungan Waterfall</div>
        </div>
      
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="https://th.bing.com/th/id/R.0d5e36141b3a6c289ceae59611e86da1?rik=Tg4qxWzjxQNO4A&riu=http%3a%2f%2fwww.hamsavahini.com%2fwp-content%2fuploads%2f2019%2f07%2fTanah-Lot-Temple.jpg&ehk=DYXwpk2mko%2fuJmcmml%2f0%2fb814jX608zIDsJvbxdKecg%3d&risl=&pid=ImgRaw&r=0" alt="Tanah Lot" style="width:100%">
          <div class="text">Tanah Lot</div>
        </div>
      
        <!-- Next and previous buttons -->
        <button class="prev" on:click={ () => plusSlides(-1) }>&#10094;</button>
        <button class="next" on:click={() => plusSlides(-1)}>&#10095;</button>
      </div>
      
      
    <p>Bali is unique, Bali is unmatched</p>
    <p>There is no other place like Bali in this world. 
            A magical blend of culture, people, nature, activities, 
            weather, culinary delights, nightlife, and beautiful accommodation. 
            Bali is rated as one of the best travel destinations in the world by countless websites, 
            review portals, and travel magazines each year – for very good reasons. 
            Whatever your age, background, budget or interest,
            there is something great for everyone to explore and discover. And that’s a promise.</p>
    
            
<style>
/* Slideshow container */
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
  background-color: #bbb;
}

.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
  background-color: #bbb;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 25px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}


/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 25px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>