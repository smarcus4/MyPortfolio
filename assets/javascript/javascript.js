google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Language', 'Skill-Level'],
          ['HTML',     11],
          ['CSS',      10],
          ['Javascript/JQuery',  8],
          ['Node.js', 2],
          ['AJAX/API',    7]
        ]);

        var options = {
          title: 'My Computer Language Skills',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }


    $(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});