function createBarChart(){
  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 20, bottom: 50, left: 60},
  width = 1000 - margin.left - margin.right,
  height = 700 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var barChartSvg = d3.select("#barChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("../data/image3/simple.csv", function(error, data) {
  if (error) throw error;
  console.log(data);
  // format the data
  data.forEach(function(d) {
    d.unemploymentRate = +d.unemploymentRate;
    console.log(d.unemploymentRate);
  });

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.percent; }));
  y.domain([0, d3.max(data, function(d) { return d.unemploymentRate; })]);

  var tooltipBC = d3.select("#barChart").append("div").attr("class", "toolTipBarChart");

  // append the rectangles for the bar chart
  var bars = barChartSvg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.percent); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.unemploymentRate); })
      .attr("height", function(d) { return height - y(d.unemploymentRate); })
      .on("mousemove", function(d){
          tooltipBC
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(("Unemployment Rate:<br>" + d.unemploymentRate) + "%");
        })
    		.on("mouseout", function(d){
          tooltipBC
            .style("display", "none")
            .transition().duration(1000);
        });

        bars.on("mouseover", function() {
                d3.select(this)
                  .attr("fill", "red");
            })

  // add the x Axis
  barChartSvg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the y Axis
  barChartSvg.append("g")
      .call(d3.axisLeft(y));



  barChartSvg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x",0 - (height / 2))
  .attr("dy", "1em")
  .attr("class", "axisLabel")
  .style("text-anchor", "middle")
  .text("Percent Unemployment");

  barChartSvg.append("text")
   .attr("transform",
         "translate(" + (width/2) + " ," +
                        (height + margin.top + 20) + ")")
   .style("text-anchor", "middle")
   .attr("class", "axisLabel")
   .text("Voted for Trump Deciles");

});



}
