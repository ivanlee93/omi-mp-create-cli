// 模块数据管理
const data = {
  a: '1',
}

// 集中处理所有请求（包含异步和同步）
const actions = {
  // 测试demo
  FUN(payload) {
    // console.log(store)
    return get(Api.test, payload).then(res => {
      this.data.motto = res.reason
      console.log(res.data)
      return res
    })
  }
}

// 声明 path 修改相应的data会刷新所有页面和组件，并且不需要声明data依赖
const path = []

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