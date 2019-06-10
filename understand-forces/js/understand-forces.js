var width = 800, height = 800;
var nodes = [
    { name: 'A', customx: 10,  customy: 40, customr: 100, group: 'A' },
    { name: 'B', customx: 40,  customy: 40, customr: 30,  group: 'C' },
    { name: 'C', customx: 70,  customy: 40, customr: 10,  group: 'B' },
    { name: 'D', customx: 100, customy: 40, customr: 42,  group: 'A' },
    { name: 'E', customx: 130, customy: 40, customr: 29,  group: 'B' },
    { name: 'F', customx: 160, customy: 40, customr: 89,  group: 'C' },
    { name: 'G', customx: 190, customy: 40, customr: 60,  group: 'B' },
    { name: 'H', customx: 220, customy: 40, customr: 12,  group: 'A' },
    { name: 'I', customx: 250, customy: 40, customr: 57,  group: 'A' },
    { name: 'J', customx: 280, customy: 40, customr: 54,  group: 'C' },
    { name: 'K', customx: 310, customy: 40, customr: 61,  group: 'C' },
    { name: 'L', customx: 340, customy: 40, customr: 13,  group: 'B' },
    { name: 'M', customx: 370, customy: 40, customr: 34,  group: 'A' },
    { name: 'N', customx: 400, customy: 40, customr: 19,  group: 'B' },
    { name: 'O', customx: 430, customy: 40, customr: 96,  group: 'C' },
    { name: 'P', customx: 460, customy: 40, customr: 15,  group: 'B' },
    { name: 'Q', customx: 490, customy: 40, customr: 86,  group: 'C' },
    { name: 'R', customx: 520, customy: 40, customr: 40,  group: 'B' },
    { name: 'S', customx: 550, customy: 40, customr: 99,  group: 'A' },
    { name: 'T', customx: 580, customy: 40, customr: 21,  group: 'C' },
    { name: 'U', customx: 620, customy: 40, customr: 17,  group: 'A' },
    { name: 'V', customx: 650, customy: 40, customr: 100, group: 'B' },
    { name: 'W', customx: 680, customy: 40, customr: 23,  group: 'B' },
    { name: 'X', customx: 710, customy: 40, customr: 10,  group: 'C' },
    { name: 'Y', customx: 740, customy: 40, customr: 75,  group: 'A' },
    { name: 'Z', customx: 770, customy: 40, customr: 64,  group: 'C' },
];

var svg = d3.select('#chart').append('svg:svg')
    .attr('width', this.width)
    .attr('height', this.height);

var gOuter = svg.append('g')
    .attr('transform', 'translate(' + this.width / 2 + ', ' + this.height / 2 + ')');

function update(data) {
    var that = this;
    var u = gOuter.selectAll('g').data(data);
    u.exit().remove();
    var e = u.enter().merge(u);
    var g = e.append('svg:g')
        .attr('class', 'circle-text-group');
    g.append('svg:circle')
        .attr('r', (d) => d.customr)
        .style('fill', (d) => that.getGroupColor(d));

    g.append('svg:text')
        .text((d) => d.name);

    // if (nodes.length > 0) {
    //     popNode();
    // } else {
    //     console.log('Kalaash');
    // }
}

function ticked() {
    var g = svg.selectAll('.circle-text-group');
    g.selectAll('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);
    g.selectAll('text')
        .attr('fill', '#FFF')
        .attr('transform', (d) => 'translate(' + (d.x - 6) + ', ' + (d.y + 4) + ')');
}

function popNode() {
    setTimeout(() => {
        nodes.pop();
        update(nodes);
    
        simulation.alpha(1);
        simulation.restart();
    }, 3000);   
}

function getGroupColor(d) {
    var retVal = '#000';
    if (d.group === 'A') {
        retVal = '#f00';
    } else if (d.group === 'B') {
        retVal = '#0f0';
    } else if (d.group === 'C') {
        retVal = '#00f';
    }
    return retVal;
}

var simulation = d3.forceSimulation(nodes)
    // .force('charge', d3.forceManyBody().strength(10))
    // .force('center', d3.forceCenter(width / 2, height / 2))
    // .force('x', d3.forceX(width / 2).strength(0.02))
    // .force('y', d3.forceY(height / 2).strength(0.02))
    .force("charge", d3.forceCollide((d) => d.customr).strength(0.2))
    .force('radial', d3.forceRadial((d) => 200))
    .alpha(0.25)
    .on('tick', ticked);

update(nodes);

