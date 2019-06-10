var width = 800, height = 800;
var nodes = [
    { name: 'A', customx: 10,  customy: 40 },
    { name: 'B', customx: 40,  customy: 40 },
    { name: 'C', customx: 70,  customy: 40 },
    { name: 'D', customx: 100, customy: 40 },
    { name: 'E', customx: 130, customy: 40 }
];

var xScale = d3.scaleLinear().domain([0, 1]).range([0, 600]);

var svg = d3.select('#chart').append('svg:svg')
    .attr('width', this.width)
    .attr('height', this.height);

var g = svg.selectAll('g').data(nodes);

var gEnter = g.enter()
    .merge(g)
    .append('svg:g');

var circle = gEnter.append('circle')
    .attr('r', 5);
var text = gEnter.append('text')
    .text((d) => d.name);

var simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2))
    // .force('x', d3.forceX().x((d) => xScale(d.value)))
    // .force('y', d3.forceY())
    .alpha(0.25)
    .on('tick', ticked);

function ticked() {
    circle
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);

    text
        .attr('transform', (d) => 'translate(' + (d.x - 5) + ', ' + (d.y - 10) + ')');
}

function manuallyPosition() {
    circle
        .attr('cx', (d) => d.customx)
        .attr('cy', (d) => d.customy);
    text
        .attr('x', (d) => (d.customx - 5))
        .attr('y', (d) => (d.customy - 10));
}

// manuallyPosition();

setTimeout(() => {
    nodes.pop();
    console.log('Removed a node', nodes);

    g = svg.selectAll('g')
        .data(nodes)
    g.exit().remove();

    simulation.alpha(1);
    simulation.restart();
}, 6000);
