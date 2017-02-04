// INIT SCHEDULE / GET JSON FILE
  function initSchedule() {
    $.getJSON("js/json/schedule.json", function( data ) {
      buildSchedule(data.events);
    });
  }

// BUILDS AND RETURNS RESULTS LIST
  function buildResultsList(arr) {
    var ul = $('<ul/>');
    var li = $('<li class=result-cell-li />');
    var a = $('<a/>').addClass('result-link');
    var h3 = $('<h3/>');

    var list = ul.clone();

    if (arr.length > 0) list.append(h3.clone().text('Results'));

    $.each( arr, function( key, val ) {
      list.append(li.clone().html(a.clone().attr('href', val.url).attr('target', '_blank').text(val.year)));
    });
    return list;
  };

// BUILDS SCHEDULE TABLE ROWS
  function buildSchedule(events) {
    var tr = $('<tr/>');
    var h2 = $('<h2/>');
    var h3 = $('<h3/>');
    var p = $('<p/>');
    var a = $('<a/>');
    var img = $('<img/>');
    var dateCell = $('<td/>').addClass('date-cell');
    var eventCell = $('<td/>').addClass('event-cell');
    var resultCell = $('<td/>').addClass('result-cell');
    var logosCell = $('<td/>').addClass('logos-cell');

    $.each( events, function( key, event ) {
      var eventItem = tr.clone();
      var date = dateCell.clone().html('<date>' + event.date + '</date>')
      var title = eventCell.clone().html(h2.clone().html(a.clone().attr('href', event.website).attr('target', '_blank').text(event.title)));

     if (event.status != "") {
		  title.append(h3.clone().text(event.status));
	  }

	  title.append(p.clone().text(event.city + ', ' + event.state));

      var results = resultCell.clone().html(buildResultsList(event.results));
      var logos = logosCell.clone();

      if (event.ussaQualifier) logos.append(img.clone().attr('src', 'assets/logos/usssa.png'));
      if (event.nsf) logos.append(img.clone().attr('src', 'assets/logos/nsf-logo.png'));

      eventItem.append(date);
      eventItem.append(title);
      eventItem.append(results);
      eventItem.append(logos);
      scheduleContainer.append(eventItem);
    });
  };
