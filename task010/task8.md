<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<meta name="keywords" content="关键词1,关键词2,关键词3" />
		<meta name="description" content="对网站的描述" />
		<title>第2题</title>
		<style type="text/css">
			#father {
				color: red;
			}
			p {
				color: blue;
			}
		</style>
	</head>
	<body>
		<div id="father">
			<p>试问这行字体是什么颜色的？</p>
		</div>
	</body>
</html>
答：
#father对于p标签是继承，权重为null，
p标签的权重是0-0-1，
改行字体颜色为blue。