// 多人协作模块拆分
import ivanlee from './modules/ivanlee'
import lyf from './modules/lyf'

const store = {
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
  }
}

function storeMixin(options) {
  let result = {
    data: store,
  }
  for (let k in options) {
    let value = options[k];
    if (value.data) {
      result.data[k] = value.data
      delete value.data
    }
    Object.assign(result, value)
  }
  console.log(result)
  return result;
}

export default storeMixin({
  ivanlee,
  lyf
})

// 集中数据管理
// const data = {
//   ...ivanlee.data,
//   ...lyf.data
// }

// 集中处理所有请求（包含异步和同步）
// const actions = {
//   ...ivanlee.actions,
//   ...lyf.actions
// }

// export default {
//   data,
//   ...actions,
// }