<template>
    <div class="card-music mt-3 mb-2 mx-3 d-flex col-12" v-for="(music, index) in musics" :key="index">
        <div class="me-1 text-custom ps-3">#{{index+1}}</div>
        <div class="ms-3">
            <img class="thumb-album" :src="music?.track?.images.coverart ? music?.track?.images.coverart: music?.images.coverart" alt="">
        </div>
        <div class="pt-2 ms-4">
            <p class="text-custom">{{music?.track?.title ? music?.track?.title : music?.title}}</p>
            <a v-if="music?.track" class="link" :href="'artist/'+ music?.track?.artists[0].adamid">
                <p class="text-custom">{{music?.track?.subtitle ? music?.track?.subtitle : music?.subtitle}}</p>
            </a>
            <a v-else class="link" :href="'artist/'+ music?.artists[0]?.adamid">
                <p class="text-custom">{{music?.track?.subtitle ? music?.track?.subtitle : music?.subtitle}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props: ['musics'],
    data() {
      return {
      }
    },
  
    mounted() {
        console.log(this.musics, )
    },
  
    methods: {
      
    },
}
</script>