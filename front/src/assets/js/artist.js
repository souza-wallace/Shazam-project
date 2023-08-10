import axios from 'axios';
import Axios from 'axios';
import response2 from '../data/response_2.json';
import response from '../data/response.json';
import albums from '../data/top_songs_artist.json';
import latest from '../data/latest_release.json';



export default {
    data() {
      return {
        id: this.$route.params.id,
        response2: response2,
        response: response,
        albums: albums,
        latest: latest,
        artist: {},
        artistData: {},
      }
    },
  
    mounted() {
        this.getDetails();
        this.search();
        this.getTopSongs();
        this.getLatestRelease();
        this.albums.data.map(song => song.attributes.playing = false);
    },
  
    methods: {
        async getDetails(){
            const options = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/artists/get-details',
                params: {
                    id: this.id,
                },
                headers: {
                    'X-RapidAPI-Key': '22e7a34064mshc9240a31607d2f2p184fa4jsna5bce531e37d',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };

            try {
                //const response = await axios.request(options);
                this.artistData = this.response2.data[0].attributes;

            } catch (error) {
                console.error(error);
            }
        },

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
                console.log(this.response,'response')
                var artist = {};

                artist = this.response.artists.hits.filter( dataArtist => dataArtist.artist.adamid == "3996865")
                this.artist = artist[0].artist;
            } catch (error) {
                console.error(error);
            }
        },


        async getTopSongs(){
            const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
            params: {
                id: this.id,
                l: 'en-US'
            },
            headers: {
                'X-RapidAPI-Key': '22e7a34064mshc9240a31607d2f2p184fa4jsna5bce531e37d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
            };

            try {
                //const response = await axios.request(options);
                console.log(albums.data, 'albums');
            } catch (error) {
                console.error(error);
            }
        },

        async getLatestRelease(){
            const options = {
              method: 'GET',
              url: 'https://shazam.p.rapidapi.com/artists/get-latest-release',
              params: {
                id: '3996865',
                l: 'en-US'
              },
              headers: {
                'X-RapidAPI-Key': '22e7a34064mshc9240a31607d2f2p184fa4jsna5bce531e37d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
              }
            };
            
            try {
                //const response = await axios.request(options);
                
            } catch (error) {
                console.error(error);
            }
        },

        playPause(index, song) {
            const track = this.$refs['track' + index][0];
            
            if (track.paused && song.playing == false) {
              track.play();
              song.playing = true;
            } else {
              song.playing = false;
              track.pause();
            }
        },
    },
}