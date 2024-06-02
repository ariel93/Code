const Teacher = require('./teacher');

//3 Create a new teacher
exports.createTeacher = async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//1 Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2 
exports.getTeachersByLowerSalary = async (req, res) => {
  try {
    const { salary } = req.body;
    const teachers = await Teacher.find({ salary });
    if (!teachers) {
      return res.status(404).json({ message: 'teacher not found' });
    }
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};