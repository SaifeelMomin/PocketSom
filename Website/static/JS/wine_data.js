function renderPlot(wine){
    d3.json(`wine_data/${wine}`).then((wine_data) => {
        let data = [{
            values: wine_data.Attribute_Values,
            labels: wine_data.Attribute_Labels,
            text: wine_data.Attribute_Labels,
            textinfo: "text",
            showlegend : false,
            hole: .6,
            type: 'pie'
          }];
          
          let layout = {
            height: 600,
            width: 600

          };
          
          Plotly.newPlot('wine_plot', data, layout, {displayModeBar: false});
    })

}


renderPlot("Syrah")