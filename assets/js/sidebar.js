url = new Array();
url[0] = "index.html";
url[1] = "收容失效汉化计划.html";
url[2] = "中文贴图模组.html";
url[3] = "trends/预发布测试.html";
url[4] = "动态列表.html";
url[5] = "重制版中文优化.html";
url[6] = "终极版汉化计划.html";
url[7] = "收容失效中文维基.html";
url[8] = "你知道吗.html";
url[9] = "trends/中贴第二版.html";
url[10] = "存档列表.html";
url[11] = "汉化组成员.html";
url[12] = "维基SCP换血计划.html";
url[13] = "video/轻收容区教程.html";
url[13] = "video/SCP-066.html";
url[13] = "video/SL抵制外挂.html";
url[14] = "trends/中文网站.html";
url[15] = "trends/汉化阶段调整.html";
url[16] = "trends/Discord群关闭.html";
url[17] = "trends/一期测试.html";
url[18] = "trends/中贴第三版.html";
url[18] = "trends/十周年.html";
url[19] = "trends/二期技术测试.html";
url[20] = "trends/二期汉化.html";
url[21] = "trends/排错测试.html";
url[22] = "trends/正式发布.html";
url[23] = "trends/第二版.html";
url[24] = "trends/第三版.html";

i = Math.random() * url.length;
i = Math.floor(i);
str = "<a href='" + url[i] + "'>";

document.writeln("<!-- Sidebar -->");
document.writeln("					<div id='sidebar'>");
document.writeln("						<div class='inner'>");
document.writeln("");
document.writeln("							<!-- Search -->");
document.writeln("								<!--");
document.writeln("								<section id='search' class='alt'>");
document.writeln("									<form method='post' action='#'>");
document.writeln("										<input type='text' name='query' id='query' placeholder='搜索' />");
document.writeln("									</form>");
document.writeln("								</section>");
document.writeln("								-->");
document.writeln("");
document.writeln("							<!-- Menu -->");
document.writeln("								<nav id='menu'>");
document.writeln("									<header class='major'>");
document.writeln("										<h2>菜单</h2>");
document.writeln("									</header>");
document.writeln("									<ul>");
document.writeln("										<li><a href='index.html'>主页</a></li>");
document.writeln("										<li><a href='汉化组成员.html'>汉化组成员</a></li>");
document.writeln("										<li><a href='动态列表.html'>动态</a></li>");
document.writeln("                                      <li><a href='存档列表.html'>存档</a></li>");
document.writeln("										<li><a href='http://forum.ziyuesinicization.site/'>论坛</a></li>");
document.writeln("                                      <li><a href='你知道吗.html'>你知道吗</a></li>");
document.writeln("                                      <li>"+str+"随机页面</a></li>");
document.writeln("										<!--");
document.writeln("										<li>");
document.writeln("											<span class='opener'>Another Submenu</span>");
document.writeln("											<ul>");
document.writeln("												<li><a href='#'>Lorem Dolor</a></li>");
document.writeln("												<li><a href='#'>Ipsum Adipiscing</a></li>");
document.writeln("												<li><a href='#'>Tempus Magna</a></li>");
document.writeln("												<li><a href='#'>Feugiat Veroeros</a></li>");
document.writeln("											</ul>");
document.writeln("										</li>");
document.writeln("										-->");
document.writeln("									</ul>");
document.writeln("								</nav>");
document.writeln("");
document.writeln("							<!-- Section -->");
document.writeln("								<section>");
document.writeln("									<header class='major'>");
document.writeln("										<h2>最新动态</h2>");
document.writeln("									</header>");
document.writeln("									<div class='mini-posts'>");
document.writeln("										<article>");
document.writeln("											<a href=\"trends/中贴第七版.html\" class='image'><img src=\"images/中文贴图模组/第二版.jpg\"></a>");
document.writeln("											<p>中文贴图模组 第七版发布<br>2022年11月1日</p>");
document.writeln("										</article>");
document.writeln("										<article>");
document.writeln("											<a href=\"trends/第三版.html\" class='image'><img src=\"https://media.moddb.com/images/downloads/1/238/237651/file.png\"></a>");
document.writeln("											<p>收容失效汉化计划 第三版发布<br>2022年9月1日</p>");
document.writeln("										</article>");
document.writeln("										<article>");
document.writeln("											<a href=\"trends/第二版.html\" class='image'><img src=\"images/收容失效汉化计划/第二版.png\"></a>");
document.writeln("											<p>收容失效汉化计划 第二版发布<br>2022年8月1日</p>");
document.writeln("										</article>");
document.writeln("									</div>");
document.writeln("									<ul class='actions'>");
document.writeln("										<li><a href='动态列表.html' class='button'>更多</a></li>");
document.writeln("									</ul>");
document.writeln("								</section>");
document.writeln("");
document.writeln("							<!-- Section -->");
document.writeln("								<section>");
document.writeln("									<header class='major'>");
document.writeln("										<h2>联系我们</h2>");
document.writeln("									</header>");
document.writeln("									<p>你可以通过以下方式反馈bug、汉化建议和随便聊天</p>");
document.writeln("									<ul class='contact'>");
document.writeln("										<li class='icon'><img style='MARGIN: 0px 10px -15px -40px' src='.//images/icons/mail.svg' width='15%'><a href='mailto:ziyuecommentary@gmail.com'>ziyuecommentary@gmail.com</a></li>");
document.writeln("										<li class='icon'><img style='MARGIN: 0px 10px -15px -40px' src='.//images/icons/group.svg' width='15%'><a href='https://jq.qq.com/?_wv=1027&k=OKHrRKoW' target='_blank'>1006841985</a></li>");
document.writeln("										<li class='icon'><img style='MARGIN: 0px 10px -15px -40px' src='.//images/icons/hammer.svg' width='13%'><a href='https://www.moddb.com/company/ziyue-sinicization-group' target='_blank'>ModDB主页</a></li>");
document.writeln("									</ul>");
document.writeln("								</section>");
document.writeln("");
document.writeln("							<!-- Footer -->");
document.writeln("								<footer id='footer'>");
document.writeln("									<p class='copyright'>&copy; 子悦汉化组，遵循<a href=\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\" target=\"_blank\">CC BY-SA 3.0</a>协议。<br>网页设计来自<a href='https://html5up.net' target='_blank'>HTML5 UP</a></p>");
document.writeln("								</footer>");
document.writeln("");
document.writeln("						</div>");
document.writeln("					</div>");