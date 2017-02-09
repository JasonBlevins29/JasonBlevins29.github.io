function createLineChart(){

  // This will be assigned to rows, once the data is ready.
  var data = null;

  d3.csv("../data/image2/mock.csv")
      .row(function(d) { return {key: d.name,
        values: [+d.y1950, +d.y1960, +d.y1970, +d.y1980, +d.y1990, +d.y2000, +d.y2010]}; })
      .get(function(error, rows) {
        //this is the callback function but it is defined right here
        myData = rows;// Now you can assign it
        myDataIsReady()// Now you can draw it
      });



  function myDataIsReady() {

    var years = d3.range(1950, 2011, 10);
    var firstObject = Object.values(myData[0]);
    var justValues = firstObject[1];


    console.log(justValues);
    console.log("second");
    var xy = [];
    for(var i=0;i<years.length;i++){
     xy.push({x:years[i],y:justValues[i]});
   }
   console.log("here is the pair: ");
   console.log(xy);


   var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

   //input: domain, output: range
   //transforms any value to the
   //these are just mapping functions
   var yMappingFunction = d3.scaleLinear().range([height, 0]).domain([1,10]);
   var xMappingFunction = d3.scaleLinear().range([0, width]).domain([1950,2010]);



   var firstLine = d3.line()
    .x(function(d) {
      console.log("logging from inside line creation")
      console.log(xMappingFunction(d.x));
      return xMappingFunction(d.x);
    })
    .y(function(d) {return yMappingFunction(d.y); });



     // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var scatterPlotSvg = d3.select("#lineGraph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

                // Add the valueline path.
  scatterPlotSvg.append("path")
      .data(xy)
      .attr("class", "line")
      .attr("d", firstLine(xy));

  // Add the X Axis
  scatterPlotSvg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xMappingFunction));

  // Add the Y Axis
  scatterPlotSvg.append("g")
      .call(d3.axisLeft(yMappingFunction));
  console.log("All Done loggng, at the end");
  }
}
