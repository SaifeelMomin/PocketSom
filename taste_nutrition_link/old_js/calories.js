(function() {
    d3.csv('../Data/types.csv')
        .then(data => {
            console.log(data)
            console.log(data.forEach(entry => entry.category))            
            const trace = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.calories),
                type: 'bar'
            }          
            const layout = {
                title: 'Average Nutrition Values of Food Pairings With Wines',
                xaxis: {
                    title: 'Types of Wine',
                  },
                  yaxis: {
                    title: 'Grams(g)',
                  }
            }
            Plotly.newPlot('calories', [trace], layout)
        })
        .catch(err => console.log(err))       
})()