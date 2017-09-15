<template>
  <div class="detailVue" v-show="showDom">
    <div id="content">
      <div class="detail">
        <div class="left">
          <img :src="detail.image" >
          <a>立即预定</a>
        </div>
        <div class="right">
          <div class="right-t">
            <h3>{{detail.title}}</h3>
          </div>
          <p class="des">
            {{detail.content}}
          </p>
          <p class="price">
            <span class="discount">{{detail.discount}}</span>
            <span class="num"><big>{{detail.price}}</big>元起</span>
          </p>
        </div>
      </div>
      <ul v-if="detail.imagedev">
        <li><img :src="detail.imagedev.img1"></li>
        <li><img :src="detail.imagedev.img2"></li>
        <li><img :src="detail.imagedev.img3"></li>
        <li><img :src="detail.imagedev.img4"></li>
        <li><img :src="detail.imagedev.img5"></li>
      </ul>

    </div>
  </div>
</template>
<script>
  export  default {
    data(){
      return {
        detail:{},
        showDom:false
      }
    },
    created(){
        this.$store.dispatch('showLoading');
        setTimeout(()=>{
          this.$http({
            url:"http://localhost:3000/detail"
          }).then((res)=>{
            this.$store.dispatch('hideLoading');
            this.detail=res.data[this.$route.params.id-1];
          }).catch((res)=>{
            console.log(res);
          });
          this.showDom=true;
        },2000)



    }
  }
</script>
<style scoped>
  @import "../assets/css/detail.css";
</style>