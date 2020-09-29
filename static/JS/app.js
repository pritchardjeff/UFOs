// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build Function 
function buildTable(data) {
    // Clear Table
    tbody.html("");
    // Loop through rows of Data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // find the <tr> tag w/in HTML and add a row (we use let because the variable is just for this block of code) 
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );       
    }); 
}

// Button Function
function handleClick() {
    // finds the #datetime id in HTML
    // grabs the nested value & stores as date variable
    let date = d3.select("#datetime").property("value");
    // sets the filtered data =  to our raw data 
    // start with a blank slate
    let filteredData = tableData;
    // Show only rows where the date is equal to the date filter we created above
    // ==== strict equality (pefect match) == loose equality (loosly matched/fuzzylookup?) 
    if (date)  {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    //Rebuild table using filtered data (if no filter, you get original data)
    buildTable(filteredData);
}
// Attach an event to listen for the form button (in this case a click on the filter)
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the table loads
buildTable(tableData);