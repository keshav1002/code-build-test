'use strict';
const calc = require("./lib/calc");

module.exports.sampleCalc = (event, context, callback) => {
  const response =  {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: calc.addTwoRandomNumbers()
      },
      null,
      2
    ),
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  };
  callback(null, response);
}
