import axios from 'axios';
import Axios from 'axios';
import response2 from '../data/response_2.json';
import response from '../data/response.json';
import songs from '../data/top_songs_artist.json';
import latest from '../data/latest_release.json';



export default {
    data() {
      return {
        id: this.$route.params.id,
        response2: response2,
        response: response,
        songs: {},
        latest: {},
        artist: {},
        artistData: {},
      }
    },
  
    mounted() {
        this.getDetails();
        this.search();
        this.getTopSongs();
        this.getLatestRelease();
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
                const response = await axios.request(options);
                this.artistData = response.data.data[0].attributes;

                console.log(this.artistData, 'nm')

            } catch (error) {
                console.error(error);
            }
        },

        async search(){
            
            try {
                var artists = {};
                var artist = {};

                // Recuperar os dados do LocalStorage
                const data = localStorage.getItem('artists');

                if (data) {
                    artists = JSON.parse(data);
                }

                artist = artists.filter( dataArtist => dataArtist.artist.adamid == this.id);

                this.artist = artist[0].artist;

                console.log(this.artist, 'qd')

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
            },
            headers: {
                'X-RapidAPI-Key': '22e7a34064mshc9240a31607d2f2p184fa4jsna5bce531e37d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                this.songs = response.data.data;
                this.songs.map(song => song.attributes.playing = false);

            } catch (error) {
                console.error(error);
            }
        },

        async getLatestRelease(){
            const options = {
              method: 'GET',
              url: 'https://shazam.p.rapidapi.com/artists/get-latest-release',
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
                const response = await axios.request(options);
                this.latest = response.data.data;
                
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