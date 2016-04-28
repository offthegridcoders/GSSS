$(".anchorLink").click(function(t) {
    t.preventDefault();
    var o = $(this).offset(),
        a = $(this).attr("href"),
        e = $(a).offset(),
        f = Math.abs(e.top - o.top),
        h = 100,
        i = f * h / 1e3;
    $("html,body").animate({
        scrollTop: e.top
    }, i)
});
