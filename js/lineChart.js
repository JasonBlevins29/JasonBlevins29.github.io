function createLineChart(){

  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 20, bottom: 50, left: 60},
  width = 1000 - margin.left - margin.right,
  height = 700 - margin.top - margin.bottom;
  //scales
  var x = d3.scaleLinear().range([0,width]);
  var y = d3.scaleLinear().range([height,0]);

  //LINES
  var Blount_County_Alabama = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.Blount_County_Alabama) ; })
      .curve(d3.curveBasis);

  var Winston_County_Alabama = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.Winston_County_Alabama); })
      .curve(d3.curveBasis);

  var District_Of_Columbia_County_District_of_Columbia = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.District_Of_Columbia_County_District_of_Columbia); })
      .curve(d3.curveBasis);

  var Jackson_County_Kentucky = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.Jackson_County_Kentucky); })
      .curve(d3.curveBasis);

  var Leslie_County_Kentucky = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.Leslie_County_Kentucky); })
      .curve(d3.curveBasis);

  var La_Salle_County_Louisiana = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.La_Salle_County_Louisiana); })
      .curve(d3.curveBasis);

  var Prince_Georges_County_Maryland = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.Prince_Georges_County_Maryland); })
      .curve(d3.curveBasis);

  var Bronx_County_New_York = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.Bronx_County_New_York); })
      .curve(d3.curveBasis);

  var New_York_County_New_York = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.New_York_County_New_York); })
      .curve(d3.curveBasis);

  var Petersburg_City_County_Virginia = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.Petersburg_City_County_Virginia); })
      .curve(d3.curveBasis);

  var average = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.average); })
      .curve(d3.curveBasis);



  var lineChartSvg = d3.select("#lineChart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("../data/image2/final.csv",  function(data){

      data.forEach(function (d){
        d.year = +d.year;
      });

      x.domain([1950, 2015]);
      y.domain([1, 17]);

      // Define the div for the tooltip
    var lineChartOneTTDiv = d3.select("#lineChart").append("div")
    .attr("class", "tooltipline")
    .style("opacity", 0);
      // Add the valueline path.
      lineChartSvg.append("path")
          .data([data])
          .attr("class", "redLine")
          .attr("d", Blount_County_Alabama)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> Blount County, Alabama</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });



      lineChartSvg.append("path")
          .data([data])
          .attr("class", "redLine")
          .attr("d", Winston_County_Alabama)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> Winston County, Alabama</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", District_Of_Columbia_County_District_of_Columbia)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> Washington DC</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "redLine")
          .attr("d", Leslie_County_Kentucky).on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> Leslie County Kentucky</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "redLine")
          .attr("d", Jackson_County_Kentucky)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> Jackson County, Kentucky</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "redLine")
          .attr("d", La_Salle_County_Louisiana)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> La Salle County, Louisiana</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", Petersburg_City_County_Virginia)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> Petersburg City, Virginia</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", New_York_County_New_York)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> New York County</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", Bronx_County_New_York)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> Bronx County, New York</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", Prince_Georges_County_Maryland)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b> Prince George's County, Maryland</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });

      lineChartSvg.append("path")
          .data([data])
          .attr("class", "boldLine")
          .attr("d", average)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("stroke-width", 4);
            lineChartOneTTDiv.transition()
              .duration(200)
              .style("opacity", .9);
            lineChartOneTTDiv.html("<b>National Average</b>")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "black");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("stroke-width", 1);
                 lineChartOneTTDiv.transition()
                 .delay(100)
              .duration(1000)
              .style("opacity", 0);
            });



      // Add the X Axis
      lineChartSvg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));
      // Add the Y Axis
      lineChartSvg.append("g")
          .call(d3.axisLeft(y));

      lineChartSvg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisLabel")
      .style("text-anchor", "middle")
      .text("Percent Unemployment");

      lineChartSvg.append("text")
       .attr("transform",
             "translate(" + (width/2) + " ," +
                            (height + margin.top + 20) + ")")
       .style("text-anchor", "middle")
       .attr("class", "axisLabel")
       .text("Year");

  });


    var lineChartSvgV2 = d3.select("#lineChartV2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g") //group
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("../data/image2/normalized.csv",  function(data){

      var lineChartTwoTTDiv = d3.select("#lineChartV2").append("div")
      .attr("class", "tooltipline")
      .style("opacity", 0);



        data.forEach(function (d){
          d.year = +d.year;
        });

        x.domain([1950, 2015]);
        y.domain([-4.5, 11]);

        // Add the valueline path.
        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "redLine")
            .attr("d", Blount_County_Alabama)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> Blount County, Alabama</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "redLine")
            .attr("d", Winston_County_Alabama)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> Winston County, Alabama</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", District_Of_Columbia_County_District_of_Columbia)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> Washington DC</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "redLine")
            .attr("d", Leslie_County_Kentucky)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> Leslie County, Kentucky</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "redLine")
            .attr("d", Jackson_County_Kentucky)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> Jacskon County, Kentucky</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "redLine")
            .attr("d", La_Salle_County_Louisiana)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b>La Salle County, Louisiana</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", Petersburg_City_County_Virginia)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> Pertersburg City, Virginia</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", New_York_County_New_York)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> New York County</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", Bronx_County_New_York)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> Bronx County, New York</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", Prince_Georges_County_Maryland)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b> Prince George's Country, Maryland</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });

        lineChartSvgV2.append("path")
            .data([data])
            .attr("class", "boldLine")
            .attr("d", average)
            .on("mouseover", function(d) {
              d3.select(this)
                   .attr("stroke-width", 4);
              lineChartTwoTTDiv.transition()
                .duration(200)
                .style("opacity", .9);
              lineChartTwoTTDiv.html("<b>National Average</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .style("color", "black");
              })
            .on("mouseout", function(d) {
              d3.select(this)
                   .attr("stroke-width", 1);
                   lineChartTwoTTDiv.transition()
                   .delay(100)
                .duration(1000)
                .style("opacity", 0);
              });



        // Add the X Axis
        lineChartSvgV2.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        // Add the Y Axis
        lineChartSvgV2.append("g")
            .call(d3.axisLeft(y));

        lineChartSvgV2.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "axisLabel")
        .style("text-anchor", "middle")
        .text("Percent Unemployment");

        lineChartSvgV2.append("text")
         .attr("transform",
               "translate(" + (width/2) + " ," +
                              (height + margin.top + 20) + ")")
         .style("text-anchor", "middle")
         .attr("class", "axisLabel")
         .text("Year");



    });

}





