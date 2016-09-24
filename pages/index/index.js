//index.js
//获取应用实例
function fetchHotTopics (onSuccess) {
  wx.request({
    url: 'https://news-at.zhihu.com/api/4/news/latest',
    success: onSuccess
  })
}

const pageData = {
  data: {
    stories: []
  },
  onLoad: function (options) {
    const ctx = this
    fetchHotTopics(function (res) {
      ctx.setData({
        stories: res.data.stories
      })
      console.log(res.data.stories)
    })
  }
}
Page(pageData)