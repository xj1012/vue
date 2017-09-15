<template>
  <div class="chart">
    <div id="content">
      <!--布局-->
      <div id="middle">
        <div id="box2">
          <span>-发帖-</span>
          <label><span>姓名</span>：<input type="text"></label>
          <label><span>内容</span>：<textarea></textarea></label>
          <input type="button" value="发帖" id="btn">
        </div>
        <ul id="Ul">
          <!--	<li>
              <span>如果你得罪了老板，失去的只是一份工作；如果你得罪了客户，失去的不过是一份订单；是的，
                世上只有一个人可以得罪：你给她脸色看，你冲她发牢骚，你大声顶撞她
              </span>
              <a href="#" class='spec'>X</a>
           </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery';
  export default {
    mounted(){
      var oUl=document.getElementById("Ul");
      var oBtn=document.getElementById("btn");
      var aInput=document.getElementsByTagName("input")[0];
      var aTextarea=document.getElementsByTagName("textarea")[0]
      //添加点击事件
      oBtn.onclick=function(){
        var value1=aInput.value;
        var value2=aTextarea.value;
        var oLi=document.createElement("li");
        //短暂的存放发布内容
        oLi.innerHTML='<span>'+value2+'</span>';
        oUl.appendChild(oLi);
        //处理滚动条的跟随
        oUl.scrollTop = oUl.scrollHeight;
      }
    }
  }
</script>
<style>
  @import "../assets/css/chart.css";
</style>