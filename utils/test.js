const showToast = message => {
  wx.showToast({
    title: message || '系统异常，请稍后再试~',
    icon: 'none'
  })
}