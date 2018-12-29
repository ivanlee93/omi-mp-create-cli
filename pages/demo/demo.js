// pages/demo/demo.js
import create from '../../utils/create'
import store from '../../store/index'
import auth from '../../utils/auth'
import WXP from '../../utils/wxp'
const {
  regeneratorRuntime
} = global

create(store, {
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log(this)
    // 集中数据管理的好处是把所有请求统一放到store中，需要用时，直接调用即可
    let city = '深圳'
    await this.store["LYF/ADD"]({
      city
    })
    this.store.data.a = 'ok'
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})