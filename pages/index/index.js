// pages/index/index.js
// 这是初始模板，演示的代码写在首页在indexs中
import create from '../../utils/create'
import store from '../../store/index'
import auth from '../../utils/auth'
import WXP from '../../utils/wxp'
const {
  regeneratorRuntime
} = global
const app = getApp()

create(store, {

  /**
   * 页面的初始数据
   */
  data: {
    c: '2'
  },

  clikc() {
    console.log(this)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(this.data) // 这里是页面私有数据
    console.log(this.store.data) //这是全局数据
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