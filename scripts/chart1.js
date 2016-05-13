$(function () {
    var date = new Date(),year = date.getFullYear(),month = date.getMonth(),day = date.getDate();
    var aDate = year+'-'+month+'-'+day;
    $('#chart1').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '体重和体脂率跟踪表'
        },
        subtitle: {
            text: '当前日期：'+aDate
        },
        xAxis: [{
            categories: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}kg',
                style: {
                    color: Highcharts.getOptions().colors[1],
                }
            },
            title: {
                text: '体重',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '体脂率',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}%',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: '体脂率',
            type: 'column',
            yAxis: 1,
            data: [20.4, 24.3, 23.6, 25.8, 21.6, 20.9, 21.1, 23.5, 21.5, 23, 23.4, 20.5],
            tooltip: {
                valueSuffix: '%'
            }

        }, {
            name: '体重',
            type: 'spline',
            data: [50.4, 60.4, 56.7, 64.7, 62.4, 67.3, 63.4, 65.2, 68.3, 68.3, 65.4, 69.3],
            tooltip: {
                valueSuffix: 'kg'
            }
        }]
    });
});