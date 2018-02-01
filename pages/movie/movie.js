//获取应用实例
const app = getApp()

Page({
  data: {
    text: "首页",
    movieType:"in_theaters",
    pageIndex:0,
    start:0,
    count:10,
    movieList:[],
    isLoading:true,
    isLoading2:false,
    isBottom:false
  },
  onReady(){
    const _this = this
    wx.request({
      url: `https://api.douban.com/v2/movie/${this.data.movieType}?start=${this.data.start}&count=${this.data.count}`, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res.data)

        let movieList = [].concat(_this.data.movieList);
       
        if(movieList.length > 0){
          movieList = movieList.concat(res.data.subjects);
        }else if(movieList.length == 0){
          movieList = res.data.subjects
        }
        _this.setData({
            movieList,
            isLoading:false,
            pageIndex: _this.data.pageIndex+1
        })

        console.log(_this.data.pageIndex)
      }
    })
  },
  getMoreData(){
    const _this = this
    if (this.data.isBottom){
      return;
    };
    this.setData({
      isBottom:true,
      isLoading2:true
    })
    wx.request({
      url: `https://api.douban.com/v2/movie/${this.data.movieType}?start=${this.data.pageIndex*this.data.count}&count=${this.data.count}`, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res.data)

        let movieList = [].concat(_this.data.movieList);

        if (movieList.length > 0) {
          movieList = movieList.concat(res.data.subjects);
        } else if (movieList.length == 0) {
          movieList = res.data.subjects
        }
        // _this.data.movieList = movieList;
        // _this.data.isLoading = false;
        _this.setData({
          movieList,
          isLoading2: false,
          pageIndex: _this.data.pageIndex + 1,
          isBottom:false
        })

      }
    })
  }

})