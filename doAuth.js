const grantMap = {
  chooseAddress: {
    scope: 'address',
    name: '通讯地址'
  },
  saveImageToPhotosAlbum: {
    scope: 'writePhotosAlbum',
    name: '保存到相册'
  },
  getLocation:{
    scope:'userLocation',
    name:'获取当前地理位置'
  }
}

function getSetting(scope,opts={}) {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success({
        authSetting
      }) {
        resolve(authSetting[`scope.${scope}`])
        opts.success && opts.success(authSetting[`scope.${scope}`])
      },
      fail(err){
        reject(err)
        opts.fail && opts.fail(err)
      }
    })
  })
}

function openSetting(scope, opts={}) {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success({
        authSetting
      }) {
        if (scope) {
          resolve(authSetting[`scope.${scope}`])
          opts.success && opts.success(authSetting[`scope.${scope}`])
        } else {
          resolve(authSetting)
          opts.success && opts.successopts.success(authSetting)
        }
      },
      fail(err){
        reject(err)
        opts.fail && opts.fail(err)
      }
    })
  })
}
function confirm({ content = '', title = '', options =[{}, {}] }) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title,
      content,
      cancelText: options[0].label || '取消',
      confirmText: options[1].label || '确定',
      confirmColor: '#21c0ae',
      success: function (res) {
        if (res.confirm) {
          resolve(true)
          if (options[1].callback) {
            options[1].callback(true)
          }
        } else if (res.cancel) {
          // 20181025，修改为resolve
          resolve(false)
          if (options[0].callback) {
            options[0].callback(false)
          }
        }
      }
    })
  })
}
module.exports = function(apiName, params) {
  const grant = grantMap[apiName]
  if (!grant) {
    throw Error(
      `未配置[${apiName}]的api授权映射，请与bridge.js中的grantMap添加映射关系！`
    )
  }
  getSetting(grant.scope,{
    success:(isGrant)=>{
      if (typeof isGrant === 'boolean' && !isGrant) {
        // 用户若已经不允许授权过了，则引导用户重新授权
        confirm({
          content: `请授权[${grant.name}]，才能正常使用功能！`,
          title: '温馨提示',
          options:[
          {
            // 20181025，新增取消授权回调
            callback:_=>{
              params.fail && params.fail({errMsg:'取消授权'})
            }
          },{
              callback:_=>{
                openSetting()
              }
            }
          ]
        })
      } else {
        // 若用户未授权过，或者已经授权允许了，则直接调 api
        wx[apiName](params)
      }
    }
  })
}