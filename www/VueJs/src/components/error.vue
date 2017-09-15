<template>
  <div class="error">
    页面不存在
  </div>
</template>
<!--<script>
  export default {
    methods:{
      getData(){
        this.$http.get('http://localhost:3000/user').then((res)=>{
          console.log(res.data);
        }).catch((res)=>{
          alert(1);
        });
      }
    }
  }-->
</script>
<style>
  .error{
    font-size: .5rem;
    text-align: center;
  }
</style>
