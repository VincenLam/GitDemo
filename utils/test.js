/**
 * 二次封装showToast
 * @param {*} message
 */ 
const showToast = message => {
  console.info("testtt")
  wx.showToast({
    title: message || '系统异常，请稍后再试~',
    icon: 'none'
  })
}