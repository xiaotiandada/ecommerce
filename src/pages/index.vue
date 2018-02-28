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
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :invTime="invTime" @onChange="doSomethingOnSlidChange"></slide-show>
      <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0},
        'index-board-'+item.id]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <a href="" class="button">立即购买</a>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css'  
import slideShow from '@/components/slideShow'
export default {
  name: 'IndexPage',
  components: {
    slideShow
  },
  created () {
    this.$http.get('/api/getNewsList')
    .then((res) => {
      this.newsList = res.data
      },(err) => {
        console.log( err )        
      })
  },
  methods: {
    // 子组件给父组件传值
    doSomethingOnSlidChange(index){
      // console.log('doSomethingOnSlidChange' + index);
    }
  },
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
      },
      newsList: [],
       boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      invTime: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ]
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
}

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
      float: left;
      width: 398px;
      background: #fff;
      box-shadow: 0 0 1px #ddd;
      padding: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
    .index-board-item-inner {
      min-height: 125px;
      padding-left: 120px;
      h2{
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-bottom: 15px;
      }
      p{
        font-size: 14px;
        color: #000;
      }
       .index-board-button {
        margin-top: 20px;
        a.button{
          width: 100px;
          height: 40px;
          line-height: 40px;
          background: #54c18d;
          display: block;
          text-align: center;
          text-decoration: none;
          color: #fff;
        }
      }
    }
    }

    .line-last {
      margin-right: 0;
    }
  }


.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.new-item{
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
