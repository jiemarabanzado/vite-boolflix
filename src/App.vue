<script >
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppCard from './components/AppCard.vue';
  import AppMain from './components/AppMain.vue';
  import MoreInfo from './components/MoreInfo.vue';
  import SectionFirstMovie from './components/SectionFirstMovie.vue';
  import {store} from "./store"
  export default{
    components:{
      AppHeader,
      AppCard,
      AppMain,
      SectionFirstMovie,
      MoreInfo
    },
    data(){
      return{
        store,
        movie:[],
        unOrdered:[]
      }
    },
    created(){
      //getting movies

      axios
          .get("https://api.themoviedb.org/3/movie/popular",{
            params:{
              api_key: '2da07cb365df98260a9f9cdf7219587f',
              language: 'it-IT',
            }
          }).then((response)=>{
            const temp=response.data.results;
            for (let index = 0; index < temp.length; index++) {
              const id=temp[index].id;
              axios.get(`https://api.themoviedb.org/3/movie/${id}`,{         
                params:{
                  api_key: '2da07cb365df98260a9f9cdf7219587f',
                  language: 'it-IT',
                  append_to_response : 'videos'
                }
              }).then((response)=>{ 
                  console.log('ciao',response.data)
                  this.store.movies.push(response.data)                      
              });
            }
            console.log('temporary',temp[0].id)
            console.log('unorder',this.unOrdered)
            console.log('finale',this.store.movies)
          });   


          //getting series 
      axios
          .get("https://api.themoviedb.org/3/tv/popular",{
            params:{
              api_key: '2da07cb365df98260a9f9cdf7219587f',
              language: 'it-IT',
            }
          }).then((response)=>{
            console.log('popular',response.data.results)
            //this.store.series = response.data.results;
            //console.log(this.store.series)
            const temp=response.data.results;
            for (let index = 0; index < temp.length; index++) {
              const id=temp[index].id;
              console.log(id)
              axios.get(`https://api.themoviedb.org/3/tv/${id}`,{         
                params:{
                  api_key: '2da07cb365df98260a9f9cdf7219587f',
                  language: 'it-IT',
                  append_to_response : 'videos'
                }
              }).then((response)=>{
                this.store.series.push(response.data);    
              });
              
            } 
            console.log('final popular tv',this.store.series) 
          }); 
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
  <MoreInfo/>
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
