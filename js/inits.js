function init() {
    (new WOW).init(), initSchedule(), initStandings(), loadCarousel()
}
var scheduleContainer = $("#scheduleBody"),
    teamsTable = $("#teamsTable"),
    openMenTable = $("#openMenTable"),
    openWomenTable = $("#openWomenTable"),
    mastersMenTable = $("#mastersMenTable"),
    mastersWomenTable = $("#mastersWomenTable"),
    seniorsMenTable = $("#seniorsMenTable"),
    seniorsWomenTable = $("#seniorsWomenTable"),
    veteransMenTable = $("#veteransMenTable"),
    veteransWomenTable = $("#veteransWomenTable");
$(function() {
    init()
});
