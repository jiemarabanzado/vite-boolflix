<script >
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppCard from './components/AppCard.vue';
  import AppMain from './components/AppMain.vue';
  import {store} from "./store"
  export default{
    components:{
      AppHeader,
      AppCard,
      AppMain
    },
    data(){
      return{
        store,
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
          });
      axios
          .get("https://api.themoviedb.org/3/tv/popular",{
            params:{
              api_key: '2da07cb365df98260a9f9cdf7219587f',
              language: 'it-IT',
            }
          }).then((response)=>{
            this.store.series = response.data.results;
          })  
    },
    methods :{
      getData(){
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
  <AppHeader @searchMovies="getData"/>
  <AppMain/>
  
</template>

<style lang="scss">
  @import './style/global.scss';
  body{
    background-color: #141414;
  }
  
</style>
