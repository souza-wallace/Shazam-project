<template>
  <div class="container-fluid p-0 m-0 row">
    <div class="left backgroundColor p-0 m-0">
        <nav class="ps-5 navbar navbar-expand-lg backgroundColor">
            <a class="navbar-brand bold" href="#"><h5>Shazam</h5></a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link bold" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link bold" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link bold" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="col-12 d-flex justify-content-center">
            <div class="div-search">
                <div class="d-flex justify-content-center">
                    <h5 class="subtitle bold">Encontre suas Músicas Favoritas</h5>
                </div>
                <div class="input-group mb-3 mt-custom-1">
                    <input type="text" class="form-control" v-model="term" placeholder="can be a word, phrase, artist name or song name"  aria-describedby="button-search">
                    <button class="btn btn-outline-light" type="button" id="button-search" @click="search()">Buscar</button>
                </div>
                <div class="d-flex justify-content-center mt-custom-1">
                    <c-loading></c-loading>
                </div>
            </div>
        </div>
    </div>
    <div class="right row" style=""> 
        <div class="col-12">
            <div><h2 class="bold">Resultados de artistas para {{searchWord}}</h2></div>
            <c-card-artist :artists="artists"></c-card-artist>
        </div>
        <div class="mt-4">
            <div><h2 class="bold">Músicas mais populares para {{searchWord}}</h2></div>
            <div>
                <c-card-music :musics="musics"></c-card-music>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

.subtitle{
    font-size: 26px;
}

.backgroundColor{
    background: #000;
    /*background: linear-gradient(90deg, rgba(65,92,212,1) 17%, rgba(6,106,255,1) 58%, rgba(0,212,255,1) 100%);*/
}

.div-search{
    margin-top: 100px;
    width: 55%;
}

nav a, li a{
    color: #fff;
}

.left{
    width: 50%;
    height: auto;
    color: #fff;
}

.right{
    width: 50%;
    color: #000;
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

</style>

<script src="../assets/js/search.js"></script>
