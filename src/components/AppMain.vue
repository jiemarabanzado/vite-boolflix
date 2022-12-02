<script>
    import AppCard from './AppCard.vue'
    import AppHeader from './AppHeader.vue'
    import {store} from "../store"
    export default{
        components:{
            AppCard,
            AppHeader
        },
        data(){
            return{
                store,
                
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="current-window" v-if="(this.store.filmAmbient==true)">Film</div>
        <div class="current-window" v-if="(this.store.filmAmbient==false)">Serie Tv</div>
        <div class="movies-grid">
            <AppCard v-if="( this.store.movies.length>0 && this.store.filmAmbient==true)" v-for="movie in this.store.movies" :info="movie"/>
            <AppCard v-if="( this.store.series.length>0 && this.store.filmAmbient!=true)" v-for="movie in this.store.series" :info="movie"/>
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
        font-size: 2rem;
        margin-bottom: 10px;
        position: sticky;
        top:0;
        z-index: 1;
        background-color: rgba($color: #141414, $alpha: 0.6);
    }
</style>