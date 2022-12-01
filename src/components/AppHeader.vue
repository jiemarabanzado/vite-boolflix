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
    <form action="" @submit.prevent>
        <input type="text" v-model="this.store.textToSearch">
        <button @click="$emit('searchMovies')" @keyup.enter="$emit('searchMovies')">Cerca</button>
    </form>
    
</template>

<style lang="scss" scoped>
   form{
    margin-bottom: 20px;
   }
</style>