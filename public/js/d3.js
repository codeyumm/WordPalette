console.log("hhh");
// Sample data (replace this with your own data)
const wordFrequencies = [
    { word: "hello", frequency: 10 },
    { word: "world", frequency: 8 },
    { word: "example", frequency: 6 },
    { word: "d3", frequency: 4 },
    { word: "js", frequency: 3 }
];

// Set up dimensions for the word cloud
const width = 800;
const height = 400;

// Create an SVG element
const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Define the scale for font sizes
const fontSizeScale = d3.scaleLinear()
    .domain([0, d3.max(wordFrequencies, d => d.frequency)])
    .range([10, 50]); // Adjust the range for desired font sizes

// Create the word cloud
svg.selectAll("text")
    .data(wordFrequencies)
    .enter().append("text")
    .style("font-size", d => fontSizeScale(d.frequency) + "px")
    .style("fill", "steelblue") // Adjust the color as needed
    .attr("text-anchor", "middle")
    .attr("transform", d => "translate(" + [Math.random() * width, Math.random() * height] + ")rotate(" + Math.random() * 360 + ")")
    .text(d => d.word);
