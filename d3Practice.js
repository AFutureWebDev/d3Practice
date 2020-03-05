const svg = d3.select("svg");

// the + just before SVG parses the string 'width/height' into a number
const height = +svg.attr('height');
const width = +svg.attr('width');

const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

const circle = g.append('circle')
    .attr('r', height / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

const eyeSpacing = 100;
const eyeHeight = -70;
const eyeRadius = 30;
const eyebrowWidth = 70;
const eyebrowHeight = 15;
const eyebrowYOffset = -130;

const leftEye = g
    .append('circle')
        .attr('r', eyeRadius)
        .attr('cx', - eyeSpacing)
        .attr('cy', eyeHeight)
        .attr('fill', 'black');

const rightEye = g
    .append('circle')
        .attr('r', eyeRadius)
        .attr('cx', eyeSpacing)
        .attr('cy', eyeHeight)
        .attr('fill', 'black');

const leftEyebrow = g
    .append('rect')
        .attr('x', -eyeSpacing - eyebrowWidth / 2)
        .attr('y', eyebrowYOffset)
        .attr('width', eyebrowWidth)
        .attr('height', eyebrowHeight)
    .transition().duration(1000)
        .attr('y', eyebrowYOffset - 30)
    .transition().duration(1000)
        .attr('y', eyebrowYOffset)
    .transition().duration(1000)
        .attr('y', eyebrowYOffset - 30)
    .transition().duration(1000)
        .attr('y', eyebrowYOffset);

const rightEyebrow = g
    .append('rect')
        .attr('x', eyeSpacing - eyebrowWidth / 2)
        .attr('y', eyebrowYOffset)
        .attr('width', eyebrowWidth)
        .attr('height', eyebrowHeight)
    .transition().duration(1000)
        .attr('y', eyebrowYOffset - 30)
    .transition().duration(1000)
        .attr('y', eyebrowYOffset)
    .transition().duration(1000)
        .attr('y', eyebrowYOffset - 30)
    .transition().duration(1000)
        .attr('y', eyebrowYOffset);

const mouth = g
    .append('path')
        .attr('d', d3.arc()({
            innerRadius: 150,
            outerRadius: 170,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 3 / 2
    }));

