function getCookie(name) {
    var name = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) 
    {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
}

var ass = undefined, display = getCookie("danmaku");

function resizeVideo() {
    ass.resize();
    danmaku();
}

fetch($("video").attr("danmaku")).then(res => res.text())
.then((text) => {
    ass = new ASS(text, document.getElementById('video'));
    ass.resampling = 'video_width';
    resizeVideo();
    jQuery($(window).resize(function() {
        $("#video").attr("width", $("#header").width());
        resizeVideo();
    }));
});

function danmaku(stat) {
    if (stat != undefined) display = stat;
    if (display) {
        ass.show();
        $("#showDanmaku").addClass("disabled");
        $("#hideDanmaku").removeClass("disabled");
        document.cookie = "danmaku=true; expires=1 Jan 2050 00:00:00 UTC;"
    }
    else {
        ass.hide();
        $("#showDanmaku").removeClass("disabled");
        $("#hideDanmaku").addClass("disabled");
        document.cookie = "danmaku=false; expires=1 Jan 2050 00:00:00 UTC;"
    }
}