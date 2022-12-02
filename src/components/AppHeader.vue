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
                if(this.store.filmAmbient!='film'){
                    this.store.filmAmbient='film'
                }
            },
            ShowSeries(){
                if(this.store.filmAmbient!='serie'){
                    this.store.filmAmbient='serie';
                }
            },
            ShowHome(){
                if(this.store.filmAmbient!='home'){
                    this.store.filmAmbient='home';
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
                <div onclick="window.location.reload()" class="category" :class="(this.store.filmAmbient=='home' ? 'active':'')">Home</div>
                <div @click="ShowFilms" class="category" :class="(this.store.filmAmbient=='film' ? 'active':'')">Film</div>
                <div @click="ShowSeries" class="category" :class="(this.store.filmAmbient=='serie' ? 'active':'')">Serie Tv</div>
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
        width: 100px;
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
            cursor: pointer;
        }
   .active{
        opacity: 1;
        
   }
   header{
    background-image: linear-gradient(#141414,transparent);
   }
</style>