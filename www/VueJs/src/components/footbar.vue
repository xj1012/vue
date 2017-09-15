<template>
  <div class="footbar">
    <footer>
      <router-link to="/home" active-class="act">
        <div class="foot">
          <img src="../assets/image/ft_1.png">
          <p>首页</p>
        </div>
      </router-link>

      <router-link to="/follow" active-class="act">
        <div class="foot">
          <img src="../assets/image/ft_2.png">
          <p>推荐</p>
        </div>
      </router-link>

      <router-link to="/chart" active-class="act">
        <div class="foot">
          <img src="../assets/image/ft_3.png">
          <p>帖子</p>
        </div>
      </router-link>
      <router-link to="/person" active-class="act">
        <div class="foot">
          <img src="../assets/image/ft_4.png">
          <p @click="has">我的</p>
        </div>
      </router-link>

    </footer>
  </div>
</template>
<script>
  export default {
    methods:{
      has(){
        if(!localStorage.userID){
          this.$router.replace('/login');
        }

      }
    }
  }
</script>