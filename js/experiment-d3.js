var svg = d3.select('svg'),
    width = +svg.attr('width'),
    height = +svg.attr('height');
    
var nodesData = [
    { 'name': 'Travis', 'sex': 'M' },
    { 'name': 'Rake', 'sex': 'M' },
    { 'name': 'Diana', 'sex': 'F' },
    { 'name': 'Rachel', 'sex': 'F' },
    { 'name': 'Shawn', 'sex': 'M' },
    { 'name': 'Emerald', 'sex': 'F' }
]

// var linksData = [
// 	{ 'source': 'Travis', 'target': 'Rake' },
//     { 'source': 'Diana', 'target': 'Rake' },
//     { 'source': 'Diana', 'target': 'Rachel' },
//     { 'source': 'Rachel', 'target': 'Rake' },
//     { 'source': 'Rachel', 'target': 'Shawn' },
//     { 'source': 'Emerald', 'target': 'Rachel' }
// ]

var node = svg.append('g')
        .attr('class', 'nodes')
    .selectAll('circle')
    .data(nodesData)
    .enter().append('circle')
        .attr('r', 5)
        .attr('fill', 'red');  

// var link = svg.append('g')
//         .attr('class', 'links')
//     .selectAll('line')
//     .data(linksData)
//     .enter().append('line')
//         .attr('stroke-width', 2);        

var simulation = d3.forceSimulation()
    .nodes(nodesData);	
                    
simulation
    .force('charge_force', d3.forceManyBody())
    .force('center_force', d3.forceCenter(width / 2, height / 2));
    // .force('links', d3.forceLink(linksData).id((d) => d.name));

simulation
    .on('tick', () => {
        node
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y);
            
        // link
        //     .attr('x1', (d) => d.source.x)
        //     .attr('y1', (d) => d.source.y)
        //     .attr('x2', (d) => d.target.x)
        //     .attr('y2', (d) => d.target.y);
    })
    .on('end', pulse);



function pulse() {
    contract.apply(this);

    function contract() {
        console.log('contracting...', this);
        this
            .alphaMin(0.5)
            // .drag(0.1)
            .force('X', d3.forceX().x(function(d) { return 0.8 * d._x }))
            .force('Y', d3.forceY().y(function(d) { return 0.8 * d._y }))
            .restart()
            // .on('end', expand);
    }

    function expand() {
        console.log('expanding...');
        this
            .alphaMin(0.005)
            // .drag(0.2)
            .force('X', d3.forceX().x(function(d) { return d._x }))
            .force('Y', d3.forceY().y(function(d) { return d._y }))
            .on('end', contract);
    }
}
