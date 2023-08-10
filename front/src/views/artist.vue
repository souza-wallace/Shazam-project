<template class="container">
    <main class="b">
        <nav>
            <c-menu></c-menu>
        </nav>
        <section class="d-flex">
            <article class="ms-5 pt-5 block">
                <img class="thumb-profile" :src="artist.avatar" alt="">
            </article>
            <article class="ms-5 pt-5 block">
                <h3 class="title">{{artistData ? artistData?.editorialNotes?.name : ""}}</h3>
                <p class="text">{{artistData ? artistData?.editorialNotes?.standard : ""}}</p>
                <p class="genderTag px-3" v-for="(genderName, index) in artistData?.genreNames" :key="index">{{genderName}}</p>
            </article>
        </section>
        <section>
            <article class=" m row d-flex justify-content-center">
                <div class="ms-5 mt-4"><h2 class="bold">Top #10 de {{artist.name}}</h2></div>
                <div class="card-music my-5 mb-2 mx-3 col-3 d-flex border b2" v-for="(album, index) in albums.data" :key="index">
                    <div class="me-1 text-custom ps-3"></div>
                    <div>
                        <audio :ref="'track' + index">
                            <source :src="album.attributes.previews[0].url" type="audio/mpeg" />
                        </audio>
                        <div class="player-container" @click="playPause(index, album.attributes)" v-if="album.attributes.playing">
                            <div :ref="'playPause' + index" class="play-pause"><i class="fa fa-stop-circle" aria-hidden="true"></i></div>
                        </div>
                        <div class="player-container" @click="playPause(index, album.attributes)" v-else>
                            <div :ref="'playPause' + index" class="play-pause"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <div class="pt-2 ms-4">
                        <p class="pt-1 text-custom">#{{ index + 1 }} - {{ album.attributes.name }}</p>
                    </div>
                </div>
            </article>
        </section>

        <section>
            <article class=" m row d-flex justify-content-center">
                <div class="ms-5 mt-4"><h2 class="bold">Ultimo lançamento de {{artist.name}}</h2></div>
                <div class="ms-5">
                    <div>
                        <p>{{this.latest.data[0].attributes.name}}</p>
                    </div>
                    <div>
                        <p>{{this.latest.data[0].attributes.releaseDate}}</p>
                    </div>
                    <div>
                        <p>{{this.latest.data[0].attributes.editorialNotes.short}}</p>
                    </div>
                </div>
            </article>
        </section>
    </main>
</template>
<style scoped>
.m{
    margin: 30px 60px;
    border-radius: 10px;
}
.b{
    background-color: #000;
    height: 300px;
}

.b2{
    background-color: #F5F5F5;
    height: auto;
}

.block{
    max-width: 600px;
}

.genderTag{
    position: absolute;
    max-height: 40px;
    width: auto;
    background-color: #F5F5F5;
    border-radius: 10px;
    margin-top: 35px;
    color: black;
    font-weight: bold;
}
 i{
    font-size: 50px;
 }

</style>
<script src="../assets/js/artist.js"></script>
