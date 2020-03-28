// const svgWidth = 1350
// const svgHeight = 650

// let margin = {
//   top: 20,
//   right: 40,
//   bottom: 80,
//   left: 100
// }

// let width = svgWidth - margin.left - margin.right
// let height = svgHeight - margin.top - margin.bottom

// let svg = d3
//   .select(".map")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight)

// let chartGroup = svg
//   .append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`)


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

        function getWineData(wineData){
            for (i = 0; i < dropDownData.length; i++) {
                if (dropDownData[i] === wineData){
                    return wineData
                }
            }
        }  

      
         
        //Default map data
        setChoroplethMap("WineProduction[HCL]")

        function setChoroplethMap(wineData){
            getWineData(wineData)
            

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
            
            Plotly.newPlot("map", data, layout, {showLink: false});   
        }
        
        let innerContainer = document.querySelector('[data-num="0"'),
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






