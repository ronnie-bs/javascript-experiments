var treeData = {
    "name": "Top Level",
    "children": [
        {
            "name": "Level 2: A",
            "children": [
                { "name": "Son of A" },
                { "name": "Daughter of A" }
            ]
        },
        {
            "name": "Level 2: B"
        }
    ]
};

// set the dimensions and margins of the diagram
var margin = { top: 40, right: 90, bottom: 50, left: 90 };
var width = 660 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var root = d3.hierarchy(treeData);
var treemap = d3.tree().size([width, height]);
var nodes = treemap(root);
var descendants = nodes.descendants();
console.log('descendants', descendants);
var links = descendants.slice(1);
console.log('links', links);

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// adds the links between the nodes
var link = g.selectAll(".link")
    .data(links)
    .enter().append("path")
    .attr("class", "link")
    .attr("d", function (d) {
        return "M" + d.x + "," + d.y
            + "C" + d.x + "," + (d.y + d.parent.y) / 2
            + " " + d.parent.x + "," + (d.y + d.parent.y) / 2
            + " " + d.parent.x + "," + d.parent.y;
    });

// adds each node as a group
var node = g.selectAll(".node")
    .data(descendants)
    .enter().append("g")
        .attr("class", function (d) {
            return "node" + (d.children ? " node--internal" : " node--leaf");
        })
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        })
    .on('click', this.click);
    
// adds the circle to the node
node.append("circle")
    .attr("r", 10);

// adds the text to the node
node.append("text")
    .attr("dy", ".35em")
    // .attr("y", function (d) { return d.children ? -20 : 20; })
    .attr("y", 20)
    .style("text-anchor", "middle")
    .text(function (d) { return d.data.name; });
   
function click(d) {
    alert('this is a test', d);
}