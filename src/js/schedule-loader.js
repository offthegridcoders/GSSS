// <tr>
//   <td class="date-cell"><date>february 8th, 2015</date></td>
//   <td class="event-cell">
//     <h2><a href="#">moose mountain roundaround</a></h2>
//     <p>brookfield, new hampshire</p>
//   </td>
//   <td class="result-cell">
//     <h3>results</h3>
//     <ul>
//       <li><a href="#" class="result-link">2010</a></li>
//       <li><a href="#" class="result-link">2011</a></li>
//       <li><a href="#" class="result-link">2012</a></li>
//       <li><a href="#" class="result-link">2013</a></li>
//       <li><a href="#" class="result-link">2014</a></li>
//       <li><a href="#" class="result-link">2015</a></li>
//     </ul>
//   </td>
//   <td class="logos-cell"><img src="assets/logos/usssa.png"></td>
// </tr>



function buildSchedule(events) {
  var scheduleContainer = $('#scheduleBody');
  var tr = $('<tr/>');
  var h2 = $('<h2/>');
  var p = $('<p/>');
  var a = $('<a/>');
  var img = $('<img/>');
  var ul = $('<ul/>');
  var li = $('<li/>');
  var dateCell = $('<td/>').addClass('date-cell');
  var eventCell = $('<td/>').addClass('event-cell');
  var resultCell = $('<td/>').addClass('result-cell');
  var logosCell = $('<td/>').addClass('logos-cell');

  $.each( events, function( key, event ) {
    var eventItem = tr.clone();

    var date = dateCell.clone().html('<date>' + event.date + '</date>')
    var title = eventCell.clone().html(h2.clone().html(a.clone().attr('src', '#').text(event.title))).append(p.clone().text(event.city + ', ' + event.state));
    var results = resultCell.clone();
    var logos = logosCell.clone();

    eventItem.append(date);
    eventItem.append(title);
    eventItem.append(results);
    eventItem.append(logos);
    scheduleContainer.append(eventItem);
  });

};

$.getJSON("js/schedule.json", function( data ) {
  console.log(data.events);
  buildSchedule(data.events);
});
