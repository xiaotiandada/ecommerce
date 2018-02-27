<template>
  <div class="slide-show">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <img :src="slides[nowIndex].src" :alt="slides[nowIndex].title">
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li>&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a>{{ index + 1 }}</a>
      </li>
      <li>&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'slideShow',
  props: {
    slides : {
      type : Array,
      default : []
    }
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    goto (index){
      this.nowIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 400px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
  margin: 0;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 5px;
  right: 15px;
  margin: 0;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
