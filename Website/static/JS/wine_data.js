function renderPlot(wine){
    d3.json(`wine_data/${wine}`).then((wine_data) => {
        let data = [{
          type: "scatterpolar",
          r: wine_data.Attribute_Values,
          theta: wine_data.Attribute_Labels,
          line: {
             color: "#000000",
             width: 3
          },
          mode: "markers",
          fill: "toself",
          fillcolor: "#DB3256",
          hoverinfo: "r"
          }];
          
          let layout = {
            polar: {
              radialaxis: {
                visible: true,
              }
            },
            showlegend: false,
            height: 600,
            width: 600

          };
          Plotly.newPlot('wine_plot', data, layout, {displayModeBar: false});
    })

}


renderPlot("Malbec")
