const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_india2019High;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(0).brighten(1),  
  min: chart.colors.getIndex(1).brighten(0.3),
  // logarithmic: true
 // "min": am4core.color("#ffd7b1"), 
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state
polygonSeries.data = [
  {
    id: "IN-JK",
    value: 10
  },
  {
    id: "IN-MH",
    value: 12
  },
  {
    id: "IN-UP",
    value: 10
  },
  {
    id: "US-AR",
    value: 13
  },
  {
    id: "IN-RJ",
    value: 30
  },
  {
    id: "IN-AP",
    value: 40
  },
  {
    id: "IN-MP",
    value: 90
  },
  {
    id: "IN-TN",
    value: 40
  },
  {
    id: "IN-JH",
    value: 3
  },
  {
    id: "IN-WB",
    value: 0
  },
  {
    id: "IN-GJ",
    value: 0
  },
  {
    id: "IN-BR",
    value: 0
  },
  {
    id: "IN-TG",
    value: 0
  },
  {
    id: "IN-GA",
    value: 0
  },
  {
    id: "IN-DN",
    value: 0
  },
  {
    id: "IN-DL",
    value: 0
  },
  {
    id: "IN-DD",
    value: 0
  },
  {
    id: "IN-CH",
    value: 0
  },
  {
    id: "IN-CT",
    value: 0
  },
  {
    id: "IN-AS",
    value: 0
  },
  {
    id: "IN-AR",
    value: 0
  },
  {
    id: "IN-AN",
    value: 0
  },
  {
    id: "IN-KA",
    value: 0
  },
  {
    id: "IN-KL",
    value: 0
  },
  {
    id: "IN-OR",
    value: 0
  },
  {
    id: "IN-SK",
    value: 0
  },
  {
    id: "IN-HP",
    value:15
  },
  {
    id: "IN-PB",
    value: 14
  },
  {
    id: "IN-HR",
    value: 13
  },
  {
    id: "IN-UT",
    value: 12
  },
  {
    id: "IN-LK",
    value: 12
  },
  {
    id: "IN-MN",
    value: 5
  },
  {
    id: "IN-TR",
    value: 4
  },
  {
    id: "IN-MZ",
    value: 3
  },
  {
    id: "IN-NL",
    value: 2
  },
  {
    id: "IN-ML",
    value: 1
  }
];

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#ff7d01");



