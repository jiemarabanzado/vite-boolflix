import {reactive} from 'vue';
export const store = reactive({
    textToSearch:'',
    movies:[],
    series:[],
    activeContent:0,
    filmAmbient:'home',
    searching:false,
    more:false,
    toSee:[],
});