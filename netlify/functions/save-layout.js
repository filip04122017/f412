const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Only POST allowed" };
  }
  try {
    const data = JSON.parse(event.body);
    const filePath = path.join(__dirname, '..', '..', 'layout-data.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return { statusCode: 200, body: JSON.stringify({ message: "Saved!" }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
 
