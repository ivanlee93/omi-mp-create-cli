// 模块数据管理
const data = {
  a: '1',
}

// 集中处理所有请求（包含异步和同步）
const actions = {
  // 测试demo
  ["LYF/ADD"](payload) {
    // console.log(store)
    return get(Api.test, payload).then(res => {
      this.data.motto = res.reason
      console.log(res)
      return res
    })
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