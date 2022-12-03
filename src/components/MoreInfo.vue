<script>
    import  {store} from "../store"
    export default{
        data(){
            return{
                store
            }
        },
        methods:{
            CloseMore(){
                this.store.more=false;
                
            }
        }
    }
</script>

<template>
    <div class="pre-container" v-if="(this.store.more==true)">
        <div class="more">
            <div class="video" v-if="(this.store.toSee.videos.results.lenght!=0)">
                <iframe  width="560" height="315" :src="`https://www.youtube.com/embed/${this.store.toSee.videos.results[0].key}?controls=0&autoplay=1`"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <i @click="CloseMore" class="fa-solid fa-xmark"></i>
            <div class="MoreTitle">
                {{this.store.toSee.title}}{{this.store.toSee.name}}
            </div>
            <div class="MoreOriginal">
                <span>Titolo originale:</span>{{this.store.toSee.original_title}}{{this.store.toSee.original_name}}
            </div>
            <div class="PrePlot">
                Trama:
            </div>
            <div class="MorePlot">
                {{this.store.toSee.overview}}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .pre-container{
        position: fixed;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: rgba(20, 20, 20, 0.7);
        .more{
            background-color: rgba(20, 20, 20, 1);
            width: 700px;
            height: 100%;
            margin: auto;
            position: relative;
            padding: 15px;
            .video{
                text-align: center;
            }
            i{
                color: white;
                font-size: 2rem;
                position: absolute;
                top:0;
                right: 2%;
            }
            .MoreTitle{
                color:white;
                font-size: 2rem;
                text-align: center;
            }
            .PrePlot{
                color: white;
                opacity:0.6;
            }
            .MorePlot{
                color: white;
            }
            .MoreOriginal{
                color: white;
                opacity: 1;
                font-size: 1.2rem;
                margin-bottom: 10px;
                span{
                    margin-right: 10px;
                    opacity: 0.6;
                    font-size: 1rem;
                }
            }
        
        }
    }
</style>