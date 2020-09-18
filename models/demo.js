const mongoose  = require('mongoose');

const demoSchema = new mongoose.Schema({
  pname:String,
  price:Number
});

module.exports= mongoose.model('demoo',demoSchema);