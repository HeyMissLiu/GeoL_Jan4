# 配套视频

> 「玩转 vscode」https://www.aliyundrive.com/s/61jr86ojPQh

# 概述

> vscode 是我们学习以及工作中, 使用频率最高的一个软件, 熟悉它的基本操作, 常用设置, 快捷键, 无疑可以大大提升我们的开发效率, 继而提升编写代码的幸福感

![image-20211014164433795](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141644880.png)

# 简介

![image-20211014154309099](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141543136.png)

# 什么是 vscode

> 1. 系出名门, 微软亲儿子, 质量有保障
> 2. 功能强大的代码编辑器
> 3. 插件市场异常丰富, 只有你想不到, 没有你搜不到
> 4. 免费的、开源的跨平台编辑器

# 版本选择

> - 一个是我们经常使用的稳定版（Stable），每个月发布一个主版本, 图标是蓝色
> - 另外一个发布渠道叫做 Insiders，每周一到周五 UTC 时间早上 6 点发布, 图标是绿色
> - 内测版也是 VS Code 团队在使用的版本，目标是可以第一时间用上自己新加的功能并及时发现问题
> - 微软内部对这个做法还有个专门的名词，叫做“吃自己的狗粮” (eat your own dog food), `你是你的产品的第一个用户`
> - 推荐使用稳定版

![image-20211014143524797](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141435843.png)

# 下载安装

![image-20211014164501130](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141645172.png)

# 下载

> https://code.visualstudio.com

![image-20210808131128091](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808131128.png)

![image-20210808131428143](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808131428.png)

![image-20210808131453265](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808131453.png)

# 安装

> windows 的软件安装都很简单, 下一步下一步即可
>
> 注意, 在安装时, 把 vscode 添加到右键菜单, 需要进行一些勾选

![image-20210808132148850](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808132149.png)

# 汉化插件

> 第一种方式, vscode 会自动监测并弹框提示你, 点击按钮安装重启即可

![image-20210808133530882](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808133530.png)

![image-20210808133800780](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808133800.png)

> 第二种方式, 扩展中搜索`chinese`, 安装并重启

![image-20210903194635638](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903194635.png)

![image-20210808133738547](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808133738.png)

# vscode 的界面

![img](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808133151.png)

# 常用设置

![image-20211014235518895](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142355940.png)

# 自动保存

![image-20210808234914365](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808234914.png)

![image-20210808234948290](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808234948.png)

> 我们可以设置自动保存, 这样就不用每次`ctrl s`手动保存了

![image-20210903190354538](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903190354.png)

![image-20210808235037194](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808235037.png)

![image-20210808235117784](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808235117.png)

![image-20210808235157738](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808235157.png)

# 调整字体大小

> 可以使用 ctrl+鼠标滚轮, 来调整字体大小, 需要设置

![image-20210903190354538](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903190354.png)

![image-20210808235037194](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808235231.png)

![image-20210808235255429](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808235255.png)

> 设置的本质是修改`settings.json`文件
>
> 你可以手动修改`settings.json`, 也可以复制别人的代码, 导入别人的配置

![image-20210808235405380](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808235405.png)

![image-20210808235434543](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808235434.png)

# 小地图(minimap)

> 小地图可以快速定位代码位置, 预览代码结构, 不过缺点是占空间

![img](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808231920.gif)

> 关掉小地图的方法
>
> - `ctrl+shift+p` 打开命令面板
> - 输入`toogle minimap`
> - 可以实现迷你地图的开关

![image-20210903190354538](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903190354.png)

![image-20210808232100356](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808232100.png)

# 绑定快捷键

> 比如 vscode 里面有一个功能, 可以`快速选中代码块`
>
> 花括号里面的内容为`代码块`

```js
function hello() {
	var a = 1;
	var b = 2;
	return a + b;
}

var c = hello();
console.log(c);
```

> 1. 光标移入括号内
> 2. `ctrl+shift+p`
> 3. 输入`select`
> 4. 选择`选择括号所有内容`
> 5. 回车即可

