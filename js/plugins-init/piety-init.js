
(function($) {
    "use strict"


/****************
Piety chart
*****************/

    $(".bar-line").peity("bar", {
        width: "100",
        height: "100"
    });

    
    $("span.pie").peity("pie", {
        fill: ['rgb(0, 0, 128)', 'rgba(0, 0, 128, .3)'], 
        width: "100",
        height: "100"
    });    
    
    
    $("span.donut").peity("donut", {
        width: "100",
        height: "100"
    });
    
    
    
    $(".peity-line").peity("line", {
        fill: ["rgba(0, 0, 128, .5)"], 
        stroke: 'rgb(0, 0, 128)', 
        width: "100%",
        height: "100"
    });
    
    $(".peity-line-2").peity("line", {
        fill: "#ff3232", 
        stroke: "#ff7171", 
        width: "100%",
		strokeWidth: "3",
        height: "150"
    });
	
	$(".peity-line-3").peity("line", {
        fill: "#673bb7", 
        stroke: "#ab84f3", 
        width: "100%",
		strokeWidth: "3",
        height: "150"
    });
    
    $(".bar").peity("bar", {
        fill: ["rgb(0, 0, 128)", "rgb(117, 180, 50)", "rgb(7, 135, 234)"],  
        width: "100%",
        height: "100"
    });
    
	$(".bar1").peity("bar", {
        fill: ["rgb(179, 143, 251)", "rgb(76, 37, 148)", "rgb(179, 143, 251)"],  
        width: "100%",
        height: "140"
    });
    
    $(".bar-colours-1").peity("bar", {
        fill: ["#00abc5", "rgb(0, 0, 128)", "#75B432"],
        width: "100",
        height: "100"
    });
    
    
    
    $(".bar-colours-2").peity("bar", {
        fill: function(t, e, i) {
            return "rgb(0, " + parseInt(e / i.length * 255) + ", 197)"
        },
        width: "100",
        height: "100"
    });
	
    $(".bar-colours-3").peity("bar", {
		fill: function(t, e, i) {
			return "rgb(16, " + parseInt(e / i.length * 202) + ", 147)"
		},
		width: "100",
		height: "100"
	});
    
    
    
    $(".pie-colours-1").peity("pie", {
        fill: ["cyan", "magenta", "yellow", "black"],
        width: "100",
        height: "100"
    });
    
    
    
    $(".pie-colours-2").peity("pie", {
        fill: ["#36b9d8", "#28D6C3", "#4400eb", "#44ecf5", "#4bffa2"],
        width: "100",
        height: "100"
    });
    
	
    
    
    $(".data-attr").peity("donut");



    var t = $(".updating-chart").peity("line", {
        fill: ['rgba(0, 171, 197, .5)'],
        stroke: 'rgb(0, 171, 197)', 
        width: "100%",
        height: 100
    });
    setInterval(function() {
        var e = Math.round(10 * Math.random()),
            i = t.text().split(",");
        i.shift(), i.push(e), t.text(i.join(",")).change()
    }, 1e3)

    

})(jQuery);