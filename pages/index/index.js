import auth from '../../utils/auth'
import store from '../../store/index'
import create from '../../utils/create'
import WXP from '../../utils/wxp'
const {
  regeneratorRuntime
} = global

const app = getApp()

create(store, {
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindViewDemo() {
    wx.navigateTo({
      url: '../demo/demo'
    })
  },

  onShow() {
    this.getLocation()
    this.store.logMotto()
  },

  async onLoad() {
    if (app.globalData.userInfo) {
      this.store.data.userInfo = app.globalData.userInfo,
        this.store.data.hasUserInfo = true
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.store.data.userInfo = res.userInfo
        this.store.data.hasUserInfo = true
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.store.data.userInfo = res.userInfo
          this.store.data.hasUserInfo = true
        }
      })
    }

    setTimeout(() => {
      this.store.data.motto = 'Hello Westore'
      this.store.data.b.arr[0].name = '测试'
      this.store.data.b.arr.splice(this.store.data.b.arr.length, 1, {
        name: '数组项2(将被删除)'
      })
    }, 4000)

    setTimeout(() => {
      this.store.data.b.arr.splice(1, 1)
    }, 6000)

    setTimeout(() => {
      this.store.data.pureProp = '成功修改 Pure Component prop'
    }, 12000)
  },

  getUserInfo(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.store.data.userInfo = e.detail.userInfo
    this.store.data.hasUserInfo = true
  },
  onRandom(evt) {
    this.store.data.pureProp = evt.detail.rd
  },
  async getLocation(e) {
    auth('getLocation', {})
    try {
      let resp = await WXP.getLocation()
      this.store.data.location = resp
      console.log(this.store.data.location.latitude + ' ' + this.store.data.location.longitude)
    } catch (errorMesg) {
      console.log('fail信息:', errorMesg)
    }
  },
})