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

var treemapLayout = d3.treemap()
    .size([400, 200])
    .paddingTop(20)
    .paddingInner(2);

var rootNode = d3.hierarchy(data)

rootNode.sum(function (d) {
    return d.value;
});

treemapLayout(rootNode);

var nodes = d3.select('svg g')
    .selectAll('g')
    .data(rootNode.descendants())
    .enter()
    .append('g')
    .attr('transform', function (d) { return 'translate(' + [d.x0, d.y0] + ')' })

nodes
    .append('rect')
    .attr('width', function (d) { return d.x1 - d.x0; })
    .attr('height', function (d) { return d.y1 - d.y0; })

nodes
    .append('text')
    .attr('dx', 4)
    .attr('dy', 14)
    .text(function (d) {
        return d.data.name;
    })