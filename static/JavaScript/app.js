// import the data from data.js
const tableData= data;

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