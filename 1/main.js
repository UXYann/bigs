var d = document;


//	Top Menu navigation animations
var buttonElem1, buttonElem2, buttonElem3, buttonElem4, step12, step23, step34;
function changingMenuState(whichSteAreWe) {

	if (whichSteAreWe == "1") {
		buttonElem1.className = "setToBlue";
		buttonElem2.className = "setToDark";
		buttonElem3.className = "setToDark";
		buttonElem4.className = "setToDark";
		step12.className = "stepStatusLineMid";
		step23.className = "stepStatusLineDark";
		step34.className = "stepStatusLineDark";
	} else if (whichSteAreWe == "2") {
		buttonElem1.className = "setToBlue";
		buttonElem2.className = "setToBlue";
		buttonElem3.className = "setToDark";
		buttonElem4.className = "setToDark";
		step12.className = "stepStatusLineBlue";
		step23.className = "stepStatusLineMid";
		step34.className = "stepStatusLineDark";
	} else if (whichSteAreWe == "3") {
		buttonElem1.className = "setToBlue";
		buttonElem2.className = "setToBlue";
		buttonElem3.className = "setToBlue";
		buttonElem4.className = "setToDark";
		step12.className = "stepStatusLineBlue";
		step23.className = "stepStatusLineBlue";
		step34.className = "stepStatusLineMid";
	} else if (whichSteAreWe == "4") {
		buttonElem1.className = "setToBlue";
		buttonElem2.className = "setToBlue";
		buttonElem3.className = "setToBlue";
		buttonElem4.className = "setToBlue";
		step12.className = "stepStatusLineBlue";
		step23.className = "stepStatusLineBlue";
		step34.className = "stepStatusLineBlue";
	}
}


//	Dashboard Menu navigation animations
var DashButtonElem1, DashButtonElem2, DashButtonElem3, DashButtonElem4;
function changingDashMenuState(whichSteAreWe) {
	if (whichSteAreWe == "1") {
		DashButtonElem1.className = "blue";
		DashButtonElem2.className = "dark";
		DashButtonElem3.className = "dark";
		DashButtonElem4.className = "dark";
	} else if (whichSteAreWe == "2") {
		DashButtonElem1.className = "dark";
		DashButtonElem2.className = "blue";
		DashButtonElem3.className = "dark";
		DashButtonElem4.className = "dark";
	} else if (whichSteAreWe == "3") {
		DashButtonElem1.className = "dark";
		DashButtonElem2.className = "dark";
		DashButtonElem3.className = "blue";
		DashButtonElem4.className = "dark";
	} else if (whichSteAreWe == "4") {
		DashButtonElem1.className = "dark";
		DashButtonElem2.className = "dark";
		DashButtonElem3.className = "dark";
		DashButtonElem4.className = "blue";
	}
}


function fakingFalseParallax() {
	d.getElementById('delayingArrival').className = 'displayArrival';
}

function splashscreen() {
	
	d.getElementById('site').style.opacity = "1";
	d.getElementById('splash').style.visibility = "hidden";
	d.getElementById('content').className = "siteShown";
	d.getElementById('requests').className = "siteShown";



	window.setTimeout(fakingFalseParallax, 1000);
}











function settingUpNav() {

	if(document.getElementById('dash1')) {
			//	Dashboard Menu navigation animation
			DashButtonElem1 = document.getElementById('dash1');
			DashButtonElem2 = document.getElementById('dash2');
			DashButtonElem3 = document.getElementById('dash3');
			DashButtonElem4 = document.getElementById('dash4');
			DashButtonElem1.setAttribute('onclick', 'changingDashMenuState("1");dashContent("dashMainContentSection","dashMainContentSection","verify-dashboard.html");');
			DashButtonElem2.setAttribute('onclick', 'changingDashMenuState("2");dashContent("dashMainContentSection","dashMainContentSection","verify-documents.html");');
			DashButtonElem3.setAttribute('onclick', 'changingDashMenuState("3");dashContent("dashMainContentSection","dashMainContentSection","verify-summury.html");');
			DashButtonElem4.setAttribute('onclick', 'changingDashMenuState("4");dashContent("dashMainContentSection","dashMainContentSection","verify-rating.html");');
	}

	if (document.getElementsByClassName('request')) {

		var request = document.getElementsByClassName('request');

		for(var i=0; i < request.length; i++) {
			request[i].setAttribute('onclick', "dashContent('content','content','verify-dashboard.html');")
		}
	}//				d.getElementById('requests').className = "scaleSmall";

}



/*
//	Top Menu navigation animations
buttonElem1 = d.getElementById('stepOne');
buttonElem2 = d.getElementById('stepTwo');
buttonElem3 = d.getElementById('stepThree');
buttonElem4 = d.getElementById('stepFour');
step12 = d.getElementById('step12');
step23 = d.getElementById('step23');
step34 = d.getElementById('step34');
buttonElem1.setAttribute('onclick',"changingMenuState('1');displayContent('content','content','choose.html')");
buttonElem2.setAttribute('onclick',"changingMenuState('2');displayContent('content','content','verify.html')");
buttonElem3.setAttribute('onclick',"changingMenuState('3');displayContent('content','content','action.html')");
buttonElem4.setAttribute('onclick',"changingMenuState('4');displayContent('content','content','submit.html')");
*/
d.getElementById('startingExperience').setAttribute('onclick', "splashscreen()");





