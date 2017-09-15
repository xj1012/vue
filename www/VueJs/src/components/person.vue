<template>
  <div class="personVue">
    <div class="head">
      <div class="head-img">
        <img src="../assets/../assets/image/head.png">
        <p>
          <router-link to="/login"><span class="line">登录</span></router-link>
          <router-link to="/reg"><span>注册</span></router-link>
         </p>
      </div>
      <div class="logo-dbs">
        <div class="dbs-img">
          <img src="../assets/image/logo.png">
        </div>
        <p>全球低价游，满足你世界梦！</p>
      </div>
      <div class="bt"><p class="bt-lf">0关注</p><p>0粉丝</p></div>
    </div>

    <div class="whe">
      <div class="whe-lt whe-br">
        <p class="lf-tp"><img src="../assets/image/flag.png">足迹</p>
        <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
      </div>
      <div class="whe-lt">
        <p class="lf-tp"><img src="../assets/image/heart.png">足迹</p>
        <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
      </div>
    </div>
    <div class="whe">
      <div class="whe-lt whe-br">
        <p class="lf-tp"><img src="../assets/image/in.png">足迹</p>
        <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
      </div>
      <div class="whe-lt">
        <p class="lf-tp"><img src="../assets/image/out.png">足迹</p>
        <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
      </div>
    </div>

    <div class="person">
      <div class="pn-lt">
        <p><img class="img-lf" src="../assets/image/lt_1.png">我的行程<img class="img-rt" src="../assets/image/arr_rt.png"></p>
      </div>
      <div class="pn-lt">
        <p><img class="img-lf" src="../assets/image/lt_2.png">我的帖子<img class="img-rt" src="../assets/image/arr_rt.png"></p>
      </div>
      <div class="pn-lt">
        <p><img class="img-lf" src="../assets/image/lt_3.png">我的收藏<img class="img-rt" src="../assets/image/arr_rt.png"></p>
      </div>
      <div class="pn-lt">
        <p><img class="img-lf" src="../assets/image/lt_4.png">我的问答<img class="img-rt" src="../assets/image/arr_rt.png"></p>
      </div>
      <div class="pn-lt">
        <p><img class="img-lf" src="../assets/image/lt_5.png">我的驴友<img class="img-rt" src="../assets/image/arr_rt.png"></p>
      </div>
      <div class="pn-lt">
        <p><img class="img-lf" src="../assets/image/lt_6.png">我的折扣<img class="img-rt" src="../assets/image/arr_rt.png"></p>
      </div>
      <div class="jg"></div>
    </div>
  </div>
</template>
<script>
  export default {
    //判断本地存储里有没有存的值  若没有则路由跳转
    created(){
      if(!localStorage.getItem('userID')){
        //路由跳转
        this.$router.replace('/login');
      }
    }
  }
</script>
<style>
  @import "../assets/css/person.css";
</style>