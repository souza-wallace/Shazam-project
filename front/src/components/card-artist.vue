<template>
   <div class="card-music mt-3 mb-2 mx-3 d-flex col-12 " v-for="(artist, index) in artists" :key="index">
        <div class="me-1 text-custom ps-3">#{{index+1}}</div>
        <div class="ms-3">
            <a class="link" :href="`artist/${artist.artist.adamid}`">
                <img class="thumb-album" :src="artist.artist.avatar" alt="">
            </a>    
        </div>
        <div class="pt-4 ms-4">
            <a class="link" :href="`artist/${artist.artist.adamid}`">
                <p class="text-custom">{{artist.artist.name}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props: ['artists'],
    data() {
      return {
      }
    },
  
    mounted() {
    },
  
    methods: {
      
    },
}
</script>