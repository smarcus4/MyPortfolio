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
        align:"center",
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});


//THIS IS FOR SCROLLING AND THE SMOOTHNESS TRANSITION OF NAVIGATION
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  //start the API calls
});
