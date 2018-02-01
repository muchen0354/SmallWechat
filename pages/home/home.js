//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../static/imgs/1.png',
      '../../static/imgs/2.png',
      '../../static/imgs/3.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular:true,
  }
  
})