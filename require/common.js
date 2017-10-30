"use strict";

function dongh() {
	$(window).scrollTop(0), $("#main").addClass("main_init"), $("#submenu").show().animate({
		opacity: 1
	}, 500, "easeOutQuart", function() {}), $("#sidebar").animate({
		left: 0,
		opacity: 1
	}, 500, "easeOutQuart", function() {}), $("#mainHead").animate({
		marginLeft: 0,
		opacity: 1
	}, 500, "easeOutQuart", function() {}), $(".mainTab_box").animate({
		marginLeft: 0,
		opacity: 1
	}, 500, "easeOutQuart", function() {}), $("#mainBody").animate({
		marginLeft: 0,
		opacity: 1
	}, 700, "easeOutQuart", function() {
		$("#footer").animate({
			marginTop: 20,
			opacity: 1
		}, 400, "easeOutQuart", function() {
			$(".logoCont").animate({
				opacity: 1
			}, 800, function() {})
		})
	}), crumbsFadeIn()
}

function checkPhoneOrPc() {
	if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)) {
		try {
			/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && ($("#main").css("max-width", "600px"), $(".subannerImg").css("width", "600px"))
		} catch(e) {}
		$("#main").css("max-width", "600px"), $(".subannerImg").css("width", "600px")
	}
}

//function newsList() {
//	var a = $(".J_newImg"),
//		c = $(".newTab a");
//	if(a) {
//		var g = $(a[0]);
//		c.click(function() {
//			$(this).attr("class").indexOf("col_c3a") > -1 || ($(this).addClass("col_c3a").siblings().removeClass("col_c3a"), 0 === c.index($(this)) ? (g.removeClass("newTxt"), g.addClass("newImg")) : (g.addClass("newTxt"), g.removeClass("newImg")))
//		})
//	}
//}

//function globalAjax(a, c, g, _, h) {
//	$.ajax({
//		url: a,
//		data: h || {},
//		type: c,
//		dataType: _,
//		success: function(a) {
//			g && g(a)
//		}
//	})
//}

//function topicTime(a, c) {
//	if(a = Number(a)) {
//		var g = new Date(a),
//			_ = g.getFullYear(),
//			h = g.getMonth() + 1,
//			$ = g.getDate(),
//			b = g.getHours(),
//			v = g.getSeconds(),
//			y = g.getMinutes();
//		10 > h && (h = "0" + h), 10 > $ && ($ = "0" + $), 10 > b && (b = "0" + b), 10 > y && (y = "0" + y), 10 > v && (v = "0" + v);
//		var I = [_, h, $],
//			w = [b, y, v];
//		return "yyyy-mm-dd" == c ? I.join("-") : I.join("-") + " " + w.join(":")
//	}
//	return ""
//}

