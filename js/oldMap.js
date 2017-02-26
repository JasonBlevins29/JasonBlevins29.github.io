function initializeMapDifferent(){
  console.log("in this function");
    var width = 500;
    var height = 400;

  var svg = d3.select("#map").append("svg")
   .attr("width", width)
   .attr("height", height);


  function scale (scaleFactor,width,height) {
    return d3.geoTransform({
      point: function(x, y) {
        // this.stream.point( (x - width/2) * scaleFactor + width/2 , (y - height/2) * scaleFactor + height/2);
        this.stream.point(x * scaleFactor , y * scaleFactor);
      }
    });
  }

  d3.json("https://d3js.org/us-10m.v1.json", function (error, us){
    var path = d3.geoPath().projection(scale(0.5,width,height))

    svg.append("g")
      .attr("class", "states")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .enter().append("path")
      .attr("fill", "gray")
      .attr("d", path);

  });


}









  // d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
  //
  //   var path = d3.geoPath()
  //        .projection(d3.geoConicConformal()
  //            .parallels([33, 45])
  //            .rotate([96, -39])
  //            .fitSize([width, height], us));
  //
  //
  //   var svg = d3.select("#map").append("svg")
  //       .attr("width", 1000)
  //       .attr("height", 500);
  //
  //   svg.append("path")
  //       .attr("class", "states")
  //       .datum(topojson.feature(us, us.objects.states))
  //       .attr("d", path);
  // });
  //
  //

/////////////////

// var svg = d3.select("#map").append("svg")
//     .attr("width", 1000)
//     .attr("height", 500);
//
// d3.json("https://d3js.org/us-10m.v1.json", function (error, us){
//
//
//   svg.append("g")
//       .attr("class", "states")
//     .selectAll("path")
//     .data(topojson.feature(us, us.objects.states).features)
//     .enter().append("path")
//       .attr("fill", "gray")
//       .attr("d", d3.geoPath());
//   });
