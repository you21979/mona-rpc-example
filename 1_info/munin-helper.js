var print = console.log;

var munin_autoconf = function(){
    print('yes');
};
var munin_config = function(label, field){
    for(var key in label){
        print('%s %s', key, label[key]);
    }
    for(var key in field){
        print('%s.label %s', key, field[key].label);
        print('%s.draw %s', key, field[key].draw);
        print('%s.info %s', key, field[key].info);
    }
};
var munin_value = function(obj){
    for(var key in obj){
        print('%s.value %s', key, obj[key]);
    }
};


var munin_agent = module.exports = function( label, field, func ){
    var args = process.argv;
    var opt = args[args.length - 1];
    switch(opt){
    case 'config':
        munin_config(label, field);
        break;
    case 'autoconf':
        munin_autoconf();
        break;
    default:
        func(munin_value);
        break;
    }
};
