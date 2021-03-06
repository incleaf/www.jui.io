var chart = jui.include("chart.builder");

chart("#chart", {
    axis : [{
        data : [
            { quarter : "1Q", twitter : 50, facebook : 70 },
            { quarter : "2Q", twitter : 20, facebook : 40 },
            { quarter : "3Q", twitter : 10, facebook : 30 },
            { quarter : "4Q", twitter : 30, facebook : 40 }
        ],
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 100 ],
            step : 10,
            line : true
        }
    }],
    brush : {
        type : "patterncolumn",
        target : [ "twitter", "facebook" ],
        width : 40,
        height : 45,
        uri : function(k, v) {
            if(k == "twitter")
                return "resource/twitter.png";
            return "resource/facebook.png";
        },
        colors : [ "#4099FF", "#3B5998" ]
    },
    widget : {
        type : "title",
        text : "Pattern Column Sample",
        align : "start"
    }
});
