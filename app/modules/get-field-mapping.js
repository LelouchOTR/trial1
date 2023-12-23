var elasticsearch = require("elasticsearch"); // Import the Client class from the @elastic/elasticsearch module
var client = new elasticsearch.Client({ node: "http://localhost:9200" }); // Create a new client instance that connects to the local node

const fields_in_node = []; // Array to store the fields present in the elasticsearch node

async function getFieldMapping() {
  // Function to get the fields present in the elasticsearch node
  const mapping = await client.indices.getMapping({ index: "temp_index" }); // Get the mapping of the index
  console.log("getFieldMapping inner function");

  for (const field in mapping["temp_index"]["mappings"]["properties"]) {
    // Iterate over the fields in the mapping
    fields_in_node.push(field.toString()); // Push the field to the array
  }
  return fields_in_node;
}

getFieldMapping(); // Call the function to get the fields present in the elasticsearch node

export default fields_in_node; // Export the array
