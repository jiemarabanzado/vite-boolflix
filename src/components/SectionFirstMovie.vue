<script>
    import {store} from "../store"
    import MoreInfo from "./MoreInfo.vue";
    export default {
        components:{
            MoreInfo
        },

        data(){
            return{
                store,
            }
        },
        methods:{
            ShowMore(temp){
                
                this.store.more=true;
                this.store.toSee=temp;
            }
        }   
    }
    
</script>
<template>
    <div class="section-first" v-if="(this.store.filmAmbient=='home'||this.store.filmAmbient=='film')">
        <div class="movie-data">
            <h2 class="first-title">
                {{this.store.movies[this.store.activeContent].title}}
            </h2>
            <div class="plot">
                {{this.store.movies[this.store.activeContent].overview}}
            </div>
            <div>
                <button @click="ShowMore(this.store.movies[0])">altre info </button>
            </div>
        </div>
    </div>
    <div class="section-first" v-if="(this.store.filmAmbient=='serie')">
        <div class="movie-data">
            <h2 class="first-title">
                {{this.store.series[this.store.activeContent].name}}
            </h2>
            <div class="plot">
                {{this.store.series[this.store.activeContent].overview}}
            </div>
            <div>
                <button @click="ShowMore(this.store.series[0])">altre info </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .section-first{
        height: 400px;
        position: relative;
        .movie-data{
            padding: 15px;
            width: 500px;
            position: absolute;
            /*background-color: rgba(20, 20, 20, 0.5);*/
            bottom: 10%;
            h2{
                color:white;
                font-weight: 400;
                font-size: 3rem;
                
            }
            .plot{
                color: white;
                height: 100px;
                overflow: hidden;
            }
            button{
                padding: 5px 15px;
                background-color: lightgrey;
                color: black;
                border: none;
                cursor: pointer;
            }
        }
    }

</style>