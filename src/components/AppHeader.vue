<script>
    import {store} from '../store';
    export default{
        components:{
        },
        data(){
            return{
               store, 
               
            }
        },
        methods:{
            ShowFilms(){
                if(this.store.filmAmbient==false){
                    this.store.filmAmbient=true;
                }
            },
            ShowSeries(){
                if(this.store.filmAmbient==true){
                    this.store.filmAmbient=false;
                }
            }
        }
    }
</script>

<template>
    <header>
        <div class="head-container">
            <div class="logo">
                <img onclick="window.location.reload()" src="../assets/boolflix_logo.png" alt="">
            </div>
            <div class="selection">
                <div @click="ShowFilms" class="category" :class="(this.store.filmAmbient==true ? 'active':'')">Film</div>
                <div @click="ShowSeries" class="category" :class="(this.store.filmAmbient!=true ? 'active':'')">Serie Tv</div>
            </div>
            <div>
                <form action="" @submit.prevent>
                    <input type="text" v-model="this.store.textToSearch">
                    <button @click="$emit('searchMovies')" @keyup.enter="$emit('searchMovies')"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </div>
        
    </header>
    
    
</template>

<style lang="scss" scoped>
    input{
        color: white;
        background-color: #141414;
        border: 1px solid white;
        margin-right: 10px;
    }
    button{
        background-color: transparent;
        color: white;
        border: none;
    }
   .head-container{
    max-width: 1300px;
    padding: 15px 0px;
    margin: auto;
    display: flex;
    align-items: center;
   }
   .logo{
        width: 150px;
        margin-right: 30px;
        img{
            width: 100%;
        }
   }
   .selection{
        color: white;
        display: flex;
        flex-grow: 1;
        
   }
   .category{
            margin-right: 20px;
            opacity: 0.5;
        }
   .active{
        opacity: 1;
   }
</style>