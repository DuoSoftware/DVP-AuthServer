/**
 * Created by a on 6/6/2016.
 */

var config = require('config');
var mongoose = require('mongoose');

var mongoip=config.Mongo.ip;
var mongoport=config.Mongo.port;
var mongodb=config.Mongo.dbname;
var mongouser=config.Mongo.user;
var mongopass = config.Mongo.password;


var connectionstring = util.format('mongodb://%s:%s@%s:%d/%s',mongouser,mongopass,mongoip,mongoport,mongodb)
mongoose.connect(connectionstring);

mongoose.connection.once('open', function() {
    console.log("Connected to db");
});



