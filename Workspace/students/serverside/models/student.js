const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const studentSchema = new mongoose.Schema({
    firstName:  { type: String, required: true},
    lastName:  { type: String, required: true}
});

//use the blueprint to create the model 
module.exports = mongoose.model('Student', studentSchema,'Students');
