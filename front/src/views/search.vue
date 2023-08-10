<template>
  <div class="container-fluid p-0 m-0 row">
    <nav class="ps-5 navbar navbar-expand-lg backgroundColor">
            <a class="navbar-brand" href="#"><h5>Shazam</h5></a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
    </nav>
    <div class="col-12 d-flex justify-content-center area-search backgroundColor">
        <div class="div-search">
            <div class="d-flex justify-content-center mb-5">
                <h5 class="subtitle">Encontre suas Músicas Favoritas</h5>
            </div>
            <input class="form-control form-control-lg" type="text" placeholder="can be a word, phrase, artist name or song name">
        </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
        <h5>area de resultado</h5>
    </div>
  </div>
</template>

<style scoped>
.area-search{
    height: 300px;
}

.backgroundColor{
    background: linear-gradient(90deg, rgba(65,92,212,1) 17%, rgba(6,106,255,1) 58%, rgba(0,212,255,1) 100%);
}

.div-search{
    margin-top: 100px;
    width: 800px;
}

nav a, li a{
    color: #fff;
}

</style>

