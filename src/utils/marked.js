/*
 * @Description:定制化marked
 * @author: <https://github.com/algesthesiahunter>
 */
import marked from 'marked'
import highlight from 'highlight.js'

const renderer = new marked.Renderer()
const imgRender = (src) => {
  if (!/http/.test(src)) {
    src = `${window.cdn}${src}`
  }
  const imageHtml = `
      <img
        src="${src}"
      />
    `
  return imageHtml.replace(/\s+/g, ' ').replace(/\n/g, ' ')
}
renderer.image = imgRender

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return highlight.highlight('javascript', code).value
  },
})
export default (content) => {
  if (typeof content !== 'string') {
    return ''
  }
  return marked(content)
}
