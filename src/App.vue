<script >
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppCard from './components/AppCard.vue';
  import AppMain from './components/AppMain.vue';
  import SectionFirstMovie from './components/SectionFirstMovie.vue';
  import {store} from "./store"
  export default{
    components:{
      AppHeader,
      AppCard,
      AppMain,
      SectionFirstMovie
    },
    data(){
      return{
        store,
        movie:[]
      }
    },
    created(){
      axios
          .get("https://api.themoviedb.org/3/movie/popular",{
            params:{
              api_key: '2da07cb365df98260a9f9cdf7219587f',
              language: 'it-IT',
              
            }
          }).then((response)=>{
            this.store.movies = response.data.results;
            console.log(this.store.movies)
          });
      axios
          .get("https://api.themoviedb.org/3/movie/436270",{
            params:{
              api_key: '2da07cb365df98260a9f9cdf7219587f',
              language: 'it-IT',
              append_to_response : 'videos'
              
            }
          }).then((response)=>{
            console.log(response)
          });    
      axios
          .get("https://api.themoviedb.org/3/tv/popular",{
            params:{
              api_key: '2da07cb365df98260a9f9cdf7219587f',
              language: 'it-IT',
            }
          }).then((response)=>{
            this.store.series = response.data.results;
            console.log(this.store.series)
          });
      axios
          .get("https://api.themoviedb.org/3/tv/119051",{
            params:{
              api_key: '2da07cb365df98260a9f9cdf7219587f',
              language: 'it-IT',
              append_to_response : 'videos'
            }
          }).then((response)=>{
            
            console.log(response)
          })  
    },
    methods :{
      getData(){
        this.store.searching=true;
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params :{
            api_key: '2da07cb365df98260a9f9cdf7219587f',
            query:this.store.textToSearch,
            language: 'it-IT',
          }
        }).then((response)=>{
          this.store.movies = response.data.results;
        }).catch((err)=>{
          console.log('error');
        });

        axios.get('https://api.themoviedb.org/3/search/tv',{
          params :{
            api_key: '2da07cb365df98260a9f9cdf7219587f',
            query:this.store.textToSearch,
            language: 'it-IT',
          }
        }).then((resp)=>{
          this.store.series= resp.data.results;
        })
      },
    }
  }
  
</script>

<template>
  <div class="background" v-if="(this.store.filmAmbient=='home' && this.store.searching==false)">
    <div class="img-gradient">
      <img :src="`https://image.tmdb.org/t/p/w1280${this.store.movies[this.store.activeContent].backdrop_path}`" alt="">
    </div>
  </div>
  <div class="background" v-if="(this.store.filmAmbient=='film' && this.store.searching==false)">
    <div class="img-gradient">
      <img :src="`https://image.tmdb.org/t/p/w1280${this.store.movies[this.store.activeContent].backdrop_path}`" alt="">
    </div>
  </div>
  <div class="background" v-if="(this.store.filmAmbient=='serie' && this.store.searching==false)">
    <div class="img-gradient">
      <img :src="`https://image.tmdb.org/t/p/w1280${this.store.series[this.store.activeContent].backdrop_path}`" alt="">
    </div>
  </div>
  <AppHeader @searchMovies="getData"/>
  <AppMain/>
  
</template>

<style lang="scss">
  @import './style/global.scss';
  body{
    background-color: #141414;
    position: relative;
    
  }
  .background{
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    z-index: -1;
    top: 0;
  }
  .img-gradient img{
    width: 100%;
  }
  .img-gradient{
    width: 100%;
    position: relative;
  }
  .img-gradient::after {
  display: block;
  position: absolute;
  background-image: linear-gradient(transparent 45%,#141414 65%);
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  content: '';
}
</style>
