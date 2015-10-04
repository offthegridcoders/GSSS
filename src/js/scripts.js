// GLOBALS
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

    // IMAGE CAROUSEL
      $("#owl-demo").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 4,
          lazyload: true,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
        });

    // CHARTS
      // Get context with jQuery - using jQuery's .get() method.
        var teamChart = $("#teamChart").get(0).getContext("2d");
        var openMenChart = $("#openMenChart").get(0).getContext("2d");
        var openWomenChart = $("#openWomenChart").get(0).getContext("2d");

        var teamData = {
          labels: ["acidotic Racing", "Sweetie Pie AT", "CMS", "SIX03 Endurance", "Comprehensive Racing"],
          datasets: [
            {
              label: "My First dataset",
              fillColor: "#43a0fa",
              strokeColor: "#43a0fa",
              highlightFill: "#2D88E1",
              highlightStroke: "#2D88E1",
              data: [3362.57, 2614.93, 2210.98, 2058.61, 681.82]
            }
          ]
        };

        var openMenData = {
          labels: ["Jim Johnson", "Eric Narcisi", "Andrew Drummond", "Damon Gannon", "Garrison Parker",],
          datasets: [
            {
              label: "My First dataset",
              fillColor: "#43a0fa",
              strokeColor: "#43a0fa",
              highlightFill: "#2D88E1",
              highlightStroke: "#2D88E1",
              data: [400.00, 359.52, 355.61, 348.70, 327.94]
            }
          ]
        };

        var openWomenData = {
          labels: ["Leslie O'Dell", "Abbey Wood", "Sarah Schlaack", "Erin Beck", "Mindy Bolton",],
          datasets: [
            {
              label: "My First dataset",
              fillColor: "#43a0fa",
              strokeColor: "#43a0fa",
              highlightFill: "#2D88E1",
              highlightStroke: "#2D88E1",
              data: [400.00, 369.34, 339.34, 325.60, 320.71]
            }
          ]
        };

        var myTeamChart = new Chart(teamChart).Bar(teamData, CHART_OPTIONS);
        var myOpenMenChart = new Chart(openMenChart).Bar(openMenData, CHART_OPTIONS);
        var myOpenWomenChart = new Chart(openWomenChart).Bar(openWomenData, CHART_OPTIONS);
  };

// ON BODY LOAD
  $(function() {
    init();
  });
