/*
//Add Svg Element
const canvas = d3.select('.canva')
const svg = canvas.append('svg')
    .attr('width','1000')
    .attr('height','1000')
/*
//Circle
svg.append('circle')
  .attr('cx','100')
  .attr('cy','100')
  .attr('r','50')
  .attr('fill','blue')

//Rectangle(round version)
svg.append('rect')
    .attr('height', '50')
    .attr('width', '50')
    .attr('x','180')
    .attr('y','50')
    .attr('fill','orange')
    .attr('rx','10')
    .attr('ry','10')

//Line
svg.append('line')
    .attr('x1','129')
    .attr('x2','45')
    .attr('y1','100')
    .attr('y2','46')
    .attr('stroke', 'purple')



//Text
svg.append('text')
    .text('Hello')
    .attr('text-anchor','end')
    .attr('fill','gray')
    .attr('font-size','3vw')
    .attr('x','110')
    .attr('y','40')

    svg.append('text')
    .text('There')
    .attr('text-anchor','middle')
    .attr('fill','gray')
    .attr('font-size','1vw')
    .attr('x','110')
    .attr('y','60')

    svg.append('text')
    .text('Mate!')
    .style('font-family','Plus Jakarta Sans')
    .attr('text-anchor','start')
    .attr('stroke','red')
    .attr('font-size','4vw')
    .attr('x','110')
    .attr('y','110')


//Using Data
//const rect = svg.append('rect');
//const canvas = d3.select('.canva');
//const svg = canvas.select('svg');
const rect = svg.selectAll('rect')

//json
d3.json('test.json')
    .then(data => {
        console.log(data)
     rect
        .data(data)
        .enter().append('rect')
        .attr('width', d => d.width)
        .attr('fill', d => d.fill)
        .attr('height', d => d.height)
        .attr('x',(d, i) => i*25)
        .attr('y',(d, i) => 100 - (d.height))
})
*/
//paths
const canvas = d3.select('.canva');

var data = [{x: 15, y: 15} , {x: 15, y: 10} , {x: 12, y: 15},
            {x: 25, y: 35} , {x: 25, y: 12} , {x: 21, y: 23}];

const svg = canvas.append('svg')
                .attr('width', '900')
                .attr('height', '900')

const margin = {top: 20, right: 20, bottom: 70, left: 70}
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 -margin.top - margin.bottom;

const area = svg.append('g')
                .attr('height', graphHeight)
                .attr('width', graphWidth)
                .attr('transform',`translate(${margin.left},${margin.top})`);
                
            
var linearGen = d3.line()
                    .x((d, i) => d.x * 17)
                    .y((d, i) => d.y * 7)
                    .curve(d3.curveCardinal)
                    //https://github.com/d3/d3/blob/main/API.md
                    
area.append('path')
        .attr('d', linearGen(data))
        .attr('fill', 'darkblue')    
        .attr('stroke', 'red')
        


