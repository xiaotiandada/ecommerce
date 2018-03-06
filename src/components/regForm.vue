<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label"></span>
        <div class="g-form-input">
          <input v-model="usernameModel" type="text" placeholder="请输入用户名">
          <span class="g-form-error">{{ userErrors.errorText }}</span>
          <input v-model="passwordModel" type="password" placeholder="请输入密码">
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>          
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onRegLogin">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regForm',
  props: {
    'isShow': 'boolean'
  },
  data () {
    return {
      usernameModel : '',
      passwordModel : ''
    }
  },
  computed: {
     userErrors(){
      let errorText, status
      if(/@/g.test(this.usernameModel)){
        status = false
        errorText = '不包含@'
      } else {
        status = true
        errorText = ''
      }
       if(!this.userFlag){
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
     passwordErrors(){
       let errorText, status
      if(!/^\w{1,6}$/g.test(this.passwordModel)){
        status = false
        errorText = '密码需要1-6位'
      } else {
        status = true
        errorText = ''
      }
      if(!this.passFlag){
        errorText = ''
        this.passFlag = true
      }
      return {
        status,
        errorText
      } 
    }
  },
  methods: {
    onRegLogin(){
      console.log('注册成功')
      console.log(this.usernameModel)
      console.log(this.passwordModel)
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}

.g-form-input input[type="text"],
.g-form-input input[type="password"]{
  width: 202px;  
  height: 30px;
  padding: 2px 0 2px 6px;
  display: block;
  margin: 10px 0;
}
.g-form-btn a{
  display: block;
  color: #fff;
  margin: 20px auto 0;
  padding: 6px;
  font-size: 16px;
  text-align: center;
  width: 200px;
  height: 30px;
  border: 1px solid #cecece;
  background: #398561;
  border-radius: 3px;
}
</style>
