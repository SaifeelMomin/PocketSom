(function() {
    d3.csv('../Data/dryness.csv')
        .then(data => {
            console.log(data)
            console.log(data.forEach(entry => entry.category))            
            const trace1 = {
                x: data.map(entry => entry.Dryness),
                y: data.map(entry => entry.total_fat),
                name: "total fat",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace2 = {
                x: data.map(entry => entry.Dryness),
                y: data.map(entry => entry.sugar),
                name: "sugar",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace3 = {
                x: data.map(entry => entry.Dryness),
                y: data.map(entry => entry.sodium),
                name: "sodium",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace4 = {
                x: data.map(entry => entry.Dryness),
                y: data.map(entry => entry.protein),
                name: "protein",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace5 = {
                x: data.map(entry => entry.Dryness),
                y: data.map(entry => entry.saturated_fat),
                name: "saturated_fat",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace6 = {
                x: data.map(entry => entry.Dryness),
                y: data.map(entry => entry.carbohydrates),
                name: "carbohydrates",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }     
            const layout = {
                title: 'Average Nutrition Values of Food Pairings by the Wine Tasting Metric: Dryness',
                xaxis: {
                    title: 'Not Present(0), Very Little(1), Somewhat present(2), Present(3), Pronounced(4), Bold & Intense(5)',
                  },
                  yaxis: {
                    title: '% Daily Value(PDV)',
                  },
                  height: 750
            }
            Plotly.newPlot('dry', [trace1, trace2, trace3, trace4, trace5, trace6], layout)
        })
        .catch(err => console.log(err))       
})()