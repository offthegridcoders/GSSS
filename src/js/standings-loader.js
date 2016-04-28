// INIT STANDINGS / GET JSON FILE
  function initStandings() {
    $.getJSON("js/json/standings.json", function( data ) {
      buildStandings(data);
    });
  }

// TABLE BUILDER
  function tableBuilder(data) {
    var tr = $('<tr/>');
    var td = $('<td/>');
    var html = $('<tbody/>');

    $.each(data, function( key, val ) {
      var newRow = tr.clone();
      newRow.append(td.clone().text(val.name));
      newRow.append(td.clone().text(val.points));
      html.append(newRow);
    });
    return html;
  };

// BUILDS STANDINGS LIST
  function buildStandings(standings) {
    teamsTable.append(tableBuilder(standings.teams));
    openMenTable.append(tableBuilder(standings.openMen));
    openWomenTable.append(tableBuilder(standings.openWomen));
    mastersMenTable.append(tableBuilder(standings.mastersMen));
    mastersWomenTable.append(tableBuilder(standings.mastersWomen));
    seniorsMenTable.append(tableBuilder(standings.seniorsMen));
    seniorsWomenTable.append(tableBuilder(standings.seniorsWomen));
    veteransMenTable.append(tableBuilder(standings.veteransMen));
    veteransWomenTable.append(tableBuilder(standings.veteransWomen));
  };
