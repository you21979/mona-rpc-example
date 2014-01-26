var fs = require('fs');
var CONFIG_FILE = "../config/wallet.json";
var bitcoin = require('bitcoin');
var client = new bitcoin.Client(JSON.parse(fs.readFileSync(CONFIG_FILE)));

var SendMona = {
  address : "MNMAEMEiDqupwG7chfXxxGX9tWt8Y44PJx",
  amount : 0.001,
};

client.sendToAddress(SendMona.address, SendMona.amount, function(err, txid) {
  if(err){
    console.log(err);
    return;
  }
  console.log("txid:"+txid);
});
