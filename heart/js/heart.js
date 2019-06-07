/* setup */
var width = window.innerWidth;
var height = window.innerHeight;
var center = [width / 2, height / 2]
var heart = createHeart();

/* DOM init */
var svg =
    d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)

var g = svg.append('g')
    .attr('transform', 'translate(' + center + ')')

var g_path =
    g.append('g').attr('id', 'path')
    .on('click', toggleNetworkVisibility)

var g_links =
    g.append('g').attr('id', 'links')
    .style('display', heart.showNetwork ? null : 'none')

var g_nodes =
    g.append('g').attr('id', 'nodes')
    .style('display', heart.showNetwork ? null : 'none')

var node = g_nodes.selectAll('circle').data(heart.nodes)
node.exit().remove()
node = node.enter().append('circle')
    .attr('r', 5)
    .merge(node)

var link = g_links.selectAll('line').data(heart.links)
link.exit().remove()
link = link.enter().append('line').merge(link)

var path = g_path.append('path').data([heart.nodes])

/* simulation */
d3.forceSimulation(heart.nodes)
    // .drag(0.2)
    .alphaDecay(0.05)
    .force('charge', d3.forceManyBody().strength(-50))
    .force('link', d3.forceLink(heart.links).distance(0).strength(0.1))
    .force('X', d3.forceX().x(function(d) { return d._x }))
    .force('Y', d3.forceY().y(function(d) { return d._y }))
    .on('tick', update)
    .on('end', pulse);

function update() {
    node
    .attr('cx', function(d) { return d.x })
    .attr('cy', function(d) { return d.y })

    link
    .attr('x1', function(d) { return d.source.x })
    .attr('y1', function(d) { return d.source.y })
    .attr('x2', function(d) { return d.target.x })
    .attr('y2', function(d) { return d.target.y })

    path.attr('d', heart.line)
}

function pulse() {
    contract.apply(this)

    function contract() {
        console.log('contracting...');
        this
            .alphaMin(0.5)
            // .drag(0.1)
            .force('X', d3.forceX().x(function(d) { return 0.8 * d._x }))
            .force('Y', d3.forceY().y(function(d) { return 0.8 * d._y }))
            .restart()
            .on('end', expand);
    }

    function expand() {
        console.log('expanding...');
        this
            .alphaMin(0.005)
            // .drag(0.2)
            .force('X', d3.forceX().x(function(d) { return d._x }))
            .force('Y', d3.forceY().y(function(d) { return d._y }))
            .restart()
            .on('end', contract);
    }
}

function createHeart() {
    var π = Math.PI
    var R = 0.4 * Math.min(width, height) / 2
    var h = 2 * R
    var N = 10
    var alpha = Math.acos(R / h)
    var startAngle = -5 * π / 6
    var endAngle = π / 2 - alpha
    var dAngle = (endAngle - startAngle) / N

    var lobe = d3.range(N).map(function(i) {
        return {
            x: R * Math.cos(π / 6) + R * Math.cos(startAngle + i * dAngle),
            y: -R * Math.sin(π / 6) + R * Math.sin(startAngle + i * dAngle),
        }
    })

    var nodes = lobe.map(function(node, index) {
        return {
            i: index,
            x: 0.1 * node.x,
            y: 0.1 * node.y,
            _x: node.x,
            _y: node.y
        }
    })
    nodes.push({
        i: N,
        x: 0,
        y: 0.1 * h,
        _x: 0,
        _y: h
    });
    nodes = nodes.concat(
        lobe.slice(1)
        .reverse()
        .map(function(node, index) {
            return {
                i: N + 1 + index,
                x: -0.1 * node.x,
                y: 0.1 * node.y,
                _x: -node.x,
                _y: node.y
            }
        })
    )

    var line = d3.line()
        .x(function(d) { return d.x })
        .y(function(d) { return d.y })
        .curve(d3.curveCatmullRom);

    return {
        nodes: nodes,
        links: d3.range(nodes.length).map(function(i) {
            return { source: i, target: i < nodes.length - 1 ? i + 1 : 0 };
        }),
        line: function (d) {

            var rightLobe = d.slice(0, N + 1)
            var leftLobe = d.slice(N).concat([d[0]])

            return [
                line(rightLobe),
                line(leftLobe),
                'Z'
            ].join(' ')
        },
        showNetwork: false
    }
}

function toggleNetworkVisibility(d) {
    heart.showNetwork = !heart.showNetwork
    g_links.style('display', heart.showNetwork ? null : 'none')
    g_nodes.style('display', heart.showNetwork ? null : 'none')
}
