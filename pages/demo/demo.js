// pages/demo/demo.js
import auth from '../../utils/auth'
import store from '../../store/index'
import create from '../../utils/create'
import WXP from '../../utils/wxp'
const {
  regeneratorRuntime
} = global

create(store, {

  /**
   * 页面的初始数据
   */
  data: {
    motto: '',
    a: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 集中数据管理的好处是把所有请求统一放到store中，需要用时，直接调用即可
    let city = '深圳'
    await this.store.FUN({
      city
    })
    this.store.data.a = 'ok'
    this.update() //使用diff算法实现高性能渲染
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})