function loadImg() {
	var a = APP.config.baseURI + "/cms-tmplt/wap/queryAsyncList.do?structureId=" + APP.wenzhang[$("#mainHead").attr("data-title")] + "&show=&callback=?&currentPage=",
		c = 0,
		g = navigator.userAgent.indexOf("Firefox"),
		_ = function(a) {
			if(c++, "1" === a.statusCode) {
				var _ = a.attributes.list,
					h = "";
				_ && _.length > 0 ? ($(_).each(function(i, o) {
					var a = o.RESOURCETITLE;
					h += "<li><a" + (g > -1 ? ' target="_self"' : "") + ' href="' + o.RESOURCELINK + '"otitle="新闻标题-行业动态" otype="button"><img src="' + (o.COVERIMAGE ? o.COVERIMAGE.replace("/shared/app_common", "") : "") + '"alt="新闻图片"><div class="newImg_text clearfix"><p class="img_length">' + (a && (a.length > 16 ? a.substring(0, 16) + "..." : a)) + '</p><p class="img2_length">' + (a ? a : "") + '</p><p class="txt_length" title="' + a + '">' + (a && (a.length > 27 ? a.substring(0, 26) + "..." : a)) + "</p><span>" + topicTime(o.publishDate, "yyyy-mm-dd") + "</span></div></a></li>"
				}), a.attributes.hasMore && $('<button id="" otitle="更多-图文新闻-行业动态" otype="button"class="addList J_load_more_newImg">更多</button>').appendTo($(".J_newImg")), a.attributes.hasMore || $(".J_load_more_newImg").remove(), $("#J_mainCont").show(), $(".J_newImg ul").append(h)) : ($("#J_mainCont").show(), h = '<div class="mainTabtxt"><p class="tac f16">目前没有内容，敬请期待！</p></div>', $("#J_mainCont").html(h))
			}
		};
	globalAjax(a + c, "get", _, "jsonp"), $(".J_newImg").delegate(".J_load_more_newImg", "click", function() {
		$(".J_load_more_newImg").remove(), globalAjax(a + c, "get", _, "jsonp")
	})
}
//
//function newsDetail() {
//	var a = "";
//	window.lastLi = !1;
//	for(var c = APP.imgList || [], i = 0; i < c.length; i++) {
//		var g = c[i];
//		g.titleShort = g.title && g.title.length > 36 ? g.title.substring(0, 36) + "..." : g.title, g.smallImg && (g.smallImg = g.smallImg.replace("/shared/app_common", "")), g.largeImg && (g.largeImg = g.largeImg.replace("/shared/app_common", ""))
//	}
//	if(0 !== c.length) {
//		$(c).each(function(i, o) {
//			var c = o.smallImg ? o.smallImg : "";
//			a += '<li data-index="' + i + '"><img src="' + c + '"></li>'
//		}), a = c.length <= 3 ? '<dl class="newImglist"><dt class="ImgBtn_disable J_ImgBtn_left ImgBtn_left"><i></i></dt><dd><ul class="clearfix J_imgScroll"  style="width:1000%">' + a + '</ul></dd><dt class="ImgBtn_disable ImgBtn_right J_ImgBtn_right"><i></i></dt></dl>' : '<dl class="newImglist"><dt class="ImgBtn_opacity J_ImgBtn_left ImgBtn_left"><i></i></dt><dd><ul class="clearfix J_imgScroll"  style="width:1000%">' + a + '</ul></dd><dt class="ImgBtn_right J_ImgBtn_right"><i></i></dt></dl>', $(a).insertBefore($(".newShowbox .newShowTime"));
//		var n = c.length,
//			m = 0,
//			_ = !0,
//			h = !0;
//		$(".J_ImgBtn_left i").click(function() {
//			0 !== m && _ && (m--, $(".J_imgScroll").animate({
//				"margin-left": -185 * m
//			}, "linear"), $(".J_ImgBtn_right").removeClass("ImgBtn_opacity"), $(".J_ImgBtn_left").removeClass("ImgBtn_opacity"), h = !0, 0 >= m && (_ = !1, $(".J_ImgBtn_right").removeClass("ImgBtn_opacity"), $(".J_ImgBtn_left").addClass("ImgBtn_opacity")))
//		}), $(".J_ImgBtn_right i").click(function() {
//			if(!(3 > n) && h) {
//				if(m++, m + 2 >= n) return;
//				$(".J_imgScroll").animate({
//					"margin-left": -185 * m
//				}, "linear", function() {}), $(".J_ImgBtn_right").removeClass("ImgBtn_opacity"), $(".J_ImgBtn_left").removeClass("ImgBtn_opacity"), _ = !0, m + 3 === n && (h = !1, $(".J_ImgBtn_right").addClass("ImgBtn_opacity"), $(".J_ImgBtn_left").removeClass("ImgBtn_opacity"))
//			}
//		}), $(".popImg_right, .J_ImgBtn_right_T").click(function() {
//			var a = $("#J_yulan_imgs li").index($("#J_yulan_imgs .curt")),
//				g = $("#J_yulan_imgs li").outerWidth(!0),
//				n = c.length;
//			if(a === n - 2) $(".J_ImgBtn_right_T").addClass("ImgBtn_opacity");
//			else {
//				if(a === n - 1) return;
//				$("#J_yulan_imgs").animate({
//					"margin-left": -(g * a)
//				}, "linear", function() {})
//			}
//			var _ = c[a + 1].largeImg,
//				h = c[a + 1].title,
//				b = c[a + 1].titleShort;
//			_ = _ ? _ : "", h = h ? h : "", b = b ? b : "", $(".J_ImgBtn_left_T").removeClass("ImgBtn_opacity"), $("#showImg").attr("src", _), $("#imgIndex").html(a + 2 + "/" + n), $("#imgIndex").next().html(b).attr("title", h), $("#J_yulan_imgs .curt").removeClass("curt").next().addClass("curt")
//		}), $(".popImg_left, .J_ImgBtn_left_T").click(function() {
//			var a = $("#J_yulan_imgs li").index($("#J_yulan_imgs .curt")),
//				g = $("#J_yulan_imgs li").outerWidth(!0),
//				n = c.length;
//			if(1 === a) $(".J_ImgBtn_left_T").addClass("ImgBtn_opacity");
//			else {
//				if(0 === a) return;
//				$("#J_yulan_imgs").animate({
//					"margin-left": -g * (a - 2)
//				}, "linear", function() {})
//			}
//			var _ = c[a - 1].largeImg,
//				h = c[a - 1].title,
//				b = c[a - 1].titleShort;
//			_ = _ ? _ : "", h = h ? h : "", b = b ? b : "", $(".J_ImgBtn_right_T").removeClass("ImgBtn_opacity"), $("#showImg").attr("src", _), $("#J_yulan_imgs .curt").removeClass("curt").prev().addClass("curt"), $("#imgIndex").html(a + "/" + n), $("#imgIndex").next().html(b).attr("title", h)
//		}), $(".J_imgScroll li").click(function() {
//			var a = "",
//				n = c.length,
//				g = $(".J_imgScroll li").index($(this)),
//				_ = 185,
//				h = c[g].largeImg,
//				b = c[g].title,
//				v = c[g].titleShort;
//			h = h ? h : "", b = b ? b : "", v = v ? v : "", g > 1 && $("#J_yulan_imgs").css("margin-left", -(_ * (g - 1))), 1 >= g && $("#J_yulan_imgs").css("margin-left", 0), 0 === g ? ($(".J_ImgBtn_left_T").addClass("ImgBtn_opacity"), 1 === n && $(".J_ImgBtn_right_T").addClass("ImgBtn_opacity")) : g == n - 1 ? (2 != n ? $("#J_yulan_imgs").css("margin-left", -(_ * (g - 2))) : $(".J_ImgBtn_left_T").removeClass("ImgBtn_opacity"), $(".J_ImgBtn_right_T").addClass("ImgBtn_opacity")) : ($(".J_ImgBtn_left_T").removeClass("ImgBtn_opacity"), $(".J_ImgBtn_right_T").removeClass("ImgBtn_opacity")), $(".pop_layer").show(), $("#showImg").attr("src", h), $("#imgIndex").html(g + 1 + "/" + n), $("#imgIndex").next().html(v).attr("title", b), $(c).each(function(i, o) {
//				var c = o.smallImg ? o.smallImg.replace("/shared/app_common", "") : "";
//				a += i === g ? '<li class="curt" ><img src="' + c + '"></li>' : '<li><img src="' + c + '"></li>'
//			}), $(".popImg_show").hover(function() {
//				$(this).find("dt").show()
//			}, function() {
//				$(this).find("dt").hide()
//			}), $("#J_yulan_imgs").html(a)
//		}), $("#J_yulan_imgs").delegate("li", "click", function() {
//			var a, g, _, h = $("#J_yulan_imgs li").index($("#J_yulan_imgs .curt")),
//				b = $("#J_yulan_imgs li").index($(this)),
//				v = $("#J_yulan_imgs li").outerWidth(!0),
//				n = c.length;
//			if(b !== h && (a = c[b].largeImg, g = c[b].title, _ = c[b].titleShort, a = a ? a : "", g = g ? g : "", _ = _ ? _ : ""), 3 === n) 0 === b ? ($(".J_ImgBtn_left_T").addClass("ImgBtn_opacity"), $(".J_ImgBtn_right_T").removeClass("ImgBtn_opacity")) : 2 === b ? ($(".J_ImgBtn_left_T").removeClass("ImgBtn_opacity"), $(".J_ImgBtn_right_T").addClass("ImgBtn_opacity")) : 1 === b && ($(".J_ImgBtn_right_T").removeClass("ImgBtn_opacity"), $(".J_ImgBtn_left_T").removeClass("ImgBtn_opacity")), $(this).addClass("curt").siblings().removeClass("curt");
//			else if(n > 3) {
//				if(h > b) window.lastLi = !1, b == n - 2 ? ($("#J_yulan_imgs .curt").removeClass("curt").prev().addClass("curt"), $(".J_ImgBtn_right_T").removeClass("ImgBtn_opacity")) : 0 === b ? ($("#J_yulan_imgs .curt").removeClass("curt").prev().addClass("curt"), $(".J_ImgBtn_left_T").addClass("ImgBtn_opacity")) : b == h - 2 ? ($("#J_yulan_imgs").animate({
//					"margin-left": -v * (b - 1)
//				}, "linear", function() {}), $("#J_yulan_imgs .curt").removeClass("curt").prev().prev().addClass("curt")) : b == h - 1 && ($("#J_yulan_imgs").animate({
//					"margin-left": -v * (b - 1)
//				}, "linear", function() {}), $("#J_yulan_imgs .curt").removeClass("curt").prev().addClass("curt")), $("#imgIndex").html(b + 1 + "/" + n), $("#imgIndex").next().html(_).attr("title", g), $(".J_ImgBtn_right_T").removeClass("ImgBtn_opacity"), $("#showImg").attr("src", a);
//				else if(b > h) {
//					if(1 === b) $("#J_yulan_imgs .curt").removeClass("curt").next().addClass("curt");
//					else if(b === n - 1) {
//						if(window.lastLi) return;
//						$(".J_ImgBtn_right_T").addClass("ImgBtn_opacity"), $("#J_yulan_imgs .curt").removeClass("curt").next().addClass("curt"), window.lastLi = !0
//					} else b - h === 2 ? ($("#J_yulan_imgs").animate({
//						"margin-left": -v * (b - 1)
//					}, "linear", function() {}), $("#J_yulan_imgs .curt").removeClass("curt").next().next().addClass("curt")) : b - h === 1 && ($("#J_yulan_imgs").animate({
//						"margin-left": -v * (b - 1)
//					}, "linear", function() {}), $("#J_yulan_imgs .curt").removeClass("curt").next().addClass("curt"));
//					$(".J_ImgBtn_left_T").removeClass("ImgBtn_opacity")
//				}
//			} else 2 === n && (0 === b ? ($(".J_ImgBtn_left_T").addClass("ImgBtn_opacity"), $(".J_ImgBtn_right_T").removeClass("ImgBtn_opacity")) : 1 === b && ($(".J_ImgBtn_left_T").removeClass("ImgBtn_opacity"), $(".J_ImgBtn_right_T").addClass("ImgBtn_opacity")), $(this).addClass("curt").siblings().removeClass("curt"));
//			$("#imgIndex").html(b + 1 + "/" + n), $("#imgIndex").next().html(_).attr("title", g), $("#showImg").attr("src", a)
//		})
//	}
//}
//
//function changeSubMenuText() {
//	var a = navigator.userAgent.indexOf("MSIE"),
//		c = navigator.userAgent.indexOf("Trident/7.0;"),
//		g = $("#mainHead").attr("data-title"),
//		_ = $("#sidebar").height();
//	(a > -1 || c > -1) && $("#sidebar").css({
//		height: _ - 60,
//		top: 60
//	}), $(".crumbs span").html(g ? " - " + g : ""), $(".subNav li a").each(function(i, o) {
//		$(o).html() === g ? $(o).addClass(a > 0 && navigator.userAgent.substring(a, a + 8).split("")[5] < 10 ? "border_bottom_c3a" : "curr") : $(o).removeClass("curr")
//	})
//}
//
//function popbgClick() {
//	$(".popbg").click(function() {
//		window.lastLi = !1, $(".J_ImgBtn_right_T").removeClass("ImgBtn_opacity"), $(".pop_layer").hide()
//	})
//}
//
//function getOhterPages() {
//	var a = APP.wenzhang[$("#mainHead").attr("data-title")],
//		c = window.location.href.match(/[^\/]*\.html$/),
//		g = navigator.userAgent.indexOf("Firefox");
//	if(a) {
//		var _ = APP.config.baseURI + "/cms-tmplt/wap/queryAsyncPrevNext.do?structureId=" + a + "&callback=?&&resourceName=" + c,
//			h = function(a) {
//				"1" === a.statusCode && (a.attributes.next ? ($("#next_detail").css("opacity", 1), g > -1 ? $("#next_detail").attr({
//					href: a.attributes.next.RESOURCELINK,
//					target: "_self"
//				}) : $("#next_detail").attr("href", a.attributes.next.RESOURCELINK)) : $("#next_detail").css("opacity", 0), a.attributes.prev ? (g > -1 ? $("#prev_detail").attr({
//					href: a.attributes.prev.RESOURCELINK,
//					target: "_self"
//				}) : $("#prev_detail").attr("href", a.attributes.prev.RESOURCELINK), $("#prev_detail").css("opacity", 1)) : $("#prev_detail").css("opacity", 0))
//			};
//		globalAjax(_, "get", h, "jsonp")
//	}
//}
//$.pjax({
//	area: "#content, #submenu-position,#footer",
//	load: {
//		head: "meta",
//		css: !1,
//		script: !0
//	},
//	ajax: {
//		timeout: 5e3
//	},
//	wait: 800,
//	fix: {
//		reference: !0
//	}
//}), APP.wenzhang = {
//	"热点聚焦": "4506398a-3235-11e6-9475-a104e97be0db",
//	"行业动态": "e77b5f39-3393-11e6-9d43-a104e97be0db",
//	"大型会议": "f19f0e79-3397-11e6-9d43-a104e97be0db",
//	"市场活动": "fbef21e9-3397-11e6-9d43-a104e97be0db",
//	"员工生活": "011a11cf-3398-11e6-9d43-a104e97be0db",
//	"工会活动": "f6d5be31-3397-11e6-9d43-a104e97be0db"
//}, window.noTabClick = 3, $(window).scroll(function() {
//	var a, c = $(".newTab"),
//		g = $(".mainTab_box"),
//		_ = $(".newTitleCont"),
//		h = $(".mainTab li:first"),
//		b = $(".mainTab li:last"),
//		v = $(document).scrollTop(),
//		y = $(".header").height(),
//		I = $(".mainTab_box").height();
//	$(".mainTabtxt dl:last").length && (a = $(".mainTabtxt dl:last").offset().top), v >= 294 ? (g.css({
//		position: "fixed",
//		top: 60
//	}), c.css({
//		position: "fixed",
//		left: $(window).width() - $("#main").width() - $(".newTab").width(),
//		top: 60
//	}), _.css({
//		position: "fixed",
//		top: "60px",
//		"z-index": 11,
//		right: 0
//	})) : (g.css({
//		position: "static"
//	}), c.css({
//		position: "absolute",
//		left: -$(".newTab").width(),
//		top: 0
//	}), _.css({
//		position: "static"
//	})), window.noTabClick > 2 && (v >= a - y - 2 * I + 20 ? b.addClass("active").siblings().removeClass("active") : h.addClass("active").siblings().removeClass("active")), window.noTabClick++
//});
//var tabBind = function() {
//	$(".mainTab li:last").unbind().on("click", function() {
//		window.noTabClick = 1;
//		var a = $(".header").height(),
//			c = $(".mainTab_box").height(),
//			g = $(".mainTabtxt dl:last").offset().top;
//		$(window).scrollTop(g - a - 2 * c), $(this).addClass("active").siblings().removeClass("active")
//	}), $(".mainTab li:first").unbind().on("click", function() {
//		window.noTabClick = 1, $(window).scrollTop(0), $(this).addClass("active").siblings().removeClass("active")
//	}), $(".tabsUl li").unbind().on("click", function() {
//		var a = $(this).index();
//		$(this).addClass("cur").siblings().removeClass("cur"), $(".tabsMain").hide().eq(a).show()
//	})
//};
//tabBind();
var footFadeIn = function() {
		$("#footer").animate({
			marginTop: 20,
			opacity: 1
		}, 900, "easeOutQuart", function() {})
	},
	mainFadeIn = function() {
		$("#main").css({
			height: "auto",
			overflow: "visible"
		}), $("#main").addClass("main_init"), $("#mainHead").animate({
			"margin-left": 0,
			"margin-right": 0,
			opacity: 1
		}, 700, "easeOutQuart", function() {}), $(".mainTab_box").animate({
			"margin-left": 0,
			"margin-right": 0,
			opacity: 1
		}, 700, "easeOutQuart", function() {
			$(this).css({
				position: "static"
			})
		}), $("#mainBody").animate({
			"margin-left": 0,
			"margin-right": 0,
			opacity: 1
		}, 900, "easeOutQuart", function() {
			tabBind(), $("#mainHead").attr("data-load") && footFadeIn()
		}), !$("#mainHead").attr("data-load") && footFadeIn()
	},
	crumbsFadeIn = function() {
		$("#submenu-position").animate({
			"margin-left": 0,
			"margin-right": 0,
			opacity: 1
		}, 700, "easeOutQuart", function() {})
	};
