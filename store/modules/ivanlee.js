// 模块数据管理
const data = {
  motto: 'Hello World',
  userInfo: {},
  hasUserInfo: false,
  canIUse: wx.canIUse('button.open-type.getUserInfo'),
  logs: [],
  location: {},
  b: {
    arr: [{
      name: '数值项目1'
    }],
    fnTest: 'dnt'
  },
  pureProp: 'pureProp',
  globalPropTest: 'abc', //更改我会刷新所有页面,不需要再组件和页面声明data依赖
  ccc: {
    ddd: 1
  } //更改我会刷新所有页面,不需要再组件和页面声明data依赖
}

// 集中处理所有请求（包含异步和同步）
const actions = {
  logMotto: function () {
    console.log(this.data.motto)
  }
}

export default {
  data,
  actions
}

import {
  get,
  post
} from '../../utils/util'
import {
  Api
} from '../../utils/config'