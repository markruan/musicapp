<template>
    <div>
      <div class="loading-wrapper" v-if="isloading" >
          <div class="loading"></div>
          <div class="loading-txt">正在加载中</div>
      </div>
     <div class="wrapper playList">
      <div class="container" v-show="!isloading">
      
        <mu-flexbox wrap="wrap" justify="space-around" class="box" :gutter="0" >
          <mu-flexbox-item basis="40%" class="mv-item" v-for="item in mvList">
          	 <router-link :to="{name: 'playListDetail',params: { id: item.idx}}">
            <img class="img-response" :src="item.pic">
            <div class="mv-name">{{item.name}}</div>
              </router-link>
            <!-- <div class="mv-author">{{item.artists[0].name}}</div> -->
          </mu-flexbox-item>
          
        </mu-flexbox> 
      </div>
    </div>
     </div>
</template>
<style lang="less" scoped>
  .img-response {
    max-width: 100%;
    height: auto;
  }
  .wrapper {
    padding: 0 5px;
  }
  // 通用的标题样式
  .g-title {
    padding-left: 25px;
    color: #333;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    a {
      float: right;
      font-size: 12px;
      color: #666;
    }
  }
   

   
  .item {
    position: relative;
    margin: 0 5px 5px 10px;
    height: 100%;
    a {
      color: rgba(0, 0, 0, 0.87);
    }
    .bar {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      width: 100%;
      text-align: right;
      padding: 2px 5px;
      background-color: rgba(0,0,0,.2);
    }

    &-img {
      min-width:5rem;
      min-height: 5rem;
    }

    &-img[lazy=loading] {
      background: url('../../static/default_cover.png') no-repeat;
      background-size: cover;
    }

    &-name {
      overflow : hidden;
      font-size: 12px;
          text-align: center;
      height: 1.7rem;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .mv {
    background: url("../../static/aee.png") no-repeat left center;
    background-size: 20px 20px;
    &-name {
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    &-item {
      position: relative;
      margin: 0 5px 5px 10px;
    }
    &-author {
      font-size: 12px;
      color: #666;
    }
  }
  .loading {
    position: absolute;
    top: 0;
    left: 50%;
    background: #fff;
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 70%;
    margin-left: -1.25rem;
    background: url('../../static/rage_loading.png') no-repeat;
    background-size: cover;
    -webkit-animation: rotating 5s  linear infinite;
    animation: rotating 5s linear infinite;
  }
  .loading-txt {
    position: absolute;
    top:0;
    color: #4a4a4a;
    margin-top: 87%;
    width: 100%;
    text-align:center;
  }

  @keyframes rotating {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(360deg);
      }
  }
</style>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import api from '../api'
import Boardlist from '../init'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        paginationClickable: true
      },
      isloading: true,
      playList: [],
      mvList: [],
      bannerList: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.get()
  },
  methods: {
    get () { 
        this.isloading = false
        this.mvList = Boardlist.data  
    },
    openList(){

    }
  },
  filters: {
    formatCount (v) {
      if (v < 9999) {
        return v
      } else {
        return (v / 10000).toFixed(0) + '万'
      }
    }
  }
}
</script>
