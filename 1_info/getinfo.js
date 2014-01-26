var bitcoin = require('bitcoin');
var fs = require('fs');
var CONFIG_FILE = "./config/wallet.json";
var client = new bitcoin.Client(JSON.parse(fs.readFileSync(CONFIG_FILE)));
client.getInfo(function(err, info) {
  console.log(info);
});
