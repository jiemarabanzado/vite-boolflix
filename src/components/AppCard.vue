<script>
import { objectToString } from '@vue/shared';

    export default{
        props:{
            info:Object
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-img">
            <img v-if="(info.poster_path != null)" :src="`https://image.tmdb.org/t/p/w1280${info.poster_path}`" :alt="info.title">
            <img v-if="(info.poster_path == null)" src="../assets/no0image.jpg" :alt="info.title">
        </div>
        <div class="hidden-data">
            <div class="movie-title">
                <span>Titolo:</span>{{info.title}}{{info.name}}
            </div>
            <div class="language">
                <span>Lingua-originale:</span>{{info.original_language}}
            </div>
            <div class="original-title">
                <span>Titolo-originale:</span>{{info.original_title}}{{info.original_name}}
            </div>
            <div class="rating">
                <span>Valutazione:</span>{{info.vote_average}}
            </div>
        </div>
        
    </div>

</template>

<style lang="scss" scoped>
    .card{
        width: calc(100%/5 - 20px);
        margin-bottom: 20px;
        position: relative;
        
        &:hover .hidden-data{
            opacity: 1;
        }
    }
    
    .card-img{
        width:100%;
        border-radius: 10px;
        img{
            width: 100%;
            border-radius: 10px;
            object-fit: cover;
        }
    }
    .hidden-data{
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        background-color: black;
        opacity: 0;
        border-radius: 10px;
        padding: 10px;
        span{
            opacity: 0.7;
            margin-right: 5px;
        }
        .movie-title{
            color: white;
            margin-bottom: 10px;
        }
        .original-title{
            color:lightgrey;
            font-size: 0.8rem;
        }
        .rating{
            color:lightgrey;
            font-size: 0.8rem;
        }
        .language{
            color:lightgrey;
            font-size: 0.8rem;
        }
    }
</style>