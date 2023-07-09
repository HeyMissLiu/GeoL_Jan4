<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<title>第6题</title>
		<style type="text/css">
			.c1 .c2 div {
				color: blue;
			}
			div #box3 {
				color: green;
			}
			#box1 div {
				color: yellow;
			}
		</style>
	</head>
	<body>
		<div id="box1" class="c1">
			<div id="box2" class="c2">
				<div id="box3" class="c3">文字</div>
			</div>
		</div>
	</body>
</html>
答：
.c1 .c2 div的权重为0-2-1，
div #box3的权重为1-0-1，
#box1 div的权重为1-0-1，
权重相同取最后的样式，
文字颜色为yellow。