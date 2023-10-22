// Psuedo Database
const trends = [
    {
        link:	"trends/第五版.html",
        poster:	"images/scpcb-chinese/第五版.png",
        title:	"收容失效汉化计划 第五版发布",
        date:	"2023年10月1日"
    },
    {
        link:	"trends/官方维基关闭.html",
        poster:	"images/placeholders/pic01.jpg",
        title:	"子悦汉化组 官方维基关闭",
        date:	"2023年7月13日"
    },
    {
        link:	"trends/三角符文.html",
        poster:	"images/uncategorized/deltarune_cn.png",
        title:	"三角符文中文网站 搭建完毕",
        date:	"2023年7月6日"
    },
    {
        link:	"trends/第四版.html",
        poster:	"images/scpcb-chinese/第四版.png",
        title:	"收容失效汉化计划 第四版发布",
        date:	"2023年1月1日"
    },
    {
        link:	"trends/汉化组博客.html",
        poster:	"images/placeholders/pic04.jpg",
        title:	"子悦汉化组 博客搭建完毕",
        date:	"2022年11月24日"
    },
    {
        link:	"trends/钓鱼网站.html",
        poster:	"images/placeholders/pic02.jpg",
        title:	"子悦汉化组 官网域名瘫痪",
        date:	"2022年11月23日"
    },
	{
        link:	"trends/中贴第七版.html",
        poster:	"images/ctot/第二版.jpg",
        title:	"中文贴图模组 第七版发布",
        date:	"2022年11月1日"
    },
	{
        link:	"trends/第三版.html",
        poster:	"images/scpcb-chinese/第三版.png",
        title:	"收容失效汉化计划 第三版发布",
        date:	"2022年9月1日"
    },
	{
        link:	"trends/第二版.html",
        poster:	"images/scpcb-chinese/第二版.png",
        title:	"收容失效汉化计划 第二版发布",
        date:	"2022年8月1日"
    },
	{
        link:	"trends/正式发布.html",
        poster:	"images/scpcb-chinese/正式发布.jpg",
        title:	"收容失效汉化计划 正式发布",
        date:	"2022年7月1日"
    },
	{
        link:	"trends/排错测试.html",
        poster:	"images/scpcb-chinese/排错测试.jpg",
        title:	"收容失效汉化计划 排错测试发布",
        date:	"2022年6月1日"
    },
	{
        link:	"trends/二期汉化.html",
        poster:	"images/scpcb-chinese/二期汉化.jpg",
        title:	"收容失效汉化计划 二期汉化发布",
        date:	"2022年5月16日"
    },
	{
        link:	"trends/二期技术测试.html",
        poster:	"images/scpcb-chinese/二期技术测试.jpg",
        title:	"二期技术测试/中贴第四版发布",
        date:	"2022年5月1日"
    },
	{
        link:	"trends/十周年.html",
        poster:	"https://media.moddb.com/images/members/5/4587/4586995/profile/tenth.png",
        title:	"收容失效十周年快乐！",
        date:	"2022年4月15日"
    },
	{
        link:	"trends/中贴第三版.html",
        poster:	"images/ctot/第二版.jpg",
        title:	"中文贴图模组 第三版更新",
        date:	"2022年4月1日"
    },
	{
        link:	"trends/一期测试.html",
        poster:	"images/scpcb-chinese/一期测试.jpg",
        title:	"收容失效汉化计划 一期测试更新",
        date:	"2022年4月1日"
    },
	{
        link:	"trends/Discord群关闭.html",
        poster:	"images/scpcb-chinese/banner.png",
        title:	"SCP - 收容失效汉化交流 Discord群关闭",
        date:	"2022年3月17日"
    },
	{
        link:	"trends/汉化阶段调整.html",
        poster:	"images/scpcb-chinese/banner.png",
        title:	"SCP - 收容失效汉化计划 汉化阶段调整",
        date:	"2022年3月13日"
    },
	{
        link:	"trends/中文网站.html",
        poster:	"images/scpcb-chinese/中文网站.png",
        title:	"SCP - 收容失效 中文网站搭建完毕",
        date:	"2022年3月12日"
    },
	{
        link:	"trends/预发布测试.html",
        poster:	"images/scpcb-chinese/预发布测试.jpg",
        title:	"收容失效汉化计划 预发布测试更新",
        date:	"2022年2月1日"
    },
	{
        link:	"trends/中贴第二版.html",
        poster:	"images/ctot/第二版.jpg",
        title:	"中文贴图模组 第二版更新",
        date:	"2022年2月1日"
    }
]
const url = ["index.html","scpcb-chinese.html","ctot.html","trends.html","scpunity-chinese-polish.html","scpcb-ue-chinese.html","scpcb-chinese-wiki.html","trivia.html","archives.html","members.html","scpcb-rewrite-wikipedia.html"]

function getUrlParam(param) {
	var url = window.location.search.substring(1);
	if (url == '') return;
	var paramsArr = url.split('&');
	for (var i = 0; i < paramsArr.length; i++) {
		var combina = paramsArr[i].split("=");
		if (combina[0] == param) {
			return combina[1];
		}
	}
}

