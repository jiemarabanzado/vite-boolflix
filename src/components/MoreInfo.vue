<script>
    import  {store} from "../store"
    export default{
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="pre-container" v-if="(this.store.more==true)">
        <div class="more">
            <div class="what">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .pre-container{
        position: absolute;
        z-index: 1000;
        width: 100vw;
        height: 100%;
        background-color: rgba(20, 20, 20, 0.5);
        .more{
            background-color: red;
            width: 700px;
            height: 100%;
            margin: auto;
        
        }
    }
</style>