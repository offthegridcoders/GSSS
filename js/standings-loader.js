function initStandings() {
    $.getJSON("js/json/standings.json", function(e) {
        buildStandings(e)
    })
}

function tableBuilder(e) {
    var n = $("<tr/>"),
        a = $("<td/>"),
        t = $("<tbody/>");
    return $.each(e, function(e, l) {
        var s = n.clone();
        s.append(a.clone().text(l.name)), s.append(a.clone().text(l.points)), t.append(s)
    }), t
}

function buildStandings(e) {
    teamsTable.append(tableBuilder(e.teams)), openMenTable.append(tableBuilder(e.openMen)), openWomenTable.append(tableBuilder(e.openWomen)), mastersMenTable.append(tableBuilder(e.mastersMen)), mastersWomenTable.append(tableBuilder(e.mastersWomen)), seniorsMenTable.append(tableBuilder(e.seniorsMen)), seniorsWomenTable.append(tableBuilder(e.seniorsWomen)), veteransMenTable.append(tableBuilder(e.veteransMen)), veteransWomenTable.append(tableBuilder(e.veteransWomen))
}
