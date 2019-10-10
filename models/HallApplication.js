const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HallApplicationSchema = new mongoose.Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    hallname:{
        type: String,
        required: true
    },
    hallblock:{
        type: String,
        required: true
    },
    roomnumber:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        date: Date.now
    }
});

const HallApplication = mongoose.model('HallApplication', HallApplicationSchema);
module.exports = HallApplication;