function generateTrends() {
	const TRENDS_PER_PAGE = 8;
	if(location.href.indexOf("trends") == -1) return;
	if(location.href.substring(location.href.indexOf("trends")).indexOf("/") != -1) return;
	jQuery(function($) {
		var page = getUrlParam("page");
		page = (page == undefined) ? 0 : page - 1;
		var html = "";
		for (var i = 0; i < TRENDS_PER_PAGE; i++) {
			if(((page * TRENDS_PER_PAGE) + i) >= trends.length) break;
			html += "<div class=\"trendList\">";
			html += "<a href=\"" + trends[(page * TRENDS_PER_PAGE) + i].link + "\"><img class='image' src=\"" + trends[(page * TRENDS_PER_PAGE) + i].poster + "\"><\/a>";
			html += "<span><a href=\"" + trends[(page * TRENDS_PER_PAGE) + i].link + "\"><h2>" + trends[(page * TRENDS_PER_PAGE) + i].title + "<\/h2><\/a>" + trends[(page * TRENDS_PER_PAGE) + i].date + "<\/span>";
			html += "</div>";
			html += "<br>";
		}
		html += "<br><ul class='pagination' align='center'>";
		if (page == 0) {
			html += "<li><span class='button disabled'>上一页</span></li>";
		} else {
			html += "<li><a href='?page=" + (page) + "' class='button'>上一页</a></li>";
		}
		for (var i = 0; i < Math.ceil(trends.length / TRENDS_PER_PAGE); i++) {
			html += "<li><a href='?page=" + (i+1) + "' class='page " + (page == i ? "active" : "") + "'>" + (i+1) + "</a></li>";
		}
		if (page == Math.ceil(trends.length / TRENDS_PER_PAGE) - 1) {
			html += "<li><span class='button disabled'>下一页</span></li>";
		} else {
			html += "<li><a class='button' href='?page=" + (page + 2) + "'>下一页</span></li>";
		}
		html += "</ul>";
		$("trends").replaceWith(html);
	});
}

function getLink(index) {
	if(index > url.length) 
		return trends[index - url.length].link;
	else
		return url[index];
}

function generateSidebar() {
	document.write(
		"<script async src='https://www.googletagmanager.com/gtag/js?id=G-J2WV3EXMX7'></script>" +
		"<script>" +
		  "window.dataLayer = window.dataLayer || [];" +
		  "function gtag(){dataLayer.push(arguments);}" +
		  "gtag('js', new Date());" +
		  "gtag('config', 'G-J2WV3EXMX7');" +
		"</script>" +
		"<div id='sidebar'>" +
			"<div class='inner'>" +
				//"<section id='search' class='alt'>" +
				//	"<form method='post' action='#'>" +
				//		"<input type='text' name='query' id='query' placeholder='搜索'/>" +
				//	"</form>" +
				//"</section>" +
				"<nav id='menu'>" +
					"<header class='major'>" +
						"<h2>菜单</h2>" +
					"</header>" +
					"<ul>" +
						"<li><a href='index.html'>主页</a></li>" +
						"<li><a href='members.html'>汉化组成员</a></li>" +
						"<li><a href='trends.html'>动态</a></li>" +
						"<li><a href='archives.html'>存档</a></li>" +
						"<li>" +
							"<span class='opener'>其他网站</span>" +
							"<ul>" +
								"<a href='https://forum.ziyuesinicization.site/'>官方论坛</a></li>" +
								"<li><a href='https://blog.ziyuesinicization.site/'>博客中心</a></li>" +
								"<li><a href='https://gitbook.ziyuesinicization.site/'>GitBook</a></li>" +
								"<li><a href='https://weblate.ziyuesinicization.site/'>ZiYue Weblate</a></li>" +
								"<li><a href='https://github.ziyuesinicization.site/'>Github镜像</a></li>" +
							"</ul>" +
						"</li>" +
						"<li><a href='trivia.html'>你知道吗</a></li>" +
						"<li><a href='" + getLink(Math.floor(Math.random() * (url.length + trends.length))) + "'>随机页面</a></li>" +
					"</ul>" +
				"</nav>" +
				"<section>" +
					"<header class='major'>" +
						"<h2>最新动态</h2>" +
					"</header>" +
					"<div class='mini-posts'>" +
						function() {
							var trend = "";
							for(var i = 0; i < 3; i++) {
								trend += "<article>" + 
										 	"<a href=\"" + trends[i].link + "\" class='image'><img src=\"" + trends[i].poster + "\"></a>" + 
										 	"<p>" + trends[i].title + "<br>" + trends[i].date + "</p>" +
										 "</article>";
							}
							return trend;
						}() +
					"</div>" +
					"<ul class='actions'>" +
						"<li><a href='trends.html' class='button'>更多</a></li>" +
					"</ul>" +
				"</section>" +
				"<section>" +
					"<header class='major'>" +
						"<h2>联系我们</h2>" +
					"</header>" +
					"<ul class='contact'>" +
						"<li class='icon nopad solid fa-envelope'><a href='mailto:contact@ziyuesinicization.site'>contact@ziyuesinicization.site</a></li>" +
						"<li class='icon nopad brands fa-qq'><a href='https://jq.qq.com/?_wv=1027&k=OKHrRKoW' target='_blank'>1006841985</a></li>" +
						"<li class='icon nopad solid fa-wrench'><a href='https://www.moddb.com/company/ziyue-sinicization-group' target='_blank'>ModDB主页</a></li>" +
					"</ul>" +
				"</section>" +
				"<footer id='footer'>" +
					"<p class='copyright'>&copy; 子悦汉化组，遵循<a href=\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\" target=\"_blank\">CC BY-SA 3.0</a>协议。<br>网页设计来自<a href='https://html5up.net' target='_blank'>HTML5 UP</a>，托管于<a href='https://pages.cloudflare.com/' target='_blank'>Cloudflare Pages</a>。</p>" +
				"</footer>" +
			"</div>" +
		"</div>"
	);
}

generateSidebar();
generateTrends();