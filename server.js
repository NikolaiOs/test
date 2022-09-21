// const express = require('express')
//
// const app = express()
//
// const port = process.env.PORT || 3000
// app.listen(port)
// console.log(`Server started on port ${port}!`)
//
// app.get('/', (req, res) => {
//     // res.send('hello')
//     fs.readFile(`./src/index.js`, 'utf8', (err, data) => {
//         res.send(data);
//     })
// })

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(3000, () => {
    console.log('Server started!')
})