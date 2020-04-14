(function() {
    d3.csv('../Data/tasting_calories.csv')
        .then(data => {
            console.log(data)
            console.log(data.forEach(entry => entry.category))            
            const trace1 = {
                x: data.map(entry => entry.BODY),
                y: data.map(entry => entry.calories),
                name: "body",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace2 = {
                x: data.map(entry => entry.RED_FRUIT),
                y: data.map(entry => entry.calories),
                name: "red fruit",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace3 = {
                x: data.map(entry => entry.CITRUS_FRUIT),
                y: data.map(entry => entry.calories),
                name: "citrus fruit",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace4 = {
                x: data.map(entry => entry.STONE_FRUIT),
                y: data.map(entry => entry.calories),
                name: "stone fruit",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace5 = {
                x: data.map(entry => entry.BLACK_FRUIT),
                y: data.map(entry => entry.calories),
                name: "black fruit",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace6 = {
                x: data.map(entry => entry.FLORAL),
                y: data.map(entry => entry.calories),
                name: "floral",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace7 = {
                x: data.map(entry => entry.Minerality),
                y: data.map(entry => entry.calories),
                name: "minerality",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace8 = {
                x: data.map(entry => entry.HERBACIOUS),
                y: data.map(entry => entry.calories),
                name: "herbacious",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace9 = {
                x: data.map(entry => entry.PEPPER),
                y: data.map(entry => entry.calories),
                name: "pepper",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace10 = {
                x: data.map(entry => entry.EARTH),
                y: data.map(entry => entry.calories),
                name: "earth",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }     
            const layout = {
                title: 'Average Calories of Food Pairings by Wine Tasting Metrics',
                xaxis: {
                    title: 'Not Present(0), Very Little(1), Somewhat present(2), Present(3), Pronounced(4), Bold & Intense(5)',
                  },
                  yaxis: {
                    title: 'Grams(g)',
                  },
                  height: 750
            }
            Plotly.newPlot('taste', [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10], layout)
        })
        .catch(err => console.log(err))       
})()