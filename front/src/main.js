import './assets/css/main.css'
import '../font_awesome/css/font-awesome.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import loading from './components/loading.vue';
import music from './components/card-music.vue';
import artist from './components/card-artist.vue';


const app = createApp(App)

app.use(router)

app.component('c-loading', loading);
app.component('c-card-music', music);
app.component('c-card-artist', artist);
app.mount('#app')
