(function(){


  var ctxOR = document.getElementById("chartDoughnutOR").getContext("2d"),
        ctxRW = document.getElementById("chartDoughnutRW").getContext("2d"),
        ctxValue = document.getElementById("lineChartValue").getContext("2d"),
        dataOR =  [
          {
            value: 360,
            color:"#e85038"
          },
          {
            value : 180,
            color : "#f0f0f0"
          }
      ],
      dataRW = [
          {
            value: 162,
            color: '#8a94e1'
          },
          {
            value : 198,
            color : "#f0f0f0"
          }
      ],

      dataValue =  {
          labels : ["OCT 2013", "NOV 2013", "DEC 2013", "JAN 2014", "FEV 2014", "MAR 2014"],
                  datasets : [
                    {
                      fillColor : "#e85038",
                      // pointColor : "rgba(220,220,220,1)",
                      // pointStrokeColor : "#fff",
                      data : [65,59,90,81,56,40]
                    },
                    {
                          // fillColor : "rgba(138, 148, 225, 0.61)",
                          fillColor : "rgba(127, 138, 224, 0.8)",
                          pointColor : "#049bda",
                          pointStrokeColor : "#fff",
                          data : [59,90,65,56,81,70]
                    },
          ]
      },

      optionsDoughnut = {
        //Boolean - Whether we should show a stroke on each segment
          segmentShowStroke : false,

          //String - The colour of each segment stroke
          // segmentStrokeColor : "#fff",

          //Number - The width of each segment stroke
          // segmentStrokeWidth : 2,

          //The percentage of the chart that we cut out of the middle.
          percentageInnerCutout : 60,

          //Boolean - Whether we should animate the chart
          animation : true,

          //Number - Amount of animation steps
          animationSteps : 300,

          //String - Animation easing effect
          animationEasing : "easeOutBounce",

          //Boolean - Whether we animate the rotation of the Doughnut
          animateRotate : true,

          //Boolean - Whether we animate scaling the Doughnut from the centre
          animateScale : true,

          //Function - Will fire on animation completion.
          onAnimationComplete : null
      },

      optionsLineChart = {
        //Boolean - If we show the scale above the chart data
          scaleOverlay : true,

          //Boolean - If we want to override with a hard coded scale
          scaleOverride : false,

          //** Required if scaleOverride is true **
          //Number - The number of steps in a hard coded scale
          scaleSteps : null,
          //Number - The value jump in the hard coded scale
          scaleStepWidth : null,
          //Number - The scale starting value
          scaleStartValue : null,

          //String - Colour of the scale line
          scaleLineColor : "rgba(0,0,0,.1)",

          //Number - Pixel width of the scale line
          scaleLineWidth : 0,

          //Boolean - Whether to show labels on the scale
          scaleShowLabels : false,

          //Interpolated JS string - can access value
          scaleLabel : "<%=value%>",

          //String - Scale label font declaration for the scale label
          scaleFontFamily : "'Helvetica Neue'",

          //Number - Scale label font size in pixels
          scaleFontSize : 10,

          //String - Scale label font weight style
          scaleFontStyle : "normal",

          //String - Scale label font colour
          scaleFontColor : "#666",

          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : false,

          //String - Colour of the grid lines
          scaleGridLineColor : "rgba(0,0,0,.05)",

          //Number - Width of the grid lines
          scaleGridLineWidth : 1,

          //Boolean - Whether the line is curved between points
          bezierCurve : true,

          //Boolean - Whether to show a dot for each point
          pointDot : true,

          //Number - Radius of each point dot in pixels
          pointDotRadius : 3,

          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth : 1,

          //Boolean - Whether to show a stroke for datasets
          datasetStroke : true,

          //Number - Pixel width of dataset stroke
          datasetStrokeWidth : 2,

          //Boolean - Whether to fill the dataset with a colour
          datasetFill : true,

          //Boolean - Whether to animate the chart
          animation : true,

          //Number - Number of animation steps
          animationSteps : 600,

          //String - Animation easing effect
          animationEasing : "easeOutQuart",

          //Function - Fires when the animation is complete
          onAnimationComplete : null
      };



  var chartDoughnutOR = new Chart(ctxOR).Doughnut(dataOR, optionsDoughnut),
        chartDoughnutRW = new Chart(ctxRW).Doughnut(dataRW, optionsDoughnut),
        lineChartValue = new Chart(ctxValue).Line(dataValue, optionsLineChart);




})();