<script>
    import AppCard from './AppCard.vue'
    import {store} from "../store"
    export default{
        components:{
            AppCard
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
    <div class="movies-grid">
      <AppCard v-if="( this.store.movies.length>0)" v-for="movie in this.store.movies" :info="movie"/>
        <AppCard v-if="( this.store.series.length>0)" v-for="movie in this.store.series" :info="movie"/>
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
</style>