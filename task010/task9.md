<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<meta name="keywords" content="关键词1,关键词2,关键词3" />
		<meta name="description" content="对网站的描述" />
		<title>第3题</title>
		<style type="text/css">
			div p {
				color: red;
			}
			#father {
				color: red;
			}
			p.c2 {
				color: blue;
			}
		</style>
	</head>
	<body>
		<div id="father" class="c1">
			<p class="c2">试问这行字体是什么颜色的？</p>
		</div>
	</body>
</html>
答：
div p的权重是0-0-2，
#father对于p的属于继承，权重为null，
p.c2的权重是0-1-1，
该行字体颜色书blue。