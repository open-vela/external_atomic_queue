'use strict';

Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Ubuntu&display=swap',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: ['#F1C40F', '#F39C12', '#C0392B', '#E74C3C', '#9B59B6', '#58D68D', '#5DADE2', '#2E86C1', '#21618C'],
    chart: {
        backgroundColor: 'black',
        style: { fontFamily: 'Ubuntu, sans-serif' }
    },
    title: {
        style: {
            color: 'white',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: 'white',
        }
    },
    xAxis: {
        gridLineColor: '#808080',
        labels: {
            style: {
                color: '#E0E0E0'
            }
        },
        lineColor: '#707070',
        minorGridLineColor: '#505050',
        tickColor: '#707070',
        title: {
            style: {
                color: '#808080'
            }
        }
    },
    yAxis: {
        gridLineColor: '#808080',
        labels: {
            style: {
                color: '#E0E0E0'
            }
        },
        lineColor: '#707070',
        minorGridLineColor: '#505050',
        tickColor: '#707070',
        tickWidth: 1,
        title: {
            style: {
                color: '#808080'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B0'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505050'
        },
        column: {
            borderWidth: 0
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606060'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707070'
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },
    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505050'
            }
        }
    },
    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505050',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707070',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505050',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505050'
        }
    },
    scrollbar: {
        barBackgroundColor: '#808080',
        barBorderColor: '#808080',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606060',
        buttonBorderColor: '#606060',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },
    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505050',
    dataLabelsColor: '#B0B0B0',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F0',
    maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);