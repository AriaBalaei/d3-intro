
const canvas = d3.select('.canva')
const svg = canvas.append('svg').attr('width','500').attr('hight','500')

svg.append('rect')
  .attr('x','50')
  .attr('y','50')
  .attr('height','100')
  .attr('width','100')
  .attr('stroke','black')
  .attr('fill','black')
  