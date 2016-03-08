!function () {
    var e = window.endgame = {};
    e.games = [
        {name: "抓星星", type: "动作", score: 89, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/pop/logo_8227624.jpg", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/pop/index.html", desc: "挑战你的反应极限!", isnew: !0},
        {name: "打企鹅", type: "动作", score: 89, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/daqie/index_files/3_39e674b.jpg", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/daqie/index.html", desc: "上古时代的经典游戏！", isnew: !0},
        {name: "停车大作战", type: "运动", score: 89, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/parkinger/logo.png", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/parkinger/index.html", desc: "超多关卡！体验非常逼真！", isnew: !0},
        {name: "疯狂踩蚂蚁", type: "动作", score: 88, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/ant/res/share_icon.png", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/ant/index.html", desc: "一个、两个、三个、四个...", isnew: !0},
        {name: "跳跃的杰克", type: "运动", score: 89, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/jumping-jack/logo_1af40b6.jpg", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/jumping-jack/index.html", desc: "非常耐玩的动作小游戏！", isnew: !0},
        {name: "看看你有多老", type: "智力", score: 85, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/howold/img/logo.jpg", ishot: !0, star: 4, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/howold/index.html", desc: "测测你的大脑年龄", isnew: !0},
        {name: "解开绳子", type: "智力", score: 83, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/jieshengzi/logo.png", ishot: !0, star: 4, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/jieshengzi/index.html", desc: "不要让绳子缠一起", isnew: !0},
        {name: "果冻消除", type: "动作", score: 86, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/jekyll-collapse/assets/logo.png", ishot: !0, star: 4, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/jekyll-collapse/index.html", desc: "优美画风，可玩性强。", isnew: !0},
        {name: "上山打老虎！", type: "动作", score: 85, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/tiger/logo_d67c0b3.png", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/tiger/index.html", desc: "老虎要打，苍蝇也要打！", isnew: !0},
        {name: "疯狂手臂", type: "动作", score: 89, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/shake.jpeg", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/yao.html?from=list", desc: "疯狂手指最新力作！"},
        {name: "疯狂手指", type: "动作", score: 95, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/game/games/click/icon.png", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/game/games/click/index.html?from=list&v=1", desc: "截至8.1日超过7千万玩家！"},
        {name: "OOXX", type: "动作", score: 87, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/xxoo/img/cover.png", ishot: !0, star: 5, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/xxoo/?from=list", desc: "12.5秒你能来几下？"},
        {name: "疯狂挠挠", type: "动作", score: 87, icon: "http://crazynaonao.duapp.com/nao.png", ishot: !0, star: 5, src: "http://crazynaonao.duapp.com?from=list", desc: "越挠越痛快,你也快挠挠"},
        {name: "看你有多好色", type: "智力", score: 86, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/haose/img/icon.jpg", ishot: !0, star: 4, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/haose/page/index.html?from=list", desc: "超精致的小游戏"},
        {name: "屌丝逆袭记！", type: "智力", score: 86, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/diaosi/logo.png", ishot: !0, star: 4, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/bro/", desc: "想体验屌丝逆袭的感觉吗"},
        {name: "坚持住牛郎！", type: "动作", score: 85, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/qixi/images/logo.png", ishot: !0, star: 4, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/tj/qixi.html?url=http%3A%2F%2F10.23.240.111:8888/xyz_abc%2Fgames%2Fqixi%2F", desc: "鹊桥相会靠你了"},
        {name: "围住神经猫", type: "智力", score: 85, icon: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/game/games/sjm/icon.png", ishot: !0, star: 4, src: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/tj/sjm.html?url=http%3A%2F%2F10.23.240.111:8888/xyz_abc%2Fgame%2Fgames%2Fsjm%2Fcat.html", desc: "玩家过亿的超经典游戏！"}
    ], e.env = {};
    var a = navigator.userAgent.match(/baidubrowser\/([\d\.]+)/i), o = /91\.html/.test(document.referrer) || /91.html/.test(location.pathname) || navigator.userAgent.match(/pandaspace/i);
    if (a && (e.env.baidu = !0, e.env.version = a[1]), o && (e.env.is91 = !0), "WeixinJSBridge"in window && (e.env.weixin = !0), window.mobilecheck = function () {
        var e = !1;
        return function (a) {
            (/(android|bb\d+|meego).+mobile|pandaspace|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (e = !0)
        }(navigator.userAgent || navigator.vendor || window.opera), e
    }, !window.mobilecheck() && window.top === window) {
        var t = "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/pc/preview.html";
        location.href = t + "?url=" + encodeURIComponent("http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/icebucket/index.html?score=70.81")
    }
}();
"undefined" == typeof window.endgame && (window.endgame = {}), function (e) {
    function t() {
        c.complete.call(d)
    }

    var n = Object.keys || function (e) {
        var t = [];
        for (var n in e)e.hasOwnProperty(n) && t.push(n);
        return t
    }, i = new Image;
    i.src = "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/assets/share.png", i.className = "fx", i.style.width = "100%", i.style.height = "100%", i.style.position = "absolute", i.style.opacity = "0.7", i.style.top = "0", i.style.left = "0", i.style.bottom = "0", i.style.right = "0", i.style.display = "none", i.style.zIndex = "999", i.ontouchstart = function () {
        this.style.display = "none"
    };
    var o = new Image;
    o.src = "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/assets/shareweibo_07baba6.png";
    var s = !1, a = "http://5g.baidu.com/", l = {imgUrl: "http://iwan.baidu.com/xxx_xiaoyouxi/static/icon/iwan256.png", timeLineLink: "http://iwan.baidu.com/xxx_xiaoyouxi/index.html", tTitle: "爱玩游戏", tContent: "硬的(di)游戏，款款都是硬货！"}, c = {gohome: function () {
        window.location = a
    }, trigger: function () {
        l.tTitle = document.title
    }, complete: function () {
        document.location.href = a
    }};
    e.share = {on: function (e, t) {
        c[e] = t
    }, set: function (e, t) {
        t || "object" != typeof e ? (l[e] = t, "tTitle" == e && (document.title = t)) : (t = e, e = void 0, n(l).map(function (e) {
            l[e] = t[e] || l[e], "tTitle" == e && (document.title = l[e])
        }))
    }, trigger: function () {
        if (!e.env.baidu || "flyflow_webkit_js"in window || (i.src = o.src), e.env.baidu && "flyflow_webkit_js"in window ? window.flyflow_webkit_js.onShare(l.tTitle, l.imgUrl, l.timeLineLink) : (s || (document.body.appendChild(i), s = !0), i.style.display = "block"), e.env.is91) {
            i.style.display = "none";
            var t = window.encodeURIComponent ? window.encodeURIComponent(l.imgUrl) : l.imgUrl;
            window.open("http://bbx2.sj.91.com/Softs.ashx?act=105&sact=2&content=" + l.tTitle + "&picurl=" + t + "&type=1&typewith=1")
        }
    }, close: function () {
    }, showPanel: function (e, t) {
        var n = document.querySelector("#share-panel"), i = document.querySelector("#share-panel .again"), o = document.querySelector("#share-panel .share"), s = document.querySelector("#share-msg"), a = this;
        s.innerHTML = e, setTimeout(function () {
            n.className = "panel"
        }, 1e3), i.ontouchend = i.onclick = function (e) {
            e.preventDefault(), e.stopPropagation(), this.className = "btn", n.className = "panel end", t && t()
        }, o.ontouchend = o.onclick = function () {
            a.set("tTitle", e), a.trigger()
        }
    }};
    var d = {close: function () {
        i.style.display = "none"
    }};
    window.goHome = c.gohome, window.dp_submitScore = c.trigger, window.onShareComplete = t, document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.on("menu:share:appmessage", function () {
			l.tContent="dsfasdfsdf1";
            WeixinJSBridge.invoke("sendAppMessage", {img_url: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/icebucket/index.html?score=70.81", link: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/icebucket/index.html?score=70.81", desc: l.tContent, title: l.tTitle + "123123"}, t)
        }), WeixinJSBridge.on("menu:share:timeline", function () {
			l.tContent="dsfasdfsdf2";
            WeixinJSBridge.invoke("shareTimeline", {img_url: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/icebucket/index.html?score=70.81", img_width: "640", img_height: "640", link: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/icebucket/index.html?score=70.81", desc: l.tContent, title: l.tTitle}, t)
        })
    }, !1)
}(window.endgame, void 0);