var elasticsearch = require("elasticsearch"); // Import the Client class from the @elastic/elasticsearch module
var client = new elasticsearch.Client({ node: "http://localhost:9200" }); // Create a new client instance that connects to the local node

async function getFieldMapping() {
  const mapping = await client.indices.getMapping({ index: "temp_index" });
  // console.log(mapping);
  console.log("getFieldMapping inner function");
  const fields_in_node = [];
  for (const field in mapping["temp_index"]["mappings"]["properties"]) {
    fields_in_node.push(field.toString());
    // console.log(field);
  }
  console.log(fields_in_node);
  return fields_in_node;
}

export default getFieldMapping;
