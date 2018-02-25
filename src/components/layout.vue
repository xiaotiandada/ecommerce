<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
         <img class="head-logo" src="../assets/logo.png">
         <div class="head-nav">
           <ul class="nav-list">
             <li>登录</li>
             <li class="nav-pile">|</li>
             <li>注册</li>
             <li class="nav-pile">|</li>             
             <li>关于</li>
           </ul>
         </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>        
      </keep-alive>
    </div>
    <div class="app-foot">
       <p>© 2018 vuejs 数字电商产品平台 MIT</p>
    </div>
  </div>
</template>

<script>
import 'normalize.css'  
export default {
  name: 'Layout',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
body{
  // background: #363636;
}
.app-head{
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
  overflow: hidden;  
  .app-head-inner{
    width: 1200px;
    height: 90px;
    margin: 0 auto;
    .head-logo{
      float: left;
    }
    img{
      width: 50px;
      margin-top: 20px;
    }

    .head-nav{
      float: right;
      ul{
        overflow: hidden;
        margin: 0;
        li{
          cursor: pointer;
          float: left;
          list-style: none;
        }
      }
      .nav-pile{
        padding: 0 10px;
      }
    }

  }
}
.app-foot{
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  color: #000;  
  clear: both;
  margin-top: 30px;
}
</style>
