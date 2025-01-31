








import express from 'express'
import mongoose from 'mongoose'
import UserModel from './model/Users.js'
import cors from 'cors'
import { ALL } from 'dns'
//import UserModel from '../../../../Desktop/Auto-didact projects/MERN/Project 2/UserModel.js'


const app = express();


app.use(cors({
    origin: ALL,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true
}))
app.use(express.json())
mongoose.connect("mongodb+srv://fjlswe:ji2pbSPt6R7kvLMR@cluster0.bjmut.mongodb.net/Employee-management-system?retryWrites=true&w=majority&appName=Cluster0")
// console.log("ji2pbSPt6R7kvLMR")


app.get("/getUsers", (req, res) => {
    UserModel.find()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

app.get('/edit/:id', (req, res) => {
    const id = req.params.id
    UserModel.findById({ _id: id })
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

app.post('/add', (req, res) => {

    UserModel.create(req.body)
        .then(user => res.json("create"))
        .catch(err => res.sjon(err))

})

app.patch('/edit/:id', (req, res) => {
    const id = req.params.id

    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        salary: req.body.salary,
        address: req.body.address,
        status: req.body.status,
        email: req.body.email
    })
        .then(user => res.json(user))
        .catch(err => res.sjon(err))
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    UserModel.findByIdAndDelete({ _id: id })
        .then(user => res.json("deleted"))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running...")
})