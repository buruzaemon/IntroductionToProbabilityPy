require.undef('quincunx');

define('quincunx', ['d3'], function (d3) {
    /*
     * Creates HTML form controls for manipulating the visualization,
     * sets up the initial visualization state, and then kicks off
     * the animation.
     *
     * This module was built with D3.js, v5.7.0.
     */
    function draw(outputarea) {

        var def_bins = 7,
            def_speed = 500,
            def_p = 0.50;

        $(outputarea)
            .append('<table>')
            .append('<tr>')
            .append('<th colspan=3><label> delay (ms)</label></th>')
            .append('<td colspan=1><input id="qxspeed" class="qxcontrol" type="number" name="speed" min="0" max="1000" step="50" value="'+def_speed+'"></td>')
            .append('</tr>')
            .append('<tr>')
            .append('<th colspan=3><label> num. bins </label></th>')
            .append('<td colspan=1><input id="qxbins" class="qxcontrol" type="number" name="bins" min="1" max="25" value="'+def_bins+'"></td>')
            .append('</tr>')
            .append('<tr>')
            .append('<th colspan=1><label> p = <span id="qxpval">'+def_p+'</span> </label></th>')
            .append('<td colspan=3><input id="qxp" class="qxcontrol" type="range" min="0" max="100" value="50" class="slider"></td>')
            .append('</tr>')
            .append('</table>')
            .append('<div id="quincunx"/>');

        /*
         * Calculate level in pyramid of triangles
         * for given triangle (path) element index 
         * (zero-index)
         */
        function lvl(d) {
            d = d + 1;
            var i = 0, n = 1;
            while (i + n < d) {
                i += n;
                n++;
            }
            return n - 1;
        }
        
        /*
         * Calculate index for first triangle (path)
         * in pyramid of triangles, given the level 
         * (zero-index)
         */
        function pos(l) {
            l = l + 1;
            var n = 0, i = 0;
            while (n < l) {
                i += n;
                n++;
            }
            return i;
        }
        
        var speed = def_speed,
            step,
            histogram_height = 100;
          
        function init(bins, p, width) {
            var p = p ? p : def_pp / 100.0;
            var margin = { left : width/10, right : width/10, top : 10 , bottom : 30 },
                height = 450,
                sx = (width - margin.left - margin.right) / bins,
                sy = (height - histogram_height - margin.bottom -  100 ) / bins,
                histogram_y = height - histogram_height - margin.bottom,
                values = [],
                ts = sy/3,
                bs = sy/2,
                dropping = true;
        
            var container = d3.select('#quincunx');
            container.selectAll('svg').remove();
            var svg = container.append('svg')
                .attr('height', height + 'px')
                .attr('width', width + 'px');
            var g = svg.append('g')
                .attr('transform', 'translate(' + (width / 2) + ',20)');
        
            var path = g.selectAll('path');
            path.data(d3.range(0, pos(bins + 1)))
                .enter()
              .append('g')
                // position the triangles
                .attr('transform', function(d){
                        var x = 0;
                        var y = 0;
                        var l = 0;
                        y = lvl(d);
                        x = d - pos(y) + 1;
                        l = (y + 2) * sx / 2;
                        return 'translate(' + (sx * x - l) + ', ' +  (sy *  y ) + ')';
                })
                // draw the triangles
                .append('path')
                  .attr('class', 'triangle')
                  .attr('d', 'M -' + (ts) + ' ' + (ts) + ' L ' + (ts) + ' ' + (ts) + ' L 0 -' + (ts/2) +' Z');
        
            step = function(){
                // drop a ball
                g.append('circle')
                 .datum({lvl: -1, pos: 0})
                 .attr('class', 'ball')
                 .attr('r', (bs) + 'px')
                 .attr('cx', function(d){ return (d.pos * sx / 2) + 'px' })
                 .attr('cy', function(d){ return (d.lvl * sy - 50) + 'px' })
                 .style('display', 'none')
                 .transition()
                 .style('display','block')
                 .on('end', animate)
            }
        
            function animate() {
                var c = d3.select(this);
                var d = c.datum();
                if (d.lvl > bins - 2) {
                    // drop the ball into its histogram bin
                    c.transition()
                     .duration(speed / 2)
                     .attr('cy', function(d){ return (d.lvl * sy + 20 + histogram_height) + 'px'})
                     .style('opacity', '0.0')
                     .remove(); // remove the balls once they're invisible
                    values.push( bins / 2 + d.pos / 2);
                    update();
                    return;
                }
                if (d.lvl === -1) d.pos = 0; // when the ball drops into the first position
                else (Math.random() > p) ? d.pos-- : d.pos++;
                d.lvl++;
                c.datum(d);
                c.transition()
                 .ease(d3.easeBounce)
                 .attr('cx', function(d){ return (d.pos * sx / 2) + 'px' })
                 .attr('cy', function(d){ return (d.lvl * sy + sy) + 'px' })
                 .on('end', animate)
                 .duration(speed);
            }
        
            var x = d3.scaleLinear()
                .domain([0, bins])
                .range([0, width - margin.left - margin.right]);
            var formatCount = d3.format(",.0f");
            var data = d3.histogram().domain(x.domain()).thresholds(bins)(values);
            var histogram = d3.select('#quincunx').select('svg')
                .append('g')
                .attr('transform','translate(' + margin.left + ',' + histogram_y + ')');

            var xAxis = d3.axisBottom(x).ticks(bins);
        
            var bars = histogram.selectAll('.bar')
                .data(data)
                .enter().append('g')
                .attr('class', 'bar');
        
            bars.append('rect')
                .attr('x', 1)
                .attr('width', x(data[0].x1-data[0].x0) - 1);
        
            bars.append('text')
                .attr('dy', '.5em')
                .attr('y', 10)
                .attr('x', x(data[0].x1-data[0].x0) / 2)
                .attr('text-anchor', 'middle');
        
            histogram.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + (histogram_height) + ')')
                .call(xAxis);
        
            function update() {
                data = d3.histogram().domain(x.domain()).thresholds(bins)(values);
                var bars = histogram.selectAll('.bar');
                var y = d3.scaleLinear()
                    .domain([0, d3.max(data.map(function(d){ return d.length }))])
                    .range([histogram_height, 0]);
                bars.data(data)
                   .transition()
                   .duration(speed)
                   .attr('transform', function(d){ return 'translate(' + x(d.x0) + ',' + y(d.length) + ')' })
                   .select('rect')
                   .attr('height', function(d){ return (histogram_height - y(d.length)) });
                bars.select('text')
                   .text(function(d){ return Math.floor(d.length / values.length * 100) + '%' });
            }
            update()
        };
          
        (function interval(){
             if (step) step();
             setTimeout(interval, speed);
        })();
          
          
        // setup event-handlers for controls
        document.getElementById('qxspeed').onchange = function(e){
            speed = e.target.value;
        }
        document.getElementById('qxbins').onchange = restart;
        document.getElementById('qxp').oninput = function() {
            var newp = (Number(document.getElementById('qxp').value) / 100.0).toFixed(2);
            document.getElementById('qxpval').innerHTML = newp;
            restart(newp);
        }

        function restart(e) {
            var b = def_bins;
            var p = def_p;
            var w = Number(document.getElementById('quincunx').offsetWidth);
            console.log(w);
            if (e) {
                b = Number(document.getElementById('qxbins').value);
                p = (Number(document.getElementById('qxp').value) / 100.0 ).toFixed(2);
            };
            init(b, p, w);
        }
        
        restart();
    }
    return draw;
});
