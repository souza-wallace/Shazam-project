import axios from 'axios';
import Axios from 'axios';

export default {
    data() {
      return {
       
      }
    },
  
    mounted() {
        this.search();
    },
  
    methods: {
        async search(){
            const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: {
                term: 'kiss the rain',
                locale: 'en-US',
                offset: '0',
                limit: '5'
            },
            headers: {
                'X-RapidAPI-Key': '22e7a34064mshc9240a31607d2f2p184fa4jsna5bce531e37d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
     
    },
  
}