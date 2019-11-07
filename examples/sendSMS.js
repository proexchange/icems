require("dotenv").config();
const ICEMS = require("../dist/icems");

var client = new ICEMS(process.env.username, process.env.password, process.env.source);

client.sendSMS(process.argv[2], process.argv[3])
  .then(response => console.log(response))
  .catch(err => console.log(err));
