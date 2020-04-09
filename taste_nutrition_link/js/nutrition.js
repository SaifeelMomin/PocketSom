(function() {
    d3.csv('../Data/types.csv')
        .then(data => {
            console.log(data)
            console.log(data.forEach(entry => entry.category))            
            const trace1 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.total_fat),
                name: "total fat",
                type: 'bar'
            }
            const trace2 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.sugar),
                name: "sugar",
                type: 'bar'
            }
            const trace3 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.sodium),
                name: "sodium",
                type: 'bar'
            }
            const trace4 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.protein),
                name: "protein",
                type: 'bar'
            }
            const trace5 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.saturated_fat),
                name: "saturated_fat",
                type: 'bar'
            }
            const trace6 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.carbohydrates),
                name: "carbohydrates",
                type: 'bar'
            }           
            const layout = {
                title: 'Average Nutrition Values of Food Pairings With Wines',
                barmode: 'group',
                xaxis: {
                    title: 'Types of Wine',
                  },
                  yaxis: {
                    title: '% Daily Value(PDV)',
                  }
            }
            Plotly.newPlot('nutrition', [trace1, trace2, trace3, trace4, trace5, trace6], layout)
        })
        .catch(err => console.log(err))       
})()