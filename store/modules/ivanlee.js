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
    //深层节点也支持函数属性
    fnTest: function () {
      return this.motto
        .split('')
        .reverse()
        .join('')
    }
  },
  firstName: 'dnt',
  lastName: 'zhang',
  fullName: function () {
    return this.firstName + this.lastName
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

// 声明 path 修改相应的data会刷新所有页面和组件，并且不需要声明data依赖
const path = ['globalPropTest', 'ccc.ddd']

export default {
  data,
  path,
  actions
}

import {
  get,
  post
} from '../../utils/util'
import {
  Api
} from '../../utils/config'