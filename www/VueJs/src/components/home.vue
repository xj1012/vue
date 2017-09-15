<template>
  <div  class="home" v-show="showDom">

    <div id="_contain">
      <slider></slider>

      <div class="menu">
        <router-link tag="div" to="/follow">
          <div class="nav">
            <img src="../assets/image/nav_1.png">
            <p>看攻略</p>
          </div>
        </router-link>
        <router-link tag="div" to="/follow">
          <div class="nav">
            <img src="../assets/image/nav_2.png">
            <p>抢折扣</p>
          </div>
        </router-link>
        <router-link tag="div" to="/follow">
          <div class="nav">
            <img src="../assets/image/nav_3.png">
            <p>定酒店</p>
          </div>
        </router-link>
        <router-link tag="div" to="/follow">
          <div class="nav">
            <img src="../assets/image/nav_4.png">
            <p>找附近</p>
          </div>
        </router-link>
      </div>

      <div class="name">
        <router-link tag="p" to="/follow">
        <p>旅游推荐</p>
        </router-link>
      </div>

      <div class="contain">
        <div class="ad">
          <!--<router-link tag="img" to=""></router-link>-->
          <img src="../assets/image/rcd_1.png">
        </div>
          <router-link tag="div" to="/follow">
            <div class="ad-left">
            <img src="../assets/image/scenic_1.png">
            </div>
          </router-link>
          <router-link tag="div" to="/follow">
            <div class="add-right">
            <img src="../assets/image/scenic_2.png">
            </div>
          </router-link>

      </div>

      <div class="name">
        <p>折扣游</p>
      </div>

      <div class="favorable">
        <div class="fb" v-for="(item,index) in arr" :key="index">
        <router-link  tag="div" :to="'/detail/'+item.id">
            <div class="fb-lt">
              <img :src="item.image">
              <p class="fb-name">{{item.title}}</p>
              <p class="price">
                <span class="discount">{{item.discount}}</span>
                <span class="num"><big>{{item.price}}</big>元起</span>
              </p>
            </div>
        </router-link>
        </div>
      </div>

      <div class="more">
        <p>全球低价游<img src="../assets/image/arr-right.png"></p>
      </div>

    </div>

  </div>
</template>
<script>
  import slider from'./slider.vue';
  export default {
    data(){
      return {
        arr:[],
        det:[],
        showDom:false
      }
    },
    components:{
      slider
    },
    created(){
      this.$store.dispatch('showLoading');
      setTimeout(()=>{
        this.$http({
          url:"http://localhost:3000/index"
        }).then((res)=>{
          this.$store.dispatch('hideLoading');
          console.log(res)
          this.arr=res.data;
        }).catch((res)=>{
          console.log(res);
        });
        this.showDom=true;
      },2000);
    }
  }

</script>
<style>
  @import "../assets/css/index.css";
</style>