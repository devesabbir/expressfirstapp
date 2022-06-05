const express = require('express')
const router = express.Router()
const path = require('path')

const { getAllStudents, postStudentsData , getSingleStudent , editStudentData ,deleteStudentData } = require(path.join(__dirname , '../controllers/students'))

router.route('/').get(getAllStudents).post(postStudentsData)
router.route('/:id').get(getSingleStudent).put(editStudentData).patch(editStudentData).delete(deleteStudentData)


module.exports = router