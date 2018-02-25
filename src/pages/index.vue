<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{ product.title }}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{ item.name }}</a>
                <span v-if="item.hot" class="hot-tag">hot</span>                
              </li>
            </ul>
            <div v-if="!product.last" class="hr"></div>          
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="index-board-list"></div>
    </div>
  </div>
</template>

<script>
import 'normalize.css'  
export default {
  name: 'IndexPage',
  data () {
    return {
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com',
              hot: true
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com'
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
.index-wrap{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  .index-left{
    float: left;
    width: 300px;
    text-align: center;
    .index-left-block{
      margin: 15px;
      background: #fff;
      box-shadow: 0 0 1px #ddd;
      text-align: left;      
      h2{
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
        font-size: 14px;
      }
      h3{
        padding: 0 15px 5px 15px;
        font-weight: bold;
        color: #222;
        font-size: 16px;
        font-weight: 800;
      }
      ul{
        padding: 0 15px;
        li{
          padding: 5px;
          list-style: none;
          position: relative;
          &:hover{
            background: rgb(173, 173, 173);
            a{
              color: #fff;
            }
          }
          a{
            text-decoration: none;
            color: #000;
            font-size: 14px;
          }
        }
      }
      .hr{
        width: 100%;
        height: 1px;
        background: #54c18d;
        margin-bottom: 20px;
      }
      .hot-tag{
        position: absolute;
        left: 62px;
        top: 0;
        font-size: 8px;
        background: rgb(255, 0, 0);
        color: #fff;
        padding: 2px;
      }
    }
  }
  .index-right{
    float: right;
    width: 900px;
    .index-board-item{
      overflow: hidden;
    }
  }
}
</style>
