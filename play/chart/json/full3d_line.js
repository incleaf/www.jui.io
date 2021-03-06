var chart = jui.include("chart.builder");

chart("#chart", {
    padding: 100,
    axis : {
        x : {
            type : "block",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            line : true,
            orient : "bottom"
        },
        y : {
            type : "range",
            domain : "total",
            step : 5,
            line : true,
            orient : "left"
        },
        z : {
            type : "block",
            domain : [ "sales", "profit", "total" ],
            line: true
        },
        data : [
            { sales: 0, profit: 15, total: 18, value: 80 },
            { sales: 15, profit: 6, total: 18, value: 50 },
            { sales: 8, profit: 10, total: 18, value: 60 },
            { sales: 18, profit: 5, total: 18, value: 15 }
        ],
        depth: 150,
        degree: {
            x: 30,
            y: 45,
            z: 0
        },
        perspective: 0.8
    },
    brush : {
        type: "polygon.line3d",
        target : [ "sales", "profit", "total" ],
        padding : 15
    },
    widget : [{
        type : "polygon.rotate3d"
    }, {
        type : "tooltip"
    }],
    style : {
        gridXAxisBorderWidth: 1,
        gridYAxisBorderWidth: 1,
        gridZAxisBorderWidth: 1
    }
});