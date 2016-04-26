var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 120
    },
    "dataProvider": [{
        "date": "0",
        "distance": 227,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408,
        "revenue": {
            "today": 200,
            "yesterday": 300
        }
    }, {
            "date": "1",
            "distance": 371,
            "townName": "Washington",
            "townSize": 14,
            "latitude": 38.89,
            "duration": 482
        }, {
            "date": "2",
            "distance": 433,
            "townName": "Wilmington",
            "townSize": 6,
            "latitude": 34.22,
            "duration": 562
        }, {
            "date": "3",
            "distance": 345,
            "townName": "Jacksonville",
            "townSize": 7,
            "latitude": 30.35,
            "duration": 379
        }, {
            "date": "4",
            "distance": 480,
            "townName": "Miami",
            "townName2": "Miami",
            "townSize": 10,
            "latitude": 25.83,
            "duration": 501
        }, {
            "date": "5",
            "distance": 386,
            "townName": "Tallahassee",
            "townSize": 7,
            "latitude": 30.46,
            "duration": 443
        }, {
            "date": "6"
        }, {
            "date": "7"
        }],
    "valueAxes": [{
        "id": "latitudeAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "position": "left"
    }, {
            "id": "durationAxis",

            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": true,
            "position": "right",
            "title": "duration"
        }],
    "graphs": [{
        "balloonText": "latitude:[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "#FFFFFF",
        "bulletSizeField": "townSize",
        "dashLengthField": "dashLength",
        "descriptionField": "townName",
        "labelPosition": "right",
        "labelText": "[[townName2]]",
        "legendValueText": "[[description]]/[[value]]",
        "title": "latitude/city",
        "fillAlphas": 0,
        "valueField": "latitude",
        "valueAxis": "latitudeAxis"
    }, {
            "bullet": "square",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 1,
            "dashLengthField": "dashLength",
            "legendValueText": "[[value]]",
            "title": "duration",
            "fillAlphas": 0,
            "valueField": "duration",
            "valueAxis": "durationAxis"
        }],
    "chartCursor": {
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.1,
        "cursorColor": "#000000",
        "fullWidth": true,
        "valueBalloonsEnabled": false,
        "zoomable": true
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "categoryAxis": {
        "dateFormats": [{
            "period": "DD",
            "format": "DD"
        }, {
                "period": "WW",
                "format": "MMM DD"
            }, {
                "period": "MM",
                "format": "MMM"
            }, {
                "period": "hh",
                "format": "HH"
            }],
        "parseDates": false,
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0.1,
        "gridColor": "#FFFFFF",
        "gridCount": 50
    },
    "export": {
        "enabled": true
    }
});