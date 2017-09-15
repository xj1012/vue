<template>
  <div id="app">
    <loading v-show="getLoading"></loading>
    <navbar v-show="getNav"></navbar>
    <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>

    <footbar v-show="getFoot"></footbar>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue';
  import footbar from "./components/footbar.vue";
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    data () {
      return {
        msg: ''
      }
    },
    components:{
      navbar,footbar
    },
    computed:mapGetters(
      ['getNav' ,'getFoot','getLoading']
    ),
    mounted(){
      this.changePath(this.$route.path);
    },
    methods:{
      //路由监听
      changePath:function(path){
        if(/home|follow|chart|detail/.test(path)){
          this.$store.dispatch('showNav');
          this.$store.dispatch('showFoot');
        }
        if(/login|reg|error/.test(path)){
          this.$store.dispatch('hideNav');
          this.$store.dispatch('hideFoot');
        }
        if(/person/.test(path)){
          this.$store.dispatch('hideNav');
          this.$store.dispatch('showFoot');
        }
      }
    },
    //路由监听
    watch:{
      $route (to){
        this.changePath(to.path);
      }
    }

  }
</script>

<style></style>
