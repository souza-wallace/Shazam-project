<template>
    <div class="card-music mt-3 mb-2 mx-3 d-flex justify-content-between" v-for="(music, index) in musics" :key="index">
        <div class="d-flex">
            <div class="ms-3 d-flex">
                <p class="me-2 text-custom ps-2 subtitle">#{{index+1}}</p>
                <img class="thumb-album" :src="music?.track?.images.coverart ? music?.track?.images.coverart: music?.images.coverart" alt="">
            </div>
            <div class="pt-2 ms-4">
                <p class="text-custom">{{music?.track?.title ? music?.track?.title : music?.title}}</p>
                <a v-if="music?.track" class="link" :href="'artist/'+ music?.track?.artists[0].adamid">
                    <p class="text-custom subtitle">{{music?.track?.subtitle ? music?.track?.subtitle : music?.subtitle}}</p>
                </a>
                <a v-else class="link" :href="'artist/'+ music?.artists[0]?.adamid">
                    <p class="text-custom subtitle">{{music?.track?.subtitle ? music?.track?.subtitle : music?.subtitle}}</p>
                </a>
            </div>
        </div>
        <div class="me-3">
            <i v-if="music.favorite" class="fa fa-heart" @click="music.favorite = false"></i>
            <i v-else class="fa fa-heart-o" @click="music.favorite = true" aria-hidden="true"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: ['musics'],
    data() {
      return {
        favorite: false
      }
    },
  
    mounted() {
    },
  
    methods: {
      
    },
}
</script>