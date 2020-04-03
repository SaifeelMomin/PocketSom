;(function () {
    Plotly.d3.csv("/world_wine_data.csv", function(err, rows){
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }
        
        // console.log(unpack(rows, 'CODES'))
        // console.log(unpack(rows, 'WineProduction[HCL]'))
        // console.log(unpack(rows, 'Country'))

        let dropDownData = ["WineProduction[HCL]", "Largest Vineyards", "Exports", "Imports", "Consumption (Thousands)"]
        let title = ["Total Wine Production",
                        "World's Largest Vineyards",
                        "Total Amount in Exports per Country",
                        "Total Amount in Imports per Country",
                        "Wine Consumption per Country"]

         

      
         
        //Default map data
        setChoroplethMap("WineProduction[HCL]")

        function setChoroplethMap(wineData){
            // getWineData(wineData)
            

            let data = [{
                type: 'choropleth',
                locations: unpack(rows, 'CODES'),
                z: unpack(rows, wineData), //chage on click of Z
                text: unpack(rows, 'Country'),
                colorscale: [
                    [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
                    [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
                    [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']
                ],
                autocolorscale: false,
                reversescale: true,
                marker: {
                    line: {
                        color: 'rgb(180,180,180)',
                        width: 0.5
                    }
                },
                tick0: 0,
                zmin: 0,
                dtick: 1000,
                colorbar: {
                    autotic: false,
                    title: 'Wine<br>Production<br>(HCL)'
                }
            }]

            
            var layout = {
                title: "Total World Production",
                width: 1200, 
                height: 650,
                dragmode: false,
                geo:{
                    showframe: false,
                    showcoastlines: false,
                    projection:{
                        type: 'mercator'
                    }
                }
            }
            
            Plotly.newPlot("map", data, {
                updatemenus: [{
                    y: .6,
                    yanchor: 'top',
                    buttons: [{
                        method: 'restyle',
                        args: ['line.color', 'red'],
                        label: 'red'
                    }, {
                        method: 'restyle',
                        args: ['line.color', 'blue'],
                        label: 'blue'
                    }, {
                        method: 'restyle',
                        args: ['line.color', 'green'],
                        label: 'green'
                    }, {
                        method: 'restyle',
                        args: ['line.color', 'green'],
                        label: 'green'
                    }, {
                        method: 'restyle',
                        args: ['line.color', 'green'],
                        label: 'green'
                    }]
                }]}, layout );   
        }
        
      

        
    })
})()
