var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const now = new Date().toLocaleString(); // Get current date and time (localized)
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>API Status</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f8;
          text-align: center;
          margin-top: 100px;
        }
        .container {
          background-color: #fff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          display: inline-block;
        }
        h1 {
          color: #4CAF50;
        }
        p {
          font-size: 1.2em;
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>✅ API is working properly</h1>
        <p>📅 Current Date and Time:</p>
        <p><strong>${now}</strong></p>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

module.exports = router;

