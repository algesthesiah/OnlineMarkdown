/* eslint-disable */
export let demo =
`
## 微信公众号格式化工具

> 使用微信公众号编辑器有一个十分头疼的问题——粘贴出来的代码，格式错乱，而且特别丑。这块编辑器能够解决这个问题。

**在这里粘贴您的Markdown文档，点击“预览”按钮转换为HTML格式。**

## 我的公众号

![微信公众号](http://blog.didispace.com/css/images/weixin.jpg)

## Markdown基础语法

下面是Markdown的常用语法示例，可供参考

### 代码示例
`
+
"```"
+
`javascript
var OnlineMarkdown = {
  init: function() {
    var self = this;
    self.load().then(function() {
      self.start()
    }).fail(function(){
      self.start();
    });
  },
  start: function() {
    this.updateOutput();
  },
  load: function() {
    return $.ajax({
      type: 'GET',
      url: params.path || './demo.md',
      dateType: 'text',
      timeout: 2000
    }).then(function(data) {
      $('#input').val(data);
    });
  },
  updateOutput: function () {
    var val = this.converter.makeHtml($('#input').val());
    $('#output .wrapper').html(val);
    PR.prettyPrint();
  }
};

OnlineMarkdown.init();
`+
"```"+
`
---

`
+
`

### 表格示例

| 品类 | 个数 | 备注 |
|-----|-----|------|
| 苹果 | 1   | nice |
| 橘子 | 2   | job |



---
`