/**
gets called once when the page is loaded, passes in dummy data (1989)
*/
function drawPieChartOnPageLoad(){
  // console.log("initial format");
  // console.log(generateData(1989,247,133,38,343,88,10,28,10,77,169));
  initializePieChart(generateData(1989,247,133,38,343,88,10,28,10,77,169));
}

/**
Updates the pie chart based on a given year.
*/
function updatePieChartForYear(year){
  var dataset = getDataForYear(year);
  //console.log("Dataset");
  //console.table(dataset);
  updatePieChart(dataset);
}


function initializePieChart(dataset){

  //console.log("drawing pie chart");
  'use strict';
  var width = 350;
  var height = 350;
  var radius = Math.min(width, height) / 2;
  var donutWidth = 75;
  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var pieSVG = d3.select('#pie')
   .append('svg')
   .attr('width', width)
   .attr('height', height)
   .append('g')
   .attr('transform', 'translate(' + (width / 2) +
     ',' + (height / 2) + ')');


  var arc = d3.arc()
   .innerRadius(radius - donutWidth)
   .outerRadius(radius);

  var pie = d3.pie()
   .value(function(d) {
    //  console.log("initial d.values");
    //  console.log(d.value);
     return d.value; })
   .sort(null);

  var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d.data.label;});

  pieSVG.call(tip);

  // pieSVG.selectAll("text").append("g")
  // .enter().append("text")
  // .attr("class", "lcLabel")
  // .attr("transform",
  //       "translate(" + margin.left + "," + margin.top + ")")
  // .text("test");



  var path = pieSVG.selectAll('path')
   .data(pie(dataset))
   .enter()
   .append('path')
   .attr('d', arc)
   .attr('fill', function(d, i) {
     return color(d.data.label);
   })
   .on('click', function(d,i){
     updateLineChart(d.data.label);
    })
   .on('mouseover', function(d,i){
     updateLineChart(d.data.label);
     tip.show(d);
     d3.select(this)
     .style("cursor", "pointer")
     .style("stroke", "")
     .attr("opacity",.5);
   })
   .on('mouseout', function(d,i){
     tip.hide(d);
     d3.select(this)
     .attr("opacity",1)
     .style("cursor", "pointer");
   });

   var text = pieSVG.selectAll("text")
    .data(dataset)
    .enter()
    .append("text");

    text.text("1990")
       .attr("x", -30)
       .attr("y", 10)
       .attr("font-family", "sans-serif")
       .attr("font-size", "30px")
       .attr("fill", "black");

}



function updatePieChart(dataset){

  'use strict';
  var width = 350;
  var height = 350;
  var radius = Math.min(width, height) / 2;
  var donutWidth = 75;
  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var pcSvg = d3.select("#pie").select("svg");
  var g = pcSvg.select("g");

  var arc = d3.arc()
   .innerRadius(radius - donutWidth)
   .outerRadius(radius);


  var pie = d3.pie()
   .value(function(d) {
    return d.value; })
   .sort(null);


  g.selectAll('path')
    .data(pie(dataset))
    .transition().duration(300)
    .attr('d', arc);

}



function getDataForYear(year){
  var pcSvg = d3.select("#pie").select("svg").selectAll("text").text(year);

  switch(year) {
  case 1990:
    return generateData(1989,247,133,38,343,88,10,28,10,77,169);
    break;
  case 1991:
    return generateData(1991,289,176,44,320,116,12,31,12,128,194);
    break;
  case 1992:
    return generateData(1992,308,209,46,348,142,15,33,13,67,199);
    break;
  case 1993:
    return generateData(1993,330,230,51,344,150,15,35,14,41,199);
    break;
  case 1994:
    return generateData(1994,347,252,47,336,155,16,38,13,55,203);
    break;
  case 1995:
    return generateData(1995,367,275,55,326,158,17,39,15,31,232);
    break;
  case 1996:
    return generateData(1996,384,294,52,316,162,18,40,13,41,241);
    break;
  case 1997:
    return generateData(1997,403,314,53,325,163,21,41,14,24,244);
    break;
  case 1998:
    return generateData(1998,418,324,56,323,164,23,40,16,46,241);
    break;
  case 1999:
    return generateData(1999,430,331,56,333,167,27,43,16,69,230);
    break;
  case 2000:
    return generateData(2000,450,369,70,334,179,28,46,16,59,215);
    break;
  case 2001:
    return generateData(2001,470,393,74,344,185,29,49,16,33,206);
    break;
  case 2002:
    return generateData(2002,491,408,74,356,190,28,50,16,14,195);
    break;
  case 2003:
    return generateData(2003,513,437,75,369,195,28,52,16,25,181);
    break;
  case 2004:
    return generateData(2004,537,463,77,380,201,28,53,16,31,170);
    break;
  case 2005:
    return generateData(2005,550,547,98,556,255,43,70,21,83,178);
    break;
  case 2006:
    return generateData(2006,570,609,98,535,257,42,70,21,58,213);
    break;
  case 2007:
    return generateData(2007,592,662,97,545,258,41,70,20,61,246);
    break;
  case 2008:
    return generateData(2008,617,705,97,571,262,42,71,20,65,275);
    break;
  case 2009:
    return generateData(2009,649,750,97,594,264,42,72,20,65,299);
    break;
  case 2010:
    return generateData(2010,746,847,150,872,428,56,107,26,225,136);
    break;
  case 2011:
    return generateData(2011,772,874,149,831,417,55,89,26,148,254);
    break;
  case 2012:
    return generateData(2012,801,895,139,807,394,55,86,27,81,349);
    break;
  case 2013:
    return generateData(2013,842,976,139,822,385,55,84,27,76,412);
    break;
  case 2014:
    return generateData(2014,890,1063,146,842,383,55,79,26,72,460);
    break;
  case 2015:
    return generateData(2015,961,1045,131,840,394,56,98,28,97,252);
    break;
  case 2016:
    return generateData(2016,1015,1124,126,817,401,56,102,30,110,318);
  default:
    console.error("Error, unkown year from line graph button. Year: " + year);
    return generateData(2016,1015,1124,126,817,401,56,102,30,110,318);
  }
}

/**
Given an array of values, generates the data needed for the pie chart
*/
function generateData(Year,Pensions,Health_Care,Education,Defense,Welfare,Protection,Transportation,General_Government,Other_Spending,Interest){
  return [{"label":"Pensions", "value":Pensions}
         ,{"label":"HealthCare", "value":Health_Care}
         ,{"label":"Education", "value":Education}
         ,{"label":"Defense", "value":Defense}
         ,{"label":"Welfare", "value":Welfare}
         ,{"label":"Protection", "value":Protection}
         ,{"label":"Transportation", "value":Transportation}
         ,{"label":"GeneralGovernment", "value":General_Government}
         ,{"label":"OtherSpending", "value":Other_Spending}
         ,{"label":"Interest", "value":Interest}];
}