function unusedTutorialCodeOne(){

  var lineChartSvg = d3.select("#testing").append("svg")
  .attr("width", 400)
  .attr("height", 400);

  var rectanglePlacementScale = d3.scaleLinear()
  .domain([1,6])
  .range([0,400]);

  function render(data, color){

    var data = [{x: 1, y:3}];
    //bind data
    var rects = lineChartSvg.selectAll("rect").data(data);

    //enter (new ones) // static properties
    rects.enter().append("rect")
    .attr("y", 50)
    .attr("width", 20)
    .attr("height", 20)
    .attr("x", rectanglePlacementScale)
    .attr("fill", color);

    //update
    rects
    .attr("x", rectanglePlacementScale)
    .attr("fill", color);
  }

  render([1,2,3,4,5], "black");
  render([1,2,3,4], "blue");
}
function unusedTutorialCodeTwo(){

  var myObject = {
    x: 5,
    y: 10
  };

  console.log(myObject.x)

  //this is how things get loaded from csv
  var myArrayOfObjects =[
    {x: 5, y: 30},
    {x: 4, y: 25}
  ];


  //different notation
  console.log(myArrayOfObjects[0].x);
  console.log(myArrayOfObjects[0].y);
  console.log(myArrayOfObjects[1].x);
  console.log(myArrayOfObjects[1].y);

  //this is like when the csv is loaded, you get an array of objects and
  //then for each goes through each one of the objects in the array
  //and acceses them by the x and y value that we specific in the code

  myArrayOfObjects.forEach(function(d){
    //d gets assigned to each one of the objects in myArrayOfObjects
    console.log(d.x + " " + d.y);
  });

  d3.csv("../data/image2/mock.csv",  function(myArrayOfObjects){
    myArrayOfObjects.forEach(function (d){
      d.year = +d.year;
      console.log(d.year + " " + d.county1 + " " + d.county2 + " " + d.county3);
    });
    });


  //binding data
  lineChartSvg.selectAll("rect") //gives a selection containing all rect elements in the svg (none)
    .data(data) //data binding, has the selection, no rects but array of data elements
    .enter() //now we have a virtual selection. All the stuff after this will only exectute
            //for the case where we have no dom element but we have a data in data
    .append("rect") //append a rect for each data poit, all the code after here
                    //gets called for each data point in data
    .attr("x", rectanglePlacementScale)
    .attr("y", 50)
    .attr("width", 20)
    .attr("height", 20);


  console.log("After rect");

}

function unusedCode(){
  // Get the data
  d3.csv("../data/image2/mock.csv", callbackFromLoad);

  function callbackFromLoad(error, data){
    console.log("Data in callback after csv load");
    console.log(data);
    data.forEach(callbackFromForEach);
  }



  function callbackFromForEach(error, data){
    console.log("Data in forEach calback");
    console.log("before adding the stuff");
    console.log(data);
    data.year = +data.year;
    data.county1 =+ data.county1;
    console.log("after adding the stuff");
    console.log(data);

  }

}
