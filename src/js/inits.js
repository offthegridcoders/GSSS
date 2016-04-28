// GLOBALS

  var scheduleContainer = $('#scheduleBody'); // SCHEDULE CONTAINER

  var teamsTable = $('#teamsTable'); // RESULTS TABLES
  var openMenTable = $('#openMenTable'); // RESULTS TABLES
  var openWomenTable = $('#openWomenTable'); // RESULTS TABLES
  var mastersMenTable = $('#mastersMenTable'); // RESULTS TABLES
  var mastersWomenTable = $('#mastersWomenTable'); // RESULTS TABLES
  var seniorsMenTable = $('#seniorsMenTable'); // RESULTS TABLES
  var seniorsWomenTable = $('#seniorsWomenTable'); // RESULTS TABLES
  var veteransMenTable = $('#veteransMenTable'); // RESULTS TABLES
  var veteransWomenTable = $('#veteransWomenTable'); // RESULTS TABLES

// INITIALIZATIONS
  function init() {
    new WOW().init();
    initSchedule();
    initStandings();
    loadCarousel();
  };

// ON BODY LOAD
  $(function() {
    init();
  });