checkPhoneOrPc(), dongh(), $(".subNav li a").click(function() {
	window.opreate = "submenu"
}), $(".sidebar ul li").click(function() {
	window.opreate = "supermenu", $(this).addClass("curr").siblings().removeClass("curr")
});
var navArray = [];
$("#sidebar ul li").each(function(i, o) {
	navArray.push($(o).attr("class").split(" ")[0])
}), $(navArray).each(function(i, o) {
	window.location.href.indexOf(o) > -1 && $("#sidebar ul").find("." + o).addClass("curr").siblings().removeClass("curr")
})//, newsList()
, $("#mainHead").attr("data-load") && loadImg()//, newsDetail(),changeSubMenuText()//, popbgClick(), getOhterPages()
,$("#logoCont").click(function() {
	window.opreate = "supermenu"
});
//var sdc = function() {
//	if("prd" == APP.environment) {
//		var a = "www.pingan.com",
//			c = "/app_js/sdc/src/web.js",
//			g = document.createElement("script");
//		g.src = "http" + (0 === window.location.protocol.indexOf("https:") ? "s" : "") + "://" + a + c;
//		var _ = document.getElementsByTagName("head")[0];
//		_.appendChild(g)
//	}
//};
//sdc(), $(document).on("pjax:fetch", function() {
//	if(!(window.location.href.indexOf("/shehuizhaopin.html") > -1)) {
//		var a = navigator.userAgent.toLowerCase(),
//			c = {
//				edge: -1 != a.indexOf("edge"),
//				safari: -1 != a.indexOf("safari") && -1 == a.indexOf("edge")
//			},
//			t = $(window).scrollTop(),
//			e = 0 === t ? 0 : 700,
//			g = c.safari || c.edge ? "body" : "html";
//		$("html").addClass("load"), $(g).stop().animate({
//			scrollTop: 0
//		}, e, "easeInOutQuad", function() {
//			$("#main").css({
//				height: $("#main #content").outerHeight(!0),
//				overflow: "hidden"
//			}), $("#submenu-position").hide(), $("#content").hide(), $("#submenu-position-clone").remove(), $("#footer").before($("#footer").clone().attr("id", "").addClass("J_footer")), $("#submenu-position").before('<div id="submenu-position-clone">' + $("#submenu-position").html() + "</div>"), $("#main #content").before('<div id="content-clone">' + $("#content").html() + "</div>"), $("#footer").hide()
//		})
//	}
//}), $(window).on("pjax:load", function() {
//	setTimeout(function() {
//		$("html").removeClass("load"), "supermenu" === window.opreate ? ($("#submenu-position-clone,#content-clone").remove(), crumbsFadeIn()) : $("#content-clone").remove(), $(".J_footer").remove(), newsDetail(), mainFadeIn(), newsList(), $("#mainHead").attr("data-load") && loadImg(), getOhterPages(), changeSubMenuText(), window.location.href.indexOf("/gongsijianjie/index.html") > -1 && $(".sidebar ul li:first").addClass("curr").siblings().removeClass("curr"), checkPhoneOrPc(), window.location.href.indexOf("/shehuizhaopin.html") > -1 && job.init()
//	}, 500), $(".subNav li a").click(function() {
//		window.opreate = "submenu"
//	}), $(".sidebar ul li").click(function() {
//		window.opreate = "supermenu", $(this).addClass("curr").siblings().removeClass("curr")
//	}), $("#submenu-position").find("div a")[0].onclick = function() {
//		window.opreate = "submenu"
//	}, popbgClick()
//});
//var job = {
//	init: function() {
//		var a = $("#mainHead"),
//			c = this;
//		if(a && "function" == typeof a.data && "社会招聘" == a.data().title) {
//			$.ajax({
//				url: APP.config.baseURI + "/cms-tmplt/lease/queryPlaceList.do",
//				data: {},
//				type: "get",
//				dataType: "jsonp",
//				success: function(a) {
//					if(a && "000000" == a.code) {
//						var g = $(".select_place ul");
//						if(g)
//							for(var i = 0; i < a.placeList.length; i++)
//								if(g.append("<li data-id='" + a.placeList[i].placeId + "'>" + a.placeList[i].placeName + "</li>"), "上海" == a.placeList[i].placeName) {
//									$(".select_place p").text("上海");
//									var _ = '.select_place li[data-id="' + a.placeList[i].placeId + '"]';
//									$(_).addClass("cur"), c.jobList.place = a.placeList[i].placeId
//								}
//						c.jobList.init()
//					} else c.jobList.errorTips()
//				},
//				error: function() {
//					c.jobList.errorTips()
//				}
//			}), $.ajax({
//				url: APP.config.baseURI + "/cms-tmplt/lease/queryClassifyList.do",
//				data: {},
//				type: "get",
//				dataType: "jsonp",
//				success: function(a) {
//					if(a && "000000" == a.code) {
//						var c = $(".select_classify ul");
//						if(c)
//							for(var i = 0; i < a.classifyList.length; i++) c.append("<li data-id='" + a.classifyList[i].classifyId + "'>" + a.classifyList[i].classifyName + "</li>")
//					}
//				}
//			});
//			var g, _, c = this;
//			$(".select_place ul").on("mousemove", function() {
//				clearTimeout(g)
//			}), $(".select_place ul").on("mouseout", function() {
//				clearTimeout(g), g = setTimeout(function() {
//					$(".select_place ul").hide()
//				}, 300)
//			}), $(".select_place").on("mouseover", "li", function() {
//				$(".select_place li").removeClass("cur"), $(this).addClass("cur")
//			}), $(".select_place p").click(function() {
//				"none" == $(".select_place ul").css("display") ? $(".select_place ul").show() : $(".select_place ul").hide(), g = setTimeout(function() {
//					$(".select_place ul").hide()
//				}, 1e3)
//			}), $(".select_place").on("click", "li", function() {
//				$(".select_place ul").hide(), clearTimeout(g), c.jobList.place = $(this).data().id, $(".select_place p").text($(this).text()), c.jobList.loadNewList()
//			}), $(".select_classify ul").on("mousemove", function() {
//				clearTimeout(_)
//			}), $(".select_classify ul").on("mouseout", function() {
//				clearTimeout(_), _ = setTimeout(function() {
//					$(".select_classify ul").hide()
//				}, 300)
//			}), $(".select_classify").on("mouseover", "li", function() {
//				$(".select_classify li").removeClass("cur"), $(this).addClass("cur")
//			}), $(".select_classify p").click(function() {
//				"none" == $(".select_classify ul").css("display") ? $(".select_classify ul").show() : $(".select_classify ul").hide(), _ = setTimeout(function() {
//					$(".select_classify ul").hide()
//				}, 1e3)
//			}), $(".select_classify").on("click", "li", function() {
//				$(".select_classify ul").hide(), clearTimeout(_), c.jobList.classify = $(this).data().id, $(".select_classify p").text($(this).text()), c.jobList.loadNewList()
//			}), $(".btn_search_position").bind("keypress", function(a) {
//				"13" == a.keyCode && (c.jobList.jobName = $(".btn_search_position").val(), c.jobList.loadNewList())
//			}), $(".btn_search_go").click(function() {
//				c.jobList.jobName = $(".btn_search_position").val(), c.jobList.loadNewList()
//			})
//		}
//	},
//	jobList: {
//		place: "",
//		classify: "",
//		jobName: "",
//		currentPage: 1,
//		init: function() {
//			this.loadNewList()
//		},
//		errorTips: function() {
//			var a = $(".mainCont tbody"),
//				c = "";
//			return a ? (c = '<tr class="not_position"><td colspan="5">暂无匹配职位，请重新选择！</td></tr>', void a.html(c)) : void 0
//		},
//		loadNewList: function(a) {
//			var c = {
//				pageNo: a || 1,
//				classifyId: this.classify || null,
//				placeId: this.place || null,
//				jobName: this.jobName || null
//			};
//			this.currentPage = a || 1;
//			var g = this;
//			$.ajax({
//				url: APP.config.baseURI + "/cms-tmplt/lease/queryJobList.do",
//				data: c || {},
//				type: "get",
//				dataType: "jsonp",
//				success: function(a) {
//					g.render(a)
//				},
//				error: function() {
//					g.errorTips()
//				}
//			})
//		},
//		render: function(a) {
//			if(a && "000000" == a.code) {
//				var c = $(".mainCont tbody"),
//					g = "";
//				if(c) {
//					if(!a.jobList || a.jobList.length <= 0) return g = '<tr class="not_position"><td colspan="5">暂无匹配职位，请重新选择！</td></tr>', void c.html(g);
//					for(var i = 0; i < a.jobList.length; i++) g += '<tr><td><p><a href="' + a.jobList[i].detailLink + '" target="_blank" title="' + a.jobList[i].jobName + '">', g += a.jobList[i].jobName, g += "</a></p></td><td>", g += a.jobList[i].depName, g += "</td><td>", g += a.jobList[i].placeName, g += "</td><td>", g += a.jobList[i].jobNumber || "", g += "</td><td>", g += a.jobList[i].publishDate, g += "</td></tr>";
//					c.html(g.replace(/<script>|<\/script>/g, "")), this.updatePagination(Math.ceil(a.totalNum / 10))
//				}
//			}
//		},
//		updatePagination: function(a) {
//			laypage.dir = !1;
//			var c = this;
//			laypage({
//				cont: "paginationBox",
//				pages: a,
//				curr: this.currentPage || 1,
//				skip: !0,
//				jump: function(a, g) {
//					g || c.loadNewList(a.curr)
//				}
//			})
//		}
//	}
//};
//! function() {
//	function a(d) {
//		var e = "laypagecss";
//		a.dir = "dir" in a ? a.dir : f.getpath + "/skin/laypage.css", new f(d), a.dir && !c[g](e) && f.use(a.dir, e)
//	}
//	a.v = "1.3";
//	var c = document,
//		g = "getElementById",
//		d = "getElementsByTagName",
//		e = 0,
//		f = function(a) {
//			var c = this,
//				g = c.config = a || {};
//			g.item = e++, c.render(!0)
//		};
//	f.on = function(a, c, g) {
//		return a.attachEvent ? a.attachEvent("on" + c, function() {
//			g.call(a, window.even)
//		}) : a.addEventListener(c, g, !1), f
//	}, f.getpath = function() {
//		var a = document.scripts,
//			c = a[a.length - 1].src;
//		return c.substring(0, c.lastIndexOf("/") + 1)
//	}(), f.use = function(g, e) {
//		var f = c.createElement("link");
//		f.type = "text/css", f.rel = "stylesheet", f.href = a.dir, e && (f.id = e), c[d]("head")[0].appendChild(f), f = null
//	}, f.prototype.type = function() {
//		var a = this.config;
//		return "object" == typeof a.cont ? void 0 === a.cont.length ? 2 : 3 : void 0
//	}, f.prototype.view = function() {
//		var c = this,
//			g = c.config,
//			d = [],
//			e = {};
//		if(g.pages = 0 | g.pages, g.curr = 0 | g.curr || 1, g.groups = "groups" in g ? 0 | g.groups : 5, g.first = "first" in g ? g.first : "&#x9996;&#x9875;", g.last = "last" in g ? g.last : "&#x5C3E;&#x9875;", g.prev = "prev" in g ? g.prev : "&#x4E0A;&#x4E00;&#x9875;", g.next = "next" in g ? g.next : "&#x4E0B;&#x4E00;&#x9875;", g.pages <= 1) return "";
//		for(g.groups > g.pages && (g.groups = g.pages), e.index = Math.ceil((g.curr + (g.groups > 1 && g.groups !== g.pages ? 1 : 0)) / (0 === g.groups ? 1 : g.groups)), g.curr > 1 && g.prev && d.push('<a href="javascript:;" class="laypage_prev" data-page="' + (g.curr - 1) + '">' + g.prev + "</a>"), e.index > 1 && g.first && 0 !== g.groups && d.push('<a href="javascript:;" class="laypage_first" data-page="1"  title="&#x9996;&#x9875;">' + g.first + "</a><span>&#x2026;</span>"), e.poor = Math.floor((g.groups - 1) / 2), e.start = e.index > 1 ? g.curr - e.poor : 1, e.end = e.index > 1 ? function() {
//				var a = g.curr + (g.groups - e.poor - 1);
//				return a > g.pages ? g.pages : a
//			}() : g.groups, e.end - e.start < g.groups - 1 && (e.start = e.end - g.groups + 1); e.start <= e.end; e.start++) d.push(e.start === g.curr ? '<span class="laypage_curr" ' + (/^#/.test(g.skin) ? 'style="background-color:' + g.skin + '"' : "") + ">" + e.start + "</span>" : '<a href="javascript:;" data-page="' + e.start + '">' + e.start + "</a>");
//		return g.pages > g.groups && e.end < g.pages && g.last && 0 !== g.groups && d.push('<span>&#x2026;</span><a href="javascript:;" class="laypage_last" title="&#x5C3E;&#x9875;"  data-page="' + g.pages + '">' + g.last + "</a>"), e.flow = !g.prev && 0 === g.groups, (g.curr !== g.pages && g.next || e.flow) && d.push(function() {
//			return e.flow && g.curr === g.pages ? '<span class="page_nomore" title="&#x5DF2;&#x6CA1;&#x6709;&#x66F4;&#x591A;">' + g.next + "</span>" : '<a href="javascript:;" class="laypage_next" data-page="' + (g.curr + 1) + '">' + g.next + "</a>"
//		}()), '<div name="laypage' + a.v + '" class="laypage_main laypageskin_' + (g.skin ? function(a) {
//			return /^#/.test(a) ? "molv" : a
//		}(g.skin) : "default") + '" id="laypage_' + c.config.item + '">' + d.join("") + function() {
//			return g.skip ? '<span class="laypage_total"><label>&#x5230;&#x7B2C;</label><input min="1" onkeyup="this.value=this.value.replace(/\\D/, \'\');" class="laypage_skip"><label>&#x9875;</label><button type="button" class="laypage_btn">&#x786e;&#x5b9a;</button></span>' : ""
//		}() + "</div>"
//	}, f.prototype.jump = function(a) {
//		if(a) {
//			for(var c = this, g = c.config, e = a.children, _ = a[d]("button")[0], h = a[d]("input")[0], i = 0, $ = e.length; $ > i; i++) "a" === e[i].nodeName.toLowerCase() && f.on(e[i], "click", function() {
//				var a = 0 | this.getAttribute("data-page");
//				g.curr = a, c.render()
//			});
//			_ && f.on(_, "click", function() {
//				var a = 0 | h.value.replace(/\s|\D/g, "");
//				a && a <= g.pages && (g.curr = a, c.render())
//			})
//		}
//	}, f.prototype.render = function(a) {
//		var d = this,
//			e = d.config,
//			f = d.type(),
//			_ = d.view();
//		2 === f ? e.cont.innerHTML = _ : 3 === f ? e.cont.html(_) : c[g](e.cont).innerHTML = _, e.jump && e.jump(e, a), d.jump(c[g]("laypage_" + e.item)), e.hash && !a && (location.hash = "!" + e.hash + "=" + e.curr)
//	}, "function" == typeof define ? define(function() {
//		return a
//	}) : "undefined" != typeof exports ? module.exports = a : window.laypage = a
//}(), job.init();