![image-20210808152524957](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808152525.png)

> 我们可以为"快速选中代码块"设置快捷键
>
> 比如我们想给"快速选中代码块", 绑定快捷键`ctrl+shift+m`
>
> 1. `ctrl+shift+p` 打开控制台
> 2. `keyboard shortcuts` 打开键盘快捷方式, 快捷键是`ctrl k ctrl s`

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808163306.png)

> 3. 通过快捷键找名字, 确定`ctrl+shift+m`, 暂时没有别的功能在使用, 如果有就选中删除

![image-20210808163517457](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808163517.png)

![image-20210808163538298](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808163538.png)

![image-20210808163624711](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808163624.png)

> 4. 输入快捷键对应的名称

![image-20210808163720500](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808163720.png)

> 5. 点击`+`, 绑定快捷键

![image-20210808210657024](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808210657.png)

![image-20210808210721120](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808210721.png)

> 6. 测试快捷键是否可用

![image-20210808210804584](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808210804.png)

> 所有用户自定义的快捷键, 都已 json 文件的格式, 保存在本地

![image-20210808210941623](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808210941.png)

![image-20210808211143551](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808211236.png)

![image-20210808211022835](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808211022.png)

> 可以把相关的代码保存, 后期如果重装, 可以通过复制粘贴代码的方式, 恢复自定义快捷键
>
> 也可以通过复制粘贴代码的方式, 来导入别人的快捷键设置

# 设置 vscode 的字体

> 建议使用程序员专用字体, 这些字体经过特别优化, 更容易识别, 减轻用眼压力, 避免不必要的 bug
>
> 请看下面这张图, 你能分清两段文字所表达的内容吗?

![image-20210808235917777](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808235917.png)

> 使用编程字体之后...

![image-20210809000208804](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210809000208.png)

> 安装字体

![image-20210809000542840](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210809000542.png)

> 获取字体名称

![image-20210809000813309](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210809000813.png)

> 进入设置, 搜索`font family`

![image-20210809000930437](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210809000930.png)

# 常用操作

![image-20211014231429766](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142314809.png)

# 光标

![image-20211014231450870](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142314899.png)

# 光标移动

> 示例代码

```js
function hello() {
	var a = 1;
	var b = 2;
	return a + b;
}

var c = hello();
console.log(c);
```

> 1. 上下左右按键控制光标的上下左右, 以字母为单位
> 2. 加上`ctrl`, 以单词为单位
> 3. `home`和`end`, 跳转光标到这一行的行首和行尾

![image-20210809104500419](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210809104500.png)

> 4. 在 3 的基础上, 加上`ctrl`, 可以跳转到整个文件的开始和结束
> 5. `ctrl`的作用, 加大光标移动的粒度

# 光标选择

> 1. 上下左右按键控制光标的上下左右, 以字母为单位
> 2. 加上`ctrl`, 以单词为单位
> 3. `home`和`end`, 跳转光标到这一行的行首和行尾
> 4. 在 3 的基础上, 加上`ctrl`, 可以跳转到整个文件的开始和结束,`ctrl`的作用, 加大光标移动的粒度
> 5. 在上述五条的基础上, 在上述五条的基础上, 加上`shift`, 就可以在移动的时候, 选中文本
> 6. 温馨提醒: 鼠标双击可以快速选中单词, 鼠标三连击, 可以快速选择一行

# 多光标操作

> 选中下一个相同的内容, 并且在之后添加光标(`ctrl+d`)

```css
.header {
	padding: 5px;
	margin: 5px;
	font-size: 5px;
	font-weight: bold;
}
```

> 比如我们想把`5px` 换成 `15px`, 就可以使用多光标批量操作
>
> `ctrl+d`, 可以查找下一个相同内容的字符, 并在找到的内容后, 新增一个光标

![image-20210808224741276](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808224741.png)

> 选中内容, 在行尾加光标

![image-20210808224757192](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808224757.png)

> 在每一行的同一个位置加光标

