// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 50, left: 60},
width = 1200 - margin.left - margin.right,
height = 800 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var radiusScale = d3.scaleLinear().domain([0,1000]).range([1, 5]);


// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("../data/image1/simplified.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.name = +d.name;
      d.density = +d.density;
      d.gop = +d.gop;
      d.dem = +d.dem;
  });

  // x.domain(d3.extent(data, function(d) { return d.density; }));
  // y.domain([0, d3.max(data, function(d) { return d.gop; })]);
  x.domain([0,1000]);
  y.domain([0,1]);


  // Add the scatterplot
  svg.selectAll("dot")
      .data(data)
    .enter().append("circle")
      .attr("r", function(d) { return radiusScale(d.density); } )
      .attr("cx", function(d) { return x(d.density); })
      .attr("cy", function(d) { return y(d.gop); });


  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

  //Add a straight line at 50 percent
  var line = svg.append("line")
    .attr("x1", 0)
    .attr("y1", (height/2)+2.5)
    .attr("x2", width)
    .attr("y2", (height/2)+2.5)
    .attr("stroke", "blue")
    .attr("stroke-width", 5)
    .attr("opacity", .5);

    var line = svg.append("line")
      .attr("x1", 0)
      .attr("y1", (height/2)-2.5)
      .attr("x2", width)
      .attr("y2", (height/2)-2.5)
      .attr("stroke", "red")
      .attr("stroke-width", 5)
      .attr("opacity", .5);



    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Percent Repulican Vote");

    svg.append("text")
     .attr("transform",
           "translate(" + (width/2) + " ," +
                          (height + margin.top + 20) + ")")
     .style("text-anchor", "middle")
     .text("Population Density: People Per Square Mile");


});
