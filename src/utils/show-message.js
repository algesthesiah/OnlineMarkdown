/*
 * @Description:提示信息组件
 * @author: <https://github.com/algesthesiahunter>
 */
function fadeIn(el, display) {
  el.style.opacity = 0
  el.style.display = display || 'block'
  ;(function fade() {
    let val = parseFloat(el.style.opacity)
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val
      requestAnimationFrame(fade)
    }
  })()
}
export function showMessage(content) {
  const div = document.createElement('div')
  div.innerHTML = `<div class="esa-layer"><span class="esa-layer-content">${content}</span></div>`
  document.body.appendChild(div)
  const layers = document.getElementsByClassName('esa-layer')
  const layer = layers[layers.length - 1]
  fadeIn(layer)
  setTimeout(() => {
    document.body.removeChild(div)
  }, 2000)
}

window.utils = window.utils || {}
window.utils.showMessage = showMessage
