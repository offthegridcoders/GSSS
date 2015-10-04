// BUILDS CHARTS
  function buildCharts() {
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
  }
