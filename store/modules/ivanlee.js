export default {
  // 模块数据管理
  data: {

  },
  // 模块方法管理
  logMotto: function () {
    console.log(this.data.motto)
  }
}

import {
  get,
  post
} from '../../utils/util'
import {
  Api
} from '../../utils/config'