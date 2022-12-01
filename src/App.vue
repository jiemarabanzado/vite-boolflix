<script >
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppCard from './components/AppCard.vue';
  import {store} from "./store"
  export default{
    components:{
      AppHeader,
      AppCard
    },
    data(){
      return{
        store,
      }
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
        })
      },
    }
  }
  
</script>

<template>
  <AppHeader @searchMovies="getData"/>

  <div class="container">
    <div class="movies-grid">
      <AppCard v-for="movie in this.store.movies" :info="movie"/>
    </div>
  </div>
</template>

<style lang="scss">
  @import './style/global.scss';
  body{
    background-color: #141414;
  }
  .container{
      max-width: 1300px;
      margin: auto;
      .movies-grid{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
  }
  
</style>
