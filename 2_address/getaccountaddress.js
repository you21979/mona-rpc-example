var fs = require('fs');
var CONFIG_FILE = "../config/wallet.json";
var bitcoin = require('bitcoin');
var client = new bitcoin.Client(JSON.parse(fs.readFileSync(CONFIG_FILE)));

var accounts = [
  "you21979",
  "nakamoto",
  "aaaa123",
  "satoshi"
];

accounts.forEach(function(v){
  client.getAccountAddress(v, function(err, address) {
    client.getAccount(address, function(err, account) {
      console.log("%s %s", account, address);
    });
  });
});
