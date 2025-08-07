const axios = require("axios");

exports.handler = async () => {
  try {
    const url = "https://f412-seating-default-rtdb.europe-west1.firebasedatabase.app/layout.json";
    const res = await axios.get(url);
    return { statusCode: 200, body: JSON.stringify(res.data || []) };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};
