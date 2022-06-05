const fs = require('fs')
const path = require('path')
const latestId = require(path.join(__dirname, '../utility/latestid.js'))


const studentJson = fs.readFileSync(path.join(__dirname , '../data/students.json'))
const studentsObj = JSON.parse(studentJson)

const getAllStudents = (req,res) => {
     res.status(200).json(studentsObj)
}

const postStudentsData = (req,res) => {
    
     let { name , age , skill } = req.body

     if(name == '' || age == '' || skill == ''){
        res.status(400).send('error')  
     }else{
        studentsObj.push({
            id:latestId(studentsObj), 
           ...req.body 
        })
   
        fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(studentsObj))
   
        res.send('Student Added')
     }
  
}

const getSingleStudent = (req,res) => {
   let id = req.params.id
   let singleStu = ''
   if(studentsObj.some( data => data.id == id)){
      singleStu = studentsObj.find( data =>  data.id == id)
   }
   
   res.status(200).json(singleStu)
}

const editStudentData = (req,res) => {
    let id = req.params.id
    if(studentsObj.some( data => data.id == id)){
        let index = studentsObj.findIndex( data => data.id == id) 
        studentsObj[index] = {
            id : parseInt(id),
            ...req.body
        }
        fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(studentsObj))
    }
   
    res.send('edit Student')
}

const deleteStudentData = (req,res) => {
    let id = req.params.id
    let afterDelete = ''
    if(studentsObj.some( data => data.id == id )){
      afterDelete =JSON.stringify(studentsObj.filter( data => data.id != id ))
    }

    fs.writeFileSync(path.join(__dirname, '../data/students.json'), afterDelete)

    res.send('Delete Student Data')
}

module.exports = {
    getAllStudents,
    postStudentsData,
    getSingleStudent,
    editStudentData,
    deleteStudentData
}