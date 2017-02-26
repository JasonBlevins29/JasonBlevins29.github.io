//configure the margins and scales
var margin = {top: 20, right: 20, bottom: 30, left: 50},
  width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var parseTime = d3.timeParse("%Y");
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

function initializeLineChart(category){
  // Get the data
  //Year,Pensions,Health Care,Education,Defense,Welfare,Protection,Transportation
  //,General Government,Other Spending,Interest,Total Spending,Federal Deficit,Gross Public Debt
  d3.csv("../data/newLineChart.csv", function(error, data) {

    if (error) throw error;

    if(category){
    }else{
      category = "TotalSpending";
    }
    // console.log("current category: " + category)
    // console.log("before: ")
    // console.log(data[0].year);

    // filter data by category
    var currentCategory = d3.keys(data[0]).filter(function(key) { return (key == category); });
    console.log(currentCategory);

    // format the data
    data.forEach(function(d) {
      d.year = parseTime(d.year);
      //d.currentValue = currentCategory.map(function(name) { return {name: name, value: +d[name]}; });
      d.currentValue = currentCategory.map(function(name) { return +d[name]; })
    });
    //console.table(data);

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.year; }));
    var max = d3.max(data, function(d) {
      //console.log(d.currentValue[0]);
      return d.currentValue[0];})
    y.domain([0,max + .2*max]);

    // define the line
    var valueline = d3.line()
        .x(function(d) { return x(d.year); })
        .y(function(d) { return y(d.currentValue); });


    var svg = d3.select("#spendingOverTime").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    //svg.selectAll("g").exit().remove()


    // Add the valueline path
    svg.append("path")
        .data([data])
        //.data([function(d) {return d.value;}])
        .attr("class", "line")
        .attr("d", valueline);


    svg.selectAll("dot")
      .data(data)
    .enter().append("circle")
      .attr("r", 8)
      .attr("cx", function(d) { return x(d.year); })
      .attr("cy", function(d) { return y(d.currentValue); })
      .on('mouseover', function(d,i){
        //console.log("mouse-over")
        d3.select(this)
        .attr("r",10)
        .style("cursor", "pointer");
        updatePieChartForYear(d.year.getFullYear());
        updateLineChart("TotalSpending");
      })
      .on('mouseout', function(d,i){ //console.log("mouse-out")
        d3.select(this)
        .attr("r",8)
        .style("cursor", "pointer");
      })
      .on('click', function(d,i){ //console.log("mouse-click")
        //dotClicked(d,d3.select(this));
      });


      function dotClicked(d,circle){
        //console.log(d.year.getFullYear());
        if(circle.attr("fill") == "red"){
          circle.attr("fill","black");
        }else{
          circle.attr("fill","red");
        }
      }

    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "xAxis")
        .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g")
        .attr("class", "yAxis")
        .call(d3.axisLeft(y));

    //console.log("category: ");
    //console.log(category);
    svg.selectAll("text").append("g").data(data)
    .enter().append("text")
    .attr("class", "lcLabel")
    .attr("transform","translate(100,100)")
    .text(category);
  });

}


function updateLineChart(category){
  //console.log("In the update chart");
  var lcSvg = d3.select("#spendingOverTime").select("svg")
  var g = d3.select("g")


  // Get the data
  //Year,Pensions,Health Care,Education,Defense,Welfare,Protection,Transportation
  //,General Government,Other Spending,Interest,Total Spending,Federal Deficit,Gross Public Debt
  d3.csv("../data/newLineChart.csv", function(error, data) {

    if (error) throw error;

    if(category){
    }else{
      category = "TotalSpending";
    }
    // console.log("current category: " + category)
    // console.log("before: ")
    // console.log(data[0].year);

    // filter data by category
    var currentCategory = d3.keys(data[0]).filter(function(key) { return (key == category); });
    //console.log(currentCategory);

    // format the data
    data.forEach(function(d) {
      d.year = parseTime(d.year);
      //d.currentValue = currentCategory.map(function(name) { return {name: name, value: +d[name]}; });
      d.currentValue = currentCategory.map(function(name) { return +d[name]; })
    });
    //console.table(data);

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.year; }));
    var max = d3.max(data, function(d) {
      //console.log(d.currentValue[0]);
      return d.currentValue[0];})
    y.domain([0,max + .2*max]);

    // define the line
    var valuelineUpdate = d3.line()
        .x(function(d) { return x(d.year); })
        .y(function(d) { return y(d.currentValue); });


    //svg.selectAll("g").exit().remove()

    g.selectAll(".line")
      .data([data])
      .transition().duration(300)
      .attr("d", valuelineUpdate);

    g.selectAll("circle")
      .data(data)
      .transition().duration(325)
      .attr("cx", function(d) { return x(d.year); })
      .attr("cy", function(d) { return y(d.currentValue); });

      function dotClicked(d,circle){
        if(circle.attr("fill") == "red"){
          circle.attr("fill","black");
        }else{
          circle.attr("fill","red");
        }
      }

    g.selectAll(".yAxis").call(d3.axisLeft(y));

    g.selectAll(".lcLabel")
      .text(category);

  });

}
