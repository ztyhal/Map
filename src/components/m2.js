const ak = 'XRXNPOncH7ozACnAuYTwMrrVIWYgnAfx'

function loadBaiDuMap() {
  return new Promise(function (resolve, reject) {
    try {
      console.log('BMap is defined:', BMapGL === undefined || BMapGL)
      resolve(BMapGL)
    } catch (err) {
      window.init = function () {
        resolve(BMapGL)
      }
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `http://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}&callback=init`
      script.onerror = reject
      document.body.appendChild(script)
    }
  })
}
export { loadBaiDuMap }