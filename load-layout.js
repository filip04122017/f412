const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const filePath = path.join(__dirname, '..', '..', 'layout-data.json');
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return {
      statusCode: 200,
      body: content,
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    return { statusCode: 404, body: JSON.stringify({ error: "File not found" }) };
  }
};
