<script>
    import AppCard from './AppCard.vue'
    import AppHeader from './AppHeader.vue'
    import SectionFirstMovie from './SectionFirstMovie.vue'
    import {store} from "../store"
    export default{
        components:{
            AppCard,
            AppHeader,
            SectionFirstMovie
        },
        data(){
            return{
                store,
                
            }
        },
        methods:{
            SeeMore(temp){
                this.store.more=true;
                this.store.toSee=temp;
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="current-window" v-if="(this.store.filmAmbient==true)">Film</div>
        <div class="current-window" v-if="(this.store.filmAmbient==false)">Serie Tv</div>
        <SectionFirstMovie v-if="(this.store.searching==false)"/>
        <!--home scenario-->
        <div class="Sub-category" v-if="this.store.filmAmbient=='home'">Film</div>
        <div class="movies-grid" v-if="this.store.filmAmbient=='home'"> 
            <AppCard @click="SeeMore(movie)" v-if="(this.store.filmAmbient=='home')" v-for="(movie,index) in this.store.movies" :info="movie"/>
        </div>
        <div class="Sub-category" v-if="this.store.filmAmbient=='home'">Serie TV</div>
        <div class="movies-grid" v-if="this.store.filmAmbient=='home'"> 
            <AppCard @click="SeeMore(movie)"  v-if="(this.store.filmAmbient=='home')" v-for="(movie,index) in this.store.series" :info="movie"/>
        </div>
        <!--not home scenario-->

        <div class="movies-grid" v-if="this.store.filmAmbient!='home'"> 
            <AppCard  v-if="( this.store.movies.length>0 && this.store.filmAmbient=='film')" v-for="(movie,index) in this.store.movies" :info="movie"/>
            <AppCard  v-if="( this.store.series.length>0 && this.store.filmAmbient=='serie')" v-for="(movie,index) in this.store.series" :info="movie"/>
        </div>
  </div>
</template>

<style lang="scss" scoped>
    .container{
        max-width: 1300px;
        margin: auto;
        .movies-grid{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
    .current-window{
        color:white;
        font-size: 1.7rem;
        font-weight: 400;
        margin-bottom: 10px;
        position: sticky;
        top:0;
        z-index: 1;
    }
    .Sub-category{
        font-size: 1.7rem;
        color: white;
    }
</style>