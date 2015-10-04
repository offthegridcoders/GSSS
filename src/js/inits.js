// GLOBALS

  var scheduleContainer = $('#scheduleBody'); // SCHEDULE CONTAINER
  
  var mastersMenTable = $('#mastersMenTable'); // RESULTS TABLES
  var mastersWomenTable = $('#mastersWomenTable'); // RESULTS TABLES
  var seniorsMenTable = $('#seniorsMenTable'); // RESULTS TABLES
  var seniorsWomenTable = $('#seniorsWomenTable'); // RESULTS TABLES
  var veteransMenTable = $('#veteransMenTable'); // RESULTS TABLES
  var veteransWomenTable = $('#veteransWomenTable'); // RESULTS TABLES

  var CHART_OPTIONS = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : false,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: false,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  }

// INITIALIZATIONS
  function init() {
    new WOW().init();
    initSchedule();
    initStandings();
    loadCarousel();
    buildCharts();
  };

// ON BODY LOAD
  $(function() {
    init();
  });
