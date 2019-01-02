export default {
  // 模块数据管理
  data: {
    a: '1',
  },
  // 处理异步请求
  ["LYF/ADD"](payload) {
    // console.log(store)
    return get(Api.test, payload).then(res => {
      this.data.motto = res.reason
      console.log(res)
      return res
    })
  }
}

import {
  get,
  post
} from '../../utils/util'
import {
  Api
} from '../../utils/config'