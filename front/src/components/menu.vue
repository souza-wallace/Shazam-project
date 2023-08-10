<template>
    <div class="ps-5 navbar navbar-expand-lg backgroundColor">
        <router-link to="/" class="navbar-brand text-light"><h5>SEEKER</h5></router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link text-light" aria-current="page" href="#">Favorites</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">PlayLists</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        url: ''
      }
    },
  
    mounted() {
        this.url = window.location.host;
    },
  
    methods: {
      
    },
}
</script>