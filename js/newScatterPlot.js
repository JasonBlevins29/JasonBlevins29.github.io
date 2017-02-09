function createNewScatterPlot(){

    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 50, left: 60},
    width = 1000 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var scatterPlotSvg = d3.select("#testScatterPlot").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    // Get the data
    d3.csv("../data/image3/datav2.csv", function(error, data) {
      if (error) throw error;

      // format the data
      data.forEach(function(d) {
          d.county = d.county;
          d.unemploymentRate = +d.unemploymentRate;
          d.difference = +d.difference;
      });

      // x.domain(d3.extent(data, function(d) { return d.density; }));
      // y.domain([0, d3.max(data, function(d) { return d.gop; })]);
      x.domain([0,100]);
      y.domain([0,20]);

      //creates the div for tooltip
        var div = d3.select("#newScatterPlot").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

      // Add the scatterPlot
      scatterPlotSvg.selectAll("dot")
          .data(data)
        .enter().append("circle")
          //.attr("r", function(d) {return d.total*.1;})
          .attr("r", 1)
          .attr("cx", function(d) { return x(d.difference); })
          .attr("cy", function(d) { return y(d.unemploymentRate); })
          .attr("stroke", "gray")
          .attr("stroke-width", 1)
          .on("mouseover", function(d) {
            d3.select(this)
                 .attr("fill", "red")
                 .attr("r", 2);
            div.transition()
              .duration(50)
              .style("opacity", .9);
            div.html("Name: " + d.name + "<br/>" + "Percent voted for GOP: " + d.gop*100 + "<br/>" + "Total pop: " + d.total
            + "<br/>" + "density: " + d.density)
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("color", "red");
            })
          .on("mouseout", function(d) {
            d3.select(this)
                 .attr("fill", "black")
                 .attr("r", 1);
            div.transition()
              .duration(500)
              .style("opacity", 0);
            });


      // Add the X Axis
      scatterPlotSvg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // Add the Y Axis
      scatterPlotSvg.append("g")
          .call(d3.axisLeft(y));


        scatterPlotSvg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("class", "axisLabel")
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Unemployment");

        scatterPlotSvg.append("text")
         .attr("transform",
               "translate(" + (width/2) + " ," +
                              (height + margin.top + 20) + ")")
        .attr("class", "axisLabel")
         .style("text-anchor", "middle")
         .text("Percent GOP");


    });
  };
