(function() {
    d3.csv('../Data/tasting_calories.csv')
        .then(data => {
            console.log(data)
            console.log(data.forEach(entry => entry.category))            
            const trace1 = {
                x: data.map(entry => entry.BAKING_SPICE),
                y: data.map(entry => entry.calories),
                name: "baking spice",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace2 = {
                x: data.map(entry => entry.LEATHER),
                y: data.map(entry => entry.calories),
                name: "leather",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace3 = {
                x: data.map(entry => entry.Astringent),
                y: data.map(entry => entry.calories),
                name: "astringent",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }          
            const trace4 = {
                x: data.map(entry => entry.Ph),
                y: data.map(entry => entry.calories),
                name: "ph",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace5 = {
                x: data.map(entry => entry.ABV),
                y: data.map(entry => entry.calories),
                name: "alcohol by volume(abv)",
                mode: 'markers',
                marker: {
                    size: 12
                  },
                type: 'scatter'
            }
            const trace6 = {
                x: data.map(entry => entry.Dryness),
                y: data.map(entry => entry.calories),
                name: "dryness",
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
            Plotly.newPlot('taste2', [trace1, trace2, trace3, trace4, trace5, trace6], layout)
        })
        .catch(err => console.log(err))       
})()