const express = require('express');
const router = express.Router();
const teacherController = require('./teacherController');

//3 Create a new teacher
router.post('/',teacherController.createTeacher);

//1 Get all teachers
router.get('/', teacherController.getAllTeachers);

//2
router.post('/salary', teacherController.getTeachersByLowerSalary);

module.exports = router;
