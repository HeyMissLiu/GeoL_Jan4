<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<meta name="keywords" content="关键词1,关键词2,关键词3" />
		<meta name="description" content="对网站的描述" />
		<title>第1题</title>
		<style type="text/css">
			#father #son {
				color: blue;
			}
			#father p.c2 {
				color: black;
			}
			div.c1 p.c2 {
				color: red;
			}
			#father {
				color: green !important;
			}
		</style>
	</head>
	<body>
		<div id="father" class="c1">
			<p id="son" class="c2">试问这行字体是什么颜色的？</p>
		</div>
	</body>
</html>
答：
#father #son的权重是2-0-0，
#father p.c2的权重是1-1-1，
div.c1 p.c2的权重是0-2-2，
#father对于p标签来说属于继承，权重为null，加上important权重也是null
所以该行字体颜色为blue。