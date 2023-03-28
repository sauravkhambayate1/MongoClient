const express = require('express')
const studentController = require('../controller/student')
const router = express.Router()

router.post('/student', studentController.studentEnrolment)
router.get('/student', studentController.getStudentData)
router.get('/student', studentController.updateStudent)
router.get('/student', studentController.deleteStudent)
module.exports = router;