![image-20210904171728064](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904171728.png)

# 删除

![image-20211014231905984](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142319015.png)

# 删除代码

> 凡是选中的代码, 都可以通过 `delete` 或者 `backspace` 删除

![image-20210808154201287](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808154201.png)

> 删除光标之后的内容到行末 `ctrl + k + k`

![image-20210808154917746](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808154917.png)

> 删除光标之前的内容到行首 `ctrl+shift+backspace`

![image-20210808154941952](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808154942.png)

> 删除一整行 `ctrl+shift+k`, 剪切一整行 `ctrl+x`

![image-20210808155045054](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808155045.png)

![image-20210808155111637](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808155111.png)

# 删除空行

> 我们在写代码的时候, 有时候会产生较多的空行, 如果手动删除这些空行, 整个过程会比较繁琐, 推荐使用插件来完成

![image-20210808211520338](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808211520.png)

![image-20210904171042625](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904171042.png)

> 也可以配置自己的快捷键`ctrl + e + e`, 来快速删除空行

![image-20210903190354538](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903190354.png)

![image-20210808211610043](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808211610.png)

> 命令名称为`remove empty lines`

![image-20210808211645268](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808211645.png)

# 代码处理

![image-20211014232039043](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142320073.png)

# 注释

> - 注释快捷键`ctrl + /`(单行) `ctrl+shift+/`(多行注释)
> - 注释的代码不会执行, 在需要的时候解除注释, 就可以继续运行
> - 注释的初衷, 给程序员提供代码的相关说明

![image-20210904171243528](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904171243.png)

![image-20210808215446032](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808215446.png)

![image-20210808215736619](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808215736.png)

# 代码折叠

> 有些代码不需要修改, 可以暂时折叠, 节省滚动查看代码时的空间

![image-20210808231816090](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808231816.png)

# 撤销和反撤销

> vscode 中, 你的每一次代码输入都会有记录, 会形成一个`时间线`
>
> `ctrl+z` 跳回上一次, 回到过去
>
> `ctrl+y` 跳回下一次, 从过去回到现在

![image-20210904171112961](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904171113.png)

![image-20210808214257056](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808214257.png)

![image-20210808214407905](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808214407.png)

> 注意: 如果在某个时间点, 重新输入, 就会创造新的时间线, 原有的时间线就会丢失

![image-20210808214816615](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808214816.png)

![image-20210808214741697](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808214741.png)

# 移动

![image-20211015000024523](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110150000569.png)

# 快速切到下一行

> 如果你的光标在一行的中间, 如果需要在下一行进行输入, 需要两步
>
> - 把光标移到末尾
> - 回车
>
> 使用快捷键`ctrl+enter`, 可以简化这个操作

![image-20210808221809735](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808221809.png)

# 快速切到上一行

> 如果你的光标在一行的中间, 如果需要在上一行进行输入, 需要三步
>
> - 把光标移到开头
> - 回车
> - 鼠标上移
>
> 使用快捷键`ctrl+shift+enter`, 可以简化这个操作

![image-20210808221856497](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808221856.png)

# 快速复制一行到下一行

> 可以把选中的内容, 快速复制, 并自动粘贴到下一行
>
> 如果没有选中的内容, 默认复制的是光标所在行的内容
>
> 快捷键: `ctrl+shift+d` (前提是装了 sublime keymap 插件)

![image-20210903190138888](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903190139.png)

# 多行合并一行

> 使用快捷键`ctrl+j`, 可以快速把下一行的内容, 挪到光标所在行的行尾
>
> 中间用空格隔开

![image-20210903190213886](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903190214.png)

```css
.header {
	padding: 5px;
	margin: 5px;
	font-size: 5px;
	font-weight: bold;
}
```

![image-20210808223139662](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808223139.png)

> 代码压缩的时候会用到

![image-20210808223320128](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808223320.png)

# 使用鼠标, 快速移动选中的代码

