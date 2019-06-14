var data = {
    "name": "A1",
    "children": [
        {
            "name": "B1",
            "children": [
                {
                    "name": "C1",
                    "value": 100
                },
                {
                    "name": "C2",
                    "value": 300
                },
                {
                    "name": "C3",
                    "value": 200
                }
            ]
        },
        {
            "name": "B2",
            "value": 200
        }
    ]
};

var rootNode = d3.hierarchy(data);

rootNode.sum(function (d) {
    return d.value;
});

var packLayout = d3.pack();
packLayout
    .size([300, 300])
    .padding(10);
    
packLayout(rootNode);

var svg = d3.select('svg')
    .attr('width', 300)
    .attr('height', 300);

var svgG = svg.append('svg:g');

var nodes = svgG.selectAll('circle')
    .data(rootNode.descendants())
    .enter()
    .append('g')
    .attr('transform', function(d) { return 'translate(' + [d.x, d.y] + ')' });

nodes.append('circle')
    .attr('r', function (d) { return d.r; });

nodes.append('text')
    .attr('dy', 4)
    .text(function(d) {
        return d.children === undefined ? d.data.name : '';
    });