const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  teacherFullName: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  salary: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: true
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;