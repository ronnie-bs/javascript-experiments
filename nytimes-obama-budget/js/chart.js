var nytg = nytg || {};

nytg.Chart = function() {
    return {
        $j: jQuery,
        //defaults
        width: 1050,
        height: 850,
        groupPadding: 10,
        totalValue: 3700000000,
        deficitValue: 901000000,
        // CONST
        MANDATORY: "Mandatory",
        DISCRETIONARY: "Discretionary",
        NET_INTEREST: "Net interest",

        //will be calculated later
        boundingRadius: null,
        maxRadius: null,
        centerX: null,
        centerY: null,
        scatterPlotY: null,

        //d3 settings
        defaultGravity: 0.1,
        defaultCharge: function(d) {
            if (d.value < 0) {
                return 0
            } else {
                return -Math.pow(d.radius, 2.0) / 8
            };
        },
        links: [],
        nodes: [],
        positiveNodes: [],
        force: {},
        svg: {},
        circle: {},
        gravity: null,
        charge: null,
        changeTickValues: [-0.25, -0.15, -0.05, 0.05, 0.15, 0.25],
        categorizeChange: function(c) {
            if (isNaN(c)) {
                return 0;
            } else if (c < -0.25) {
                return -3;
            } else if (c < -0.05) {
                return -2;
            } else if (c < -0.001) {
                return -1;
            } else if (c <= 0.001) {
                return 0;
            } else if (c <= 0.05) {
                return 1;
            } else if (c <= 0.25) {
                return 2;
            } else {
                return 3;
            }
        },
        fillColor: d3.scaleOrdinal().domain([-3, -2, -1, 0, 1, 2, 3]).range(["#d84b2a", "#ee9586", "#e4b7b2", "#AAA", "#beccae", "#9caf84", "#7aa25c"]),
        strokeColor: d3.scaleOrdinal().domain([-3, -2, -1, 0, 1, 2, 3]).range(["#c72d0a", "#e67761", "#d9a097", "#999", "#a7bb8f", "#7e965d", "#5a8731"]),
        getFillColor: null,
        getStrokeColor: null,
        pFormat: d3.format("+.1%"),
        pctFormat: function() {
            return false
        },
        tickChangeFormat: d3.format("+%"),
        simpleFormat: d3.format(","),
        simpleDecimal: d3.format(",.2f"),

        bigFormat: function(n) {
            return nytg.formatNumber(n * 1000)
        },
        nameFormat: function(n) {
            return n
        },
        discretionFormat: function(d) {
            if (d == 'Discretionary' || d == 'Mandatory') {
                return d + " spending"
            } else {
                return d
            }
        },

        rScale: d3.scalePow().exponent(0.5).domain([0, 1000000000]).range([1, 90]),
        radiusScale: null,
        changeScale: d3.scaleLinear().domain([-0.28, 0.28]).range([620, 180]).clamp(true),
        sizeScale: d3.scaleLinear().domain([0, 110]).range([0, 1]),
        groupScale: {},

        //data settings
        currentYearDataColumn: 'budget_2013',
        previousYearDataColumn: 'budget_2012',
        data: nytg.budget_array_data,
        categoryPositionLookup: {},
        categoriesList: [],

        init: function() {
            var that = this;

            this.scatterPlotY = this.changeScale(0);
            this.pctFormat = function(p) {
                if (p === 'Infinity' || p === '-Infinity') {
                    return "N.A."
                } else {
                    return that.pFormat(p)
                }
            }

            this.radiusScale = function(n) {
                return that.rScale(Math.abs(n));
            };
            this.getStrokeColor = function(d) {
                return that.strokeColor(d.changeCategory);
            };
            this.getFillColor = function(d) {
                if (d.isNegative) {
                    return "#fff"
                }
                return that.fillColor(d.changeCategory);
            };

            this.boundingRadius = this.radiusScale(this.totalValue);
            this.centerX = this.width / 2;
            this.centerY = 300;

            nytg.category_data.sort(function(a, b) {
                return b['total'] - a['total'];
            });

            // calculates positions of the category clumps it is probably overly complicated
            var columns = [4, 7, 9, 9]
                rowPadding = [150, 100, 90, 80, 70],
                rowPosition = [220, 450, 600, 720, 817],
                rowOffsets = [130, 80, 60, 45, 48]
                currentX = 0,
                currentY = 0;

            for (var i = 0; i < nytg.category_data.length; i++) {
                var t = 0,
                    w,
                    numInRow = -1,
                    positionInRow = -1,
                    currentRow = -1,
                    cat = nytg.category_data[i]['label'];

                // calc num in this row
                for (var j = 0; j < columns.length; j++) {
                    if (i < (t + columns[j])) {
                        numInRow = columns[j];
                        positionInRow = i - t;
                        currentRow = j;
                        break;
                    };
                    t += columns[j];
                }

                if (numInRow === -1) {
                    numInRow = nytg.category_data.length - d3.sum(columns);
                    currentRow = columns.length;
                    positionInRow = i - d3.sum(columns)
                }

                nytg.category_data[i].row = currentRow;
                nytg.category_data[i].column = positionInRow;
                w = (this.width - 2 * rowPadding[currentRow]) / (numInRow - 1)
                currentX = w * positionInRow + rowPadding[currentRow];
                currentY = rowPosition[currentRow];
                this.categoriesList.push(cat);
                this.categoryPositionLookup[cat] = {
                    x: currentX,
                    y: currentY,
                    w: w * 0.9,
                    offsetY: rowOffsets[currentRow],
                    numInRow: numInRow,
                    positionInRow: positionInRow
                }
            };

            this.groupScale = d3.scalePoint().domain(this.categoriesList).range([0, 1]);

            // Builds the nodes data array from the original data
            for (var i = 0; i < this.data.length; i++) {
                var n = this.data[i];
                var out = {
                    sid: n['id'],
                    radius: this.radiusScale(n[this.currentYearDataColumn]),
                    group: n['department'],
                    change: n['change'],
                    changeCategory: this.categorizeChange(n['change']),
                    value: n[this.currentYearDataColumn],
                    name: n['name'],
                    discretion: n['discretion'],
                    isNegative: (n[this.currentYearDataColumn] < 0),
                    positions: n.positions,
                    x: Math.random() * 1000,
                    y: Math.random() * 1000
                }

                if (n.positions.total) {
                    out.x = n.positions.total.x + (n.positions.total.x - (that.width / 2)) * 0.5;
                    out.y = n.positions.total.y + (n.positions.total.y - (150)) * 0.5;
                };

                if ((n[this.currentYearDataColumn] > 0) !== (n[this.previousYearDataColumn] > 0)) {
                    out.change = "N.A.";
                    out.changeCategory = 0;
                };

                this.nodes.push(out)
            };

            this.nodes.sort(function(a, b) {
                return Math.abs(b.value) - Math.abs(a.value);
            });

            for (var i = 0; i < this.nodes.length; i++) {
                if (!this.nodes[i].isNegative) {
                    this.positiveNodes.push(this.nodes[i])
                }
            };

            this.svg = d3.select("#nytg-chartCanvas").append("svg:svg")
                .attr("width", this.width)
                .append('g')
                    .attr('transform', 'translate(' + 120 + ', ' + 120 + ')');

            for (var i = 0; i < this.changeTickValues.length; i++) {
                d3.select("#nytg-discretionaryOverlay").append("div")
                    .html("<p>" + this.tickChangeFormat(this.changeTickValues[i]) + "</p>")
                    .style("top", this.changeScale(this.changeTickValues[i]) + 'px')
                    .classed('nytg-discretionaryTick', true)
                    .classed('nytg-discretionaryZeroTick', (this.changeTickValues[i] === 0))
            };

            d3.select("#nytg-discretionaryOverlay").append("div")
                .html("<p></p>")
                .style("top", this.changeScale(0) + 'px')
                .classed('nytg-discretionaryTick', true)
                .classed('nytg-discretionaryZeroTick', true)

            d3.select("#nytg-discretionaryOverlay").append("div")
                .html("<p>+26% or higher</p>")
                .style("top", this.changeScale(100) + 'px')
                .classed('nytg-discretionaryTickLabel', true)

            d3.select("#nytg-discretionaryOverlay").append("div")
                .html("<p>&minus;26% or lower</p>")
                .style("top", this.changeScale(-100) + 'px')
                .classed('nytg-discretionaryTickLabel', true)

            // deficit circle
            d3.select("#nytg-deficitCircle").append("circle")
                .attr('r', this.radiusScale(this.deficitValue))
                .attr('class', "nytg-deficitCircle")
                .attr('cx', 125)
                .attr('cy', 125);

            d3.select("#nytg-scaleKey").append("circle")
                .attr('r', this.radiusScale(100000000))
                .attr('class', "nytg-scaleKeyCircle")
                .attr('cx', 30)
                .attr('cy', 30);

            d3.select("#nytg-scaleKey").append("circle")
                .attr('r', this.radiusScale(10000000))
                .attr('class', "nytg-scaleKeyCircle")
                .attr('cx', 30)
                .attr('cy', 50);

            d3.select("#nytg-scaleKey").append("circle")
                .attr('r', this.radiusScale(1000000))
                .attr('class', "nytg-scaleKeyCircle")
                .attr('cx', 30)
                .attr('cy', 55);

            var departmentOverlay = $j("#nytg-departmentOverlay")

            for (var i = 0; i < nytg.category_data.length; i++) {
                var cat = nytg.category_data[i]['label']
                var catLabel = nytg.category_data[i]['short_label']
                var catTot = this.bigFormat(nytg.category_data[i]['total'])
                var catWidth = this.categoryPositionLookup[cat].w
                var catYOffset = this.categoryPositionLookup[cat].offsetY;
                var catNode;

                if (catLabel === "Other") {
                    catNode = $j("<div class='nytg-departmentAnnotation nytg-row" + nytg.category_data[i]['row'] + "'><p class='department'>" + catLabel + "</p></div>")
                } else {
                    catNode = $j("<div class='nytg-departmentAnnotation nytg-row" + nytg.category_data[i]['row'] + "'><p class='total'>$" + catTot + "</p><p class='department'>" + catLabel + "</p></div>")
                }

                catNode.css({
                    'left': this.categoryPositionLookup[cat].x - catWidth / 2,
                    'top': this.categoryPositionLookup[cat].y - catYOffset,
                    'width': catWidth
                })

                departmentOverlay.append(catNode)
            };

            // This is the every circle
            this.circle = this.svg.selectAll("circle")
                .data(this.nodes, function(d) {
                    return d.sid;
                });

            this.circle = this.circle.enter().append("svg:circle")
                .attr("r", function(d) {
                    return 0;
                })
                .style("fill", function(d) {
                    return that.getFillColor(d);
                })
                .style("stroke-width", 1)
                .attr('id', function(d) {
                    return 'nytg-circle' + d.sid
                })
                .style("stroke", function(d) {
                    return that.getStrokeColor(d);
                })
                .on("mouseover", function(d, i) {
                    var el = d3.select(this)
                    var xpos = Number(el.attr('cx'))
                    var ypos = (el.attr('cy') - d.radius - 10)
                    el.style("stroke", "#000").style("stroke-width", 3);
                    d3.select("#nytg-tooltip").style('top', ypos + "px").style('left', xpos + "px").style('display', 'block')
                        .classed('nytg-plus', (d.changeCategory > 0))
                        .classed('nytg-minus', (d.changeCategory < 0));
                    d3.select("#nytg-tooltip .nytg-name").html(that.nameFormat(d.name))

                    d3.select("#nytg-tooltip .nytg-discretion").text(that.discretionFormat(d.discretion))
                    d3.select("#nytg-tooltip .nytg-department").text(d.group)
                    d3.select("#nytg-tooltip .nytg-value").html("$" + that.bigFormat(d.value))

                    var pctchngout = that.pctFormat(d.change)
                    if (d.change == "N.A.") {
                        pctchngout = "N.A."
                    };
                    d3.select("#nytg-tooltip .nytg-change").html(pctchngout)
                })
                .on("mouseout", function(d, i) {
                    d3.select(this)
                        .style("stroke-width", 1)
                        .style("stroke", function(d) {
                            return that.getStrokeColor(d);
                        })
                    d3.select("#nytg-tooltip").style('display', 'none')
                });

            this.circle.transition().duration(2000)
                .attr("r", function(d) {
                    return d.radius;
                });
        },

        start: function() {
            var that = this;

            this.force = d3.forceSimulation()
                .nodes(this.nodes)
                .alpha(0);
        },

        totalLayout: function() {
            var that = this;
            this.force
                .force('forceX', d3.forceX(this.width / 2).strength(-0.0001))
                .force('forceY', d3.forceY(this.height / 2).strength(-0.0001))
                .force('charge', d3.forceManyBody().strength((d) => that.defaultCharge(d)))
                .force('radial', d3.forceRadial(200))
                .force('collision', d3.forceCollide((d) => d.radius).strength(0.009))
                .alphaDecay(0.01)
                .on("tick", function(d) {
                    that.circle
                        .each(that.totalSort(this.alpha()))
                        // .each(that.buoyancy(this.alpha()))
                        .attr("cx", function(d) {
                            return d.x;
                        })
                        .attr("cy", function(d) {
                            return d.y;
                        })
                })
                .alpha(1)
                .restart();
        },

        mandatoryLayout: function() {
            var that = this;
            this.force
                .force('forceX', d3.forceX(this.width / 2).strength(-0.03))
                .force('forceY', d3.forceY(this.height / 2).strength(-0.001))
                // .force('charge', d3.forceManyBody().strength(-0.006))
                .force('charge', d3.forceManyBody().strength((d) => that.defaultCharge(d)))
                .force('radial', d3.forceRadial(200))
                .force('collision', d3.forceCollide().radius((d) => d.radius).strength(1))
                .on("tick", function(e) {
                    that.circle
                        .each(that.mandatorySort(this.alpha()))
                        // .each(that.buoyancy(this.alpha()))
                        .attr("cx", function(d) {
                            return d.x;
                        })
                        .attr("cy", function(d) {
                            return d.y;
                        });
                })
                .alpha(1)
                .restart();
        },

        discretionaryLayout: function() {
            var that = this;
            this.force
                .on("tick", function(e) {
                    that.circle
                        .each(that.discretionarySort(this.alpha()))
                        .attr("cx", function(d) {
                            return d.x;
                        })
                        .attr("cy", function(d) {
                            return d.y;
                        });
                })
                .alpha(0.1)
                .restart();
        },

        departmentLayout: function() {
            var that = this;
            this.force
                .on("tick", function(e) {
                    that.circle
                        .each(that.staticDepartment(this.alpha()))
                        .attr("cx", function(d) {
                            return d.x;
                        })
                        .attr("cy", function(d) {
                            return d.y;
                        });
                })
                .alpha(0.1)
                .restart();
        },

        comparisonLayout: function() {
            var that = this;
            this.force
                .on("tick", function(e) {
                    that.circle
                        .each(that.comparisonSort(this.alpha()))
                        .attr("cx", function(d) {
                            return isNaN(d.x) ? 0 : d.x;
                        })
                        .attr("cy", function(d) {
                            return isNaN(d.y) ? 0 : d.y;
                        });
                })
                .alpha(0.1)
                .restart();
        },

        // ----------------------------------------------------------------------------------------
        // FORCES
        // ----------------------------------------------------------------------------------------

        buoyancy: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = that.centerY - (d.changeCategory / 3) * that.boundingRadius;
                d.y = d.y + (targetY - d.y) * (that.defaultGravity) * alpha * 100;
            };
        },

        totalSort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = that.centerY;
                var targetX = that.width / 2;

                if (d.isNegative) {
                    if (d.changeCategory > 0) {
                        d.x = -200;
                    } else {
                        d.x = 1100;
                    }
                }

                d.y = d.y + (targetY - d.y) * (that.defaultGravity + 0.02) * alpha;
                d.x = d.x + (targetX - d.x) * (that.defaultGravity + 0.02) * alpha;
            };
        },

        mandatorySort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = that.centerY;
                var targetX = 0;

                if (d.isNegative) {
                    if (d.changeCategory > 0) {
                        d.x = -200;
                    } else {
                        d.x = 1100;
                    }
                    return;
                }

                if (d.discretion === that.DISCRETIONARY) {
                    targetX = 550;
                } else if ((d.discretion === that.MANDATORY) || (d.discretion === that.NET_INTEREST)) {
                    targetX = 400;
                } else {
                    targetX = 900;
                };

                d.y = d.y + (targetY - d.y) * (that.defaultGravity) * alpha * 1.1;
                d.x = d.x + (targetX - d.x) * (that.defaultGravity) * alpha * 1.1;
            };
        },

        discretionarySort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = that.height / 2;
                var targetX = 0;

                if (d.isNegative) {
                    if (d.changeCategory > 0) {
                        d.x = -200;
                    } else {
                        d.x = 1100;
                    }
                    return;
                }

                if (d.discretion === "Discretionary") {
                    targetY = that.changeScale(d.change);
                    targetX = 100 + that.groupScale(d.group) * (that.width - 120);
                    if (isNaN(targetY)) {
                        targetY = that.centerY;
                    };
                    if (targetY > (that.height - 80)) {
                        targetY = that.height - 80;
                    };
                    if (targetY < 80) {
                        targetY = 80;
                    };

                } else if ((d.discretion === "Mandatory") || (d.discretion === "Net interest")) {
                    targetX = -300 + Math.random() * 100;
                    targetY = d.y;
                } else {
                    targetX = 0;
                };

                d.y = d.y + (targetY - d.y) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.2;
                d.x = d.x + (targetX - d.x) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.1;
            };
        },

        departmentSort: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = 0,
                    targetX = 0;

                if (that.categoryPositionLookup[d.group]) {
                    targetY = that.categoryPositionLookup[d.group].y;
                    targetX = that.categoryPositionLookup[d.group].x;
                } else {};

                var r = Math.max(5, d.radius);
                d.y = d.y + (targetY - d.y) * (that.defaultGravity) * alpha * 0.5 * r;
                d.x = d.x + (targetX - d.x) * (that.defaultGravity) * alpha * 0.5 * r;
            };
        },

        staticDepartment: function(alpha) {
            var that = this;
            return function(d) {
                var targetY = 0;
                var targetX = 0;

                if (d.positions.department) {
                    targetX = d.positions.department.x;
                    targetY = d.positions.department.y;
                };

                d.y += (targetY - d.y) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.6;
                d.x += (targetX - d.x) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.4;
            };
        }
    }
};