> 如果我们需要移动代码的位置, 需要先`ctrl x`剪切, 然后定位到我们需要粘贴的位置 `ctrl v` 粘贴
>
> `ctrl x` 是剪切选中的内容, 如果没有选中内容, 默认是鼠标所在当前行
>
> 如果使用鼠标, 直接选中, 拖动即可

![img](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808230240.gif)

# 使用键盘, 快速移动选中的代码

> 使用键盘, 也可以快速移动代码
>
> `ctrl+shift+↑`, 向上移动一行
>
> `ctrl+shift+↓`, 向下移动一行

![image-20210808230812702](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808230812.png)

# 跳转

![image-20211014233225964](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142332993.png)

# 项目中, 文件之间进行跳转

> - 一个文件夹称为一个项目, 里面存放着各种文件
> - 文件之间跳转 `ctrl+p`, `文件名`

![image-20210903190354538](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903190354.png)

![image-20210808225902138](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808225902.png)

# 超链接跳转

> 如果你的文本当中有超链接, 按住`ctrl`+鼠标点击, 可以跳转链接

![image-20210808230124036](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808230124.png)

# 搜索

![image-20211014235014945](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142350980.png)

# 单文件内容搜索

> 示例代码

```js
var arr = ["学生0", "学生1"];

function getStudentInfo0() {
	arr.forEach((element) => {
		console.log(element);
	});
}
function getStudentInfo1() {
	arr.forEach((element) => {
		console.log(element);
	});
}
function getStudentInfo2() {
	arr.forEach((element) => {
		console.log(element);
	});
}
function getStudentInfo3() {
	arr.forEach((element) => {
		console.log(element);
	});
}
function getStudentInfo4() {
	arr.forEach((element) => {
		console.log(element);
	});
}
function getStudentInfo5() {
	arr.forEach((element) => {
		console.log(element);
	});
}
```

> 快捷键`ctrl+f`
>
> 搜索结果, 如果是多个`enter`跳到下一个, `shift+enter`跳到上一个

![img](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808233326.gif)

> 快捷键`alt+f3`, 在所有的匹配项之后添加光标, 实现批量操作

![image-20210808233533570](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808233533.png)

> 搜索框最右侧的三个配置按钮
>
> 第一个是大小写敏感。就是在文档中搜索关键词的时候，搜索的结果是否要跟关键词大小写完全一致。
>
> 默认情况下，VS Code 的搜索是不区分大小写的，也就是说哪怕大小写不一样，也会算到搜索结果里去。
>
> 但如果我们不想要这个特性，就可以点击这个按钮，来关闭它。

