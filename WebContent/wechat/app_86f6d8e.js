
$(function () {
    document.addEventListener("touchmove", function (t) {
        t.preventDefault()
    });
    var t = function (t) {
        var e = /\(([^,]+)+/g;
        return parseInt(e.exec(t.style.webkitTransform)[1])
    }, e = document.getElementById("bucket");
    e.style.webkitTransform = "translate3d(0, 0, 0)";
    var o, n = (document.getElementById("bucket-dom"), $("#bucket-dom")), i = document.getElementById("bucket-dom1"), s = document.getElementById("boy"), a = $(window).width(), r = $("#bucket").width(), c = a / 2 - 30, l = a / 2 - 30, d = a / 2 + 30, p = 0, m = !1, u = !0, b = a / 2, g = 0, h = $("#water"), f = document.getElementById("water"), x = function (o) {
        r + p >= a && (u = !1), e.style.webkitTransform = "translate3d(" + o + "px, 0, 0)", p = t(e), p >= 0 && 80 > p ? s.style.backgroundPosition = "0px 0px" : p >= 80 && l > p ? s.style.backgroundPosition = "-60px 0px" : p >= l && d > p ? s.style.backgroundPosition = "-120px 0px" : p >= d && a - 80 > p ? s.style.backgroundPosition = "-180px 0px" : p >= a - 80 && a > p + r && (s.style.backgroundPosition = "-240px 0px")
    }, y = function (o) {
        0 >= p && (u = !0), e.style.webkitTransform = "translate3d(" + o + "px, 0, 0)", p = t(e), p >= 0 && 80 > p ? s.style.backgroundPosition = "0px 0px" : p >= 80 && l > p ? s.style.backgroundPosition = "-60px 0px" : p >= l && d > p ? s.style.backgroundPosition = "-120px 0px" : p >= d && a - r - 80 > p ? s.style.backgroundPosition = "-180px 0px" : p >= a - r - 80 && a > p + r && (s.style.backgroundPosition = "-240px 0px")
    };
    $("#touch-box").off("touchstart").on("touchstart", function () {
        function t(t) {
            var e = parseFloat(t);
            if (!isNaN(e)) {
                return e = Math.round(100 * t) / 100
            }
        }

        if (n.show(), i.style.display = "none", 0 == m) {
            o = setInterval(function () {
                u ? x(p + 3) : y(p - 3)
            }, 1), m = !0;
        } else {
            if (i.style.webkitTransform = "rotate(180deg)", n.hide(), i.style.display = "block", h.fadeIn(), f.style.webkitTransform = "translate3d(0, 400px, 0)", f.style.webkitTransition = "700ms", clearInterval(o), m = !1, g = t(2 * (50 - Math.abs(p + Math.random() + r / 2 - b))), g > 40) {
                var e = function () {
                    s.style.backgroundPosition = "-300px 0px"
                };
                setTimeout(e, 100), h.hide(10, function () {
                    f.style.webkitTransform = "translate3d(0, 0, 0)", s.style.backgroundPosition = "-360px 0px"
                })
            } else {
                h.hide(function () {
                    f.style.webkitTransform = "translate3d(0, 0, 0)"
                });
            }
            var a = g, c = $("#his-score-n").text();
            $("#my-score-n,#share-score").text(0 > g ? "0" : g);
            var l = function () {
                $("#tip-box-op, #mask, #contro").show(), endgame.env.baidu ? ($("#share-img,#follow-btn").hide(), $("#share-img-bd").show()) : $("#share-img-bd").hide(), $("#tip-box > .tip-content").html(a > c ? "恭喜，你赢得了这次比赛，快分享出去，让好友挑战你的分数吧！" : '很遗憾，你没有挑战成功，快分享出去，让好友一起挑战一下吧！'), endgame.share.set({imgUrl: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/eg_icon/assets/compare/2/gameicon/iceicon.png", timeLineLink: "http://t.cn/R7qrUBj?score=" + $("#share-score").text(), tTitle: "我的冰桶成绩是" + "99.94" + "，我邀请你参加挑战。", tContent: "冰桶挑战赛"})
            };
            setTimeout(l, 300)
        }
    }), $("#boy").css({left: c}), e.style.webkitTransform = "translate3d(" + (b - r / 2) + "px, 0, 0)", $("#again,#touch-again").off("touchend").on("touchend", function (t) {
        t.stopPropagation(), $("#tip-box-op, #mask, #contro").hide()
    });
    var k = location.search.replace("?", "").split("&"), w = {};
    k.forEach(function (t) {
        w[t.split("=")[0]] = t.split("=")[1]
    }), w.score ? ($("#his-score-n").text("99.92"), endgame.share.set({imgUrl: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/eg_icon/assets/compare/2/gameicon/iceicon.png", link:"http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/icebucket/index.html?score=70.81", timeLineLink: "http://t.cn/R7qrUBj?score=" + "99.93", tTitle: "ta的冰桶成绩竟然是" + "99.92" + "，我邀请你参加挑战。", tContent: "冰桶挑战赛"})) : endgame.share.set({imgUrl: "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/eg_icon/assets/compare/2/gameicon/iceicon.png", timeLineLink: "http://t.cn/Rw09TMo?score=99.92", link:"http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/games/icebucket/index.html?score=70.81", tTitle: "ta的冰桶成绩竟然是99.92，我邀请你参加挑战。", tContent: "冰桶挑战赛"})
});