function swapClasses(elem,newClass){
	d.getElementById(elem).className = newClass;
}

function disapear(elem) {
	d.getElementById(elem).style.opacity = "0";

	window.setTimeout('function(){d.getElementById('+elem+').style.opacity = "1";}', 750);
}



function createLoaderOnTheFly(daddy) {

 var newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1></h1>";
	
	newDiv.setAttribute('id', 'loader');
	newDiv.innerHTML = " ";

	daddy.appendChild(newDiv);
}



function dashContent(currentSecOrigine,currentSecDest,currentURL) {
	var href= currentURL;
	// getting the desired element for working with it later
		currentSecOrigine = d.getElementById('loader').parentNode;
		
		var $wrap = $('#'+currentSecOrigine.id+'');	


	$wrap
	    // removing old data
	    .html('')

	    // slide it up
	    .slideUp()

	    // load the remote page
	    .load(href + ' #dashMainContentSection', function () {
	        // now slide it down
	        $wrap.slideDown();
	        settingUpNav();
	        createLoaderOnTheFly(currentSecOrigine);

	        if (currentURL == "verify-dashboard.html") {
	        	startingCharts();
	        }
	    });

};


function getContentOverAjax(currentSecOrigine,currentSecDest,currentURL) {
	var href= currentURL;
	// getting the desired element for working with it later

		currentSecOrigine = d.getElementById('loader').parentNode;
		var $wrap = $('#'+currentSecOrigine.id+'');		
	
	$wrap
	    // removing old data
	    .html('')

	    // slide it up
	    .slideUp()

	    // load the remote page
	    .load(href + ' #content', function () {
	        // now slide it down
	        $wrap.slideDown();
	        settingUpNav();
	        d.getElementById('nextButton').className = "shown";
	        if (currentURL == "verify-dashboard.html") {
	        	startingCharts();	
	        }

	    });
};


function getContentOverAjax2(currentSecOrigine,currentSecDest,currentURL) {
	var href= currentURL;
	// getting the desired element for working with it later

		currentSecOrigine = d.getElementById('loader').parentNode;

		var $wrap = $('#'+currentSecOrigine.id+'');		
	
	$wrap
	    // removing old data
	    .html('')

	    // slide it up
	    .slideUp()

	    // load the remote page
	    .load(href + ' #content', function () {
	    	d.getElementById('navDashBoard').style.display = "none";
	    	d.getElementById('navStepMenu').style.backgroundPosition = "0 66%";
	    	d.getElementById('nextButton').setAttribute('onclick', "getContentOverAjax3('content','content','submit.html');");
	        // now slide it down
	        $wrap.slideDown();
	        settingUpNav();
	        d.getElementById('nextButton').className = "shown";
	        queryingStuffForAcceptance();
	    });
};




function getContentOverAjax3(currentSecOrigine,currentSecDest,currentURL) {
	var href= currentURL;
	// getting the desired element for working with it later

		currentSecOrigine = d.getElementById('test');
		var $wrap = $('#'+currentSecOrigine.id+'');		
	
	$wrap
	    // removing old data
	    .html('')

	    // slide it up
	    .slideUp()

	    // load the remote page
	    .load(href + ' #content', function () {
	    	d.getElementById('navStepMenu').style.backgroundPosition = "0 100%";
	    	d.getElementById('nextButton').setAttribute('onclick', "");
	        // now slide it down
	        $wrap.slideDown();
	        settingUpNav();
	    });
};


function queryingStuffForAcceptance() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 50,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
}




function swapClasses(elem,newClass){
	d.getElementById(elem).className = newClass;
}







function erasingFormerContentSection() {
	var contentSec = d.getElementById('content');

	contentSec.parentNode.removeChild(contentSec);

	getContentOverAjax("content","content","verify-dashboard.html");

	swapClasses("navStepMenu","dashboard");
//	settingUpNav();
}


function swappingContentWithLoadingScreen() {
	d.getElementById('loader').style.opacity = "1";
	d.getElementById('content').style.opacity = "none";

	window.setTimeout(erasingFormerContentSection, 500);
}


function swappingContent() {
	d.getElementById('requests').style.webkitTransform = "scale(0.75,0.75)";
	d.getElementById('diapo1').style.top = "15px";
	d.getElementById('diapo2').style.top = "15px";

	d.getElementById('rightArrow').style.top = "200px";
	d.getElementById('leftArrow').style.top = "200px";
	d.getElementById('pageControllers').style.display = "none";

	window.setTimeout(swappingContentWithLoadingScreen, 1500);

	
}










function startingCharts() {
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

}







function chacingColorOfSlider() {


	if (d.getElementById('rangeSlider').value < 50) {
		d.getElementById('rangeLine').className = "green";
	} else if ( (d.getElementById('rangeSlider').value > 50) && (d.getElementById('rangeSlider').value < 70) ) {
		d.getElementById('rangeLine').className = "neutral";
	} else if (d.getElementById('rangeSlider').value > 70) {
		d.getElementById('rangeLine').className = "red";
	}


//	thisElem = d.getElementById('range');
				  		
}







