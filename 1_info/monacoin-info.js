var bitcoin = require('bitcoin');
var fs = require('fs');
var CONFIG_FILE = "../config/wallet.json";
var munin_agent = require('./munin-helper');

var client = new bitcoin.Client(JSON.parse(fs.readFileSync(CONFIG_FILE)));
munin_agent({
    graph_title: 'monacoin',
    graph_args: '',
    graph_vlabe: '',
    graph_categor: '',
    graph_info: '',
},
{
    difficulty : {
        label:'',
        draw:'',
        info:'',
    },
    balance : {
        label:'',
        draw:'',
        info:'',
    },
    connections : {
        label:'',
        draw:'',
        info:'',
    },
    blocks : {
        label:'',
        draw:'',
        info:'',
    },
},function(callback){
    client.getInfo(function(err, info) {
        callback({
            difficulty : info.difficulty,
            balance : info.balance,
            connections : info.connections,
            blocks : info.blocks,
        });
    });
});
