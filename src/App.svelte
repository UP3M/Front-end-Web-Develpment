<script lang="ts">
  import Side from './lib/Side.svelte';
  import Comic from './lib/Comic.svelte';
  import Hometown from './lib/Hometown.svelte';
  import About from './lib/About.svelte';
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<main>
  <Header />
  <div class="row">
    <div class="side">
      <Side />
    </div>
    <div class="main">
      <About />
      <Hometown />
      <Comic />
    </div>
  </div> 
  <Footer />
  
</main>

<style>
/* Column container */
.row {  
  display: -ms-flexbox; /* IE10 */
  display: flex;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {   
  -ms-flex: 70%; /* IE10 */
  flex: 70%;
  background-color: white;
  padding: 20px;
}

</style>