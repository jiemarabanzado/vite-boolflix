<script>
    import {store} from '../store';
    export default{
        components:{
        },
        data(){
            return{
               store, 
               
            }
        }
    }
</script>

<template>
    <header>
        <div class="head-container">
            <div class="logo">
                <img src="../assets/boolflix_logo.png" alt="">
            </div>
            <div class="selection">
                <div>Film</div>
                <div>Serie Tv</div>
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
        div{
            margin-right: 20px;
            opacity: 0.7;
        }
   }
</style>