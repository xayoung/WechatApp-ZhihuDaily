//获取应用实例
function fetchHotTopics (id,onSuccess) {
  wx.request({
    url: 'http://news-at.zhihu.com/api/4/news/'+id,
    success: onSuccess
  })
}

const pageData = {
  data: {
    item: {}
  },
  onLoad: function (options) {
    const ctx = this
    fetchHotTopics(options.id,function (res) {
      ctx.setData({
        item: res.data
      })
    })
  }
}
Page(pageData)