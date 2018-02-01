
const app = getApp()

Page({
  data: {
    title:"电影详细页面",
    id:0,
    message:{},
    isLoading:true
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
  },
  onReady() {
    let _this = this
    wx.request({
      url: `https://api.douban.com/v2/movie/subject/${this.data.id}`, 
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          message:res.data,
          isLoading : false
        })
        

      }
    })
  }
})