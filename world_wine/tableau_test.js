function initViz() {
    url = "https://public.tableau.com/shared/DD6R59Y27?%3Aembed=y&amp%3B%3AshowVizHome=no&amp%3B%3Adisplay_static_image=y&amp%3B%3AbootstrapWhenNotified=true#3",
    options = {
        hideToolbar: true,
        width: "100%",
        height: "200px",
    };
    viz = new tableau.Viz(choropleths, url, options);
  }