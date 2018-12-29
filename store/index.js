// 多人协作模块拆分
import ivanlee from './modules/ivanlee'
import lyf from './modules/lyf'

// 集中数据管理
const data = {
  ...ivanlee.data,
  ...lyf.data
}

// 集中处理所有请求（包含异步和同步）
const actions = {
  ...ivanlee.actions,
  ...lyf.actions
}

export default {
  data,
  ...actions,
}