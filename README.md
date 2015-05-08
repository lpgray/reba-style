# reba-style
reba 不是框架，只能算是笔者的一个工作总结。笔者发现，常见的网站设计中，只要拥有一个主色，网站的基本设计风格就能奠定，因此笔者整理了reba-style（REset BAse style）。

## 步骤

### 获得代码

    bower install reba-style --save-dev

在你的less代码中

    @import "reba.less"

### 定义你的主色
在reba的源码中var.less里面只定义了四个色值变量，笔者发现一种颜色就可以奠定网站基调，你只需要定义你自己的`@main`变量即可。

你可以自己新建一个style.less，然后import reba，然后在自己的代码中覆写默认的 @main 即可，当然你也可以直接修改reba的var.less，详见源码 [example/reba-site/style.less](https://github.com/lpgray/reba-style/blob/master/examples/reba-site/style.less) 的写法。

[示例网站](http://lpgray.github.io/reba-style/)

### 只有按钮
日常的网站开发需求中，各种视觉控件很难做到统一，但唯独按钮这个控件大部分场景下都差不多，因此笔者只整理了按钮这一个控件，你可以使用
`class="btn"`来使用。
