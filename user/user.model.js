/**
 * Created by ashu_dev on 27/05/17.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = new schema({
    name : String,
    pass :String
});




var userModel = mongoose.model('user',userSchema);



module.exports = userModel;