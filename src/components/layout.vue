<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
         <img class="head-logo" src="../assets/logo.png">
        </router-link>
         <div class="head-nav">
           <ul class="nav-list">
             <li>{{ username }}</li>
             <li v-if="username !== ''" class="nav-pile">|</li>             
             <li v-if="username === ''" @click="logClick">登录</li>
             <li v-if="username !== ''" @click="logQuit">退出</li>
             <li v-if="username === ''" class="nav-pile">|</li>
             <li v-if="username === ''" @click="regClick">注册</li>
             <li class="nav-pile">|</li>             
             <li @click="aboutClick">关于</li>
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
    <sign :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
     <log-form @has-log="onSuccessLog"></log-form>
    </sign>
    <sign :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </sign>
    <sign :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <about-form></about-form>
    </sign>
  </div>
</template>

<script>
import 'normalize.css'  
import sign from '@/components/base/dialog'
import logForm from '@/components/logForm'
import regForm from '@/components/regForm'
import aboutForm from '@/components/aboutForm'
export default {
  name: 'Layout',
  components: {
    sign,
    logForm,
    regForm,
    aboutForm
  },
  data () {
    return {
      isShowLogDialog: false,
      isShowRegDialog: false,
      isShowAboutDialog: false,
      username: ''
    }
  },
  methods:{
    logClick(){
      this.isShowLogDialog = true
    },
    regClick(){
      this.isShowRegDialog = true
    },
    aboutClick(){
      this.isShowAboutDialog = true
    },
    closeDialog(attr){
      this[attr] = false
    },
    onSuccessLog(data){
      this.closeDialog('isShowLogDialog')
      this.username = data.username
    },
    logQuit(){
      alert('禁止退出,测试')
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
  }
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