![img](https://static001.geekbang.org/resource/image/79/89/794c0ece3641a0a409482c248ac06c89.gif)

> 第二个是全单词匹配。
>
> 有的时候我们搜索的单词恰好是别的某个单词中间的一部分，如果我们不希望这样的结果出现在搜索结果中
>
> 可以点击这个按钮来关闭它。

![img](https://static001.geekbang.org/resource/image/c5/18/c5640fa152c2adb719128f7b353c5b18.gif)

> 第三个，就是正则表达式匹配了。
>
> 当我们点击这个按钮，就能够打开正则表达式的支持，然后在搜索框中输入正则表达式来搜索。

![img](https://static001.geekbang.org/resource/image/04/f4/048f0b7a1e554aa9a0f86130a31efcf4.gif)

> 注意: 如果我们先选中一段文本，然后按下`ctrl+f` 调出搜索框, 点击`在选定内容中查找`, 编辑器就只会在这个区域里进行搜索。

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210809211408.png)

![img](https://static001.geekbang.org/resource/image/31/0a/31e1b32cf5e0142496d1e05b2eb1c20a.gif)

# 多文件搜索和替换

> 单文件搜索, 以整个文件为单位
>
> 多文件搜索, 以整个项目为单位
>
> `ctrl+shift+f`, 功能一样, 只是范围更大

![img](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808234436.gif)

> 全部替换的快捷键`ctrl+alt+enter`

![image-20210808234401742](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808234401.png)

# 多文件搜索的筛选

![image-20210808234224964](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808234225.png)

![image-20210808234250346](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808234250.png)

# 常用插件

![image-20211014235124799](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142351834.png)

![image-20210903170532560](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210903170532.png)
![image-20210904170500128](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904170500.png)

# 界面美化

![image-20211014235218681](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142352722.png)

# 代码格式化

![image-20210808222655085](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808222655.png)

> 格式化以后的代码更加方便阅读, 右键选择`格式化文档`即可进行格式化
>
> 默认快捷键是`shift+alt+f`

![image-20210904172052913](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904172053.png)

> vscode 自带格式化功能
>
> 可以安装格式化插件, 获得更好的格式化效果, 以及更多的语言支持

![image-20210808222835148](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808222835.png)

# 彩虹标签

> html 代码, 不同的缩进, 显示不同的颜色, 方便检查代码书写是否正确

![image-20211014155644885](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141556921.png)

![Example](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141556884.png)

# 文件主题

> 不同的文件主题, 会有不同的代码高亮
>
> 所谓代码高亮, 不同的类型的代码, 显示不同的颜色, 如果颜色相同, 说明类型一致
>
> 方便查看和检查代码
>
> 推荐使用`monokai st3`

![image-20211014160015603](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141600644.png)

> 插件市场输入`category:themes`, 可以搜索所有主题类型的插件
>
> 如果安装多个主题, 可以在主题列表中进行选择

![image-20210809001650033](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210809001650.png)

# 文件图标

> 不同的文件类型之前, 显示不同的图标, 这样文件的类型, 可以一目了然
>
> 推荐`vscode icons`

![image-20211014160639771](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141606812.png)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141616282.gif)

> 在插件市场搜索`tag:icon-theme`, 可以查看所有图标类型的插件
>
> 如果安装了多个, 可以在图标列表进行选择

![image-20210809001923379](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210809001923.png)

# 生产力工具

![image-20211014235239498](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110142352544.png)

# 快捷键映射

> vscode 有自己的快捷键, 不过 sublime 的快捷键更人性化一些

![image-20210808153111560](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210808153111.png)

![image-20211014162127471](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141621511.png)

# 快速运行代码

> code runner, 可以在 vscode 的控制台中运行代码, 支持多种语言, 非常方便

![image-20211014162201479](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141622534.png)

> 装完之后, 点击右上角的播放按钮, 或者右键`run code`, 就可以运行代码, 查看结果了

![image-20211014162551543](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141625593.png)

# 快速插入数字

![image-20211014163142422](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141631472.png)

> 一些测试数据, 有时候需要批量插入数字, 可以使用此插件

> 使用方法: `%d:开始数字:累加数字`
>
> `%d:1:1`, 从 1 开始, 每次加 1, 生成的数字会写入到光标所在位置, 有几个光标就可以插入几个数字
>
> 注意: 插件会获取多光标的生成顺序, 把第一个生成的光标作为起点

# 自动重命名标签

![image-20211014163542227](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141635276.png)

> 书写 html 标签时, 如果修改标签名, 开始, 结束标签都要改
>
> 自动重命名标签插件, 支持修改开始标签, 结束标签自动更改

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141636104.gif)

# 在浏览器中打开

![image-20211014163741497](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141637542.png)

> 使用该插件, 可以快速使用默认浏览器, 打开你书写的 html 文件

![img](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141638699.jpeg)

# 代码实时预览

> 左边写代码, 右边看效果, 需要安装 live server

![image-20210904170737380](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904170737.png)

> 使用`windows + ← →`, 进行分屏

![image-20210904170613338](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904170613.png)

> 设置延迟自动保存, 延迟时间 100ms

![image-20211014164141072](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141641124.png)

![image-20210904170815271](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20210904170815.png)

> 如果只打开一个 html 文件, live-server 有可能会失效
>
> live-server 生效的前提是, 需要有一个项目
>
> 所以需要把文件夹先导入到 vscode, 才可以使用 live-server

![image-20211014164238974](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202110141642019.png)
