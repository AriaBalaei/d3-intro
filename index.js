
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
*/

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
        .attr('width', '24')
        .attr('fill', d => d.fill)
        .attr('height', d => d.height)
        .attr('x',(d, i) => i*25)
        .attr('y',(d, i) => 100 - (d.height))
})
