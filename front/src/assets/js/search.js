import axios from 'axios';
import Axios from 'axios';
//data  api 
//import response from '../data/response.json';
//import globalSongs from '../data/top_global_songs.json';


export default {
    data() {
      return {
        term: '',
        artists: {},
        musics: {},
        backgroundAvatar: '',
        searchWord: '',
        return_api: false,
        top_songs: {},
      }
    },
  
    mounted() {
        this.getTopGlobaslSongs();
    },
  
    methods: {
        async search(){
            this.top_songs = {};
            this.return_api = true;
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
                const response = await axios.request(options);
                this.artists = response.data.artists.hits;
                this.musics = response.data.tracks.hits;
                this.return_api = false;
                this.musics.map( music =>music.track.favorite = false);

                localStorage.setItem('artists', JSON.stringify(this.artists));
                localStorage.setItem('searchWord', JSON.stringify(this.term));

            } catch (error) {
                console.error(error);
            }
        },

        async getTopGlobaslSongs(){
            this.return_api = true;

            const options = {
              method: 'GET',
              url: 'https://shazam.p.rapidapi.com/charts/track',
              params: {
                locale: 'en-US',
                pageSize: '10',
              },
              headers: {
                'X-RapidAPI-Key': '22e7a34064mshc9240a31607d2f2p184fa4jsna5bce531e37d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
              }
            };
            
            try {
                const response = await axios.request(options);
                this.top_songs = response.data;

                //set a default value for use in component
                this.top_songs.tracks.map( music =>music.favorite = false);

                this.return_api = false;
            } catch (error) {
                console.error(error);
            }
        }
    },
  
}