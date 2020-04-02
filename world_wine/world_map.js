;(function () {
    Plotly.d3.csv("../world_wine/world_wine_data.csv", function(err, rows){
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

            const tickmodeObj ={
                "Wine Production": "auto", 
                "Largest Vineyards": "auto", 
                "Exports": "linear", 
                "Imports": "array", 
                "Consumption" : "auto"
            }

            const tickvalsObj ={
                "Wine Production": 0, 
                "Largest Vineyards": 0, 
                "Exports": [0, 10, 100, 1000], 
                "Imports": [0, 10, 100, 1000], 
                "Consumption" : 0
            }

            let data = [{
                type: 'choropleth',
                locations: unpack(rows, 'CODES'),
                z: unpack(rows, wineData), //chage on click of Z
                text: unpack(rows, 'Country'),
                colorscale: [
                    [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
                    [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
                    [0.99,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']
                ],
                autocolorscale: false,
                reversescale: true,
                marker: {
                    line: {
                        color: 'rgb(180,180,180)',
                        width: 0.5
                    }
                },
                
                colorbar: {
                    autotic: false,
                    title: unitObj[wineData],
                    y: .65,
                    len: .65,
                    tickmode: tickmodeObj[wineData],
                    tickvals: tickvalsObj[wineData]
                }
            }]


            const titleObj = {
                "Wine Production": "Total Wine Production", 
                "Largest Vineyards": "World's Largest Vineyards", 
                "Exports": "Total Dollar Amount in Exports per Country", 
                "Imports": "Total Dollar Amount in Imports per Country", 
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






