// JavaScript source code
//These are the global chart styles for all future Plotly Charts. This should be either in a global folder or in some location that is easy to draw from. 

const faulknerChartStyles = {
    colorway: ["#132C53", "#F27A18", "#ae0700", "#79b473", "#38726c", "#76bed0", "#6b2d5c", "#448b2d", "#e6d812"],
    colorway_bw: ["#FFFFFF", "#bfbfbf", "#808080", "#404040", "#000000"],

    captionStyle: "font-family: 'Playfair Display','Helvetica Neue',Helvetica,Arial,sans-serif; font-weight: normal; font-size:110%;",

};


//The following defines the base layout for all plotly charts. Plotly requires that a layout object is created and then instantiated in a plot in order for the template to be applied.

const faulknerBaseLayout = {
    title: {
        text:
            "Faulkner Chart"
    },

    xaxis: { title: "X-Axis" },
    yaxis: { title: "Y-Axis" },
    showlegend: true,
    paperBackground: "rgba(255,255,255,0)",
    plotBackground: "rgba(255,255,255,0.4)",
    margin: { l: 75, r: 50, b: 100, t: 50, pad: 4 },
    font: {
        family: "Georgia, 'Times New Roman', Times, serif",
        size: 14,
        color: '#363636'
    }

}

var faulknerLayoutTemplate = { data: {}, layout: faulknerBaseLayout };
