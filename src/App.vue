<template>
  <div class="markdown-content">
    <header class="header">
      <h3>MarkDown在线转换助手</h3>
    </header>
    <div class="tool-markdown">
      <textarea v-model="content"></textarea>
      <div class="render">
        <div class="utils">
          <ElButton id="copyMarkdown" type="primary" @click="copy"
            >复制</ElButton
          >
        </div>
        <OnlineMarkdown id="markdownRender" :value="content"></OnlineMarkdown>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
import OnlineMarkdown from './components/OnlineMarkdown'
import ElButton from './components/ElButton'
import { demo } from './utils/demo.js'
export default {
  name: 'ToolMarkdown',
  components: { OnlineMarkdown, ElButton },
  data() {
    return { content: '' }
  },
  methods: {
    copy() {
      const clipboard = new ClipboardJS('#copyMarkdown', {
        target() {
          return document.getElementById('markdownRender')
        },
      })
      clipboard.on('success', (e) => {
        this.showMessage('已复制')
        e.clearSelection()
      })
      clipboard.on('error', () => {
        this.showMessage('复制失败')
      })
    },
  },
  mounted() {
    this.content = demo
  },
}
</script>
<style lang="scss" scoped>
.markdown-content {
  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 16px;
    color: white;
    background: linear-gradient(to left, #e5e5be 0, #003973 100%);
  }
  .tool-markdown {
    display: flex;
    box-sizing: border-box;
    padding-top: 60px;
    height: 100vh;
    background-color: rgba(#fff, 0.6);
    textarea {
      box-sizing: border-box;
      font-size: 15px;
      width: 50%;
      height: 100%;
      margin: 0;
      padding: 1em;
      line-height: 1.8;
      overflow: auto;
      border: none;
      background-color: #fff;
      outline: none;
      background: #333;
      color: #fff;
      resize: none;
    }
    .render {
      width: 50%;
      height: 100%;
      overflow: auto;
      padding: 12px;
    }
    #markdownRender {
      padding: 44px;
    }
  }
}
</style>
