;(function () {
    Plotly.d3.csv("/world_wine_data.csv", function(err, rows){
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }
        
        let dropDownData = ["Wine Production", "Largest Vineyards", "Exports", "Imports", "Consumption"]
        

      
         
        //Default map data
        setChoroplethMap("Wine Production")

        function setChoroplethMap(wineData){
            
            const unitObj = {
                "Wine Production": "Wine Production<br>[MhL]", 
                "Largest Vineyards": "Surface Area in<br>Thousand Hectares<br>[kha]", 
                "Exports": "Exports in Billions [$]", 
                "Imports": "Imports in Billions [$]", 
                "Consumption" : "Million Hectoliters<br>[MhL]"
            }
            

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
                    title: unitObj[wineData],
                    y: .65,
                    len: .65
                },

            }]

            const titleObj = {
                "Wine Production": "Total Wine Production", 
                "Largest Vineyards": "World's Largest Vineyards", 
                "Exports": "Total Amount in Exports per Country", 
                "Imports": "Total Amount in Imports per Country", 
                "Consumption" : "Wine Consumption per Country"
            }
            
            var layout = {
                title: {
                    text: titleObj[wineData], 
                    font: {
                        family: "Arial",
                        size: 32
                    }
                },
                autosize: true,
                dragmode: false,
                geo:{
                    showframe: false,
                    showcoastlines: false,
                    projection:{
                        type: 'mercator'
                    }
                }
            }
            
            Plotly.newPlot("map", data, layout, {showLink: false});   
        }
        
        let innerContainer = document.querySelector(".control-row"),
        plotEl = innerContainer.querySelector('.plot'),
        wineSelector = innerContainer.querySelector('.datasets');

        function assignOptions(textArray, selector) {
        for (i = 0; i < textArray.length;  i++) {
        let currentOption = document.createElement('option');
        currentOption.text = textArray[i];
        selector.appendChild(currentOption);
            }
        }

        assignOptions(dropDownData, wineSelector);

        function updateWine(){
            setChoroplethMap(wineSelector.value);
        }

        wineSelector.addEventListener('change', updateWine, false);
    })
})()






