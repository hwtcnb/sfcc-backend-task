const express = require('express')
const router = require('./routes/routes')
const mongoose = require('mongoose')
const axios = require('axios')

const app = express()

app.use(router)

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect('mongodb+srv://user:user@cluster0.j0dex.mongodb.net/task', {
            useNewUrlParser: true
        })
        app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}...`)
            console.log('-------------------')
        })

    } catch (error) {
        console.log(error);
    }
}

start()
    .then(() => {
    axios.get('http://localhost:5000?name=Jake&surname=Jacobs&age=19')
        .then(res => {
            console.log(res.data)
            console.log('-------------------')
        })
        .then(() => {
            axios.post('http://localhost:5000?name=Mike&surname=Hanson&age=19&email=bbb@gmail.com')
                .then(res => {
                    console.log(res.data)
                    console.log('-------------------')
                })
                .then(() => {
                    axios.get('http://localhost:5000/www@gsa.com')
                        .then(res => {
                            console.log(res.data)
                            console.log('-------------------')
                        })
                })
        })
})






