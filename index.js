const dotenv = require("dotenv")
dotenv.config()

const express = require("express")

const server = 

require('./api/server.js');

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`\n*** Server Running on ${port} ***\n`);
});
