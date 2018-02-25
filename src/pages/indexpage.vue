<template>
  <div>
    index2
  </div>
</template>

<script>
import 'normalize.css'  
export default {
  name: 'indexpage1',
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
