import axios from 'axios';
import Axios from 'axios';
import response from '../data/response.json';
import globalSongs from '../data/top_global_songs.json';


export default {
    data() {
      return {
        term: '',
        results: {
        },
        artists: {},
        musics: {},
        response: response,
        backgroundAvatar: '',
        searchWord: '',
        sync: false,
        top_songs: globalSongs,
      }
    },
  
    mounted() {
        const alturaTela = window.innerHeight;
        const larguraTela = window.innerWidth;

        console.log(`Altura da tela do navegador: ${alturaTela}px`); 
        console.log(`Altura da tela do navegador: ${larguraTela}px`);    
        this.getTopGlobaslSongs();
    },
  
    methods: {
        async search(){
            this.sync = true;
            this.searchWord = this.term;
            const options = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/search',
                params: {
                    term: this.term,
                    offset: '0',
                    limit: '6'
                },
                headers: {
                    'X-RapidAPI-Key': '22e7a34064mshc9240a31607d2f2p184fa4jsna5bce531e37d',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };

            try {
                //const response = await axios.request(options);
                this.artists = this.response.artists.hits;
                this.musics = this.response.tracks.hits;
                this.sync = false;

                //this.backgroundAvatar = `background-image: url('${this.artist.avatar}')`;

            } catch (error) {
                console.error(error);
            }
        },

        async getTopGlobaslSongs(){
            const options = {
              method: 'GET',
              url: 'https://shazam.p.rapidapi.com/charts/track',
              params: {
                locale: 'en-US',
                pageSize: '20',
              },
              headers: {
                'X-RapidAPI-Key': '22e7a34064mshc9240a31607d2f2p184fa4jsna5bce531e37d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
              }
            };
            
            try {
                //const response = await axios.request(options);
                console.log(this.top_songs);
            } catch (error) {
                console.error(error);
            }
        }
    },
  
}