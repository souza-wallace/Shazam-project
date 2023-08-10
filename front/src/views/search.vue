<template>
  <div class="container-fluid p-0 m-0 row">
    <section class="left backgroundColor p-0 m-0">
        <nav>
            <c-menu></c-menu>
        </nav>
        <article class="col-12 d-flex justify-content-center">
            <div class="div-search">
                <div class="d-flex justify-content-center">
                    <h5 class="subtitle-size bold">search for songs or artists that you like the most</h5>
                </div>
                <div class="input-group mb-3 mt-custom-1">
                    <input type="text" class="form-control" v-model="term" placeholder="can be a word, phrase, artist name or song name"  aria-describedby="button-search">
                    <button class="btn btn-outline-light" type="button" id="button-search" @click="search()">search</button>
                </div>
                <div class="d-flex justify-content-center mt-custom-1">
                    <c-loading v-if="return_api"></c-loading>
                </div>
            </div>
        </article>
    </section>
    <section class="right row" style=""> 
        <article class="col-12">
            <div v-if="return_api" class="d-flex justify-content-center margin-top-custom">
                <c-loading ></c-loading>
            </div>
            <div v-if="!return_api && Object.keys(musics).length != 0">
                <div><h2 class="bold">Artist results for: {{searchWord}}</h2></div>
                <c-card-artist :artists="artists"></c-card-artist>
            </div>
            <div class="mt-4" v-if="!return_api && Object.keys(artists).length != 0">
                <div><h2 class="bold">Most popular songs for: {{searchWord}}</h2></div>
                <div>
                    <c-card-music :musics="musics"></c-card-music>
                </div>
            </div>
            <div>
                <div v-if="!return_api && Object.keys(top_songs).length != 0">
                    <h2 class="bold">Top #10 Globals Músics {{searchWord}}</h2>
                    <c-card-music :musics="top_songs.tracks"></c-card-music>
                </div>
            </div>
        </article>
    </section>
  </div>
</template>

<style scoped>

.subtitle-size{
    font-size: 26px;
}

.div-search{
    margin-top: 100px;
    width: 55%;
}



.left{
    width: 50%;
    height: auto;
    color: #fff;
}

.right{
    width: 50%;
    color: #000;
    height: auto;
    overflow-y: auto; max-height: 100vh;
}

.mt-custom-1{
    margin-top: 135px;
}

.div-image{
    border-radius: 10px;
    width: 747px;
    height: 350px;
    background-size: cover;
    background-position: center;
}

.margin-top-custom{
    margin-top: 40%;
}

</style>

<script src="../assets/js/search.js"></script>
