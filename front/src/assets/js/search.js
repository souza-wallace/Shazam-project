import axios from 'axios';
import Axios from 'axios';
import response from '../data/response.json';


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
        searchWord: ''

       
      }
    },
  
    mounted() {
        const alturaTela = window.innerHeight;
        const larguraTela = window.innerWidth;

        console.log(`Altura da tela do navegador: ${alturaTela}px`); 
        console.log(`Altura da tela do navegador: ${larguraTela}px`);    

    },
  
    methods: {
        async search(){
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
                console.log(response,'response')
                this.artists = this.response.artists.hits;
                this.musics = this.response.tracks.hits;
                console.log(this.musics, 'musics');
                console.log(this.artists, 'artists');

                //this.backgroundAvatar = `background-image: url('${this.artist.avatar}')`;

            } catch (error) {
                console.error(error);
            }
        }
    },
  
}