function initSchedule() {
    $.getJSON("js/json/schedule.json", function(e) {
        buildSchedule(e.events)
    })
}

function buildResultsList(e) {
    var t = $("<ul/>"),
        l = $("<li/>"),
        n = $("<a/>").addClass("result-link"),
        s = $("<h3/>"),
        a = t.clone();
    return e.length > 0 && a.append(s.clone().text("Results")), $.each(e, function(e, t) {
        a.append(l.clone().html(n.clone().attr("href", t.url).text(t.year)))
    }), a
}

function buildSchedule(e) {
    var t = $("<tr/>"),
        l = $("<h2/>"),
        n = $("<p/>"),
        s = $("<a/>"),
        a = $("<img/>"),
        d = $("<td/>").addClass("date-cell"),
        c = $("<td/>").addClass("event-cell"),
        o = $("<td/>").addClass("result-cell"),
        u = $("<td/>").addClass("logos-cell");
    $.each(e, function(e, i) {
        var p = t.clone(),
            r = d.clone().html("<date>" + i.date + "</date>"),
            h = c.clone().html(l.clone().html(s.clone().attr("href", i.website).text(i.title))).append(n.clone().text(i.city + ", " + i.state)),
            $ = o.clone().html(buildResultsList(i.results)),
            f = u.clone();
        i.ussaQualifier && f.append(a.clone().attr("src", "assets/logos/usssa.png")), i.nsf && f.append(a.clone().attr("src", "assets/logos/nsf-logo.png")), p.append(r), p.append(h), p.append($), p.append(f), scheduleContainer.append(p)
    })
}
