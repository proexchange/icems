require("dotenv").config();
const ICEMS = require("../dist/icems");

var client = new ICEMS(process.env.username, process.env.password, process.env.source);

client.sendSMS("15593747820", "this is a test")
  .then(response => console.log(response))
  .catch(err => console.log(err));
