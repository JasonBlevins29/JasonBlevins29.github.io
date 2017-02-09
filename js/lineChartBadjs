function createLineChart(){

  d3.csv("../data/image2/mock.csv")
    .row(function(d) {
      return {
        key: d.name,
        values: [+d.y1950, +d.y1960, +d.y1970, +d.y1980, +d.y1990, +d.y2000, +d.y2010]
      };
    })
    .get(function(error, data) {

      var margin = {top: 20, right: 20, bottom: 30, left: 50},
           width = 960 - margin.left - margin.right,
           height = 500 - margin.top - margin.bottom;

      //input: domain, output: range
      //transforms any value to the
      //these are just mapping functions
      var rangeX = d3.scaleLinear().range([height, 0]).domain([1,10]);
      var rangeY = d3.scaleLinear().range([0, width]).domain([1950,2010]);

      var p = d3.select('#lineGraph').append('svg').attr('width', width).attr('height', height);

      var line = d3.line()
          .x(function(d,i) { return rangeX(d); })
          .y(function(d,i) { console.log(d); return rangeY(d); });

      var color = d3.scaleOrdinal(d3.schemeCategory10);

      var g = p.selectAll(".lineGroup")
        .data(data)
        .enter().append("g")
        .attr("class", function(d,i){
          return "lineGroup " + d.key;
        });

      g.append("path")
        .attr("class", "line")
        .attr("d", function(d) {
          return line(d.values);
        })
        .style("stroke", function(d,i) {
          return color(i);
        })
        .attr("fill","none");


    });
  }
