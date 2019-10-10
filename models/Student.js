const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    },
    date: {
        type: Date,
        date: Date.now
    }
});
const Student  = mongoose.model('Student', StudentSchema);
module.exports = Student;