<template>
  <div class="loginVue">
      <div class="headv">
        <a class="jiantou" href="javascript:window.history.go(-1);" style="color:#fff" > < </a>
        <a href="#">登    　录</a>
      </div>

      <div id="cot">
        <div class="login">
          <form action="/submit" method="post">
            <input type="text" v-model="username" placeholder="手机号" style="outline:none" /><br/>
            <input type="text" v-model="password" placeholder="密码" style="outline:none" /><br/>
            <input type="button" @click="login" value="登   录"  id="btn1" style="outline:none"/>
          </form>
        </div>
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        arr:[],
        username:'',
        password:''
      }
    },
    methods:{
      login(){
        console.log(this.username,this.password);
        this.$http.get('http://datainfo.duapp.com/shopdata/userinfo.php',
          {
            params:{
              status:'login',
              userID:this.username,
              password:this.password
            }
          }
        ).then((res)=>{
          if(res.data==0 || res.data==2){
            alert('用户名或密码错误');
          }else{
//            console.log(res.data);
            //将数据存到本地存储里
            localStorage.setItem('userID',res.data.userID);
            //路由跳转
            this.$router.replace('/person')
          }
        }).catch((res)=>{
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/login.css";
</style>