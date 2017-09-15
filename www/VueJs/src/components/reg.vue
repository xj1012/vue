<template>
  <div class="loginVue">
    <div class="headv">
      <a class="jiantou" href="javascript:window.history.go(-1);" style="color:#fff" > < </a>
      <a href="#">注　　册</a>
    </div>

    <div id="cot">
      <div class="login">
        <form action="/submit" method="post">
          <input type="text" v-model="username" placeholder="手机号" style="outline:none" /><br/>
          <input type="text" v-model="password" placeholder="密码" style="outline:none"/><br/>
          <input type="button" @click="reg" value="注       册"  id="btn1" style="outline:none"/>
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
      reg(){
        //调用网上接口
        this.$http.get('http://datainfo.duapp.com/shopdata/userinfo.php',
          {
            //URL问号之后的数据
            params:{
              status:'register',
              userID:this.username,
              password:this.password
            }
          }
        ).then((res)=>{
          console.log(res.data);
          if(res.data==0){
            alert('用户名已存在');
          }
          if(res.data==1){
            this.$router.push('/login')
          }
        }).catch((res)=>{
          console.log(res)
        })
      }
    }
  }

</script>
<style scoped>
  @import "../assets/css/reg.css";
</style>