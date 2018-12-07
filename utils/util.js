// 工具函数库
import config from './config'


// 时间格式转换
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// http get工具函数 获取数据
function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success: function (res) {
        if (res.data.error === 'ok') {
          resolve(res.data.data)
        } else {
          resolve(res.data)
        }
      },
      fail: function (res) {
        reject(res.data)
      }
    })
  })
}

function get(url, data) {
  return request(url, 'GET', data)
}

function post(url, data) {
  return request(url, 'POST', data)
}

function showToast(title, icon) {
  wx.showToast({
    title,
    icon
  })
}

function showLoading(title = 'Loading') {
  wx.showLoading({
    title,
    mask: true
  });
}

module.exports = {
  formatTime,
  get,
  post,
  showToast,
  showLoading
}