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

// 声明 path 修改相应的data会刷新所有页面和组件，并且不需要声明data依赖
const globalData = [
  ...ivanlee.path,
  ...lyf.path
]

export default {
  data,
  ...actions,
  globalData,
  updateAll: false
  //默认 false，为 true 会无脑更新所有实例
}