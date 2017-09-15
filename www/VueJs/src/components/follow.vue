<template>
  <div class="follow" v-show="showDom">
    <div id="_contain">
      <div class="favorable">
        <div class="z-fav">
        <div class="one" v-for="(item,index) in arr" :keys="index">
          <div class="lt">
            <div>
              <img :src="item.image" alt="">
            </div>
            <div class="text" >
              <h5>{{item.title}}</h5>
              <span>{{item.content}}</span>
            </div>
          </div>
          <div class="rt">
            <a href="">关注</a>
          </div>
        </div>
        </div>
      <div class="more">
        <p>查看更多<img src="../assets/image/arr-right.png"></p>
      </div>

    </div>
   </div>
  </div>
</template>
<script>
  import $ from 'jquery';
  export  default {
    data(){
      return {
        arr:[],
        showDom:false
      }
    },
    mounted(){
      var j=0;
      $(".more").click(function(){
        $.ajax({
          url:"http://localhost:3000/more",
          type:"get",
          success:function(data){
            console.log(data)
            for(var i=0;i<3;i++){
              $(".z-fav").append('<div class="one" >'
                +'<div class="lt"><div>'
                +' <img src='+data[(i+j*3)].image+' alt=""></div>'
                +' <div class="text" >'
                +' <h5>'+data[(i+j*3)].title+'</h5>'
                +'<span>'+data[(i+j*3)].content+'</span>'
                +'</div>'
                +'</div>'
                +'<div class="rt">'
                +' <a href="">关注</a>'
                +'</div>'
                +'</div>');
              if(i==2) j++;
              if(j==2) j=0;
            }
          }
        });
      })
    },
    created(){
      this.$store.dispatch('showLoading');
      setTimeout(()=>{
        this.$http({
          url:"http://localhost:3000/follow"
        }).then((res)=>{
          this.$store.dispatch('hideLoading');
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
  @import "../assets/css/follow.css";
</style>
