<template>
  <div class="navbar">
    <header>
      <i class="logo" @click="goBack"></i>
      <a href="#">
        <div class="sch">
          <p><img src="../assets/image/sch.png">搜索目的地、帖子、景点</p>
        </div>
      </a>
    </header>
  </div>
</template>
<script>
  export default {
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>