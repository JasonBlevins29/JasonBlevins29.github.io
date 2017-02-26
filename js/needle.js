var pieScale = d3.scaleLinear()
  .domain([-2.1, 0.75])
  .range([0,180]);
  //.range([-Math.PI / 2, Math.PI / 2]);

function initializeNeedle(){
var width = 500,
  height = 300;

var svg = d3.select( "#needle" )
  .append( "svg" )
  .attr( "width", width )
  .attr( "height", height );

var arc = d3.arc()
  .innerRadius( 100 )
  .outerRadius( 150 )
  .cornerRadius( 5 )
  .padAngle( 0 );

color = [ "red", "green"];

var pie = d3.pie()
  .startAngle( -Math.PI / 2 )
  .endAngle( Math.PI / 2 )
  .value( function( d ) {
    return d
  } );


var arcs = svg.selectAll( '.arc' )
  .data(pie([.73,.27]))
  .enter()
  .append( 'path' )
  .attr( "d", arc )
  .attr( "transform", "translate(200,200)" )
  .style( "fill", function( d, i ) {
    return color[ i ]
  } );

var needle = svg.selectAll( ".needle" )
  .data([Math.PI / 2])
  .enter()
  .append( 'line' )
  .attr( "x1", 0 )
  .attr( "x2", -150 )
  .attr( "y1", 0 )
  .attr( "y2", 0 )
  .style("stroke", "black")
  .style("stroke-width", 3 )
  .attr("transform", function( d ) {
    r = 90;
    return " translate(200,200) rotate(" + r + ")"
  });

  var text = svg
  .selectAll("text")
   .data([Math.PI / 2])
   .enter()
   .append("text");

   text.text("")
      .attr("x", 170)
      .attr("y",250)
      .attr("font-family", "sans-serif")
      .attr("font-size", "30px")
      .attr("fill", "black");

  var stateText = svg
  .selectAll("text")
  .attr("class", "stateText")
   .data([Math.PI / 2])
   .enter()
   .append("State");

   text.text("")
      .attr("x", 50)
      .attr("y",250)
      .attr("font-family", "sans-serif")
      .attr("font-size", "25px")
      .attr("fill", "black");


}


function updateNeedle(state){

  console.log("getting value for state: " + state)
  //console.log("insideGetNumberForState");
  var value = null;
  d3.csv("../data/needle.csv", function(error, data) {
    data.forEach(function(d) {
      d.percent =+ d.percent;
      d.state = d.state;
      //d.currentValue = currentCategory.map(function(name) { return {name: name, value: +d[name]}; });
      if (d.state == state){
        console.log("state match");
        value = d.percent;
      }
    });



    if (error) throw error;

    if(!state){
      console.log("Error, no state given");
    }
    console.log("The value of " + state + " is " + value);
    console.log("scaled, this number is: " + pieScale(value));

    //update text label
    var percent = value*100;


    var needleSVG = d3.select("#needle").select("svg").selectAll("text")
                    .text(state + ": " + Math.round(percent) + "%");

    var needle = d3.select("#needle").select("svg").selectAll("line")
    .data([Math.PI / 2])
      .transition().duration(1000).ease(d3.easeBack)
      .attr( "transform", function( d ) {
        return " translate(200,200) rotate(" + pieScale(value) + ")"
      });

    // .attr( "transform", function( d ) {
    //   r = pieScale(value);
    //   return " translate(200,200) rotate(" + r + ")"
    //});




  });




}
